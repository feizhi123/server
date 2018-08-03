<template>
    <div class="">
        <div class="content">
            <div class="block " style="min-height: 400px">
                <div class="block-content ">
                    <div style="margin-left:14px">
                        <a v-show="user.userId===''" class="btn btn-link btn-primary" @click="showChoose">选择答主</a>
                        <div v-show="user.userId!==''">
                            <img class="img-avatar" :src="user.headImgUrl"/>
                            <span class="">{{user.nickname}}</span>
                            <a v-show="!isEdit" class="btn-link " @click="showChoose">更改</a>
                        </div>
                        <hr>
                    </div>
                    <answer-metas :answer="answer" @on-data-change="refreshAnswer" rows="10"></answer-metas>
                </div>
                <!--<div class="container">-->

                <!--</div>-->

                <div class="flex">
                    <a class="btn btn-primary btn-sm margin-right-15 dll-save" @click="save">保存</a>

                    <a class="btn btn-sm border dll-cancel" @click="back2question">取消</a>
                </div>
                <br>

            </div>
        </div>

        <!--<answer-metas :answer="answer" @on-data-change="refreshAnswer" rows="10"></answer-metas>-->
        <answer-users title="添加答主" @on-choose="chooseAnswer" :show=showChooseModal @show="showChooseModal=true"
                      @hide="showChooseModal=false"></answer-users>
    </div>
</template>

<script>
    import AnswerUsers from "@/components/list-choose-user.vue";
    import answerApi from '@/services/answer';
    import questionApi from '@/services/question';
    import AnswerMetas from '@/components/list-grid-div-v2.vue';

    export default {
        components: {AnswerUsers, AnswerMetas},
        mounted() {
            let user;
            if (this.$route.query.user)
                user = JSON.parse(this.$route.query.user);
            this.answerId = this.$route.query.answerId ? this.$route.query.answerId : '';
            if (user) {
                this.isEdit = true;
                this.chooseAnswer(user);
                this.getUserAnswer();
            }
        },
        props: ['questionId'],
        data() {
            return {
                showChooseModal: false,
                answer: {
                    metas: [
//                        {
//                            type: 'TEXT',
//                            content: '这个问题取决于想买什么车，如果是进口豪华车确实应该等一等，汽车进口关税下调应该会降低这部分车的售价。如果是买一般的车，汽车进口关税下不下调影响不大。\n' +
//                            '汽车进口关税影响的是中高端汽车市场，从有关研究机构的报告可以看出，一旦汽车进口关税下调，合资中高端车型降价压力最大，经济型车、自主品牌等压力最小。客观说，降低进口关税下调直接带来进口车价格下调，其销量规模会增加，进口服务商会受益。比如，以凯美瑞、帕萨特为代表的中级轿车和以CRV、途观为代表的中级SUV，中国定价比美国贵15%-20%。目前中国汽车关税为25%，欧盟15%，美国2.5%，估计中国汽车关税会像欧盟看齐，至少有10%的下调空间。另外，进口车价格下降，对于经济型车压力不大。比如，以卡罗拉为代表的经济型轿车售价，中美目前完全一致。\n' +
//                            '东北证券的研报指出，如果汽车进口关税从25%下调到5%的话，C级车价格的降幅会比较明显，而B级车和A级车的售价相对变化不大，所以C级车的售价势必会下滑。对于消费者而言，C级车售价的下降势必会对B级车的销量形成一定的挤出效应，其中购买力较强的消费者会因此选择C级车。而B级车销量的下滑势必会引发B级车降价。通过测算，当汽车进口关税从25%降到5%，C级车的整体价格将下降13%，从而带动B级车降价2.4%，而B级车的降价会带到A级车降价0.9%。如果关税只是降到15%，进口车对B级车和A级车难以造成影响。\n' +
//                            '所以，对于消费者而言，如果是准备买A级车的话，要买就买完全可以不用管这个关税政策的变化；如果是买B级车，可以根据具体情况等等看，关税降幅大对偏高价的B级车还是有影响的；如果是买C级车或者是豪华车，那么最好等进口关税落地之后再动手，除非你不在乎钱。'
//                        },
//                        {type: 'IMG', content: 'http://dingnuo-dev.oss-cn-hangzhou.aliyuncs.com/077d072b8dbd7928ebd226e2d95927e1tmp.jpeg',compressUrl:'123'},
//                        {type: 'TEXT', content: '1111111'},
//                        {type: 'TEXT', content: '222222'},

                    ],
                    showLink: false,
                    link: ""
                },

                answerMetas: [],
                userId: '',
                //用来判断是新增还是修改已有的回答
                answerId: '',
                //如果是从回答编辑 跳转过来的 可以直接赋值
                user: {userNickName: '', userId: '', headImgUrl: ''},
                //如果是从答案跳转过来编辑的，那就不能更改答主
                isEdit: false
            }
        },
        methods: {
            chooseAnswer(user) {
                this.user = user;
                this.userId = user._id.$oid;
            },
            getUserAnswer() {
                let vm = this;
                debugger
                answerApi.answerDetail(vm.answerId).then(data => {
                    if (data)
                        vm.answer = data;
                    if (!vm.answer.metas)
                        this.$set(vm.answer, 'metas', []);
                })
            },
            refreshAnswer(data) {
                this.answer = data;
            },
            back2question() {
//                let name = window.localStorage.getItem('urlName');
//                let params = JSON.parse(window.localStorage.getItem('urlParams'));
                let returnPath = localStorage.getItem('returnPath');
                this.$router.push(returnPath)
            },
            save() {
                if (!this.userId) {
                    this.$message.error("请选择答主");
                    return false;
                }
                if (!this.answer.metas || this.answer.metas.length === 0) {
                    this.$message.error("回答不能回空");
                    return false;
                }
                if (this.answerId)
                    this.editAnswer();
                else
                    this.addAnswer();

            },
            showChoose() {
                this.showChooseModal = true;
            },
            initAnswer() {
                this.answerMetas = [];
                this.userId = '';
//                this.answerId = '';
            },
            editAnswer() {
                let vm = this;
                let an = {
                    answerId: vm.answerId,
                    metas: vm.answer.metas ? vm.answer.metas : [],
                    showLink: vm.answer.showLink ? vm.answer.showLink : false,
                    link: vm.answer.link ? vm.answer.link : ''
                };
                questionApi.editAnswer(an).then(data => {
                    vm.$message.success("修改回答成功")
//                    vm.initAnswer();
                    vm.back2question();
                });
            },

            addAnswer() {
                let vm = this;
                let an = {
                    questionId: vm.questionId,
                    userId: vm.userId,
                    metas: vm.answer.metas ? vm.answer.metas : [],
                    showLink: vm.answer.showLink ? vm.answer.showLink : false,
                    link: vm.answer.link ? vm.answer.link : ''
                };

                questionApi.addAnswer(an).then(data => {
                    vm.$message.success("新增回答成功")
//                    vm.initAnswer();
                    vm.back2question();
                });
            },


        }

    }

</script>

<style lang="scss">
    .flex {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 50px;
    }


</style>