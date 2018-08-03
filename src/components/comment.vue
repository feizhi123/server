<template>
    <div>
        <div class="form-horizontal">
            <div class="form-group">
                <label class="col-md-2">评论者：</label>

                <a v-show="userId===''" class="btn btn-xs btn-primary dll-add-commentator" @click="showChoose">添加评论者</a>

                <div v-show="userId!==''">
                    <span class="">{{userNickName}}</span>
                    <a class="btn-link dll-change" @click="showChoose">更改</a>
                </div>

            </div>
            <div class="form-group">
                <label class="col-md-2">内容：</label>
                <textarea class="col-md-7 dll-content" rows="2" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <label class="col-md-2"></label>
                <a class="btn btn-xs btn-primary dll-add-comment" @click="addComment">评论</a>
            </div>
        </div>


        <answer-users @title="添加评论者" :show=showChooseModal @on-choose="chooseCom" @show="showChooseModal=true"
                      @hide="showChooseModal=false"></answer-users>
    </div>
</template>

<script>
    import AnswerUsers from '@/components/list-choose-user';
    import questionApi from '@/services/question'

    export default {
        components: {
            AnswerUsers
        },
        props: {
            id: '',
            type: '',
        },
        data() {
            return {
                userId: '',
                content: '',
                userNickName: '',
                showChooseModal: false
            }
        },
        methods: {
            chooseCom(com) {
                this.userId = com._id.$oid;
                this.userNickName = com.nickname;
            },
            addComment() {
                let vm = this;
                if (!vm.userId) {
                    vm.$message.info('请选择评论者');
                    return;
                }
                if (!vm.content || vm.content.trim() === '') {
                    vm.$message.info('请填写评论内容');
                    return
                }
                let params = {
                    userId: vm.userId,
                    content: vm.content,
                };
                if (vm.type === 'answer') {
                    params.answerId = vm.id;
                    questionApi.addCommentOfAnswer(params).then(data => {
                        vm.$message.success('评论成功');
                        vm.init();
                        vm.$emit("success")

                    })
                }
                else if (vm.type === 'question') {
                    params.questionId = vm.id;
                    questionApi.addComment(params).then(data => {
                        vm.$message.success('评论成功');
                        vm.init();
                        vm.$emit("success")
                    })
                }
            },
            showChoose() {
                this.showChooseModal = true
            },
            init() {
                this.content = '';
                this.userId = '';
            }
        }
    }

</script>

<style lang="scss"></style>