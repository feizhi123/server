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
                    <div class="row">
                        <div class="col-md-1 fl">
                            <router-link class="btn btn-sm btn-primary fl dll-add" to="/questionAdd">新增问题</router-link>
                        </div>
                        <div class="col-md-1 fr">
                            <a class="btn btn-sm btn-primary btn-block dll-search" @click="search()">搜索</a>
                        </div>
                        <div class="input-group input-group-sm col-md-3 fr">
                            <input class="form-control dll-input" v-model="queryParams.queryStr"
                                   placeholder="输入用户昵称/问题标题/问题描述">
                        </div>
                    </div>
                </div>
                <div class="block-content ">
                    <div>
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th style="width:25%">问题标题</th>
                                <th>浏览量</th>
                                <th>实际曝光量</th>
                                <th>回答数量</th>
                                <!--<th>提问用户昵称</th>-->
                                <th>
                                    <span class="dropdown">
                                        <a class="dropdown-toggle link" data-toggle="dropdown">
                                            话题标签<span class="caret"></span>
                                        </a>

                                           <ul class="dropdown-menu" role="menu">
                                               <li v-for="(tag,index) in tags " :key="tag._id_$oid">
                                                   <a @click="refreshListByKV(tag._id.$oid,'tags')">
                                                       <i class="glyphicon glyphicon-ok"
                                                          v-show="isKeyClicked['tags'][tag._id.$oid.toString()]"></i>
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
                                <td>{{a.visitCount}}</td>
                                <td>{{a.exposeCount}}</td>
                                <td>{{a.answerCount}}</td>
                                <!--<td>{{a.user.nickname}}</td>-->
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
                                        <a v-show="!lastQueryWithOptions && !(queryParams.page==1 && index == 0)"
                                           @click="move(a._id.$oid,-1)" class="btn btn-xs btn-default"
                                           type="button" title="上移"><i
                                                class="fa fa-long-arrow-up"></i></a>
                                        <a v-show="!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)"
                                           @click="move(a._id.$oid,1)" class="btn btn-xs btn-default" type="button"
                                           title="下移"><i class="fa fa-long-arrow-down"></i>
                                        </a>
                                        <a v-show="!(queryParams.page==1 && a.seq == 0)"
                                           @click="setTopConfirm(a._id.$oid,0-a.seq)"
                                           class="btn btn-xs btn-default">置顶
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <a @click="removeConfirm(index)" class="btn btn-xs " type="button"
                                       data-toggle="tooltip">删除
                                    </a>
                                    <button v-if="a.isRecommended" @click="setRecommend(a._id.$oid,false)"
                                            class=" btn btn-xs btn-link" :disabled="!a.isShow">
                                        <span class="glyphicon glyphicon-bookmark"></span>
                                        已首页展示
                                    </button>
                                    <button v-else @click="setRecommend(a._id.$oid,true)"
                                            class="btn btn-xs btn-link " :disabled="!a.isShow">首页展示
                                    </button>
                                    <!--<router-link class="btn btn-xs btn-primary" :to="'/question/'+a._id.$oid">查看-->
                                    <!--</router-link>-->
                                    <a class="btn btn-xs " @click="detail(a._id.$oid)">编辑</a>
                                    <a class="btn btn-xs " :data-clipboard-text="a.wxappUrl" @click="copy2clipboard">复制链接</a>
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

        <confirm title="提示！" :content="wording" :show="showModal" @confirm="doConfirm" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>

<script>
    import Confirm from "@/components/confirm";
    import questionApi from "@/services/question";
    import tagApi from "@/services/tag"
    import utils from '@/utils/utils'

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
//            let p;
//            try {
//                p = JSON.parse(sessionStorage.getItem("questionParams"));
//            } catch (e) {
//            }
//            let page;
//            let p;
//            try {
//                p = sessionStorage.getItem("questionParams");
//                if (p) {
//                    page = JSON.parse(p).page;
//                }
//            } catch (e) {
//            }
//            console.log(p);

            let data = {

                DELETE_WORDING: '确定要删除问题吗?',
                SET_TOP_WORDING: '确定要置顶问题吗?',
                wording: '',

                list: [],
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
                isKeyClicked: window.isKeyClicked || {
                    tags: {},
                    isShow: {},
                },
                clicked: false,
                actFn: '',
                setTopId: '',
                setTopStep: '',
            };
//            debugger
//            if(window.questionParams){
//                data.queryParams=window.questionParams;
//            }

            return data;
        },
        methods: {
            pageChange(page) {
                this.queryParams.page = page
                this.loadData();
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
                //直接使用vm.queryParams = window.qparam  其中page会被初始化为1.。。导致每次返回后都在第一页。   估计是 分页组件 sync的问题
                if (window.qparam) {
                    vm.queryParams.page = window.qparam.page;
                    vm.queryParams.perPage = window.qparam.perPage;
                    vm.queryParams.isShow = window.qparam.isShow;
                    vm.queryParams.queryStr = window.qparam.queryStr;
                    vm.queryParams.tagIds = window.qparam.tagIds;
                }
                let p = JSON.parse(JSON.stringify(vm.queryParams));
                questionApi.list(p).then(data => {
                    vm.list = data.list;
                    //确保page不会被刷到1
                    if (window.qparam)
                        vm.queryParams.page = window.qparam.page;
                    window.qparam = null;
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
            }
            ,
            removeConfirm(index) {
                this.wording = this.DELETE_WORDING;
                this.removeIndex = index;
                this.showModal = true;
                this.actFn = this.remove;
            }
            ,
            remove() {
                let vm = this;
                questionApi.delete(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!')
                    vm.loadData()
                })
            }
            ,
            setTopConfirm(id, step) {
                this.wording = this.SET_TOP_WORDING;
                this.showModal = true;
                this.actFn = this.move;
                this.setTopId = id;
                this.setTopStep = step;
                this.actFn = this.setTop;
            }
            ,
            setTop() {
                this.move(this.setTopId, this.setTopStep)
            }
            ,
            doConfirm() {
                this.actFn();
            }
            ,
            showChange(index) {
                questionApi.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(data => {

                })
            }
            ,
            setRecommend(questionId, recommend) {
                let vm = this;
                questionApi.setRecommend(questionId, recommend).then(data => {
                    vm.loadData();
                })
            }
            ,
            getTags() {
                let vm = this;
                tagApi.list().then(data => {
                    vm.tags = data;
                })
            }
            ,
            /**
             * 1. if key is clicked , the isKeyClicked[keyName][key]=true  then set =false
             * 2. and vice versa
             * @param key list[index][keyName]._id.$oid
             * @param keyName  the name of the key of the objects in this.list.  eg. tags isShow ......
             */
            refreshListByKV(key, keyName) {
                let vm = this;
                //这样做 isKeyClicked[keyName]不具备响应式
//                if (vm.isKeyClicked[keyName][key]) {
//                    vm.isKeyClicked[keyName][key] = false;
//                }
//                else {
//                    vm.isKeyClicked[keyName][key] = true;
//                }
                if (vm.isKeyClicked[keyName][key]) {
                    vm.$set(vm.isKeyClicked[keyName], key, false)
                }
                else {
                    vm.$set(vm.isKeyClicked[keyName], key, true)
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
            }
            ,

            filterList() {
                let vm = this;
                let keyClicked = vm.isKeyClicked;
                let clickedTags = keyClicked["tags"];
                console.log(clickedTags);
                let tagIds = [];
                console.log(tagIds);
                for (let i in clickedTags) {
                    if (clickedTags[i])
                        tagIds.push(i)
                }
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
            ,
            search() {
                let vm = this;
                vm.queryParams.page = 1;
                vm.loadData();
            }
            ,
            detail(id) {
                let vm = this;
                debugger
                window.qparam = JSON.parse(JSON.stringify(vm.queryParams));
                window.page = vm.queryParams.page;
                window.tagIds = vm.queryParams.tagIds;
                window.isKeyClicked = vm.isKeyClicked;
                console.log("qparam", window.qparam)
//                try {
//                    sessionStorage.setItem('questionParams', JSON.stringify(vm.queryParams));
//                } catch (e) {
//
//                }
                vm.$router.push('/question/' + id);
            },
            copyUrl(url) {
                //TODO copyurl
                url = 123;
//                window.clipboardData.clearData('url')
                window.clipboardData.setData('url', url)
            },
            copy2clipboard() {
                utils.copy2clipboard('已复制链接到剪贴板',this)
            }

        }
        ,
        computed: {}
    }
    ;
</script>

<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }
</style>