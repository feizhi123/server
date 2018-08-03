<template>
    <div ref="modal" class="modal fade " id="userListModal" tabindex="-1" role="dialog" aria-labelledby="title"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class=" text-center">
                        <div class="row">
                            <a class="close" data-dismiss="modal" aria-hidden="true">&times;</a>
                            <h5 class="modal-title" id="title">{{title}}</h5>
                        </div>
                        <div class="input-group">
                            <input class="form-control dll-query" type="text" v-model="queryParams.queryStr"
                                   placeholder="请输入用户昵称">
                            <span class="input-group-addon dll-search"><a class=" " @click="search()">搜索</a></span>
                        </div>
                    </div>
                </div>
                <div class="modal-body recent overflow-y-auto" v-show="!searched">
                    <h5>常用答主</h5>
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <!--<thead>-->
                            <!--<tr>-->
                            <!--&lt;!&ndash;<th>用户姓名</th>&ndash;&gt;-->
                            <!--<th>用户昵称</th>-->
                            <!--<th>操作</th>-->
                            <!--</tr>-->
                            <!--</thead>-->
                            <tbody>
                            <tr v-for="(a,index) in recentList" :key="a._id.$oid">
                                <td style="width: 70%">
                                    <img class="img-avatar" :src="a.headImgUrl"/>
                                    <span class="">{{a.nickname}}</span>
                                </td>
                                <!--<td>{{a.nickname}}</td>-->
                                <td><a class="btn btn-rounded btn-primary " @click="choose(a)">选择</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-body" v-show="searched">
                    <h5>搜索结果</h5>
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <!--<thead>-->
                            <!--<tr>-->
                            <!--&lt;!&ndash;<th>用户姓名</th>&ndash;&gt;-->
                            <!--<th>用户昵称</th>-->
                            <!--<th>操作</th>-->
                            <!--</tr>-->

                            <!--</thead>-->
                            <tbody>
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td style="width: 70%">
                                <img class="img-avatar" :src="a.headImgUrl"/>
                                    <span class="">{{a.nickname}}</span>
                                </td>
                                <!--<td>{{a.nickname}}</td>-->
                                <td><a class="btn btn-rounded btn-primary" @click="choose(a)">选择</a></td>
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
                        <h5 class="text-danger text-center" v-show="totalCount===0">{{wording}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import answerApi from '@/services/answer'
    
    export default {

        mounted() {
            let vm = this
            vm.recentAnswer();
            $(this.$refs.modal).on('hidden.bs.modal', () => {
                vm.$emit('hide')
            })
            $(this.$refs.modal).on('shown.bs.modal', () => {
                vm.$emit('show')
            })
        },
        data() {
            return {
                recentList: [

                ],
                list: [],
                queryParams: {
                    page: 1,
                    perPage: 4,
                    queryStr: ''
                },
                totalCount: 0,
                wording: '未搜到该用户',
                searched:false
            }
        },
        props: {
            title: "",
            content: "",
            show: false,
        },
        methods: {
            loadData() {
                let vm = this;
                answerApi.answerList(vm.queryParams).then(data => {
                    vm.list = data.list;
                    vm.totalCount = data.totalCount;
                })
            },
            choose(user) {
                this.$emit('on-choose', user);
                $(this.$refs.modal).modal('hide')
            },
            pageChange(page) {
                this.queryParams.page = page;
                this.loadData();
            },
            search() {
                let vm = this;
                vm.searched=true;
                vm.queryParams.page = 1;
                vm.loadData();
            },
            recentAnswer(){
                let vm = this;
                answerApi.recentAnswerers().then(data=>{
                    vm.recentList = data;
                })
            }
        },
        watch: {
            show: function (newVal, oldVal) {
                if (newVal) {
                    $(this.$refs.modal).modal('show')
                } else {
                    $(this.$refs.modal).modal({show: false})
                }
            }
        }

    }
</script>

<style lang="scss">
    .recent{
        height: 400px;
    }
</style>