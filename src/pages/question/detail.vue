<template xmlns="http://www.w3.org/1999/html">
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        问题详情
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
                            <img :src="q.user.headImgUrl"
                                 class="img-avatar ">
                            <!--<img class="col-md-1" src="aa.png"/>-->
                            <label class="">{{q.user.nickname}}</label>
                        </div>
                        <div class="form-group">
                            <label class="h5  col-md-10" v-show="!isEditTitleClicked">{{q.title}}</label>
                            <div v-show="isEditTitleClicked" class="col-md-10">
                                <input class="form-control dll-title" v-model="q.title" type="text">
                            </div>
                            <a @click="editTitle">修改标题</a>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label class="h5 col-md-10" v-show="!isEditDescClicked">{{q.desc}}</label>
                            <div v-show="isEditDescClicked" class="col-md-10">
                                <textarea class="form-control dll-desc" v-model="q.desc" type="text"></textarea>
                            </div>
                            <a @click="editDesc">修改描述</a>
                        </div>
                        <!--问题的tags-->
                        <div class="form-group">
                            <label class=" col-md-1">标签:</label>
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
                                <!--<router-link class="detail-link"-->
                                <!--:to="{name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}}">查看全部回答</router-link>-->
                                <a class="detail-link"
                                   @click="toAnswersComments({name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}})">查看全部回答</a>

                            </span>
                            <span v-if="comments.totalCount>0" class="col-md-3">共{{comments.totalCount}}个问题评论&nbsp;
                                <a class="detail-link"
                                   @click="toAnswersComments({name:'answerscomments',params:{questionId:q._id.$oid,type:'comments'}})">查看全部问题评论</a>
                            </span>
                        </div>
                        <hr>
                        <!--从通过tagApi获取的tag-->
                        <div class="form-group ">
                            <label class=" col-md-1">添加标签:</label>
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
                            <label class="col-md-1">相关知识：</label>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-inline">
                                        <div class="" v-show="!q.knowledge|| q.knowledge.length<1">
                                            <input class="form-control" type="text" v-model="klg">
                                            <a @click="addKnowledge">确定</a>
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
                            <label class="col-md-1 ">是否展示问题:</label>
                            <div class="col-md-8">
                                <input class="radio-inline dll-show-true" type="radio" name="isShow" :value="true" v-model=q.isShow>是
                                <input class="radio-inline dll-show-false" type="radio" name="isShow" :value="false" v-model=q.isShow>否
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-1 ">首页展示:</label>
                            <div class="col-md-8">
                                <input class="radio-inline dll-recommend-true" type="radio" name="isRecommended" :value="true"
                                       v-model=q.isRecommended>是
                                <input class="radio-inline dll-recommend-false" type="radio" name="isRecommended" :value="false"
                                       v-model=q.isRecommended>否
                            </div>
                        </div>


                        <!--<div class="form-group ">-->
                            <!--<label class="col-md-1 ">答主:</label>-->
                            <!--<div class="row">-->
                                <!--<div class="col-md-8">-->
                                    <!--&lt;!&ndash;<textarea rows=5       class="form-control" type="text"></textarea>&ndash;&gt;-->
                                    <!--<a v-show="userId===''" class="btn btn-sm btn-primary"-->
                                       <!--@click="showChoose">添加答主</a>-->
                                    <!--<div v-show="userId!==''">-->
                                        <!--<span class="">{{userNickName}}</span>-->
                                        <!--<a class="btn-link " @click="showChoose">更改</a>-->
                                    <!--</div>-->



                                <!--</div>-->
                                <!--&lt;!&ndash;<div class="col-md-5">&ndash;&gt;-->
                                <!--&lt;!&ndash;<a class="btn btn-sm btn-success" type="button" @click="modifyAnswer">添加或保存回答</a>&ndash;&gt;-->
                                <!--&lt;!&ndash;<p>点击"添加或保存回答"后对回答的操作才能生效后可以继续处理其他回答</p>&ndash;&gt;-->
                                <!--&lt;!&ndash;</div>&ndash;&gt;-->

                            <!--</div>-->
                        <!--</div>-->

                        <div class="form-group ">
                            <label class="col-md-1 ">回答:</label>
                            <div class="row">
                                <div class="col-md-8">
                                    <a class="btn btn-sm btn-primary" @click="toAnswerInfo">新增回答</a>
                                    <router-link  :to="{name:'answerInfo',params:{'questionId':questionId}}">

                                    </router-link>

                                </div>
                            </div>
                        </div>



                        <!--<div class="form-group ">-->
                            <!--<label class="col-md-1 ">回答:</label>-->
                            <!--<div class="col-md-8">-->
                                <!--&lt;!&ndash;<textarea rows=5       class="form-control" type="text"></textarea>&ndash;&gt;-->
                                <!--<answer-metas :answer="answer" @on-data-change="refreshAnswer" rows="10">-->
                                <!--</answer-metas>-->


                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="row " v-show="answerMetas.length>0">-->
                        <!--<div class="col-md-2"></div>-->
                        <!--<div class="col-md-8">-->
                        <!--<a class="btn btn-sm btn-success" type="button" @click="modifyAnswer">添加或保存回答</a>-->
                        <!--<p>点击"添加或保存回答"后对回答的操作才能生效后可以继续处理其他回答</p>-->
                        <!--<hr>-->
                        <!--</div>-->

                        <!--</div>-->

                        <div class="form-group">
                            <div class="col-md-1"></div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-2">
                                        <a class="btn btn-sm btn-success " @click="save">&nbsp;&nbsp;&nbsp;确定&nbsp;&nbsp;&nbsp;</a>
                                    </div>
                                    <div class="col-md-2">
                                        <router-link class="btn btn-sm btn-danger " to="/questionList">&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--</div>-->
                <!--</div>-->
                <!--<answer-users title="添加答主" @on-choose="chooseAnswer" :show=showChooseModal @show="showChooseModal=true"-->
                              <!--@hide="showChooseModal=false"></answer-users>-->
            </div>
        </div>
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
            vm.loadData();

        },
        props: [],
        data() {
            return {
                tagMap: {},
                questionId: '',
                q: {
                    //如果不定义这两个  chrome中 console 会报 can't read property  xxx(eg. user.yy,createdAt.$date) of undefined
                    user: {},
                    createdAt: {},
                    knowledge: []
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

                //添加答主
                userId: '',
                userNickName: '',
                showChooseModal: false,

                answer: {
                    metas: []
                },

//                answerMetas: [],

                //用来判断是新增还是修改已有的回答
                answerId: '',

                //相关知识
                klg: '',
                showAdd: false,
            }
        },
        methods: {
            loadData() {
                let vm = this;
                questionApi.detail(vm.questionId).then(data => {
                    vm.q = data;
                    if (!vm.q.knowledge)
                        vm.$set(vm.q, 'knowledge', []);
                    vm.getAnswers();
                    vm.getComments();
                    vm.getTags();
                })
            },
            getAnswers() {
                let vm = this;
                vm.answersParams.questionId = vm.questionId;
                questionApi.answers(vm.answersParams).then(data => {
                    vm.answers = data;
                })
            },
//            getUserAnswer() {
//                let vm = this;
//                questionApi.getUserAnswer(vm.questionId, vm.userId).then(data => {
//                    debugger
//                    if (data)
//                        vm.answer = data;
//                    if (!vm.answer.metas)
//                        this.$set(vm.answer, 'metas', []);
//                    vm.answerId = data.answerId;
//                })
//            },
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
                    //TODO tag id
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
//            实现的功能与上面的一样
//            isTagAdded(tagId){
//                console.log("qtagid",tagId)
//                return this.q.tags.some((id)=>{
//                    console.log("id",id)
//                    return qTagId===id.$oid
//                })
//            },
            save() {
                let vm = this;
                let tmpTag = [];
                if (!vm.q.title || vm.q.title.trim() === '') {
                    vm.$message.error("标题不能为空");
                    return;
                }
                //TODO 这里是异步  一般来说没什么问题 除非网络等出现异常。
                debugger
                if (vm.userId) {
                    if (vm.answer.metas.length === 0 || (vm.answer.metas.length === 1 && vm.answer.metas[0]['content'].trim().length === 0)) {
                        vm.$message.error("回答不能回空");
                        return;
                    }
                    if (vm.answer.showLink && (!vm.answer.link || vm.answer.link.trim() === '')) {
                        vm.$message.success("第三方链接不能为空");
                        return;
                    }
                    if (vm.answerId)
                        vm.editAnswer();
                    else
                        vm.addAnswer();
                }
                else if (!vm.userId && vm.answer.metas.length > 0) {
                    vm.$message.error("请选择答主");
                    return;
                }
                for (let i in vm.q.tags) {
                    tmpTag.push(vm.q.tags[i].$oid);
                }
                let qq = {
                    questionId: vm.questionId,
                    title: vm.q.title,
                    desc: vm.q.desc,
                    tags: tmpTag,
                    isShow: vm.q.isShow,
                    isRecommended: vm.q.isRecommended,
                    knowledge: vm.q.knowledge,
                };
                console.log(vm.q);
                questionApi.editDetail(qq).then(data => {
                    vm.$message.success("保存成功")
                    vm.loadData();
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
            refreshAnswer(data) {
                this.answer = data;
            },

            /**
             * 回答部分
             */
            toAnswersComments(routeParmas) {
                let questionUrl = {name: 'questionDetail', params: {questionId: routeParmas.params.questionId}};
                sessionStorage.setItem("questionUrl", JSON.stringify(questionUrl));
//                to={name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}}
                this.$router.push(routeParmas)
            },
////            chooseAnswer(asker) {
////                this.initAnswer();
////                this.userId = asker._id.$oid;
////                this.userNickName = asker.nickname;
////                this.getUserAnswer()
////            },
//            showChoose() {
//                this.showChooseModal = true;
//            },
//            initAnswer() {
//                this.answerMetas = [];
//                this.userId = '';
//                this.answerId = '';
//            },
//            editAnswer() {
//                let vm = this;
//                let an = {
//                    answerId: vm.answerId,
//                    metas: vm.answer.metas ? vm.answer.metas : [],
//                    showLink: vm.answer.showLink ? vm.answer.showLink : false,
//                    link: vm.answer.link ? vm.answer.link : ''
//                }
//                questionApi.editAnswer(an).then(data => {
//                    vm.$message.success("修改回答成功")
//                    vm.initAnswer();
//                });
//            },
//            addAnswer() {
//                let vm = this;
//                debugger
//                let an = {
//                    questionId: vm.questionId,
//                    userId: vm.userId,
//                    metas: vm.answer.metas ? vm.answer.metas : [],
//                    showLink: vm.answer.showLink ? vm.answer.showLink : false,
//                    link: vm.answer.link ? vm.answer.link : ''
//                }
//
//                questionApi.addAnswer(an).then(data => {
//                    vm.$message.success("新增回答成功")
//                    vm.initAnswer();
//                    vm.getAnswers();
//                });
//            },
            //如果以后要新增一个按钮来单独添加或修改 那直接调用这个方法就行了
//            modifyAnswer() {
//                if (!this.userId) {
//                    this.$message.error("请选择答主");
//                    return false;
//                }
//                if (!this.answer.metas || this.answer.metas.length === 0) {
//                    this.$message.error("回答不能回空");
//                    return false;
//                }
//                if (this.answerId)
//                    this.editAnswer();
//                else
//                    this.addAnswer();
//                return true;
//            },
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
            },

            toAnswerInfo(){
                localStorage.setItem("returnPath",this.$route.path);
                this.$router.push({name:'answerInfo',params:{'questionId':this.questionId}})
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

    .padding-10px {
        padding-left: 10px;
        padding-right: 10px;
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