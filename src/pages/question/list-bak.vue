<template>
    <div style="height: 1500px">
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        问题列表
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="form-group">
                        <!--<router-link class="btn btn-primary fl" to="/addTopic">新增专题</router-link>-->
                        <div class="col-md-1 fr">
                            <button class="btn btn-primary btn-block" @click="loadData(filterList)">搜索</button>
                        </div>
                        <div class="col-md-3 fr">
                            <input class="form-control" v-model="queryParams.queryStr" placeholder="输入用户昵称/问题标题/问题描述">
                        </div>
                    </div>
                </div>
                <div class="block-content ">
                    <div>
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>问题标题</th>
                                <th>回答数量</th>
                                <th>提问用户昵称</th>
                                <!--//todo 实现筛选功能 下拉列表  list数据的计算用computed 来做？-->
                                <th>
                                    <span class="dropdown">
                                        <a class="dropdown-toggle link" data-toggle="dropdown">
                                            话题标签<span class="caret"></span>
                                        </a>

                                           <ul class="dropdown-menu" role="menu">
                                               <li v-for="(tag,index) in tags " :key="tag._id_$oid">
                                                   <a @click="refreshListByKV(tag._id.$oid,'tags')">
                                                       <i class="glyphicon glyphicon-ok"
                                                          v-show="isKeyClicked['tags'][tag._id.$oid.toString()]">123</i>
                                                       {{tag.name}}
                                                   </a>
                                                   <!--<a @click="refreshListByKV(tag._id.$oid,'tags')" v-else>-->
                                                   <!--{{tag.name}}-->
                                                   <!--</a>-->
                                               </li>

                                           </ul>

                                    </span>

                                </th>
                                <th>创建时间</th>
                                <th>
                                    <span class="dropdown">
                                        <a class="dropdown-toggle link" data-toggle="dropdown">
                                            展示<span class="caret"></span>
                                        </a>

                                           <ul class="dropdown-menu" role="menu">

                                               <li>
                                                   <a class="btn-link" @click="refreshListByKV('true','isShow')">
                                                           <!--:disabled="isKeyClicked['isShow']['false']">-->
                                                       <span v-show="isKeyClicked['isShow']['true']"
                                                             class="glyphicon glyphicon-ok"></span>
                                                       是
                                                   </a>
                                               </li>
                                               <li>
                                                    <a class="btn-link " @click="refreshListByKV('false','isShow')">
                                                            <!--:disabled="isKeyClicked['isShow']['true']">-->
                                                       <span v-show="isKeyClicked['isShow']['false']"
                                                             class="glyphicon glyphicon-ok"></span>
                                                       否
                                                   </a>
                                               </li>

                                           </ul>

                                    </span>
                                </th>
                                <th>排序</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody v-if="totalCount>0">
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td>{{a.title}}</td>
                                <td>{{a.answerCount}}</td>
                                <td>{{a.user.nickname}}</td>
                                <td>
                                <span v-for="(tag,tindex) in a.tags" :key="tag._id.$oid">
                                    {{tag.name}}
                                </span>
                                </td>

                                <td>{{a.createdAt.$date | date}}</td>
                                <td>
                                    <select v-model="a.isShow" @change="showChange(index)">
                                        <option :value="false">否</option>
                                        <option :value="true">是</option>
                                    </select>
                                </td>
                                <td>
                                    <div v-if="!a.isShow" class="btn-group">-</div>
                                    <div v-else class="btn-group">
                                        <!--<div class="btn-group">-->
                                        <button v-show="!lastQueryWithOptions && !(queryParams.page==1 && index == 0)"
                                                @click="move(a._id.$oid,-1)" class="btn btn-xs btn-default"
                                                type="button" data-toggle="tooltip" title="上移"><i
                                                class="fa fa-long-arrow-up"></i></button>
                                        <button v-show="!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)"
                                                @click="move(a._id.$oid,1)" class="btn btn-xs btn-default" type="button"
                                                data-toggle="tooltip" title="下移"><i class="fa fa-long-arrow-down"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <button @click="removeConfirm(index)" class="btn btn-xs btn-primary" type="button"
                                            data-toggle="tooltip">删除
                                    </button>
                                    <button v-if="a.isRecommended" @click="setRecommend(a._id.$oid,false)"
                                            class=" btn btn-xs btn-primary" :disabled="!a.isShow">
                                        <span class="glyphicon glyphicon-bookmark"></span>
                                        已首页展示
                                    </button>
                                    <button v-else @click="setRecommend(a._id.$oid,true)"
                                            class="btn btn-xs btn-primary " :disabled="!a.isShow">首页展示
                                    </button>
                                    <router-link class="btn btn-xs btn-primary" :to="'/question/'+a._id.$oid">查看
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <h5 v-if="totalCount===0" class="text-center red-font">暂时没有你查找的内容</h5>
                        <div class="block-content"></div>
                    </div>
                    <el-pagination
                            @current-change="pageChange"
                            :current-page.sync="queryParams.page"
                            :page-size="queryParams.perPage"
                            layout="prev, pager, next, jumper"
                            :total="totalCount" style="text-align:center">
                    </el-pagination>
                </div>
            </div>
        </div>

        <confirm title="提示！" content="确定要删除问题吗？" :show="showModal" @confirm="remove" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>

<script>
    import Confirm from "@/components/confirm";
    import questionApi from "@/services/question";
    import tagApi from "@/services/tag"

    export default {
        components: {
            Confirm
        },
        mounted() {
            this.loadData();
            this.getTags();
        },
        props: {},
        data() {
            return {
                list: [],
//                listTemp: [],
                showModal: false,
                totalCount: 0,
                removeIndex: '',
                lastQueryWithOptions: false,
                queryParams: {
                    page: 1,
                    perPage: 15,
                    queryStr: '',
                    isShow: '',
                    tagIds: ''
                },
                tags: [],
                // keyName:[key:true]
                //  'tags':[{'id':'true/false'}]
                //   'isShow':[{'true',true/false}]
                isKeyClicked: {
                    tags: {},
                    isShow: {}
                },
                clicked: false,
            };
        },
        methods: {
            pageChange(page) {
                this.queryParams.page = page
                this.loadData(this.filterList);
            },
//            loadData(filter) {
//                let vm = this;
//                questionApi.list(this.queryParams).then(data => {
//                    vm.list = data.list;
//                    if (vm.queryParams.queryStr || filter) {
//                        vm.lastQueryWithOptions = true
//                    } else {
//                        vm.lastQueryWithOptions = false
//                    }
//                    vm.totalCount = data.totalCount;
//                    if (filter)
//                        filter();
//                })
//            },
            loadData() {
                let vm = this;
                questionApi.list(this.queryParams).then(data => {
                    vm.list = data.list;
                    if (vm.queryParams.queryStr) {
                        vm.lastQueryWithOptions = true
                    } else {
                        vm.lastQueryWithOptions = false
                    }
                    vm.totalCount = data.totalCount;
                })
            },
            move(id, step) {
                let vm = this;
                questionApi.move(id, step).then(data => {
                    vm.loadData()
                })
            },
            removeConfirm(index) {
                this.removeIndex = index
                this.showModal = true
            },
            remove() {
                let vm = this;
                questionApi.delete(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!')
                    vm.loadData()
                })
            },
            showChange(index) {
                questionApi.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(data => {

                })
            },
            setRecommend(questionId, recommend) {
                let vm = this;
                questionApi.setRecommend(questionId, recommend).then(data => {
                    vm.loadData();
                })
            },
            getTags() {
                let vm = this;
                tagApi.list().then(data => {
                    vm.tags = data;
                })
            },
            /**
             * 1. if key is clicked , the isKeyClicked[keyName][key]=true  then set =false
             * 2. and vice versa
             * @param key list[index][keyName]._id.$oid
             * @param keyName  the name of the key of the objects in this.list.  eg. tags isShow ......
             */
            refreshListByKV(key, keyName) {
                let vm = this;
                console.log("*******before click")
                debugger;
//                if (keyName === 'isShow') {
//                    if (key === 'true') {
//                        if (vm.isKeyClicked[keyName][key])
//                            vm.isKeyClicked[keyName][key] = false;
//                        else
//                            vm.isKeyClicked[keyName][key] = true;
//                        if (vm.isKeyClicked[keyName]['false'])
//                            vm.isKeyClicked[keyName]['false'] = false;
//                    }else if(key==='false'){
//                        if (vm.isKeyClicked[keyName][key])
//                            vm.isKeyClicked[keyName][key] = false;
//                        else
//                            vm.isKeyClicked[keyName][key] = true;
//                        if (vm.isKeyClicked[keyName]['true'])
//                            vm.isKeyClicked[keyName]['true'] = false;
//                    }
//                }
                //这样做 isKeyClicked[keyName]不具备响应式
//                if (vm.isKeyClicked[keyName][key]) {
//                    vm.isKeyClicked[keyName][key] = false;
//                }
//                else {
//                    vm.isKeyClicked[keyName][key] = true;
//                }
                let k = 'id' + key;
                if (typeof vm.isKeyClicked[keyName][k] === 'undefined') {
                    vm.isKeyClicked[keyName][k] = false;
                }
                if (vm.isKeyClicked[keyName][key]) {
                    vm.isKeyClicked[keyName][key] = false;
                }
                else {
                    console.log("------", vm.isKeyClicked[keyName][k], '++++++');
                    let data = {};
                    data[k] = true;
                    vm.$set('isKeyClicked', data);
                    vm.isKeyClicked[keyName][key] = true;
                }
                if (keyName === 'isShow') {
                    if (key === 'true') {
                        if (vm.isKeyClicked[keyName]['false'])
                            vm.isKeyClicked[keyName]['false'] = false;
                    } else if (key === 'false') {
                        if (vm.isKeyClicked[keyName]['true'])
                            vm.isKeyClicked[keyName]['true'] = false;
                    }
                }
                console.log("*******after click")
                console.log(keyName, key, vm.isKeyClicked[keyName][key])
                vm.filterList();
            },
//            filterList() {
//                let vm = this;
//                let list = this.list;
//
//                let keyClicked = vm.isKeyClicked;
//                let filteredCount = 0;
//                let inLoop;
//                //if no button has been clicked , vm.clicked will always be false
//                vm.clicked = false;
//                //eg. keyName = tags
//                for (let keyName in keyClicked) {
////                    keyClicked[keyName] = 'idString'/'true'/'false'
//                    console.log("######循环的keyName:", keyName);
//                    for (let key in keyClicked[keyName]) {
//                        console.log("------循环的key:", key);
//                        //if clicked then do filter
//                        inLoop = true;
//                        if (keyClicked[keyName][key]) {
//                            vm.clicked = true;
//                            while (inLoop) {
//                                console.log("list length", list.length)
//                                console.log("++++list", list)
//                                for (let i = 0; i < list.length; i++) {
//                                    if (!vm.isContained(list[i][keyName], key)) {
//                                        console.log("-------dont contain", i, list[i][keyName], key, false)
//                                        //the length will change  ,so the loop must start with 0 each time
//                                        list.splice(i, 1);
//                                        //if empty  return
//                                        if(list.length===0)
//                                            return;
//                                        filteredCount++;
//                                        break;
//                                    }
//                                    //if  no one contained ,end the loop
//                                    if((list.length-1)===i){
//                                        inLoop = false;
//                                    }
//                                }
//
//                            }
//                        }
//                    }
//                }
//                if (vm.clicked) {
//                    vm.totalCount = vm.totalCount - filteredCount;
//                }
//                console.log('list', vm.list);
//                console.log('any button clicked ', vm.clicked)
//                console.log('filtered count', filteredCount)
//            },
            filterList() {
                let vm = this;
                let keyClicked = vm.isKeyClicked;
                //eg. keyName = tags
                //获取所有的tag id
                debugger;

                let clickedTags = keyClicked["tags"];
                console.log(clickedTags);
                let tagIds = [];
                console.log(tagIds);
                for (let i in clickedTags) {
                    if (clickedTags[i])
                        tagIds.push(i)
                }
                //isShow
                let isShow;
                if (keyClicked["isShow"]["true"])
                    isShow = true;
                else if (keyClicked["isShow"]["false"])
                    isShow = false;
                vm.queryParams.tagIds = tagIds;
                vm.queryParams.isShow = isShow;
                console.log(vm.queryParams)
                vm.loadData();
            }
            ,
            isContained(target, value) {
                if (typeof target === 'object') {
                    for (let t in target) {
                        console.log("遍历list", target[t]._id.$oid, value, target[t]._id.$oid === value, t)
                        if (target[t]._id.$oid === value)
                            return true;
                    }
                }
                if (typeof target === 'boolean') {
                    console.log(target, value)
                    if (target === (value === 'true'))
                        return true;
                }
                return false;
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
</style>