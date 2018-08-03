<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        专题列表
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="container-fluid">
                        <div class="row">
                            <router-link class="btn btn-sm btn-primary fl dll-add" to="/addTopic">新增专题</router-link>
                            <div class="col-md-1 fr">
                                <button class="btn  btn-sm btn-primary dll-search" @click="search()">搜索</button>
                            </div>
                            <div class="input-group input-group-sm col-md-3 fr dll-queryStr">
                                <input class="form-control" v-model="queryParams.queryStr" placeholder="输入专题标题/专题描述">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="block-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>专题图片</th>
                                <th>专题标题</th>
                                <th>浏览量</th>
                                <th>实际曝光量</th>

                                <th>已添加问题</th>
                                <!--<th>待审核问题</th>-->
                                <th>创建时间</th>
                                <th>展示</th>
                                <th>排序</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td>
                                    <img class="pic" :src="a.bannerUrl" alt="">
                                </td>
                                <td>{{a.title}}</td>
                                <td>{{a.visitCount}}</td>
                                <td>{{a.exposeCount}}</td>
                                <td>{{a.approvedCount}}</td>
                                <!--<td>{{a.waitApproveCount}}</td>-->
                                <td>{{a.createdAt.$date | date}}</td>
                                <td>
                                    <select v-model="a.isShow" @change="showChange(index)">
                                        <option :value="false">否</option>
                                        <option :value="true">是</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="btn-group">
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
                                    <a @click="removeConfirm(index)" class="btn btn-xs " type="button"
                                            data-toggle="tooltip">删除
                                    </a>
                                    <a class="btn btn-xs " @click="edit(a._id.$oid)">编辑
                                    </a>

                                    <a class="btn btn-xs " :data-clipboard-text="a.wxappUrl" @click="copy2clipboard">复制链接</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h5 v-if="totalCount===0" class="text-center red-font">暂时没有你查找的专题</h5>
                    <div class="block-content"></div>
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

        <confirm title="提示！" content="确定要删除专题吗？" :show="showModal" @confirm="remove" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>

<script>
    import Confirm from "@/components/confirm";
    import topicApi from "@/services/topic";
    import utils from '@/utils/utils'

    export default {
        components: {
            Confirm
        },
        mounted() {
            let vm = this;
            this.loadData()
        },
        props: {},
        data() {
//            let page;
//            try {
//                let p = sessionStorage.getItem("topicParams");
//                if (p) {
//                    page = JSON.parse(p).page;
//                }
//            } catch (e) {
//            }
            return {
                list: [],
                showModal: false,
                totalCount: 1,
                removeIndex: '',
                lastQueryWithOptions: false,
                queryParams: {
                    page: 1,
                    perPage: 10,
                    queryStr: ''
                }
            };
        },
        methods: {
            pageChange(page) {
                this.queryParams.page = page
                this.loadData();
            },
            loadData() {
                let vm = this
                if (window.topicParams) {
                    vm.queryParams.page = window.topicParams.page;
                    vm.queryParams.perPage = window.topicParams.perPage;
                    vm.queryParams.queryStr = window.topicParams.queryStr;
                }
                let p = JSON.parse(JSON.stringify(vm.queryParams));
                topicApi.list(p).then(data => {
                    vm.list = data.list
                    vm.totalCount = data.totalCount
                    if (window.topicParams)
                        vm.queryParams.page = window.topicParams.page;
                    window.topicParams = null;
                    if (vm.queryParams.queryStr) {
                        vm.lastQueryWithOptions = true
                    } else {
                        vm.lastQueryWithOptions = false
                    }
                })
            },
            search() {
                let vm = this;
                vm.queryParams.page = 1;
                vm.loadData();
            },
            move(id, step) {
                let vm = this;
                topicApi.move(id, step).then(data => {
                    vm.loadData()
                })
            },
            removeConfirm(index) {
                this.removeIndex = index
                this.showModal = true
            },
            remove() {
                let vm = this;
                topicApi.remove(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!')
                    vm.loadData()
                })
            },
            showChange(index) {
                topicApi.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(data => {

                })
            },
            edit(id) {
                let vm = this;
                window.topicParams = JSON.parse(JSON.stringify(vm.queryParams));
                vm.$router.push('/editTopic/' + id);
            },
            detail(id) {
                let vm = this;
                window.topicParams = JSON.parse(JSON.stringify(vm.queryParams));
                vm.$router.push('/topicDetail/' + id);
            },
            copy2clipboard() {
                utils.copy2clipboard('已复制链接到剪贴板',this)
            }
        },
        computed: {},
        beforeRouteLeave(to, from, next) {
            // 设置下一个路由的 meta
            to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
            next();
        }
    };
</script>

<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }
</style>