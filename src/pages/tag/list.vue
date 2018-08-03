<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        话题标签
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="row">
                        <div class="col-md-1 fl">
                            <router-link class="btn btn-sm btn-primary fl dll-add" to="/addTag">新建标签</router-link>
                        </div>
                    </div>
                </div>
                <div class="block-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>图片</th>
                                <th>标签</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody @drop="onDrop">
                            <tr v-for="(a,index) in list" :key="a._id.$oid" draggable="true" @dragstart="onDrag"
                                @dragenter="onDragenter" @dragleave="onDragleave" @dragend="onDragend"
                                style="padding-top:50px" :id="a._id.$oid">
                                <td draggable="false"><img :src="a.iconUrl" class="pic" draggable="false"
                                                           @drop="onDrop"></td>
                                <td draggable="false">{{a.name}}</td>
                                <td draggable="false">
                                    <router-link class="btn btn-xs " draggable="false"
                                                 :to="'/editTag/'+a._id.$oid">编辑
                                    </router-link>
                                    <a @click="removeConfirm(index)" class="btn btn-xs " type="button"
                                       data-toggle="tooltip" draggable="false">删除
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <confirm title="提示！" content="确定要删除话题吗？" :show="showModal" @confirm="remove" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>

<script>
    import Confirm from "@/components/confirm";
    import tagApi from "@/services/tag";

    export default {
        components: {
            Confirm
        },
        mounted() {
            let vm = this;
            this.loadData();
            this.name = '';
        },
        props: {},
        data() {
            return {
                list: [],
                showModal: false,
                totalCount: 10,
                stopIndex: '',
                lastQueryWithOptions: false,
                queryParams: {
                    page: 1,
                    perPage: 10,
                    name: ''
                },
                removeIndex: '',
                dragId: '',
                enteredId: '',
                leaveedId: ''
            };
        },
        methods: {
            loadData() {
                let vm = this;
                tagApi.list(this.queryParams).then(data => {
                    vm.list = data;
                })
            },
            move(id, step) {
                let vm = this;
                tagApi.move(id, step).then(data => {
                    vm.loadData();
                })
            },
            removeConfirm(index) {
                this.removeIndex = index;
                this.showModal = true;
            },
            remove() {
                let vm = this;
                tagApi.remove(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功');
                    vm.loadData();
                });
            },
            onDrag(event) {
                let vm = this;
                vm.dragId = event.target.id;
            },
            getTagFromListById(id) {
                let vm = this;
                let list = vm.list;
                for (let i in list) {
                    if (list[i]._id.$oid === id)
                        return list[i]
                }
                return null;
            },
            onDragover(event) {
                console.log("++++dragover", event);
                console.log("++++dragover target", event.target);
            },
            onDrop(event) {
//                console.log(111111111111111111111);
                event.preventDefault();
            },
            /**
             *经过测试 在元素后面添加 比较好，在前面添加会出现 不断删除 插入 tmptr的问题 体验不好  dragenter dragleave 事件会不停出发触发
             */
            onDragenter(event) {
                let vm = this;
                //get id from tr
                let node = event.target;
                let tr = node.parentNode;
                //不断遍历 知道找到父元素 tr
                while (tr.nodeName !== 'TR')
                    tr = tr.parentNode;

                let tb = tr.parentNode;
                //进入到tmp 或者 自己 或者相邻的前一个元素的时候是不需要添加的
                if (tr.id.indexOf('tmptr') !== -1 || tr.id === vm.dragId
                    //最后一个元素不存在的话不会return
                    || (tr.nextSibling && tr.nextSibling.id === vm.dragId)) {
                    vm.enteredId = '';
                    return;
                }
                vm.enteredId = tr.id;
                console.log("****当前进入的tr的id ", tr.id, "****当前被拖动tr的id", vm.dragId);
                console.log('add tmp node');
                vm.addTmpTr(tb, tr.nextSibling, tr.id, 'tmptr');
            },
            onDragleave(event) {
                let vm = this;
                //get id from tr
                let node = event.target;
                let tr = node.parentNode;
                while (tr.nodeName !== 'TR')
                    tr = tr.parentNode;
                console.log("----当前离开的tr的id ", tr.id, "----当前被拖动tr的id", vm.dragId,);
                let tb = tr.parentNode;
                //离开自己的 时候 不需要做remove
//                if (tr.id === vm.dragId) {
//                    console.log("id相当 不需要remove");
//                    return;
//                }
                if (tr.id !== vm.dragId) {
                    vm.deleteTmpTr(tb, tr.id, 'tmptr');
                }
            },
            onDragend() {
                let vm = this;
                if (vm.enteredId !== '') {
                    try {
                        let step = vm.getTagFromListById(vm.enteredId).seq - vm.getTagFromListById(vm.dragId).seq;
                        //往上移的话需要加1
                        if (step < 0)
                            step += 1
                        vm.move(vm.dragId, step);
                    } catch (e) {
                        console.log(e)
                    }
                }
                vm.enteredId = '';
                console.log('drag end');
            },

            //插入兄弟元素
            /**
             * 将tmptr 插入到目标元素前面
             * @param fnode 父级元素
             * @param targeNode 目标元素。
             * @param id 目标元素前面一个元素的id
             * 即将tmptr 与 目标元素前面一个元素 绑定，当离开的时候 删除对应的tmptr
             * @param tagString 加在id后面的一个标识符  用于和 包含数据项的tr的id 区分
             */
            addTmpTr(fnode, targeNode, id, tagString) {
                let vm = this;
                let tmpTr = document.createElement("tr");
                tmpTr.id = id + tagString;
                tmpTr.innerHTML = "<td colspan='3'   style='background:#f7e1b5;'>将会移动到此处</td>"
                vm.addNode(fnode, tmpTr, targeNode);
            },

            addNode(fnode, node, targeNode) {
                //如果是最有一个元素 调用appendChild
                if (targeNode)
                    fnode.insertBefore(node, targeNode);
                else
                    fnode.appendChild(node)
            },
            /**
             * 删除父级元素中的子元素
             * @param fnode see addTmpTr
             * @param id see addTmpTr
             * @param tagString see addTmpTr
             */
            deleteTmpTr(fnode, id, tagString) {
                let key = id + tagString;
                if (fnode.children[key]) {
                    console.log("delete tmp tr");
                    fnode.removeChild(fnode.children[key]);
                }
            }
        },
        computed: {}
    };
</script>

<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }

    .tr-margin-10 {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .tr-tmp {
        background: #f7e1b5;
    }
</style>