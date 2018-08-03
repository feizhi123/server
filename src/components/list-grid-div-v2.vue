<template>
    <div class="container-fluid">
        <div class="row">
            <div id='rootDiv' class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div v-for="(data,index) in answer.metas" :key="index" class="row" draggable="true"
                     @dragstart="onDrag" @dragenter="onDragenter" @dragleave="onDragleave" @dragend="onDragend"
                     @mouseover="mouseover(index)" @mouseout="mouseout(index)" @click="select(index)"
                     :id="'div'+index">
                    <div class="row" draggable="false">
                        <div :class="  (selectedIndex===index?' chosen ':(mouseOverIndex===index?' border-black ':' border-white'))"
                             draggable="false">

                            <div v-if="data.type==='TEXT'" class="padding10 " draggable="false"
                                 @dblclick="showEdit(index)">

                                <p :class="'p'+index+' padding10 '" style=' word-wrap: break-word; word-break: normal;'
                                   draggable="false"
                                   v-show="showEditIndex!==index">{{data.content}}</p>

                                <textarea v-show="showEditIndex===index" style="width: 100%" draggable="false"
                                          rows="3"
                                          :class="'textarea'+index +' border-none '"
                                          @click=""
                                          v-model="data.content"></textarea>
                                <!--<div  v-show="showEditIndex===index" contenteditable="true" v-model="data.content">-->
                                <!--onpropertychange="this.style.posHeight=this.scrollHeight "-->

                                <!--</div>-->
                            </div>

                            <div :id="index" v-if="data.type==='IMG'" class="padding10" draggable="false">
                                <!--<img class="  pic-max" :src="data.content" @click="invokeChildImgChange(index)">-->
                                <img class="  pic-max" :src="data.content" draggable="false">

                            </div>
                        </div>

                        <div :class="'fr '+(mouseOverIndex===index?'active':'deactive')">
                            <a v-if="data.type==='TEXT'" class="glyphicon glyphicon-edit font20"
                               @click="showEdit(index)"></a>
                            <a class="glyphicon glyphicon-trash font20" @click="deleteDataFromList(index)"></a>
                        </div>
                    </div>
                    <br/>
                </div>
                <hr>

                <div>
                    <div class="form-horizontal ">
                        <div class="form-group">
                            <label class="col-md-2 radio-inline">
                                第三方内容
                            </label>
                            <label class="radio-inline">
                                <input class="radio " type="radio" name="thirdPart" :value=true
                                       v-model="answer.showLink">是
                            </label>
                            <label class="radio-inline">
                                <input class="radio " type="radio" name="thirdPart" :value=false
                                       v-model="answer.showLink">否
                            </label>

                        </div>
                        <div class="form-group " v-show="answer.showLink?answer.showLink:false">
                            <span class="col-md-2">
                             以上答案内容来自公开信息，原文链接：
                             </span>
                            <input class="col-md-4 " type="text" v-model="answer.link"/>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>-->
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <!--<div>-->
                <div class="menu">
                    <div>
                        <a class="btn btn-sm btn-link inserttext-a dll-instert-text" @click="insertMeta('TEXT')">
                            <img src="/static/inserttext.png" class="inserttext"/>
                            <img src="/static/inserttext-hover.png" class="inserttext-hover"/>
                            插入文本
                        </a>
                    </div>
                    <div>
                        <a class="btn btn-sm btn-link inserttext-a dll-instert-img" @click="insertMeta('IMG')">
                            <img src="/static/insertimg.png" class="inserttext"/>
                            <img src="/static/insertimg-hover.png" class="inserttext-hover"/>
                            插入图片
                        </a>

                    </div>
                    <!--<div>-->
                    <!--<a class="btn btn-sm border glyphicon glyphicon-eye-close" @click="init">取消选中</a>-->
                    <!--</div>-->
                    <!--<div>-->
                    <!--<span class="btn border glyphicon glyphicon-eye-close" @click="_exchange(0,1)">交换</span>-->
                    <!--</div>-->
                </div>
            </div></div>
        <file-wrapper @on-file-change="imgChange" ref="fileWrap"></file-wrapper>
    </div>
</template>

<script>

    import fileUploader from '@/utils/fileUploader'
    import FileWrapper from '@/components/file-upload-wrapper'
    import util from '@/utils/utils'

    export default {
        components: {
            FileWrapper
        },
        mounted() {
            let vm = this;
            if (this.answer) {
                if (!this.answer.showLink)
                    this.answer.showLink = false;
                this.$emit('on-get-datalist', this.answer);
                console.log('list grid mounted')
            }


        },
        props: ['metas', 'rows', 'answer',],
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.compress(file).then(data => {
                    debugger
                    if (vm.modifyImgIndex >= 0) {
                        console.log(vm.modifyImgIndex)
                        vm.answer.metas[vm.modifyImgIndex].content = data;
                        vm.modifyImgIndex = undefined;
//                    util.getFileSize(file, vm);
                    }
                    else if (vm.insertImgIndex >= 0) {
                        vm._insert(vm.insertImgIndex, {
                            "type": "IMG",
                            "content": data.originUrl,
                            "compressUrl": data.compressUrl
                        });
                        vm.insertImgIndex = undefined;
                        vm.selectedIndex = undefined;
                    }
                    else {
                        vm.answer.metas.push({
                            "type": "IMG",
                            "content": data.originUrl,
                            "compressUrl": data.compressUrl
                        });
                    }
                    this.sendDataToFather();
                }).catch(err => {
                        console.log("catch!!!", err.stack);
                        vm.$message.error("服务出错，请联系管理员");
                    }
                )

            },
            saveTextData() {
                let content = this.content;
//                if (content.trim() === '') {
//                    this.$message.warning("请输入回答内容");
//                    return;
//                }
                this.answer.metas.push({"type": "TEXT", "content": content});
                this.sendDataToFather()
            },

            deleteDataFromList(index) {
                debugger
                this.showEditIndex = '';
                this.mouseOverIndex = '';
                this.selectedIndex = '';
                this.answer.metas.splice(index, 1);
                this.sendDataToFather();


            },
            invokeChildImgChange(index) {
                debugger;
                this.modifyImgIndex = index;
                this.$refs.fileWrap.openFinder();
            },
            sendDataToFather() {
                this.$emit("on-data-change", this.answer);
            },

            moveUp(index) {
                this._exchange(index, index - 1);
            },
            moveDown(index) {
                this._exchange(index, index + 1);
            },
            insertMeta(type) {
                debugger
                let vm = this;
                if (vm.selectedIndex !== '') {
                    if (type === 'TEXT')
                        vm.showEditIndex = vm.selectedIndex + 1;
                    vm._insertMeta(vm.selectedIndex + 1, type);
                } else {
                    vm.showEditIndex = vm.answer.metas.length;
                    vm._insertMeta(vm.answer.metas.length, type);
                }


            },
            _insertMeta(index, type) {
                let vm = this;
                if (type === 'TEXT') {
                    let meta = {"type": "TEXT", "content": ""};
                    vm._insert(index, meta)
                    vm.selectedIndex = '';
                }
                else if (type === 'IMG') {
                    debugger;
                    vm.insertImgIndex = index;
                    vm.$refs.fileWrap.openFinder();
                }

            },
            _insert(index, meta) {
                if (index < 0)
                    index = 0;
                this.answer.metas.splice(index, 0, meta);
            },
            _remove(index) {

            },
            _exchange(index1, index2) {
                //刷新不及时
//                [this.metas[index1], this.metas[index2]] = [this.metas[index2], this.metas[index1]];
//                debugger;
                //如果直接 用 m1=this.metas.slice(index1,index1+1)[0]；
                //           this.metas[index2].content=m1;
                //来结果是非响应式
//                let m1 = this.metas.slice(index1,index1+1)[0].content;
//                let m2 = this.metas.slice(index2,index2+1)[0].content;
                debugger
                let m1 = JSON.parse(JSON.stringify(this.answer.metas[index1]));
                let m2 = JSON.parse(JSON.stringify(this.answer.metas[index2]));
                let c1 = m1.content;
                let c2 = m2.content;
                let type1 = m1.type;
                let type2 = m2.type;
//                m2.content = c1;
//                m1.content = c2;
//                m2.type = type1;
//                m1.type = type2;
                console.log(Object.keys(m1).length);
                console.log(Object.keys(m2).length);
                for (let m in m1) {
                    console.log(m)
                }
                this.$set(this.answer.metas, index2, m1);
                this.$set(this.answer.metas, index1, m2);
            },
            init() {
                this.showEditIndex = '';
                this.selectedIndex = '';
            },
            showEdit(index) {
                this.showEditIndex = index;
//                $.each($("textarea"), function (i, n) {
////                vm.autoTextarea($(n)[0]);
//                    debugger
//                    console.log("n", n, n.scrollHeight)
////                    $(n).css("height", 1000 + "px");
//
//                });
                this.setTextareaHeight(index);
            },
            mouseover(index) {
                this.mouseOverIndex = index;
                console.log('mouse over ', index)
            },
            mouseout(index) {
                this.mouseOverIndex = '';
                console.log('mouse out')

            },
            //选中
            select(index) {
                debugger
                if (this.selectedIndex === index)
                    this.selectedIndex = '';
                else
                    this.selectedIndex = index;
                console.log("选中了", index);
            },
            //本来通过id来选择 但是为了拖拽方便所以就用class了
            setTextareaHeight(index) {
                $('.textarea' + index).css({'height': $('.p' + index).height() + 20});
            },


            /**
             * 拖拽部分
             */
            onDrag(event) {
                let vm = this;
                vm.dragId = event.target.id;
                console.log("被拖拽的 元素id", vm.dragId)
            },
            getIndexById(id) {
                return parseInt(id.replace('div', ''));
            },
            onDragover(event) {
                console.log("++++dragover", event);
                console.log("++++dragover target", event.target);
            },
            onDrop(event) {
                event.preventDefault();
            },
            /**
             *经过测试 在元素后面添加 比较好，在前面添加会出现 不断删除 插入 TmpNode的问题 体验不好  dragenter dragleave 事件会不停出发触发
             */
            onDragenter(event) {
                let vm = this;
                //get id from tr
                let node = event.target;
                let rootNode = $("#rootDiv")[0]
                //不断遍历 知道找到div[index]
                while (node.id === '')
                    node = node.parentNode;

                //进入到tmp 或者 自己 或者相邻的前一个元素的时候是不需要添加的
                if (node.id.indexOf('TmpNode') !== -1 || node.id === vm.dragId
                    //最后一个元素不存在的话不会return
                    || (node.nextSibling && node.nextSibling.id === vm.dragId)) {
                    vm.enteredId = '';
                    return;
                }
                vm.enteredId = node.id;
                console.log("****当前进入的元素的id ", node.id, "****当前被拖动元素的id", vm.dragId);
                console.log('add tmp node');
                vm.addTmpNode(rootNode, node.nextSibling, node.id, 'TmpNode');
            },
            onDragleave(event) {
                let vm = this;
                let node = event.target;
                let rootNode = $("#rootDiv")[0]
                while (node.id === '')
                    node = node.parentNode;
                console.log("----当前离开的tr的id ", node.id, "----当前被拖动tr的id", vm.dragId,);
                if (node.id !== vm.dragId) {
                    vm.deleteTmpNode(rootNode, node.id, 'TmpNode');
                }
            },
            /**
             * 分两种情况
             * 1) 上移 dragId > enteredId
             *   1.delete mate, index = drag index
             *   2.insert into mates, index=entered Index + 1
             * 2) 下移 dragId < enteredId
             *   1.insert into mates, index=entered index + 1
             *   2.delete mate, index = drag index
             */
            onDragend() {
                let vm = this;
                debugger
                if (vm.enteredId !== '') {
                    try {
                        debugger
                        let enteredIndex = vm.getIndexById(vm.enteredId);
                        let dragIndex = vm.getIndexById(vm.dragId);
                        let dragMeta = vm.answer.metas.slice(dragIndex, dragIndex + 1)[0];
//                        let enteredMeta = vm.answer.metas.slice(enteredIndex,enteredIndex+1);
//                        vm._exchange(enteredIndex, dragIndex);

                        if (dragIndex > enteredIndex) {
                            vm.answer.metas.splice(dragIndex, 1);
                            vm.answer.metas.splice(enteredIndex + 1, 0, dragMeta)
                        } else if (dragIndex < enteredIndex) {
                            vm.answer.metas.splice(enteredIndex + 1, 0, dragMeta)
                            vm.answer.metas.splice(dragIndex, 1);
                        }
                    } catch (e) {
                        console.log(e)
                    }
                }
                vm.enteredId = '';
                console.log('drag end');
            },

            //插入兄弟元素
            /**
             * 将TmpNode 插入到目标元素前面
             * @param fnode 父级元素
             * @param targeNode 目标元素。
             * @param id 目标元素前面一个元素的id
             * 即将TmpNode 与 目标元素前面一个元素 绑定，当离开的时候 删除对应的TmpNode
             * @param tagString 加在id后面的一个标识符  用于和 包含数据项的tr的id 区分
             */
            addTmpNode(fnode, targeNode, id, tagString) {
                let vm = this;
                let TmpNode = document.createElement("div");
                TmpNode.id = id + tagString;
                TmpNode.innerHTML = "<div style='background:#f7e1b5;padding:20px 0 20px 0;'>将会移动到此处</div>"
                vm.addNode(fnode, TmpNode, targeNode);
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
             * @param fnode see addTmpNode
             * @param id see addTmpNode
             * @param tagString see addTmpNode
             */
            deleteTmpNode(fnode, id, tagString) {
                let key = id + tagString;
                if (fnode.children[key]) {
                    console.log("delete tmp div");
                    fnode.removeChild(fnode.children[key]);
                }
            }

        },

        data() {
            return {
                /**
                 * initial data from father
                 * eg. answerMetas
                 */
//                list: this.metas,
                content: '',
                image: {
                    width: 0,
                    height: 0
                },
                modifyImgIndex: undefined,
                insertImgIndex: undefined,
                showEditIndex: '',
                mouseOverIndex: '',
                selectedIndex: '',
                dragIndex: '',
                dragId: '',
                enteredId: '',
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    div {
        height: auto;
    }

    .hidden-file-input {
        visibility: hidden;
        position: absolute;
        overflow: hidden;
        width: 0px;
        height: 0px;
        border: none;
        margin: 0px;
        padding: 0px;
    }

    .center-vertical {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .wrap {
        word-break: break-all;
        word-wrap: break-word
    }

    .border-none {
        border: none
    }

    .pic-max-500 {
        max-width: 400px;
        max-height: 400px;
    }

    .pic-max {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: auto;
    }

    .font20 {
        font-size: 20px;
    }

    p {
        word-break: normal;
        white-space: pre-wrap;
        word-wrapL: break-word;
        background-color: #f8f8f8;
    }

    textarea {
        background-color: #edfdff;
    }

    .active {
        display: block;
    }

    .deactive {
        display: none;
    }

    .chosen {
        border: 1px solid red;
    }

    .padding10 {
        /*padding: 10px 15px 10px 15px;*/
        /*margin: 10px 15px 10px 15px*/
        padding: 10px;
        margin: 10px;
    }

    .menu {
        position: fixed;
        top: 250px;
        /*position: absolute;*/
        /*left: 100px;*/
        /*top: 150px;*/

    }

    .menu span {
        font-size: 20px;
        margin-bottom: 20px;
    }

    /*@media (min-width: 1400px) {*/
    /*.menu {*/
    /*right: 5%;*/
    /*}*/
    /*}*/

    /*@media (min-width: 1500px) {*/
    /*.menu {*/
    /*right: 10%;*/
    /*}*/
    /*}*/

    .border-black {
        border: 1px solid lightgrey;
    }

    .border-white {
        border: 1px solid white;
    }

    .inserttext-hover {
        width: 20px;
        heigth: 20px;
        display: none;
    }

    .inserttext {
        width: 20px;
        heigth: 20px;
        display: inline;
    }

    .inserttext-a:hover .inserttext-hover {
        display: inline;
    }

    .inserttext-a:hover .inserttext {
        display: none;
    }

    .insertimg {
        height: 50px;
        widtt: 50px;
    }
</style>