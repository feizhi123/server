<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <div>
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#templateList" data-toggle="tab">模板列表</a>
                            </li>
                            <li>
                                <a href="#messageList" data-toggle="tab">消息列表</a>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div class="tab-content">
                        <div id="templateList" class="tab-pane fade in active">
                            <div class="table-responsive">
                                <table class="table table-striped table-vcenter">
                                    <thead>
                                    <tr>
                                        <th>模板名称</th>
                                        <th style="width: 40%;">关键词</th>
                                        <th>推送消息量</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(t,index) in template" :key="t.template_id">
                                        <td>
                                            {{t.title}}
                                        </td>
                                        <td class="text-muted">{{t.keys | keywords}}</td>
                                        <td>{{t.msgCount}}</td>
                                        <td>
                                            <a class="btn btn-xs " @click="newMessage(t)">新建消息
                                            </a>
                                            |
                                            <a @click="removeConfirm(index)" class="btn btn-xs " type="button"
                                               data-toggle="tooltip">删除
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <el-pagination v-show="template.length>0"
                                               @current-change="tempPageChange"
                                               :current-page.sync="templateParams.page"
                                               :page-size="templateParams.perPage"
                                               layout="prev, pager, next, jumper"
                                               :total="template.length" style="text-align:center">
                                </el-pagination>
                            </div>
                        </div>


                        <div id="messageList" class="tab-pane fade">
                            <div class="table-responsive">
                                <table class="table table-striped table-vcenter">
                                    <thead>
                                    <tr>
                                        <th>模板类型</th>
                                        <th style="width: 40%;">消息内容</th>
                                        <th>发送时间</th>
                                        <th>送达人数</th>
                                        <th>点击量</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(m,index) in message.list" :key="m._id.$oid">
                                        <td>
                                            {{m.templateTitle}}
                                        </td>
                                        <td class="text-muted">{{m.data | content}}</td>
                                        <td>{{m.createdAt.$date | date}}</td>
                                        <td>{{m.sendCount}}</td>
                                        <td>{{m.clickCount}}</td>
                                        <td>
                                            <a class="btn btn-xs " @click="resend(m)">再次发送
                                            </a>
                                            |
                                            <a class="btn btn-xs " @click="preview(index)">查看详情
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <el-pagination v-show="message.totalCount>0"
                                               @current-change="messagePageChange"
                                               :current-page.sync="messageParams.page"
                                               :page-size="messageParams.perPage"
                                               layout="prev, pager, next, jumper"
                                               :total="message.totalCount" style="text-align:center">
                                </el-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="modal" class="modal fade " id="userListModal" tabindex="-1" role="dialog" aria-labelledby="title"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class=" text-center">
                            <div class="row">
                                <a class="close" data-dismiss="modal" aria-hidden="true">&times;</a>
                            </div>
                        </div>
                    </div>

                    <div class="modal-body">
                        <msg-template class="previewdiv":temp="previewMessage"></msg-template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MsgTemplate from '@/components/msg-template'
    import messageApi from '@/services/message'

    export default {
        components: {MsgTemplate},
        mounted() {
            this.tempList();
            this.msgList();
        },
        data() {
            return {
                templateParams: {
                    page: 1,
                    perPage: 20
                },
                template: [],
                messageParams: {
                    page: 1,
                    perPage: 10,

                },
                message: {},
                removeIndex: '',
                previewIndex: '',
                previewMessage:{
                    title:'',
                    keys:[]
                },
            }
        },
        methods: {
            tempList() {
                let vm = this;
                messageApi.tempList(vm.templateParams).then(data => {
                    vm.template = data
                })
            },
            msgList() {
                let vm = this;
                messageApi.msgList(vm.messageParams).then(data => {
                    vm.message = data

                })
            },
            messagePageChange(page) {
                this.messageParams.page = page;
                this.msgList();
            },
            tempPageChange(page) {
                this.templateParams.page = page;
                this.tempList();
            },
            removeConfirm(index) {
                this.removeIndex = index
                this.showModal = true
            },
            remove() {
                let vm = this;
                messageApi.deleteTemp(this.list[this.removeIndex]._id.$oid).then(data => {
                    vm.$message.success('删除成功!');
                    vm.loadData()
                })
            },
            newMessage(template) {
                this.$router.push({name: 'newMessage', query: {template: JSON.stringify(template)}})
            },
            resend(m) {
                let params={}
                params.template_id = m.templateId;
                params.keys = m.data;
                params.title = m.templateTitle;
                params.page = m.page;
                this.$router.push({name: 'newMessage', query: {template: JSON.stringify(params)}});
            },

            preview(index) {
                this.previewMessage.title=this.message.list[index].templateTitle;
                this.previewMessage.keys=this.message.list[index].data;
                $(this.$refs.modal).modal('show')
            }
        },
    }

</script>
<style lang="scss">
    .pic {
        max-width: 200px;
        height: auto;
    }

    .previewdiv {
        width: 300px;
    }
</style>