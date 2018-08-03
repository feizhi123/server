<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        新增专题
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="col-md-2 control-label">专题标题</label>
                            <div class="col-md-7">
                                <input class="form-control dll-title" v-model="p.title" type="text" placeholder="标题">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">专题描述</label>
                            <div class="col-md-7">
                                <textarea rows=3                     class="form-control dll-desc" v-model="p.desc" type="text"
                                          placeholder="描述"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">上传专题图片</label>
                            <div class="col-md-7">
                                <file-wrapper class="btn btn-primary dll-topic-pic" @on-file-change="imgChange">
                                    <i class="fa fa-upload"></i>
                                    选择图片
                                </file-wrapper>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-7">
                                <img class="pic-max-500" :src="p.bannerUrl" alt="" :width="image.width"
                                     :height="image.height">
                                <p v-show="p.bannerUrl">尺寸:{{image.width}}X{{image.height}}</p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label">上传专题分享图片</label>
                            <div class="col-md-7">
                                <file-wrapper class="btn btn-primary dll-share-pic" @on-file-change="shareImgChange">
                                    <i class="fa fa-upload"></i>
                                    选择图片
                                </file-wrapper>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-7">
                                <img class="pic-max-500" :src="p.shareImgUrl" alt="">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-2 control-label">添加问题</label>
                            <div class="col-md-5">
                                <input class="form-control dll-add-q" v-model="queryParams.queryStr"
                                       placeholder="输入用户昵称/问题标题/回答内容/话题标签">
                            </div>
                            <div class="col-md-2 text-left">
                                <a class="btn btn-primary add-btn dll-search-q" @click="search">搜索</a>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-1 control-label"></label>
                            <div class="col-md-10">
                                <div class="js-wizard-simple block ">
                                    <ul class="nav nav-tabs nav-tabs-alt nav-justified" style="width:400px;">
                                        <li class="active">
                                            <a href="#simple-step1"
                                               data-toggle="tab">搜索列表({{questionsSearched.totalCount || 0}})</a>
                                        </li>
                                        <li>
                                            <a href="#simple-step2" data-toggle="tab"
                                               @click="checkAddedQues">已添加问题({{topicQuestions.length}})</a>
                                        </li>
                                    </ul>
                                    <div class="block-content tab-content">

                                        <!-- 这里是会被缓存的视图组件 -->

                                        <div class="tab-pane fade in push-30-t push-50 active" id="simple-step1"
                                             style="width:600px;">

                                            <div v-for="(qSearched,index) in questionsSearched.list"
                                                 :key="qSearched._id.$oid">
                                                <div class="flex-row list-item">
                                                    <div class="list-left">
                                                        <div class="quest-title">{{qSearched.title}}</div>
                                                        <div class="flex-row" style="margin-top:7px">
                                                            <span style="margin-right:20px">回答({{qSearched.answerCount}})</span>
                                                            <span>提问时间：{{qSearched.createdAt.$date | date}}</span>
                                                        </div>
                                                    </div>

                                                    <a class="btn btn-primary add-btn"
                                                       @click="addQuestions(qSearched)"
                                                       :disabled="isQuestionAdded(qSearched._id.$oid)">添加
                                                    </a>
                                                    <router-link class="detail-link"
                                                                 :to="'/question/'+qSearched._id.$oid">查看
                                                    </router-link>
                                                </div>
                                            </div>

                                            <el-pagination
                                                    @current-change="pageChange"
                                                    :current-page.sync="queryParams.page"
                                                    :page-size="queryParams.perPage"
                                                    layout="prev, pager, next, jumper"
                                                    :total="questionsSearched.totalCount"
                                                    style="text-align:center">
                                            </el-pagination>
                                        </div>
                                        <div class="tab-pane fade push-30-t push-50" id="simple-step2"
                                             style="width:600px;">

                                            <div v-for="(qAdded,index) in topicQuestions"
                                                 :key="qAdded._id.$oid">
                                                <div class="flex-row list-item">
                                                    <div class="list-left">
                                                        <div class="quest-title">{{qAdded.title}}</div>
                                                        <div class="flex-row" style="margin-top:7px">
                                                            <span style="margin-right:20px">回答({{qAdded.answerCount}})</span>
                                                            <span>提问时间：{{qAdded.createdAt.$date | date}}</span>
                                                        </div>
                                                    </div>

                                                    <button class="btn btn-primary add-btn"
                                                            @click="removeConfirm(qAdded._id.$oid)">删除
                                                    </button>
                                                    <router-link class="detail-link"
                                                                 :to="'/question/'+qAdded._id.$oid">查看
                                                    </router-link>
                                                </div>
                                            </div>


                                            <!--<el-pagination-->
                                            <!--@current-change="topicQuestionPageChange"-->
                                            <!--:current-page.sync="topicQuestionsParams.page"-->
                                            <!--:page-size="topicQuestionsParams.perPage"-->
                                            <!--layout="prev, pager, next, jumper"-->
                                            <!--:total="topicQuestionsTotalCount" style="text-align:center">-->
                                            <!--</el-pagination>-->
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-5 col-md-offset-2">
                                <span class="red-font" v-show="showWording">{{wording}}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-2"></div>
                            <div class="row">
                                <div class="col-md-2">
                                    <a class="btn btn-success add-btn dll-save" @click="save">确定</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <confirm title="提示！" content="确定要删除问题吗？" :show="showModal" @confirm="remove" @show="showModal=true"
                 @hide="showModal=false"></confirm>

    </div>


</template>

<script>
    import fileUploader from '@/utils/fileUploader'
    import FileWrapper from '@/components/file-upload-wrapper'
    import topicApi from '@/services/topic'
    import Confirm from "@/components/confirm";

    export default {
        components: {
            FileWrapper, Confirm
        },
        mounted() {
        },
        props: {},
        data() {
            return {
                p: {
                    title: '',
                    desc: '',
                    bannerUrl: '',
                    questionIds: [],
                    shareImgUrl:''
                },
                //用来存储已经放进去的question，判断按钮置灰的时候用到
                topicQuestions: [],
                questionsSearched: {},
                removeQuestionId: '',
                queryParams: {
                    page: 1,
                    perPage: 10,
                    queryStr: '',
                    topicId: ''
                },
                totalCount: 0,

                wording: '',
                showWording: false,

                topicQuestionsParams: {
                    page: 1,
                    perPage: 10,
                    topicId: ''
                },
                topicQuestionsTotalCount: 0,

                showModal: false,

                topicId: '',
                image: {
                    width: 0,
                    height: 0
                }
            }
        },
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.p.bannerUrl = data;
                    vm.getFileSize(file);
                })
            },
            shareImgChange(file){
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.p.shareImgUrl = data;
                })
            },
            getFileSize(file) {
                let vm = this;
                let reader = new FileReader();
                reader.onload = function (e) {
                    let data = e.target.result;
                    console.log(data)
                    let image = new Image();
                    image.onload = function () {
                        vm.image.width = image.naturalWidth;
                        vm.image.height = image.naturalHeight;
                        console.log(image.width, image.height)
                    }
                    image.src = data;
                };
                reader.readAsDataURL(file);
            },
            /**
             * QUESTION
             */
            search() {
                let vm = this;
                topicApi.searchQuestions(vm.queryParams).then(data => {
                    vm.questionsSearched = data;
                })
            },
            addQuestions(question) {
                let vm = this;
                vm.topicQuestions.push(question);
                vm.showWording = false;
                vm.topicQuestionsTotalCount += 1;
            },
            //TODO 目前能用 有空完善
            // 添加的时候 应该将已添加的问题从 搜索问题的数组中去掉或者 将 添加按钮 disable..具体细节后期完善
            // 可以定义一个 临时变量用于 和 questionsSearched 做集合的减法操作
            // 最终确定  后台过滤已经添加的问题 就行了；前端不需要做太多工作
            deleteAddedQuestion(questionId) {
                let vm = this;
                let qs = vm.topicQuestions;
                for (let i = 0; i < qs.length; i++) {
                    if (qs[i]._id.$oid === questionId) {
                        qs.splice(i, 1);
                        console.log(qs.length)
                        if (qs.length === 0) {
                            vm.showWord('该专题下还没有问题，快去添加吧');
                        }
                        return;
                    }
                }
            },
            checkAddedQues() {
                let vm = this;//lert(vm.topicQuestions.length)
                if (vm.topicQuestions.length === 0)
                    vm.showWord('该专题下还没有问题，快去添加吧');
            },
            isQuestionAdded(questionId) {
                let vm = this;
                for (let q in vm.topicQuestions) {
                    if (vm.topicQuestions[q]._id.$oid === questionId) {
                        return true;
                    }
                }
                return false;
            },
            removeConfirm(questionId) {
                this.removeQuestionId = questionId
                this.showModal = true
            },
            remove() {
                let vm = this;
                vm.deleteAddedQuestion(vm.removeQuestionId);
            },

            pageChange(page) {
                let vm = this;
                vm.queryParams.page = page;
                vm.search();
            },
//            topicQuestionPageChange(page) {
//                let vm = this;
//                vm.topicQuestionsParams.page = page;
//                vm.search();
//            },
            save() {
                let vm = this;
                if (!vm.check())
                    return;
                topicApi.createTopic(vm.p).then(data => {
                    vm.$message.success('添加成功！');
                    vm.$router.push('/topicList')
                })
            },

            showWord(wording) {
                let vm = this;
                vm.wording = wording;
                vm.showWording = true;
            },
            check() {
                let vm = this;
                if (vm.p.title.trim() === '') {
                    vm.showWord('标题不能为空');
                    return false;
                }
                vm.p.questionIds = [];
                for (let qs of vm.topicQuestions) {
                    vm.p.questionIds.push(qs._id.$oid);
                }
                let qCount = vm.p.questionIds.length;
                if (qCount === 0) {
                    vm.showWord('问题不能为空');
                    return false;
                }
                return true;
            }

        }
    }
</script>

<style lang="scss" scoped>
    .spec {
        background: #eee;
        margin-top: 20px;
    }

    .spec-label {
        padding-top: 7px;
    }

    .list-left {
        flex: 1
    }

    .list-item {
        padding-bottom: 15px;
        border-bottom: 1px #ddd solid;
    }

    .quest-title {
        font-size: 14px;
        font-weight: bold;
    }

    .add-btn {
        width: 80px;
    }

    .detail-link {
        width: 80px;
        text-align: center;
    }

    .pic-max-500 {
        max-width: 500px;
        max-height: 500px;
    }
</style>