<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        答主审核
                    </h1>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="form-group">
                        <div class="col-md-1 fr">
                            <button class="btn btn-sm btn-primary dll-search" @click="loadData">搜索</button>
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
                                <th>申请时间</th>
                                <th>审核状态</th>
                                <th>操作</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td>
                                    <img class="img-avatar" :src="a.headImgUrl" alt="">
                                </td>
                                <td>{{a.nickname}}</td>
                                <td>{{a.applyDate.$date | date}}</td>
                                <td>{{a.applyStatus | auditingStatus}}</td>
                                <td>
                                    <router-link class="btn btn-xs " v-if="a.applyStatus===100||a.applyStatus===200"
                                                 :to="'/answer/'+a._id.$oid">审核
                                    </router-link>
                                    <router-link class="btn btn-xs " v-else :to="'/answer/'+a._id.$oid">查看
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h5 v-if="list.length===0" class="text-center red-font">暂时没有你查找的用户</h5>
                <div class="block-content"> </div>
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
            return {
                list: [],
                showModal: false,
                totalCount: 0,
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
            loadData() {
                let vm = this
                answerApi.list(vm.queryParams).then(data => {
                    vm.list = data
                })
            }
        },
        computed: {}
    };
</script>