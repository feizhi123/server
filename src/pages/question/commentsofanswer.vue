<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        查看回答评论
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">

            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="block-content ">
                            <div class="container">
                                <div class="row col-md-8">

                                    <!--回答内容部分-->
                                    <div class="flex-row list-item">
                                        <div class="list-left">
                                            <div class="form-group">
                                                <!--普通用户的回答-->
                                                <div class="col-md-8">
                                                    <img :src="answer.user.headImgUrl" class="img-avatar">
                                                    <label>{{answer.user.nickname}}</label>
                                                </div>
                                            </div>

                                            <div class="container-fluid" v-for="(meta,index) in answer.metas"
                                                 :key="index">
                                                <div>
                                                    <p class="col-md-10 pre-wrap"
                                                       v-if="meta.type==='TEXT'">{{meta.content}}</p>
                                                    <img class="pic-max-400" v-if="meta.type==='IMG'"
                                                         :src="meta.content">
                                                </div>
                                            </div>


                                            <div class="container-fluid">
                                                <div class="">
                                                    <span>评论({{comments.totalCount}}) </span>
                                                    <!--&nbsp;&nbsp;&nbsp; <a>添加评论</a>-->
                                                </div>
                                                <div>
                                                    <span>{{answer.createdAt.$date | date}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <!--添加评论框-->
                                    <div class="container-fluid list-item">
                                        <comment type="answer" :id="answer._id.$oid" @success="getComments"></comment>

                                    </div>
                                    <div v-for="(comment,index) in comments.list" :key="comment._id.$oid">
                                        <br>
                                        <div class="flex-row list-item">
                                            <div class="list-left">
                                                <div class="form-group">
                                                    <div class="col-xs-8 col-sm-8 col-md-8">
                                                        <img :src="comment.user.headImgUrl" class="img-avatar">
                                                        <label class="">{{comment.user.nickname}}</label>
                                                    </div>
                                                    <div class="col-xs-4 col-sm-4 col-md-4 fr">
                                                        <span class="dropdown">
                                                          <a class="dropdown-toggle " data-toggle="dropdown">
                                                             <label class="font-s24">...</label>
                                                         </a>
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
                                                    <label class="col-md-10">{{comment.content}}</label>
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

                            <confirm title="提示！" :content="confirmWording" :show="showModal" @confirm="doConfirm"
                                     @show="showModal=true"
                                     @hide="showModal=false"></confirm>
                        </div>
                    </div>
                </div>
            </div>

            <div class="back">
                <a class="btn btn-sm  btn-link" @click="back2answer"><span
                        class="glyphicon glyphicon-chevron-left"></span>返回回答
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import questionApi from '@/services/question';
    import Confirm from "@/components/confirm";
    import AnswerMetas from '@/components/list-grid-div';
    import Comment from '@/components/comment';

    export default {
        components: {Confirm, AnswerMetas, Comment},
        mounted() {
            let vm = this;

//            vm.answerId = vm.$route.params.answerId;
//            vm.type = vm.$route.params.type;
//            console.log(vm.answerId)
            console.log("answer", vm.answer)
            vm.getComments();
//            vm.getTags();
        },
        props: [],
        data() {
            return {

                SET_COMMENT_HIDE_WORDING: '确定要隐藏这个评论吗？',
                SET_COMMENT_SHOW_WORDING: '确定要取消隐藏这个评论吗？',
                DELETE_COMMENT_WORDING: '确定要删除这个评论吗',

                answer: JSON.parse(sessionStorage.getItem("answer")),
                type: '',//answers  comments

                tagMap: {},
                metas: {},
                comments: {
//                    list: [{
//                        user: {
//                            headImgUrl: ''
//                        },
//                        _id: {
//                            $oid: '1'
//                        },
//                        createdAt: {
//                            $date: ''
//                        },
//                    }, {
//                        user: {
//                            headImgUrl: ''
//                        },
//                        _id: {
//                            $oid: '2'
//                        },
//                        createdAt: {
//                            $date: ''
//                        },
//                    }, {
//                        user: {
//                            headImgUrl: ''
//                        },
//                        _id: {
//                            $oid: '3'
//                        },
//                        createdAt: {
//                            $date: ''
//                        },
//                    }],
//                    totalCount: 1
                },


                commentsParams: {
                    answerId: '',
                    page: 1,
                    perPage: 10
                },

                tags: {},
                actFn: '',
                confirmId: '',
                confirmWording: '',
                showModal: false,
                isShow: '',
                editClickedCommentId: '',
            }
        },
        methods: {
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
            back2answer() {
                let url = sessionStorage.getItem("answerUrl");
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
                vm.commentsParams.answerId = vm.answer._id.$oid;
                console.log(vm.commentsParams);
                questionApi.commentsOfAnswer(vm.commentsParams).then(data => {
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

            showEditer(id) {
                if (id)
                    this.editClickedCommentId = id;
                else {
                    this.editClickedCommentId = '';
                    this.loadData();
                }

            },
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