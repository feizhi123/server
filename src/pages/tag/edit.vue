<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        修改标签
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="form-group ">
                            <label class="col-md-2 control-label">标签名称：</label>
                            <div class="col-md-7">
                                <input class="form-control dll-name" v-model="name" type="text" placeholder="标签名称">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">上传标签图片：</label>
                            <div class="col-md-7">
                                <file-wrapper class="btn btn-primary dll-img" @on-file-change="imgChange">
                                    <i class="fa fa-upload"></i>
                                    选择图片
                                </file-wrapper>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-7">
                                <img :src="iconUrl">
                                <span v-show="image.width*image.height>0">尺寸:{{image.width}}X{{image.height}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-3 ">
                                        <a class="btn btn-success btn-block dll-save" @click="editTag">确定</a>

                                    </div>
                                    <div class="col-md-3 ">
                                        <a class="btn btn-danger btn-block dll-cancel" @click="cancel">取消</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    import tagApi from "@/services/tag";
    import fileUploader from "@/utils/fileUploader"
    import FileWrapper from '@/components/file-upload-wrapper'

    export default {
        components: {
            FileWrapper
        },
        mounted() {
            let vm = this;
            this.tagId = vm.$route.params.tagId;
            vm.loadData();
        },
        props: {},
        data() {
            return {
                added: false,
                tagId: '',
                name: '',
                iconUrl: '',
                image: {
                    width: 0,
                    height: 0
                }
            };
        },
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.iconUrl = data;
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let data = e.target.result;
                        let image = new Image();
                        image.onload = function () {
                            vm.image.width = image.naturalWidth;
                            vm.image.height = image.naturalHeight;
                            console.log(image.width, image.height)
                        }
                        image.src = data;
                    };
                    reader.readAsDataURL(file);
                })
            },
            loadData() {
                let vm = this;
                tagApi.detail(vm.tagId).then(data => {
                    vm.name = data.name;
                    vm.iconUrl = data.iconUrl;
                })
            },
            cancel() {
                let vm = this;
                vm.name = '';
                vm.$router.push('/tagList');
            },
            editTag() {
                let vm = this;
                if (this.name.trim() === '') {
                    vm.$message.error("名称不能为空")
                    return;
                }
                if (this.iconUrl === '') {
                    vm.$message.error("图片不能为空")
                    return;
                }

                vm.added = true;
                let params = {
                    name: vm.name,
                    iconUrl: vm.iconUrl,
                    tagId: vm.tagId
                }
                tagApi.editTag(params).then(data => {
                    vm.$message.success("修改成功");
                    vm.$router.push("/tagList");
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }
</style>