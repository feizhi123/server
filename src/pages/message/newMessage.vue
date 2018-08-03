<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div class="row">
                        <msg-template class="col-md-5 tmp " :temp="temp"></msg-template>
                        <div class="col-md-1"></div>
                        <div class="form-horizontal col-md-7">
                            <div v-for="(d,index) in temp.keys" class="form-group">
                                <label class="col-md-2 control-label">{{d.name}}</label>
                                <div class="col-md-10">
                                    <!--<input class=" form-control" type="text" v-model="d.value"/>-->
                                    <textarea class=" form-control" v-model="d.value"></textarea>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label">消息链接</label>
                                <div class="col-md-10">
                                    <!--<input class=" form-control" type="text" v-model="page"/>-->
                                    <textarea class=" form-control" v-model="page"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2"></label>
                                <div class="col-md-10">
                                    <a class="btn btn-primary" @click="send">发送</a>
                                    <a class="btn border" @click="cancel">取消</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import msgTemplate from '@/components/msg-template'
    import messageApi from '@/services/message'

    export default {
        components: {msgTemplate},
        mounted() {
            this.temp = JSON.parse(this.$route.query.template);
            this.page=this.temp.page?this.temp.page:'';
        },
        data() {
            return {
                temp: {
                    msgCount: 3,
                    title: "交易提醒",
                    keys: [
                        {
                            field: "keyword1",
                            name: "交易时间"
                        },
                        {
                            field: "keyword2",
                            name: "交易类型"
                        },
                        {
                            field: "keyword3",
                            name: "交易金额"
                        }
                    ],
                    template_id: "YJVo-6miv4Ocqa-mKvf0jNz_f0_xKaadbJ2aC8vb0gI",
                    content: "交易时间{{keyword1.DATA}}\n交易类型{{keyword2.DATA}}\n交易金额{{keyword3.DATA}}\n",
                    example: "交易时间：2016年8月8日\n交易类型：银行转账\n交易金额：100元\n"
                },
                page: '',

            }
        },
        methods: {
            send() {
                let vm = this;
                let params = {};
                params.templateId = vm.temp.template_id;
                params.data = vm.temp.keys;
                params.templateTitle = vm.temp.title;
                params.page = vm.page;
                for(let x in params.data){
                    if(!params.data[x].value||params.data[x].value.trim()===''){
                        vm.$message.error(params.data[x].name+'不能为空');
                        return;
                    }
                }

                if(!params.page||params.page.trim()===''){
                    vm.$message.error('链接不能为空');
                    return;
                }
                messageApi.sendGroupTemplateMsg(params).then(data => {
                    vm.$message.success('发送成功');
                    vm.cancel();
                })
            },
            cancel() {
                this.$router.push('/messageList')
            },

        },
    }

</script>
<style lang="scss">
    .pic {
        max-width: 200px;
        height: auto;
    }

    .tmp {
        width: 300px;
        /*height:500px;*/
    }

</style>