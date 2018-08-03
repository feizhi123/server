<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading" v-if="$route.path.indexOf('topicDetail')==-1">
                        编辑专题
                    </h1>
                    <h1 class="page-heading" v-else>
                        专题详情
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
                                <textarea rows=3    class="form-control dll-desc"
                                          v-model="p.desc"
                                          type="text"
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
                        <div class="form-group" v-show="p.bannerUrl">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-7">
                                <img class="pic-max-500" :src="p.bannerUrl" alt="">
                                <span v-show="p.bannerUrl&&image.width>0&&image.height>0">尺寸:{{image.width}}X{{image.height}}</span>
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
                        <div class="form-group" v-show="p.shareImgUrl">
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
                                <a class="btn btn-primary btn-block dll-search-q" @click="search">搜索</a>
                            </div>
                        </div>
                        <div class="col-md-offset-1">
                            <div class="js-wizard-simple block">
                                <ul class="nav nav-tabs nav-tabs-alt nav-justified" style="width:500px;">
                                    <li v-show="isSearched" id="qSearchedLi">
                                        <a href="#qSearchedDiv"
                                           data-toggle="tab">搜索列表({{questionsSearched.totalCount}})</a>
                                    </li>
                                    <li class="active" id="qAddedLi">
                                        <a href="#qAddedDiv"
                                           data-toggle="tab">已添加问题({{topicQuestions.totalCount}})</a>
                                    </li>
                                    <!--<li id="qApprovingLi">-->
                                        <!--<a href="#qApprovingDiv"-->
                                           <!--data-toggle="tab">已提问待审核问题({{topicApprovingQuestions.totalCount}})</a>-->
                                    <!--</li>-->
                                </ul>
                                <div class="block-content tab-content">
                                    <!--搜索的问题-->
                                    <div class="tab-pane fade push-30-t push-50 " id="qSearchedDiv"
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

                                                <!--<a class="btn btn-primary add-btn"-->
                                                <!--@click="addQuestions(qSearched)">添加-->
                                                <!--</a>-->
                                                <a class="btn btn-primary add-btn"
                                                   @click="addQuestionToTopic(qSearched._id.$oid,'search')"
                                                   :disabled="isQuestionAdded(qSearched._id.$oid)">添加
                                                </a>
                                                <router-link class="detail-link" :to="'/question/'+qSearched._id.$oid">
                                                    查看
                                                </router-link>
                                            </div>
                                        </div>
                                        <el-pagination
                                                @current-change="pageChange"
                                                :current-page.sync="queryParams.page"
                                                :page-size="queryParams.perPage"
                                                layout="prev, pager, next, jumper"
                                                :total="questionsSearched.totalCount" style="text-align:center">
                                        </el-pagination>
                                    </div>
                                    <!--添加的问题-->
                                    <div class="tab-pane fade in push-30-t push-50  active " id="qAddedDiv"
                                         style="width:600px;">
                                        <div v-for="(qAdded,index) in topicQuestions.list" :key="qAdded._id.$oid">
                                            <div class="flex-row list-item">
                                                <div class="list-left">
                                                    <div class="quest-title">{{qAdded.title}}</div>
                                                    <div class="flex-row" style="margin-top:7px">
                                                        <span style="margin-right:20px">回答({{qAdded.answerCount}})</span>
                                                        <span>提问时间：{{qAdded.createdAt.$date | date}}</span>
                                                    </div>
                                                </div>
                                                <a v-show="!(topicQuestionsParams.page==1 && index == 0)"
                                                   @click="move(qAdded,-1)" class="btn btn-xs btn-default"
                                                   type="button" title="上移"><i
                                                        class="fa fa-long-arrow-up"></i></a>
                                                <a v-show="!(topicQuestionsParams.page==Math.ceil(topicQuestions.totalCount/topicQuestionsParams.perPage) && index == topicQuestions.list.length-1)"
                                                   @click="move(qAdded,1)" class="btn btn-xs btn-default"
                                                   type="button"
                                                   title="下移"><i class="fa fa-long-arrow-down"></i>
                                                </a>
                                                <a class="btn btn-primary add-btn"
                                                   @click="beforeConfirm(qAdded._id.$oid,'确定要删除问题吗',remove)">删除
                                                </a>
                                                <router-link class="detail-link" :to="'/question/'+qAdded._id.$oid">查看
                                                </router-link>
                                            </div>
                                        </div>
                                        <el-pagination
                                                @current-change="loadTopicQuestions"
                                                :current-page.sync="topicQuestionsParams.page"
                                                :page-size="topicQuestionsParams.perPage"
                                                layout="prev, pager, next, jumper"
                                                :total="topicQuestions.totalCount" style="text-align:center">
                                        </el-pagination>
                                    </div>
                                    <!--待审核问题-->
                                    <div class="tab-pane fade push-30-t push-50" id="qApprovingDiv"
                                         style="width:600px;">
                                        <div v-for="(qApproving,index) in topicApprovingQuestions.list"
                                             :key="qApproving._id.$oid">
                                            <div class="flex-row list-item">
                                                <div class="list-left">
                                                    <div class="quest-title">{{qApproving.title}}</div>
                                                    <div class="flex-row" style="margin-top:7px">
                                                        <span style="margin-right:20px">回答({{qApproving.answerCount}})</span>
                                                        <span>提问时间：{{qApproving.createdAt.$date | date}}</span>
                                                    </div>
                                                </div>

                                                <a class="btn btn-primary add-btn"
                                                   @click="addQuestionToTopic(qApproving._id.$oid,'qApproving')">添加
                                                </a>
                                                <router-link class="detail-link"
                                                             :to="'/question/'+qApproving._id.$oid">查看
                                                </router-link>
                                            </div>
                                        </div>
                                        <el-pagination
                                                @current-change="loadTopicApprovingQuestions"
                                                :current-page.sync="topicApprovingQuestionsParams.page"
                                                :page-size="topicApprovingQuestionsParams.perPage"
                                                layout="prev, pager, next, jumper"
                                                :total="topicApprovingQuestions.totalCount" style="text-align:center">
                                        </el-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group ">
                            <label class="col-md-2 col-md-offset-1">是否展示专题</label>
                            <input class="radio-inline dll-show-true" type="radio" name="isShow" :value='true'
                                   v-model=p.isShow>是
                            <input class="radio-inline dll-show-false" type="radio" name="isShow" :value='false'
                                   v-model=p.isShow>否
                        </div>


                        <div class="form-group" v-if="$route.path.indexOf('topicDetail')==-1">
                            <div class="col-md-2"></div>
                            <div class="col-md-2 ">
                                <a class="btn btn-success btn-block dll-save" @click="save">确定</a>
                            </div>
                            <div class="col-md-2 ">
                                <a class="btn btn-success btn-block dll-cancel"
                                   @click="beforeConfirm('','确定要取消吗，你编辑的内容都将不再保存？',cancelConfirm)">取消</a>
                            </div>
                        </div>
                        <div class="form-group" v-else>
                            <div class="col-md-2"></div>
                            <div class="col-md-2 ">
                                <a class="btn btn-success btn-block dll-back"
                                   @click="cancelConfirm">返回</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <confirm title="提示！" :content="confirmWording" :show="showModal" @confirm="doConfirm" @show="showModal=true"
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
            let vm = this;
            vm.topicId = vm.$route.params.topicId;
            vm.queryParams.topicId = vm.topicId;
            vm.loadData();
        },
        props: {},
        data() {
            return {
                p: {
                    title: '',
                    desc: '',
                    bannerUrl: '',
                    questionIds: [],
                    shareImgUrl: ''
                },
                topicQuestions: {},
                topicQuestionsParams: {
                    page: 1,
                    perPage: 10,
                    topicId: ''
                },
                questionsSearched: {},
                queryParams: {
                    page: 1,
                    perPage: 10,
                    queryStr: '',
                    topicId: ''
                },
                isSearched: false,
                topicApprovingQuestions: {},
                topicApprovingQuestionsParams: {
                    page: 1,
                    perPage: 10,
                    topicId: ''
                },

                removeQuestionId: '',

                wording: '',
                showWording: false,

                confirmWording: '',

                showModal: false,

                topicId: '',

                actFn: '',

                image: {
                    width: 0,
                    height: 0
                },

            }
        },
        methods: {
            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.p.bannerUrl = data;
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
                })
            },
            shareImgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    vm.$set(vm.p, 'shareImgUrl', data);
                })
            },
            loadData() {
                let vm = this;
                topicApi.detail(vm.topicId).then(data => {
                    vm.p = data;
                });
                vm.loadTopicQuestions();
                vm.loadTopicApprovingQuestions();
            },
            loadTopicQuestions(page) {
                let vm = this;
                vm.topicQuestionsParams.topicId = vm.topicId;
//                vm.topicQuestionsParams.page = page || 1;
                console.log("page", vm.topicQuestionsParams.page)
                topicApi.topicQuestions(vm.topicQuestionsParams).then(data => {
                    vm.topicQuestions = data;
                })
            },
            isQuestionAdded(questionId) {
                let vm = this;
                for (let q in vm.topicQuestions.list) {
                    if (vm.topicQuestions.list[q]._id.$oid === questionId) {
                        return true;
                    }
                }
                return false;
            },

            loadTopicApprovingQuestions(page) {
                let vm = this;
                vm.topicApprovingQuestionsParams.topicId = vm.topicId;
//                vm.topicApprovingQuestionsParams.page = page || 1;
                topicApi.topicApprovingQuestions(vm.topicApprovingQuestionsParams).then(data => {
                    vm.topicApprovingQuestions = data;
                })
            },

            deleteAddedQuestion(questionId) {
                let vm = this;
                let qs = vm.topicQuestions;
                for (let i = 0; i < qs.length; i++) {
                    if (qs[i]._id.$oid === questionId) {
                        qs.splice(i, 1);
                        if (qs.length === 0) {
                            vm.showWord('该专题下还没有问题，快去添加吧');
                        }
                        return;
                    }
                }

            },
            addQuestionToTopic(questionId, tab) {
                let vm = this;
                topicApi.addQuestionToTopic(vm.topicId, questionId).then(data => {
                    vm.loadTopicQuestions(vm.topicQuestionsParams.page);
                    if (tab === 'search')
                        vm.search();
                    else if (tab === 'qApproving')
                        vm.loadTopicApprovingQuestions(vm.topicApprovingQuestionsParams.page);
                })
            },
            deleteQuestionFromTopic() {
                let vm = this;
                topicApi.deleteQuestionFromTopic(vm.topicId, vm.removeQuestionId).then(data => {
                    vm.loadTopicQuestions(vm.topicApprovingQuestionsParams.page);
                })
            },
            //actFun 方法名 remove
            beforeConfirm(questionId, wording, actFn) {
                this.removeQuestionId = questionId;
                this.confirmWording = wording;
                this.showModal = true;
                this.actFn = actFn;
            },
            remove() {
                this.deleteQuestionFromTopic();
            },
            doConfirm() {
                let vm = this;
                vm.actFn();
            },
            search() {
                let vm = this;
                topicApi.searchQuestions(vm.queryParams).then(data => {
                    vm.questionsSearched = data;
                    $('#qAddedLi').removeClass('active');
                    $('#qApprovingLi').removeClass('active');
                    $('#qSearchedLi').addClass('active');
                    $('#qAddedDiv').removeClass('in active');
                    $('#qApprovingDiv').removeClass('in active');
                    $('#qSearchedDiv').addClass('in active');
                    vm.isSearched = true;
                })
            },
            pageChange(page) {
                let vm = this;
                vm.queryParams.page = page;
                vm.search();
            },
            save() {
                let vm = this;
                let topic = {
                    topicId: vm.topicId,
                    title: vm.p.title,
                    desc: vm.p.desc,
                    bannerUrl: vm.p.bannerUrl||'',
                    isShow: vm.p.isShow,
                    shareImgUrl: vm.p.shareImgUrl||''
                }
                topicApi.editTopic(topic).then(data => {
                    vm.$message.success('成功！');
                    vm.$router.push('/topicList')
                })
            },
            checkAddedQues() {
                let vm = this;
                if (vm.topicQuestions.length === 0)
                    vm.showWord('该专题下还没有问题，快去添加吧');
            },
            showWord(wording) {
                let vm = this;
                vm.wording = wording;
                vm.showWording = true;
            },
            cancelConfirm() {
                let vm = this;
                vm.$router.push('/topicList')
            },
            check() {
                let vm = this;
                if (vm.p.title.trim() === '') {
                    vm.showWord('标题不能为空');
                    return false;
                }
                if (vm.topicQuestions.totalCount === 0) {
                    vm.showWord('问题不能为空');
                    return false;
                }
                return true;
            },
            move(question, step) {
                let vm = this;
                let params = {
                    topicId: vm.topicId,
                    questionId: question._id.$oid,
                    toSeq: (question.seq + step)
                }
                topicApi.moveTopicQuestion(params).then(data => {
                    vm.loadTopicQuestions()
                })
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