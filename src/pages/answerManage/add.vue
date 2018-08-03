<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        新增答主
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">

                        <div class="form-group">
                            <label class="col-md-2 control-label">昵称：</label>
                            <div class="col-md-5">
                                <input class="form-control dll-nickname" v-model="p.nickname" type="text" placeholder="昵称">
                            </div>
                            2-20个字符
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label">头像：</label>
                            <div class="col-md-5">
                                <img class="img-avatar" :src="p.headImgUrl" v-if="p.headImgUrl">
                                <file-wrap class="btn btn-primary dll-headimg" @on-file-change="imgChange">上传图片</file-wrap>
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label">自我描述</label>
                            <div class="col-md-5">
                                <textarea class="form-control dll-desc" v-model="p.desc" type="text" placeholder="自我描述"
                                          rows="5"></textarea>
                            </div>
                            30个字符
                        </div>

                        <div class="form-group">
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a class="btn btn-success btn-block dll-add" @click="save" :disabled="added">确定
                                        </a>
                                    </div>
                                    <div class="col-md-3">
                                        <router-link class="btn btn-danger btn-block dll-cancel" to="/answerManageList">取消
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">

                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-5">
                                <h5 v-show="showWording" class="text-danger">{{wording}}</h5>
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
    import FileWrap from '@/components/file-upload-wrapper'
    import fileUploader from '@/utils/fileUploader'

    export default {
        components: {FileWrap, fileUploader},
        mounted() {
            let vm = this;
        },
        props: {},
        data() {
            return {
                p: {
                    nickname: '',
                    headImgUrl: '',
                    desc: ''
                },
                auditingParams: {
                    approve: '',
                    rejectReason: '',
                    answerId: ''
                },
                wording: '',
                showWording: false,

                added: false,
            }
        },
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.p.headImgUrl = data;
                }).catch(err => {
                        console.log("catch!!!", err.stack);
                    }
                )

            },
            save() {
                let vm = this;
                if (vm.check()) {
                    vm.add = true;
                    answerApi.add(vm.p).then(data => {
                        vm.$message.success("添加成功");
                        vm.$router.push('/answerManageList');
                        vm.add = false;
                    })
                    vm.showWording = false;
                }
            },
            check() {
                let vm = this;
                let p = vm.p;
                if (p.nickname.trim() === '' || p.nickname.length < 2 || p.nickname.length > 20) {
                    vm.showWording = true;
                    vm.wording = '请输入正确的昵称';
                    return false
                }
                if (p.headImgUrl.trim() === '') {
                    vm.showWording = true;
                    vm.wording = '请上传答主头像';
                    return false
                }
                if (p.desc.length > 30) {
                    vm.showWording = true;
                    vm.wording = '请输入正确的自我描述';
                    return false
                }
                return true
            }
        }
    }
</script>