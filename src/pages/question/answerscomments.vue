<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        查看回答和问题评论
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">

            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="form-group ">
                            <label class="h5  col-md-8 ">{{q.title}}</label>
                        </div>

                        <div class="">
                            <div class="js-wizard-simple block ">
                                <ul class="nav nav-tabs nav-tabs-alt nav-justified" style="width:400px;">
                                    <li :class="(typeof type)==='undefined'?'active':(type==='answers'?'active':'')">
                                        <a href="#simple-step1" data-toggle="tab">回答({{answers.totalCount}})</a>
                                    </li>
                                    <li :class="type==='comments'?'active':''">
                                        <a href="#simple-step2" data-toggle="tab">问题评论({{comments.totalCount}})</a>
                                    </li>
                                </ul>
                                <div class="block-content tab-content">
                                    <div class="tab-pane fade in push-30-t push-50 " id="simple-step1"
                                         :class="(typeof type)==='undefined'?'active':(type==='answers'?'active':'')"
                                         style="width:600px;">
                                        <div v-for="(answer,index) in answers.list"
                                             :key="answer._id.$oid">
                                            <div class="flex-row list-item">
                                                <div class="list-left">
                                                    <div class="form-group">
                                                        <!--普通用户的回答-->
                                                        <div class="col-md-8" v-if="answer.isAdmin">
                                                            <label>管理员</label>
                                                        </div>
                                                        <div class="col-md-8" v-else>
                                                            <img :src="answer.user.headImgUrl" class="img-avatar">
                                                            <label>{{answer.user.nickname}}</label>
                                                        </div>

                                                        <div class=" col-md-4">
                                                            <span class="dropdown">
                                                                <a class="dropdown-toggle" data-toggle="dropdown"
                                                                ><label class="font-s24">...</label></a>
                                                                <ul class="dropdown-menu" role="menu">
                                                                        <li><a v-show="answer.isShow"
                                                                               @click="setShowConfirm(answer._id.$oid,false,SET_ANSWER_SHOW_WORDING,setAnswerShow)">隐藏回答</a>
                                                                        <a v-show="!answer.isShow"
                                                                           @click="setShowConfirm(answer._id.$oid,true,SET_ANSWER_SHOW_WORDING,setAnswerShow)">取消隐藏</a>
                                                                    </li>
                                                                    <li>
                                                                        <a @click="baseConfirm(answer._id.$oid,DELETE_ANSWER_WORDING,deleteAnswer)">删除回答</a>
                                                                    </li>
                                                                    <li>
                                                                        <!--<a @click="showEditer(answer._id.$oid)"-->
                                                                        <!--v-show="!answer.isAdmin">编辑回答</a>-->

                                                                        <a @click="toAnswerEditPage(answer.user,answer)"
                                                                           v-show="!answer.isAdmin">编辑回答</a>
                                                                    </li>
                                                                </ul>
                                                            </span>
                                                            <span class="dropdown col-md-offset-1">
                                                                <a class="dropdown-toggle" data-toggle="dropdown"
                                                                >排序<span class="caret"></span></a>
                                                                <ul class="dropdown-menu" role="menu">
                                                                    <li v-if="answer.seq!=0"><a
                                                                            @click="baseConfirm(answer._id.$oid,SET_ANSWER_TOP_WORDING,setAnswerTop)">置顶</a></li>
                                                                    <li><a
                                                                            v-show="!(answersParams.page==1 && index == 0)"
                                                                            @click="answerMove(answer._id.$oid,answer.seq-1)">上移</a></li>
                                                                    <li><a
                                                                            v-show="!(answersParams.page==1 && index == answers.list.length-1)"
                                                                            @click="answerMove(answer._id.$oid,answer.seq+1)">下移</a></li>
                                                                </ul>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div class="container-fluid" v-for="(meta,index) in answer.metas"
                                                         :key="index">
                                                        <div v-show="!(EditClickedAnswerId===answer._id.$oid)">
                                                            <p class="col-md-10 pre-wrap"
                                                               v-if="meta.type==='TEXT'">{{meta.content}}</p>
                                                            <img class="pic-max-400" v-if="meta.type==='IMG'"
                                                                 :src="meta.content">
                                                        </div>
                                                    </div>

                                                    <div class="container-fluid">

                                                        <div class="">
                                                            <a @click="toCommentsOfAnswer(answer)">评论({{answer.commentsCount}}) </a>
                                                            <span v-show="!(showEditLikeBase===answer._id.$oid)">
                                                                +{{answer.likeBase ? answer.likeBase : 0}}个赞
                                                                <a @click="clickShowEditLikeBase(answer._id.$oid,answer.likeBase)">编辑</a>
                                                            </span>

                                                            <span v-show="showEditLikeBase===answer._id.$oid">
                                                                +
                                                                <input type="text" v-model="answer.likeBase"
                                                                       style="width:30px;">
                                                                个赞
                                                                <a @click="editLikeBase(answer._id.$oid,answer.likeBase)">确定</a>
                                                                <a @click="cancelEditLikeBase(answer)">取消</a>
                                                            </span>
                                                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                                            <span>
                                                                 浏览量({{ answer.visitCount | fondsFormat}})
                                                            </span>

                                                            <span>
                                                                 曝光量({{answer.exposeCount | fondsFormat}})
                                                            </span>

                                                            <span>
                                                                <a class="btn btn-xs " :data-clipboard-text="answer.wxappUrl"
                                                                   @click="copy2clipboard">复制链接</a>
                                                            </span>
                                                        </div>
                                                        <br/>
                                                        <div>
                                                            <span>{{answer.createdAt.$date | date}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <el-pagination v-show="answers.totalCount>0"
                                                       @current-change="answersPageChange"
                                                       :current-page.sync="answersParams.page"
                                                       :page-size="answersParams.perPage"
                                                       layout="prev, pager, next, jumper"
                                                       :total="answers.totalCount" style="text-align:center">
                                        </el-pagination>
                                    </div>

                                    <div class="tab-pane fade in push-30-t push-50 " id="simple-step2"
                                         :class="type==='comments'?'active':''"
                                         style="width:600px;">
                                        <div class="">
                                            <comment type="question" :id="questionId" @success="getComments"></comment>
                                            <hr>
                                        </div>

                                        <div v-for="(comment,index) in comments.list"
                                             :key="comment._id.$oid">
                                            <div class="flex-row list-item">
                                                <div class="list-left">
                                                    <div class="form-group">
                                                        <div class="col-md-8">
                                                            <img :src="comment.user.headImgUrl" class="img-avatar">
                                                            <label class="">{{comment.user.nickname}}</label>
                                                        </div>
                                                        <div class="form-group col-md-4 fr">
                                                            <span class="dropdown">
                                                                <a class="dropdown-toggle " data-toggle="dropdown"
                                                                ><label class="font-s24">...</label></a>
                                                                <ul class="dropdown-menu" role="menu">
                                                                    <li><a v-show="comment.isShow"
                                                                           @click="setShowConfirm(comment._id.$oid,false,SET_COMMENT_HIDE_WORDING,setCommentShow)">隐藏评论</a>
                                                                    <a v-show="!comment.isShow"
                                                                       @click="setShowConfirm(comment._id.$oid,true,SET_COMMENT_SHOW_WORDING,setCommentShow)">取消隐藏</a></li>
                                                                    <li><a
                                                                            @click="baseConfirm(comment._id.$oid,DELETE_COMMENT_WORDING,deleteComment)">删除评论</a></li>
                                                                </ul>
                                                            </span>

                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="col-md-10">{{comment.content}}</p>
                                                    </div>
                                                    <span>{{comment.createdAt.$date | date}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <el-pagination v-show="comments.totalCount"
                                                       @current-change="commentsPageChange"
                                                       :current-page.sync="commentsParams.page"
                                                       :page-size="commentsParams.perPage"
                                                       layout="prev, pager, next, jumper"
                                                       :total="comments.totalCount" style="text-align:center">
                                        </el-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <confirm title="提示！" :content="confirmWording" :show="showModal" @confirm="doConfirm"
                             @show="showModal=true"
                             @hide="showModal=false"></confirm>
                </div>
            </div>
        </div>

        <div class="back">
            <button class="btn btn-sm btn-link" @click="back2question"><span
                    class="glyphicon glyphicon-chevron-left"></span>返回问题
            </button>
        </div>

    </div>
</template>

<script>
    import questionApi from '@/services/question';
    import Confirm from "@/components/confirm";
    import AnswerMetas from '@/components/list-grid-div';
    import Comment from '@/components/comment';
    import utils from '@/utils/utils'

    export default {
        components: {Confirm, AnswerMetas, Comment},
        mounted() {
            let vm = this;
            vm.questionId = vm.$route.params.questionId;
            vm.type = vm.$route.params.type;
            console.log(vm.questionId)
            vm.loadData();
//            vm.getTags();
        },
        props: [],
        data() {
            return {

                SET_COMMENT_HIDE_WORDING: '确定要隐藏这个评论吗？',
                SET_COMMENT_SHOW_WORDING: '确定要取消隐藏这个评论吗？',
                DELETE_COMMENT_WORDING: '确定要删除这个评论吗',

                SET_ANSWER_HIDE_WORDING: '确定要隐藏这个回答吗？',
                SET_ANSWER_SHOW_WORDING: '确定要取消隐藏这个回答吗？',
                DELETE_ANSWER_WORDING: '确定要删除这个回答吗',
                EDIT_ANSWER_WORDING: '确定要编辑这个回答吗',

                SET_ANSWER_TOP_WORDING: '确定要置顶这个回答吗',

                type: '',//answers  comments

                tagMap: {},
                questionId: '',
                q: {},
                answers: {
                    list: [
                        {
                            user: {
                                headImgUrl: ''
                            },
                            createdAt: {
                                $date: ''
                            },
                            _id: {
                                $oid: ''
                            },
                            metas: []
                        }
                    ]
                },
                comments: {
                    list: [{
                        user: {
                            headImgUrl: ''
                        },
                        _id: {
                            $oid: ''
                        },
                        createdAt: {
                            $date: ''
                        },
                    }]
                },

                answersParams: {
                    questionId: '',
                    page: 1,
                    perPage: 10
                },
                commentsParams: {
                    questionId: '',
                    page: 1,
                    perPage: 10
                },

                lastQueryWithOptions: false,

                tags: {},
                actFn: '',
                confirmId: '',
                confirmWording: '',
                showModal: false,
                isShow: '',
                EditClickedAnswerId: '',
                count: {},


                showEditLikeBase: '',

                tmpLikeBase: 0,
            }
        },
        methods: {
            loadData() {
                let vm = this;
                questionApi.detail(vm.questionId).then(data => {
                    vm.q = data;
                    vm.getAnswers();
                    vm.getComments();
                })
            },
            //actFun 方法名
            baseConfirm(id, wording, actFn) {
                this.confirmId = id;
                this.confirmWording = wording;
                this.showModal = true;
                this.actFn = actFn;
            },
            setShowConfirm(id, isShow, wording, actFn) {
                this.isShow = isShow;
                this.baseConfirm(id, wording, actFn)
            },

            doConfirm() {
                this.actFn();
            },
            back2question() {
                let url = JSON.parse(sessionStorage.getItem("questionUrl"))
                if (url)
                    this.$router.push(url);
                else
                    window.history.go(-1);
            },
            /**
             * COMMENT
             */
            getComments() {
                let vm = this;
                vm.commentsParams.questionId = vm.questionId;
                questionApi.comments(vm.commentsParams).then(data => {
                    vm.comments = data;
                })
            },
            setCommentShow() {
                let vm = this;
                questionApi.setCommentShow(vm.confirmId, vm.isShow).then(data => {
                    vm.getComments();
                    if (vm.isShow)
                        vm.$message.success("取消隐藏成功");
                    else
                        vm.$message.success("隐藏成功");
                })
            },
            deleteComment() {
                let vm = this;
                questionApi.deleteComment(vm.confirmId).then(data => {
                    vm.loadData();
                })
            },
            commentsPageChange(page) {
                this.commentsParams.page = page
                this.getComments();
            },
            /**
             * ANSWER  //TODO move以后  路由信息会丢失。。然后刷新页面  会回到default的路由
             */
            getAnswers() {
                let vm = this;
                vm.answersParams.questionId = vm.questionId;
                questionApi.answers(vm.answersParams).then(data => {
                    debugger
                    vm.answers = data;
                    let list = vm.answers.list
                    for (let i = 0; i < list.length; i++) {
                        questionApi.commentsOfAnswer({answerId: list[i]._id.$oid}).then(d => {
                            debugger
                            vm.$set(list[i], 'commentsCount', d.totalCount)
                        })
                    }

                })
            },
            setAnswerShow() {
                let vm = this;
                questionApi.setAnswerShow(vm.confirmId, vm.isShow).then(data => {
                    vm.getAnswers();
                    if (vm.isShow)
                        vm.$message.success("取消隐藏成功");
                    else
                        vm.$message.success("隐藏成功");
                })
            },
            deleteAnswer() {
                let vm = this;
                questionApi.deleteAnswer(vm.confirmId).then(data => {
                    vm.$message.success("删除成功");
                    vm.loadData();
                })
            },
            answerMove(id, step) {
                let vm = this;
                questionApi.answerMove(id, step).then(data => {
                    vm.loadData();
//                    vm.$root.reload()
                })
            },
            setAnswerTop() {
                this.answerMove(this.confirmId, 0);
            },
            answersPageChange(page) {
                this.answersParams.page = page
                this.getAnswers();
            },
            editAnswer(answer) {
                let vm = this;
                if (answer.metas.length === 0 || (answer.metas.length === 1 && answer.metas[0]['content'].trim().length === 0)) {
                    vm.$message.success("回答不能为空");
                    return;
                }
                if (answer.showLink && (!answer.link || answer.link.trim() === '')) {
                    vm.$message.success("第三方链接不能为空");
                    return;
                }
                let ans = {
                    answerId: answer._id.$oid,
                    metas: answer.metas,
                    showLink: answer.showLink ? answer.showLink : false,
                    link: answer.link ? answer.link : ''
                }
                console.log(ans)
                questionApi.editAnswer(ans).then(data => {
                    vm.$message.success("保存成功");
                    this.EditClickedAnswerId = '';
                })

            },
            toCommentsOfAnswer(answer) {
//                window.answerUrl = this.$route.path;
                sessionStorage.setItem("answerUrl", this.$route.path);
                sessionStorage.setItem("answer", JSON.stringify(answer));
//                window.answer = answer;
                this.$router.push(`answers/${answer._id.$oid}/comments`)
            },
            showEditer(id) {
                if (id)
                    this.EditClickedAnswerId = id;
                else {
                    this.EditClickedAnswerId = '';
                    this.loadData();
                }

            },

            toAnswerEditPage(user, answer) {
                localStorage.setItem("returnPath", this.$route.path);
                this.$router.push({name: 'answerInfo', query: {user: JSON.stringify(user), answerId: answer._id.$oid}});
            },
            refreshAnswerMetas(data, answer) {
//                debugger;
//                answer.metas = data;
//                answer.metas.content += '123123'
            },
            getCountOfCommentsOfAnswer(id) {
                let params = {
                    answerId: id
                }
                return questionApi.commentsOfAnswer(params).then(data => {
                    return data.totalCount
                })
//                console.log(a)
            },

            clickShowEditLikeBase(id, likeBase) {
                this.showEditLikeBase = id;
                this.tmpLikeBase = likeBase;

            },
            editLikeBase(id, likeBase) {

                questionApi.editAnswerLikeBase(id, parseInt(likeBase)).then(() => {
                        this.showEditLikeBase = "";
                        this.getAnswers()
                    }
                )
            },
            cancelEditLikeBase(answer) {
//                this.getAnswers();
                answer.likeBase = this.tmpLikeBase;
                this.showEditLikeBase = ""

            },
            copy2clipboard() {
                utils.copy2clipboard('已复制链接到剪贴板',this)
            }


        },
        computed: {}

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

    .font-s24 {
        font-size: 24px !important;
    }

    .pic-max-200 {
        max-width: 200px;
        max-height: 200px;
    }

    .pic-max-400 {
        max-width: 400px;
        max-height: 400px;
    }

    .pre-wrap {
        white-space: pre-wrap;
    }

    .back {
        position: fixed;
        right: 10%;
        top: 50%;
        z-index: 9999;
    }

    @media (min-width: 1400px) {
        .back {
            right: 20%;
        }
    }

    @media (min-width: 1500px) {
        .back {
            right: 25%;
        }
    }

    @media (min-width: 1600px) {
        .back {
            right: 30%;
        }
    }
</style>