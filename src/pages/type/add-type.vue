<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <h4 >新增分类</h4>
                    <br/>
                    <div class="tab-content">
                        <div id="headFloat" class="tab-pane fade in active">
                            <div class="container">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                       <label class="col-md-2 control-label"><span style="color:red">*</span>名称</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.name" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">信息</label>
                                        <div class="col-md-4 ">
                                            <el-input type="textarea" autosize placeholder="请输入内容" v-model="item.content">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"></label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-apply-icon" @click="updateItem">添加</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <confirm title="提示！" :content="wording" :show="showModal" @confirm="doConfirm" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>
<script>
    import detailApi from "@/services/detail"
    import Confirm from "@/components/confirm";
    export default {
        components: {Confirm},
        data(){
            return{
                item:{
                    name:"",
                    content:""
                },
                wording:"确认此次更改吗？",
                showModal:false
            }
        },
        mounted(){
        },
        methods:{
            updateItem(){
                if(this.item.name!="")
                    this.showModal=true;
                else
                    this.$message.error("请输入分类名称")
            },
            doConfirm(){
                detailApi.addType(this.item).then(data => {
                    if(data.code==0)
                        this.$message.success('添加成功');
                    this.item={
                        name:"",
                        content:""
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    .max {
        max-width: 250px;
        height: auto;
    }
</style>
