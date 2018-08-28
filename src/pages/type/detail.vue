<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <h4 >信息修改</h4>
                    <br/>
                    <div class="tab-content">
                        <div id="headFloat" class="tab-pane fade in active">
                            <div class="container">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                       <label class="col-md-2 control-label">标题</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.title" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">租金</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.tip" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">信息</label>
                                        <div class="col-md-4 ">
                                            <el-input type="textarea" autosize placeholder="请输入内容" v-model="item.infor">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">其它</label>
                                        <div class="col-md-4 ">
                                            <el-input type="textarea" autosize placeholder="请输入内容" v-model="item.other">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">
                                            内容图片：
                                        </label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-content" @click="upload">
                                                上传图片
                                            </a>
                                            <a class="dll-content" @click="deleteImg" style="margin-left:10px">
                                                删除
                                            </a>
                                            <br><br>
                                            <img class="max"
                                                 :src="floatConfig.contentImgUrl">
                                        </div>
                                        
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">详细信息</label>
                                        <div class="col-md-4 ">
                                            <el-input type="textarea" autosize placeholder="请输入内容" v-model="item.detail.metas">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label">联系电话</label>
                                        <div class="col-md-4 ">
                                            <el-input  placeholder="请输入内容" v-model="item.tele">
                                            </el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"></label>
                                        <div class="col-md-4 ">
                                            <a class="btn btn-primary dll-apply-icon" @click="updateItem">应用</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <file-wrapper @on-file-change="imgChange" ref="fileWrap"></file-wrapper>
        <confirm title="提示！" :content="wording" :show="showModal" @confirm="doConfirm(true)" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>
<script>
    import fileUploader from '@/utils/fileUploader'
    import detailApi from "@/services/detail"
    import FileWrapper from '@/components/file-upload-wrapper'
    import Confirm from "@/components/confirm"
    export default {
        components: {fileUploader, FileWrapper,Confirm},
        data(){
            return{
                item:{},
                floatConfig: {
                    contentImgUrl: '',
                    backup:''
                },
                wording:"确认此次更改吗？",
                showModal:false
            }
        },
        mounted(){
            let params={
                id:this.$route.query.id,
                type:this.$route.query.type
            }
            detailApi.getDetailItem(params).then(data => {
                this.item=data.data[0]
                this.item.tele=this.item.tele?this.item.tele:""
                this.floatConfig.contentImgUrl=this.item.detail.thumbnails[0];
                var list=""
                for(var i in this.item.detail.metas){
                    list+=(i==0?"":"\n")+this.item.detail.metas[i].label+this.item.detail.metas[i].content
                }
                this.item.detail.metas=list
                this.item.infor=this.toString(this.item.infor)
                this.item.other=this.toString(this.item.other)
            })
        },
        methods:{
            deleteImg(){
                let vm=this
                vm.floatConfig.contentImgUrl="";
            },
            updateItem(){
                this.showModal=true;
            },
            doConfirm(){
                var l=JSON.parse(JSON.stringify(this.item))
                l.infor=l.infor.split('\n');
                l.other=l.other.split('\n');
                l.detail.metas=l.detail.metas.split('\n');
                for(var i in l.detail.metas){
                    var meta={}
                    meta.label=l.detail.metas[i].split('：').length>1?l.detail.metas[i].split('：')[0]:(l.detail.metas[i].split(':').length>1?l.detail.metas[i].split(':')[0]:'')
                    meta.label+="："
                    meta.content=l.detail.metas[i].split('：').length>1?l.detail.metas[i].split('：')[1]:(l.detail.metas[i].split(':').length>1?l.detail.metas[i].split(':')[1]:l.detail.metas[i])
                    l.detail.metas[i]=meta
                }
                console.log(l.detail.metas);
                l.detail.thumbnails[0]=this.floatConfig.contentImgUrl
                
                detailApi.updateDetail(l).then(data=>{
                    console.log(data)
                    if(data.code==0){
                        this.$message.success("信息更新成功")
                        this.$router.back(-1)
                    }
                    else{
                        this.$message.error("信息更新失败")
                    }
                })
            },
            toString(arr){
                var list=""
                for(var i in arr){
                    list+=(i==0?"":"\n")+arr[i]
                }
                return list
            },
            upload() {
                this.$refs.fileWrap.openFinder()
            },
            imgChange(file) {
                let vm = this;
                console.log(file)
                fileUploader.normal(file).then(data => {
                    if(data.code==0)
                        vm.floatConfig.contentImgUrl = data.pic;
                    else
                        vm.$message.error(data.message)
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
