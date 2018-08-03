<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        新建标签
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
                                <img class="" :src="iconUrl" alt="" :width="image.width" :height="image.height">
                                <span v-show="iconUrl">尺寸:{{image.width}}X{{image.height}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-3 ">
                                        <a class="btn btn-success btn-block dll-save" @click="createTag" :disabled="added">确定</a>
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

        <confirm title="提示！" content="确定要删除话题吗？" :show="showModal" @confirm="remove" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>

<script>
    import Confirm from "@/components/confirm";
    import tagApi from "@/services/tag";
    import fileUploader from "@/utils/fileUploader"
    import FileWrapper from '@/components/file-upload-wrapper'

    export default {
        components: {
            FileWrapper, Confirm
        },
        mounted() {
            let vm = this;
            this.name = "";
        },
        props: {},
        data() {
            return {
                added: false,
                list: {},
                name: '',
                showModal: false,
                totalCount: 10,
                stopIndex: '',
                lastQueryWithOptions: false,
                queryParams: {
                    page: 1,
                    perPage: 10,
                    name: ''
                },
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
            move(id, step) {
                let vm = this;
                tagApi.move(id, step).then(data => {
                    vm.loadData();
                });
            },
            removeConfirm(index) {
                this.stopIndex = index;
                this.showModal = true;
            },
            remove() {
                let vm = this;
                tagApi.remove(this.list[this.stopIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!')
//                    vm.loadData()
                })
            },
            cancel() {
                let vm = this;
                vm.name = '';
                vm.$router.push('/tagList');
            },
            createTag() {
                let vm = this;
                if (this.name.trim() === '') {
                    vm.$message.info("名称不能为空")
                    return;
                }
                vm.added = true;
                tagApi.createTag(this.name, this.iconUrl).then(data => {
                    vm.$message.success("新建成功");
                    if (vm.$route.params.questionId) {
                        vm.$router.push("/question/" + vm.$route.params.questionId);
                    }
                    vm.added = true;
                    setTimeout(vm.reload, 500);
                })
            },
            reload() {
                window.location.reload()
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