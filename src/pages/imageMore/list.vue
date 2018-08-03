<template>

    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        图片管理
                    </h1>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <!--<div class="row">-->
                    <!--<div class="col-md-1 fl">-->
                    <!--<router-link class="btn btn-primary" to="/answerAdd">新增答主-->
                    <!--</router-link>-->
                    <!--</div>-->
                    <!--<div class="col-md-1 fr">-->
                    <!--<a class="btn btn-primary btn-block" @click="search()">搜索</a>-->
                    <!--</div>-->
                    <!--<div class="col-md-3 fr">-->
                    <!--<input class="form-control" v-model="queryParams.queryStr" placeholder="输入用户昵称">-->
                    <!--</div>-->

                    <!--</div>-->
                    <file-wrapper ref="file" @on-file-change="imgChange"></file-wrapper>
                </div>
                <div class="block-content">
                    <div class="table-responsive">
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>图片</th>
                                <th>位置</th>
                                <th>尺寸</th>
                                <th>操作</th>
                            </tr>

                            </thead>
                            <tbody>
                            <!--<tr v-for="(a,index) in list" :key="a._id.$oid">-->
                            <!--<td>-->
                            <!--<img class="" :src="a.headImgUrl" alt="">-->
                            <!--</td>-->
                            <!--<td>{{a.nickname}}</td>-->
                            <!--<td>-->
                            <!--<a class="btn btn-xs btn-primary" @click="edit(a._id.$oid)">编辑-->
                            <!--</a>-->
                            <!--</td>-->
                            <!--</tr>-->
                            <tr>
                                <td>
                                    <img class="pic" :src="topicMore" id="topicMore" @load="getImageSize('topicMore',topicImage)">
                                </td>
                                <td>热门专题-更多</td>
                                <td>{{topicImage.width}}X{{topicImage.height}}</td>
                                <td>
                                    <a class="btn btn-xs " @click="upload('topicMore')">上传
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img class="pic" :src="tagMore" id="tagMore" @load="getImageSize('tagMore',tagImage)">
                                </td>
                                <td>话题标签-更多</td>
                                <td>{{tagImage.width}}X{{tagImage.height}}</td>
                                <td>
                                    <a class="btn btn-xs " @click="upload('tagMore')">上传
                                    </a>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import imageMore from "@/services/imageMore";
    import fileUploader from "@/utils/fileUploader"
    import FileWrapper from '@/components/file-upload-wrapper'

    export default {
        components: {
            FileWrapper,
        },
        mounted() {
            this.getPictures();
        },
        data() {
            return {
                tagMore: '',
                topicMore: '',

                type: '',
                imgUrl: '',

                imageUrl: '',
                image: {
                    width: 0,
                    height: 0
                },

                tagImage: {
                    width: 0,
                    height: 0
                },
                topicImage: {
                    width: 0,
                    height: 0
                }
            };
        },
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.imageUrl = data;
                    imageMore.editPicture(vm.type,vm.imageUrl);
//                    let reader = new FileReader();
//                    reader.onload = function (e) {
//                        let data = e.target.result;
//                        let image = new Image();
//                        image.onload = function () {
//                            vm.image.width = image.naturalWidth;
//                            vm.image.height = image.naturalHeight;
//                            console.log(image.width, image.height)
//                        };
//                        image.src = data;
//                    };
//                    reader.readAsDataURL(file);
                    vm.refreshData();
                })
            },
            getPictures() {
                let vm = this;
                imageMore.getPictures().then(data => {
                    vm.tagMore = data.tagMore;
                    vm.topicMore = data.topicMore;
                })
            },
            refreshData() {
                let vm = this;
                let imgType;
                if (vm.type === 'tagMore') {
                    vm.tagMore = vm.imageUrl
                    imgType = vm.tagImage;
                } else if (vm.type === 'topicMore') {
                    vm.topicMore = vm.imageUrl
                    imgType = vm.topicImage;
                }
//                vm.getImageSize(vm.type, imgType);
            },
            getImageSize(type, imgType) {
                var screenImage = $("#" + type);
                // Create new offscreen image to test
                var theImage = new Image();
                theImage.src = screenImage.attr("src");
                // Get accurate measurements from that.
                imgType.width = theImage.naturalWidth;
                imgType.height = theImage.naturalHeight;
            },
            upload(type) {
                let vm = this;
                vm.type = type;
                vm.$refs.file.openFinder();
            }
        }
    }
</script>

<style lang="scss">
    .pic {
        width: 100px;
        max-height: 100px;
    }
</style>