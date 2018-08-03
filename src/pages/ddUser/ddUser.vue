<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        实名用户
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-1 fr">
                                <button class="btn  btn-sm btn-primary" @click="search()">搜索</button>
                            </div>
                            <div class="input-group input-group-sm col-md-3 fr">
                                <input class="form-control" v-model="queryParams.queryStr" placeholder="输入用户昵称/手机号">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="block-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>用户昵称</th>
                                <th>注册手机号</th>
                                <th>上传实名信息时间</th>
                                <th>姓名</th>
                                <th>身份证号</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(a,index) in list" :key="a._id.$oid">
                                <td>
                                   {{a.nickname}}
                                </td>
                                <td>{{a.phone}}</td>
                                <td>{{a.authenticationDate.$date | date}}</td>
                                <td>{{a.actualName}}</td>
                                <td>{{a.idCardNO}}</td>
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
    import ddUserApi from "@/services/ddUser";

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
                ddUserApi.list(vm.queryParams).then(data => {
                    vm.list = data.list
                    vm.totalCount = data.totalCount
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
                ddUserApi.move(id, step).then(data => {
                    vm.loadData()
                })
            },
            removeConfirm(index) {
                this.removeIndex = index
                this.showModal = true
            },
            remove() {
                let vm = this;
                ddUserApi.remove(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!')
                    vm.loadData()
                })
            },
            showChange(index) {
                ddUserApi.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(data => {

                })
            },
            edit(id) {
                debugger
                let vm = this;
                window.topicParams = JSON.parse(JSON.stringify(vm.queryParams));
                vm.$router.push('/editTopic/' + id);
            },
            detail(id) {
                let vm = this;
                window.topicParams = JSON.parse(JSON.stringify(vm.queryParams));
                vm.$router.push('/topicDetail/' + id);
            }
          
        },
        computed: {},
    };
</script>

<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }
</style>