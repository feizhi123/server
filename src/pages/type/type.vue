<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        分类信息
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="row">
                        <div class="col-md-1 fl">
                            <router-link class="btn btn-sm btn-primary fl dll-add" to="type/add_type">新增分类</router-link>
                        </div>
                        <div class="col-md-1 fr">
                            <a class="btn btn-sm btn-primary btn-block dll-search" @click="search">搜索</a>
                        </div>
                        <div class="input-group input-group-sm col-md-3 fr">
                            <input class="form-control dll-input" v-model="queryParams.queryStr"
                                   placeholder="输入名称信息">
                        </div>
                        <br>
                    </div>
                </div>
                <div class="search-label"><a v-if="titleLabel.isSearch" @click="tipShow">{{titleLabel.searchTitle}}<span>&times;</span></a></div>
                <div class="block-content ">
                    <div>
                        <table class="table table-striped table-vcenter">
                            <thead>
                            <tr>
                                <th>类别编号</th>
                                <th>名称</th>
                                <th>相关信息</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody v-if="totalCount>0">
                            <tr v-for="(i,idx) in list" :key="idx">
                                <td>{{i.id}}</td>
                                <td>{{i.name}}</td>
                                <td>{{i.content}}</td>
                                <td><a @click="editType(i)">编辑</a><a style="margin-left:10px" @click="someDetails(i.id,i.name)">查看详情</a>
                                <a style="margin-left:10px" @click="delType(i.id)">删除</a></td>
                            </tr>
                            </tbody>
                        </table>
                        <h5 v-if="totalCount===0" class="text-center red-font">暂时没有你查找的内容</h5>
                        <div class="block-content"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination">
        <el-pagination
            @current-change="pageChange"
            :current-page.sync="queryParams.page"
            :page-size="queryParams.perPage"
            layout="prev, pager, next, jumper"
            :total="totalCount">
            </el-pagination>
        </div>
        <confirm title="信息修改" :show="showModal" @confirm="doConfirm" @show="showModal=true"
                :input="editing" :name="item.name" :relate="item.content" @on-name-change="onNamechange"
                @on-relate-change="onRelatechange" @hide="showModal=false"></confirm>
        <confirm title="提示！" :content="conDel" :show="isdel" @confirm="doConfirmDel" @show="isdel=true"
         @hide="isdel=false"></confirm>
    </div>
</template>
<script>
    import Confirm from "@/components/confirm";
    import utils from '@/utils/utils'
    import detailApi from "@/services/detail"
    export default {
        components: {
            Confirm
        },
        mounted() {
            if(this.$route.query.title!=""&&typeof this.$route.query.title!='undefined'){
                this.titleLabel.searchTitle=this.$route.query.title,
                this.titleLabel.isSearch=true
                this.getTypebyname(this.$route.query.title)
            }
            else{
                this.initData();
            }
        },
        data() {
            let data = {
                titleLabel:{
                    searchTitle:'',
                    isSearch:false
                },
                list: [],
                totalCount: 0,
                queryParams: {
                    page: parseInt(this.$route.query.page?this.$route.query.page:1),
                    perPage: 5,
                    queryStr: '',
                    isShow: '',
                    tagIds: ''
                },
                showModal:false,
                wording:'修改信息',
                conDel:"确认删除该条记录吗？",
                editing:true,
                item:{},
                isdel:false,
                deltypeid:-1
            };
            return data;
        },
        watch:{
            '$route'(to,from){
                this.cdnchange();
            }
        },
        methods: {
            cdnchange(){
                if(this.$route.query.title!=''&&typeof this.$route.query.title!='undefined'){
                    this.titleLabel.searchTitle=this.$route.query.title,
                    this.titleLabel.isSearch=true
                    this.getTypebyname(this.$route.query.title)
                }
                else{
                    this.initData()
                    this.titleLabel.searchTitle='',
                    this.titleLabel.isSearch=false
                }
            },
            onNamechange(val){
                this.item.name=val
            },
            onRelatechange(val){
                this.item.content=val
            },
            initData(){
                this.getType();
                detailApi.getTypeCount().then(data => {
                    this.totalCount=data.length;
                 })
            },
            tipShow(){
                this.titleLabel.searchTitle='',
                this.titleLabel.isSearch=false
                this.search()
            },
            someDetails(key,name){
                this.$router.push({path:'typeList',query:{type:key,name:name}})
            },
            getType(){
                var params={page:this.queryParams.page,perpage:this.queryParams.perPage}
                detailApi.getType(params).then(data => {
                    this.list=data.data;
                })
            },
            editType(i){
                this.item={
                    id:i.id,
                    name:i.name,
                    content:i.content
                }
                this.showModal=true;
            },
            doConfirm(){
                detailApi.updateType(this.item).then(data => {
                    if(data.code==0){
                        this.$message.success("信息更新成功")
                        this.cdnchange();
                    }
                    else{
                        this.$message.error("信息更新失败")
                    }
                })
            },
            moreDetails(type,id){
            },
            delType(id){
                this.deltypeid=id;
                this.isdel=true;
            },
            doConfirmDel(){
                var num=this.list.length
                detailApi.delType({id:this.deltypeid}).then((res)=>{
                    if(res.code==0){
                        if(res.length&&res.length>0)
                            this.$message.warning("删除失败，请确认相关数据")
                        else{
                            this.$message.success("删除成功")
                            if(num==1&&this.queryParams.page>1)
                                this.queryParams.page=this.queryParams.page-1
                            this.cdnchange();
                        }
                    }
                    else{
                        this.$message.error("服务器异常")
                    }
                })
            },
            iscdn(page){
                let vm = this
                if(typeof vm.$route.query.title!='undefined'){
                    vm.$router.push({path:"type",query:{title:vm.$route.query.title,page:page}})
                }
                else{
                    vm.$router.push({path:"type",query:{page:page}})
                }
            },
            pageChange(page) {
                this.iscdn(page);
                this.queryParams.page=page
            },
            search() {
                 let vm = this;
                vm.queryParams.page=1
                if(vm.queryParams.queryStr!=''){
                    vm.$router.push({path:"type",query:{title:vm.queryParams.queryStr,page:vm.queryParams.page}})
                }
                else
                    vm.$router.push({path:"type",query:{page:vm.queryParams.page}})
                vm.queryParams.queryStr=''
            },
            getTypebyname(name){
                var params={
                    name:name,
                    perpage:this.queryParams.perPage,
                    page:this.queryParams.page
                }
                detailApi.getTypebyName(params).then(data=>{
                    this.list=data.data
                })
                detailApi.getTypeCountbyName(params).then(data=>{
                    this.totalCount=data.length
                })
            }
        }
    } ;
</script>
<style lang="scss" scoped>
    .pic {
        width: 100px;
        max-height: 100px;
    }
    .pagination{
        display: flex;
        justify-content: center;
    }
    .search-label{
        margin-left: 20px;
        a{
            min-width: 20px;
            border: 1px solid #e8e8e8;
            margin: 4px 5px 0 0;
            padding: 0 5px 0 4px;
            color: #000;
            &:hover{
                border-color: #f40;
                span{
                    color: #f40
                }
            }
            span{
                margin-left: 10px
            }
        }
    }
</style>
