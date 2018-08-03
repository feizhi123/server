<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        新增问题
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <!--<div class="block-content form-horizontal">-->
                <!--<div class="form-group">-->
                <div class="block-content block-content-narrow">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label class="form-label col-md-2">提问者:</label>
                            <!--<div class="col-md-5">-->
                            <!--<a class="btn btn-xs btn-primary" @click="showChoose">添加或更改提问者</a>-->
                            <!--<h6 v-show="userId!==''">当前以<span class="text-danger bold">{{userNickName}}</span>的身份进行提问-->
                            <!--</h6>-->
                            <!--</div>-->

                            <div class="row">
                                <div class="col-md-8">
                                    <!--<textarea rows=5       class="form-control" type="text"></textarea>-->
                                    <a v-show="userId===''" class="btn  btn-primary dll-add-answer"
                                       @click="showChoose">添加答主</a>
                                    <div v-show="userId!==''">
                                        <span class="">{{userNickName}}</span>
                                        <a class="btn-link dll-change-answer" @click="showChoose">更改</a>
                                    </div>

                                </div>
                                <!--<div class="col-md-5">-->
                                <!--<a class="btn btn-sm btn-success" type="button" @click="modifyAnswer">添加或保存回答</a>-->
                                <!--<p>点击"添加或保存回答"后对回答的操作才能生效后可以继续处理其他回答</p>-->
                                <!--</div>-->

                            </div>
                            <!--<img class="col-md-1" src="aa.png"/>-->
                        </div>
                        <div class="form-group">
                            <!--<label class="h5  col-md-10" v-show="!isEditTitleClicked">{{q.title}}</label>-->
                            <!--<div v-show="isEditTitleClicked" class="col-md-10">-->
                            <label class="form-label col-md-2">问题标题:</label>
                            <div class="col-md-5">
                                <textarea id="tit" class="form-control dll-title" v-model="q.title"></textarea>
                            </div>
                            <!--<a @click="editTitle">修改标题</a>-->
                        </div>
                        <!--<hr>-->
                        <div class="form-group">
                            <!--<label class="h5 col-md-10" v-show="!isEditDescClicked">{{q.desc}}</label>-->
                            <!--<div v-show="isEditDescClicked" class="col-md-10">-->
                            <label class="form-label col-md-2">问题描述:</label>
                            <div class="col-md-5">
                                <textarea id="desc" class="form-control dll-desc" v-model="q.desc"></textarea>
                            </div>
                            <!--</div>-->
                            <!--<a @click="editDesc">修改描述</a>-->
                        </div>
                        <!--问题的tags-->
                        <div class="form-group">
                            <label class=" col-md-2">标签:</label>
                            <div class="col-md-8 line-height25">
                                <label v-for="(tag,index) in q.tags" :key="tag.$oid">
                                    <label class="label label-default margin-bottom-15"
                                           v-if="tagName(tag.$oid)!==''">{{tagName(tag.$oid)}}</label>&nbsp;&nbsp;
                                </label>

                            </div>
                            <span class="text-right">{{q.createdAt.$date | date}}</span>
                        </div>
                        <div class="form-group">
                            <span v-if="answers.totalCount>0" class="col-md-3">共{{answers.totalCount}}个回答&nbsp;
                                <router-link class="detail-link"
                                             :to="{name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}}">查看全部回答</router-link>
                            </span>
                            <span v-if="comments.totalCount>0" class="col-md-3">共{{comments.totalCount}}个问题评论&nbsp;
                                <router-link class="detail-link"
                                             :to="{name:'answerscomments',params:{questionId:q._id.$oid,type:'comments'}}">查看全部问题评论</router-link>
                            </span>
                        </div>
                        <hr>
                        <!--从通过tagApi获取的tag-->
                        <div class="form-group ">
                            <label class=" col-md-2">添加标签:</label>
                            <div class="col-md-9 line-height25">
                                <!--<p class="line-height25">-->
                                <span v-for="(tag,index) in tags" :key="tag._id.$oid">
                                        <a class="label label-default " @click="modifyTag(tag)">
                                            <span v-show="isTagAdded(tag._id.$oid)"
                                                  class="glyphicon glyphicon-ok"></span>
                                            <!--<span v-show="ttt(tag._id.$oid)" class="glyphicon glyphicon-ok"></span>-->
                                            {{tag.name}}
                                        </a>
                                            &nbsp;&nbsp;
                                    </span>
                                <!--</p>-->
                            </div>
                            <router-link class="detail-link" :to="{name:'addTag',params:{'questionId':questionId}}">
                                创建其他标签
                            </router-link>
                        </div>

                        <!--相关知识-->
                        <div class="form-group">
                            <label class="col-md-2">相关知识：</label>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="form-inline">
                                        <div class="" v-show="!q.knowledge|| q.knowledge.length<1">
                                            <input class="form-control dll-knowledge" type="text" v-model="klg">
                                            <a @click="addKnowledge" class="dll-knowledge-add">确定</a>
                                            <a @click="initKlg">取消</a>
                                        </div>
                                    </div>
                                    <div class="line-height25">
                                        <span v-for="(k,index) in q.knowledge" :key="index">
                                            <span>
                                                <span class="label label-default">
                                                {{k}}
                                                </span>
                                                <a class=" delete img-circle glyphicon glyphicon-remove "
                                                   @click="deleteKnowledge(index)">
                                                </a>
                                            </span>
                                            &nbsp;
                                        </span>

                                        <a v-show="q.knowledge&&q.knowledge.length>0&&!showAdd" @click="showAdd=true" >继续添加</a>
                                    </div>
                                    <div class="form-inline  margin-top-15">
                                        <div class="" v-show="showAdd">
                                            <input class="form-control" type="text" v-model="klg">
                                            <a @click="addKnowledge">确定</a>
                                            <a @click="initKlg">取消</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div class="form-group">
                            <label class="col-md-2 ">是否展示问题:</label>
                            <div class="col-md-5">
                                <input class="radio-inline dll-show-true" type="radio" name="isShow" :value="true" v-model=q.isShow>是
                                <input class="radio-inline dll-show-false" type="radio" name="isShow" :value="false" v-model=q.isShow>否
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 ">首页展示:</label>
                            <div class="col-md-5">
                                <input class="radio-inline dll-indexshow-true" type="radio" name="isRecommended" :value="true"
                                       v-model=q.isRecommended>是
                                <input class="radio-inline dll-indexshow-false" type="radio" name="isRecommended" :value="false"
                                       v-model=q.isRecommended>否
                            </div>
                        </div>

                        <!--<div class="form-group ">-->
                        <!--<label class="col-md-2 ">回答:</label>-->
                        <!--<div class="col-md-8">-->
                        <!--&lt;!&ndash;<textarea rows=5       class="form-control" type="text"></textarea>&ndash;&gt;-->
                        <!--<answer-metas :metas="q.answerMetas" @on-data-change="refreshAnswerMetas">-->

                        <!--</answer-metas>-->
                        <!--</div>-->
                        <!--</div>-->

                        <div class="form-group">
                            <div class="col-md-2"></div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-3">
                                        <a class="btn  btn-success btn-block dll-save" type="button" @click="save()">确定</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <!--</div>-->
            </div>
        </div>


        <!--模态框 添加提问者-->
        <answer-users title="添加提问者" @on-choose="chooseAsker" :show=showChooseModal @show="showChooseModal=true"
                      @hide="showChooseModal=false"></answer-users>

    </div>

</template>

<script>
    import questionApi from '@/services/question';
    import COS from '@/utils/cos';
    import tagApi from '@/services/tag';
    import AnswerMetas from '@/components/list-grid-div';
    import AnswerUsers from '@/components/list-choose-user';

    export default {
        components: {AnswerMetas, AnswerUsers},
        mounted() {
            let vm = this;
            vm.questionId = vm.$route.params.questionId;
//            vm.loadData();
            vm.getTags();

        },
        props: [],
        data() {
            return {
                tagMap: {},
                questionId: '',
                q: {
                    //如果不定义这两个  chrome中 console 会报 can't read property  xxx(eg. user.yy,createdAt.$date) of undefined
                    title: '',
                    desc: '',
                    user: {},
                    createdAt: {},
                    answerMetas: [],
                    tags: [],
                    knowledge:[],
                    isShow:false,
                    isRecommended:false,
                },
                answers: {},
                comments: {},

                answersParams: {
                    questionId: '',
                    page: 1,
                    perPage: 1
                },
                commentsParams: {
                    questionId: '',
                    page: 1,
                    perPage: 1
                },
                tags: {},
                tagsMap: {},
                isEditTitleClicked: false,
                isEditDescClicked: false,
                //添加提问者用的
                userId: '',
                userNickName: '',
                showChooseModal: false,

                added: false,
                wording: '',


                //相关知识
                klg: '',
                showAdd: false,
            }
        },
        methods: {
            getAnswers() {
                let vm = this;
                vm.answersParams.questionId = vm.questionId;
                questionApi.answers(vm.answersParams).then(data => {
                    vm.answers = data;
                })
            },
            getComments() {
                let vm = this;
                vm.commentsParams.questionId = vm.questionId;
                questionApi.comments(vm.commentsParams).then(data => {
                    vm.comments = data;
                })
            },
            getTags() {
                let vm = this;
                tagApi.list().then(data => {
                    vm.tags = data;
                })
            },
            modifyTag(tag) {
                let vm = this;
                let tagId = tag._id.$oid;
                let qTags = vm.q.tags;
                if (vm.isTagAdded(tagId)) {
                    console.log('delete tag', tag);
                    for (let i in qTags) {
                        if (vm.q.tags[i].$oid === tagId) {
                            vm.q.tags.splice(i, 1)
                        }
                    }
                } else {
                    console.log('add tag', tag);
                    vm.q.tags.push({'$oid': tagId});
                }
                console.log(qTags);
            },
            isTagAdded(tagId) {
                let vm = this;
                let tags = vm.q.tags;
                for (let i in tags) {
                    if (tags[i].$oid === tagId)
                        return true;
                }
                return false;
            },
            save() {
                let vm = this;
                if (!vm.userId) {
                    vm.$message.error('请选择提问者');
                    return;
                }
                if (!vm.q.title || vm.q.title.trim() === '') {
                    vm.$message.error("标题不能为空");
                    return;
                }
//                if (!vm.q.desc || vm.q.desc.trim() === '') {
//                    vm.$message.error("描述不能为空");
//                    return;
//                }
                let tmpTag = [];
                for (let i in vm.q.tags) {
                    tmpTag.push(vm.q.tags[i].$oid);
                }
                let qq = {
                    userId: vm.userId,
                    title: vm.q.title,
                    desc: vm.q.desc,
                    tags: tmpTag,
                    knowledge: vm.q.knowledge,
                    isShow: vm.q.isShow,
                    isRecommended: vm.q.isRecommended,
                };
                console.log(qq);
                questionApi.addQuestion(qq).then(data => {
                    vm.$message.success("添加成功")
//                    vm.loadData()
                    vm.$router.push("/questionList");
                })
            },
            tagName(id) {
                //遍历question的tag id 返回name
                let vm = this;
                let ts = vm.tags;
                for (let j in ts) {
                    if (id === ts[j]._id.$oid) {
                        return ts[j].name;
                    }
                }
                return "";
            },
            editTitle() {
                if (this.isEditTitleClicked)
                    this.isEditTitleClicked = false;
                else
                    this.isEditTitleClicked = true;
            },
            editDesc() {
                if (this.isEditDescClicked)
                    this.isEditDescClicked = false;
                else
                    this.isEditDescClicked = true;
            },
            refreshAnswerMetas(data) {
//                this.q.answerMetas = data;
            },

            /**
             *
             */
            showChoose() {
                this.showChooseModal = true;
            },
            chooseAsker(asker) {
                this.userId = asker._id.$oid;
                this.userNickName = asker.nickname;
            },

            addKnowledge() {
                if (this.klg && this.klg.trim() !== '') {
                    this.q.knowledge.push(this.klg);
                    this.initKlg();
                }
                else
                    this.$message.error("请填写知识");

            },
            initKlg() {
                this.showAdd = false;
                this.klg = '';
            },
            deleteKnowledge(index) {
                this.q.knowledge.splice(index, 1)
            }

        },
        computed: {},
    }

</script>

<style lang="scss" scoped>
    .margin-bottom-15 {
        /*margin-top: 15px;*/
        margin-bottom: 15px;
    }

    .margin-top-15 {
        margin-top: 15px;
        /*margin-bottom: 15px;*/
    }

    .margin-top-bottom-15 {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .line-height25 {
        line-height: 25px;
    }

    .delete {
        position: relative;
        top: -8px;
        left: -5px;
        background-color: white;
        border: 0.1px solid grey;
        color: grey;
    }
</style>