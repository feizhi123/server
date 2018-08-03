<template>
    <div>
        <div class="content">
            <div class="block">
                <div class="block-content block-content-narrow">
                    <h4 >新增信息</h4>
                    <br/>
                    <div class="tab-content">
                        <div id="headFloat" class="tab-pane fade in active">
                            <div class="container">
                                <div class="form-horizontal">
                                    <div class="form-group">
                                       <label class="col-md-2 control-label"><span style="color:red">*</span>标题</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.title" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"><span style="color:red">*</span>金额</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.tip" placeholder="请输入内容"></el-input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-2 control-label"><span style="color:red">*</span>电话号码</label>
                                        <div class="col-md-4 ">
                                            <el-input v-model="item.tele" placeholder="请输入内容"></el-input>
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
                                            <a class="btn btn-primary dll-content" @click="upload('icon')">
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
        <confirm title="提示！" :content="wording" :show="showModal" @confirm="doConfirm" @show="showModal=true"
                 @hide="showModal=false"></confirm>
    </div>
</template>
<script>
    import fileUploader from '@/utils/fileUploader'
    import detailApi from "@/services/detail"
    import FileWrapper from '@/components/file-upload-wrapper'
    import Confirm from "@/components/confirm";
    import config from '../../config'
    export default {
        components: {fileUploader, FileWrapper,Confirm},
        data(){
            return{
                imgCategory: '',
                item:{
                    id:-1,
                    type:-1,
                    title:'',
                    tip:'',
                    other:'',
                    detail:{
                        thumbnails:[],
                        metas:''
                    },
                    infor:'',
                    tele:''
                },
                floatConfig: {
                    contentImgUrl: '',
                    backup:''
                },
                wording:"确认此次更改吗？",
                showModal:false
            }
        },
        mounted(){
            this.item.type=parseInt(this.$route.query.type)
        },
        methods:{
            deleteImg(){
                let vm=this
                vm.floatConfig.contentImgUrl="";
            },
            updateItem(){
                if(this.item.title!=""&&this.item.tip!=""&&this.item.tele!="")
                    this.showModal=true;
                else
                    this.$message.error("信息不足")
            },
            doConfirm(){
                var item={}
                let vm=this
                item.title=vm.item.title
                item.type=vm.item.type
                item.tip=vm.item.tip
                item.tele=vm.item.tele
                item.infor=vm.item.infor.split('\n')
                item.other=vm.item.other.split('\n')
                item.detail={thumbnails:[],metas:[]}
                item.detail.thumbnails[0]=vm.floatConfig.contentImgUrl?vm.floatConfig.contentImgUrl:""
                console.log(item)
                var metas=vm.item.detail.metas.split('\n')
                console.log(metas)
                for(var i in metas){
                    var meta={}
                    meta.label=metas[i].split('：').length>1?metas[i].split('：')[0]:(metas[i].split(':').length>1?metas[i].split(':')[0]:'')
                    meta.label+="："
                    meta.content=metas[i]
                    metas[i]=meta
                }
                item.detail.metas=metas
                console.log(item)
                detailApi.addDetail(item).then(data => {
                        if(data.code==0){
                            vm.$message.success("信息插入成功");
                            this.$router.back(-1)
                        }
                        else{
                            vm.$message.error("信息插入失败");
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
            upload(imgCategory) {
                this.imgCategory = imgCategory;
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
