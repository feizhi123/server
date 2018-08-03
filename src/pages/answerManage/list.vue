<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        答主列表
                    </h1>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="row">
                        <div class="col-md-1 fl">
                            <router-link class="btn btn-sm btn-primary dll-add" to="/answerAdd">新增答主
                            </router-link>
                        </div>
                        <div class="col-md-1 fr">
                            <a class="btn btn-sm btn-primary dll-search" @click="search()">搜索</a>
                        </div>
                        <div class="input-group input-group-sm col-md-3 fr">
                            <input class="form-control dll-query" v-model="queryParams.queryStr" placeholder="输入用户昵称">
                        </div>

                    </div>

                </div>
                <div class="block-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>用户头像</th>
                                <th>用户昵称</th>
                                <th>回答数量</th>
                                <th>获赞数量</th>
                                <th>操作</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td>
                                    <img class="img-avatar" :src="a.headImgUrl" alt="">
                                </td>
                                <td>{{a.nickname}}</td>
                                <td>{{a.answerCount}}</td>
                                <td>{{a.likeCount}}</td>
                                <td>
                                    <a class="btn btn-xs " @click="edit(a._id.$oid)">编辑
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <el-pagination v-show="totalCount>0"
                                       @current-change="pageChange"
                                       :current-page.sync="queryParams.page"
                                       :page-size="queryParams.perPage"
                                       layout="prev, pager, next, jumper"
                                       :total="totalCount" style="text-align:center">
                        </el-pagination>
                    </div>
                </div>
                <h5 v-if="list.length===0" class="text-center red-font">暂时没有你查找的用户</h5>
                <div class="block-content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import answerApi from '@/services/answer'

    export default {
        mounted() {
            let vm = this;
            vm.loadData()
        },
        props: {},
        data() {
//            let page;
//            try {
//                let p = sessionStorage.getItem("answerManageParams");
//                if (p) {
//                    page = JSON.parse(p).page;
//                }
//            } catch (e) {
//            }
            return {
                list: [],
                showModal: false,
                totalCount: 0,
                removeIndex: '',
                lastQueryWithOptions: false,
                queryParams:{
                    page: 1,
                    perPage: 10,
                    queryStr: ''
                }
            };
        },
        methods: {
            loadData() {
                let vm = this;
                if (window.answerManageParams) {
                    vm.queryParams.page = window.answerManageParams.page;
                    vm.queryParams.perPage = window.answerManageParams.perPage;
                    vm.queryParams.queryStr = window.answerManageParams.queryStr;
                }
                let p = JSON.parse(JSON.stringify(vm.queryParams));
                answerApi.answerList(p).then(data => {
                    vm.list = data.list;
                    vm.totalCount = data.totalCount;
                    if (window.answerManageParams)
                        vm.queryParams.page = window.answerManageParams.page;
                    window.answerManageParams = null;
                })
            },
            pageChange(page) {
                debugger;
                this.queryParams.page = page;
                this.loadData();
            },

            search() {
                let vm = this;
                vm.queryParams.page = 1;
                vm.loadData();
            },
            edit(id) {
                let vm = this;
                window.answerManageParams = JSON.parse(JSON.stringify(vm.queryParams));
//                try {
//                    sessionStorage.setItem('answerManageParams', JSON.stringify(vm.queryParams));
//                } catch (e) {
//
//                }
                vm.$router.push('/answerEdit/' + id);
            },
        },
        computed: {}
    };
</script>