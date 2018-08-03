<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div>
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#headFloat" class="dll-float" data-toggle="tab">首页浮动图标</a>
                            </li>
                            <li>
                                <a href="#roundtableBanner"class="dll-roundtable" data-toggle="tab">圆桌横幅</a>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div class="tab-content">
                        <div id="headFloat" class="tab-pane fade in active">
                            <div class="container">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            显示状态：
                                        </label>
                                        <div class="col-md-4 ">
                                            <label class="radio-inline">
                                                <input class="radio dll-show-true" type="radio" name="floatConfig.isShow" :value=true
                                                       v-model="floatConfig.isShow"/>显示
                                            </label>
                                            <label class="radio-inline dll-show-false">
                                                <input class="radio " type="radio" name="floatConfig.isShow"
                                                       :value=false
                                                       v-model="floatConfig.isShow"/>隐藏
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            活动图标：
                                        </label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-icon" @click="upload('icon')">
                                                上传图片
                                            </a>
                                            <br><br>
                                            <img class="max"   :src="floatConfig.icon">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            内容图片：
                                        </label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-content" @click="upload('content')">
                                                上传图片
                                            </a>
                                            <br><br>
                                            <img class="max"
                                                 :src="floatConfig.contentImgUrl">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"></label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-apply-icon" @click="applyFloatConfig">应用</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="roundtableBanner" class="tab-pane fade">
                            <div class="container">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            显示状态：
                                        </label>
                                        <div class="col-md-4 ">
                                            <label class="radio-inline">
                                                <input class="radio dll-show-roundtable-true" type="radio" name="roundtableConfig.isShow"
                                                       :value=true
                                                       v-model="roundtableConfig.isShow"/>显示
                                            </label>
                                            <label class="radio-inline">
                                                <input class="radio dll-show-roundtable-false" type="radio" name="roundtableConfig.isShow"
                                                       :value=false
                                                       v-model="roundtableConfig.isShow"/>隐藏
                                            </label>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            横幅图片：
                                        </label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-roundtable" @click="upload('roundtable')">
                                                上传图片
                                            </a>
                                            <br><br>
                                            <img class="max" v-show="roundtableConfig.banner"
                                                 :src="roundtableConfig.banner">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            页面链接：
                                        </label>
                                        <div class="col-md-5 ">
                                            <!--<textarea v-model="roundtableConfig.link" style="width:100%"></textarea>-->
                                            <input type="text" class="form-control dll-link" v-model="roundtableConfig.link"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"></label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-apply-roundtable" @click="applyRoundTable">应用</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <file-wrapper @on-file-change="imgChange" ref="fileWrap"></file-wrapper>
    </div>
</template>
<script>
    import fileUploader from '@/utils/fileUploader'
    import FileWrapper from '@/components/file-upload-wrapper'
    import activityApi from '@/services/activity'
    export default {
        components: {fileUploader, FileWrapper},
        mounted() {
            this.getFloatIconConfig();
            this.getRoundTableConfig();
        },
        data() {
            return {

                imgCategory: '',

                floatConfig: {
                    isShow: false,
                    contentImgUrl: '',
                    icon: '',
                },

                roundtableConfig: {
                    isShow: false,
                    banner: '',
                    link: ''

                }
            }
        },
        methods: {
            imgChange(file) {

                let vm = this;
                fileUploader.normal(file).then(data => {
                    debugger
                    switch (vm.imgCategory) {
                        case 'icon':
                            vm.floatConfig.icon = data;
                            break;
                        case 'content':
                            vm.floatConfig.contentImgUrl = data;
                            break;
                        case 'roundtable':
                            vm.roundtableConfig.banner = data;
                            break;
                        default:
                            break;
                    }
                })
            },
            upload(imgCategory) {
                this.imgCategory = imgCategory;
                this.$refs.fileWrap.openFinder()
            },
            applyFloatConfig(){
                let vm = this;
                activityApi.editFloatIconConfig(this.floatConfig).then(data=>{
                    vm.$message.success('修改浮动图片成功')
                })
            },
            applyRoundTable(){
                let vm = this;
                activityApi.editRoundTableConfig(this.roundtableConfig).then(data=>{
                    vm.$message.success('修改圆桌横幅成功')
                })
            },
            getFloatIconConfig(){
                let vm = this;
                activityApi.getFloatIconConfig().then(data=>{
                    vm.floatConfig.isShow= data.isShow;
                    vm.floatConfig.contentImgUrl= data.contentImgUrl;
                    vm.floatConfig.icon= data.icon;
                })
            },
            getRoundTableConfig(){
                let vm = this;
                activityApi.getRoundTableConfig().then(data=>{
                    vm.roundtableConfig.isShow= data.isShow;
                    vm.roundtableConfig.banner= data.banner;
                    vm.roundtableConfig.link= data.link;
                })
            }

        },
    }

</script>
<style lang="scss">
    .max {
        max-width: 250px;
        height: auto;
    }
</style>