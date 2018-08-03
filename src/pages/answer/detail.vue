<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="">
                <div class="">
                    <h1>
                        名片
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <label class="col-md-3 btn btn-success" v-if="p.applyStatus===300">审核通过</label>
                            <label class="col-md-3 btn btn-danger"
                                   v-else-if="p.applyStatus===400">审核拒绝({{p.rejectReason}})</label>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">头像：</label>
                            <div class="col-md-5">
                                <img class="img-avatar" :src="p.headImgUrl"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">昵称：</label>
                            <div class="col-md-5">
                                <input class="form-control" v-model="p.nickname" type="text" placeholder="昵称">
                            </div>
                        </div>

                        <div v-if="!(p.cardImgUrl===''||(typeof p.cardImgUrl==='undefined'))">
                            <div class="form-group">
                                <label class="col-md-2 control-label">名片照片：</label>
                                <div class="col-md-5">
                                    <img class="" :src="p.cardImgUrl">
                                    <a :href="p.cardImgUrl">查看大图</a>
                                </div>

                            </div>
                        </div>
                        <div v-else>
                            <div class="form-group">
                                <label class="col-md-2 control-label">姓名：</label>
                                <div class="col-md-5">
                                    <input class="form-control" v-model="p.name" type="text" placeholder="姓名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label">手机号：</label>
                                <div class="col-md-5">
                                    <input class="form-control" v-model="p.phone" type="text" placeholder="手机号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label">就职公司：</label>
                                <div class="col-md-5">
                                    <input class="form-control" v-model="p.organization" type="text" placeholder="就职公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label">职业：</label>
                                <div class="col-md-5">
                                    <input class="form-control" v-model="p.title" type="text" placeholder="职业">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label">自我描述</label>
                            <div class="col-md-5">
                                <input class="form-control" v-model="p.desc" type="text" placeholder="自我描述">
                            </div>
                        </div>

                        <div class="form-group" v-if="p.applyStatus==100||p.applyStatus==200">
                            <div class="form-group">
                                <label class="col-md-2 control-label">审核结果</label>
                                <div class="col-md-10">
                                    <div class="col-md-2">
                                        <label><input class="radio-inline" type="radio" v-model="auditingParams.approve"
                                                      name="auditingResult"
                                                      value=true>通过</label>
                                        <!--</div>-->
                                        <!--<div class="col-md-2">-->
                                        <label><input class="radio-inline" type="radio" v-model="auditingParams.approve"
                                                      name="auditingResult"
                                                      value=false>拒绝</label>
                                    </div>
                                    <div class="col-md-5">
                                        <input class="form-control" v-model="p.rejectReason" type="text"
                                               placeholder="请输入拒绝原因"/>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-2 col-md-offset-2">
                                <a class="btn btn-success btn-block" @click="save">确定</a>
                            </div>
                            <div class="col-md-2 ">
                                <router-link class="btn btn-danger btn-block" to="/answerList">取消</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import answerApi from '@/services/answer'

    export default {
        components: {},
        mounted() {
            let vm = this;
            vm.loadData()
        },
        props: {},
        data() {
            return {
                p: {},
                auditingParams: {
                    approve: '',
                    rejectReason: '',
                    answerId: ''
                }

            }
        },
        methods: {
            save() {
                let vm = this;
                if (vm.auditingParams.approve === "false") {
                    let r = vm.p.rejectReason.trim();
                    if (r === '' || r === 'undefined') {
                        vm.$message.info("请输入拒绝原因")
                        return;
                    }
                    vm.auditingParams.approve = false;
                    vm.auditingParams.rejectReason = vm.p.rejectReason;
                } else {
                    vm.auditingParams.approve = true;
                }
                vm.auditingParams.answerId = vm.$route.params.answerId;
                answerApi.audit(vm.auditingParams).then(data => {
                    vm.$message.success("审核成功");
                    vm.loadData();
                    vm.$router.push('/answerList');
                })
            },
            loadData() {
                let vm = this;
                answerApi.detail(vm.$route.params.answerId).then(data => {
                    vm.p = data;
                })
            }
        }
    }
</script>