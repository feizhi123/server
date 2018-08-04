<template>
    <div>
        <div class="content bg-gray-lighter">
            <div class="row items-push">
                <div class="col-sm-7">
                    <h1 class="page-heading">
                        信息管理
                    </h1>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="block">
                <div class="block-header form-horizontal">
                    <div class="row">
                        <div class="col-md-1 fr">
                            <a class="btn btn-sm btn-primary btn-block dll-search" @click="search">搜索</a>
                        </div>
                        <div class="input-group input-group-sm col-md-3 fr">
                            <input class="form-control dll-input" v-model="queryParams.queryStr"
                                   placeholder="输入标题信息">
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
                                <th>标题</th>
                                <th>金额</th>
                                <th>相关信息</th>
                                <th>其他</th>
                                <th>类别</th>
                                <!--
                                <th>更新时间</th>
                                -->
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody v-if="totalCount>0">
                            <tr v-for="(i,idx) in list" :key="idx">
                                <td>{{i.title}}</td>
                                <td>{{i.tip}}</td>
                                <td><span v-for="(item,idx) in i.infor" :key="idx"><span v-if="idx">/</span>{{item.trim()}}</span></td>
                                <td><span v-for="(item,idx) in i.other" :key="idx"><span v-if="idx">/</span>{{item}}</span></td>
                                <!--
                                <td>{{i.updateTime?(i.updateTime.split('T')[0]+" "+i.updateTime.split('T')[1].split('.')[0]):""}}</td>
                                -->
                                <td>{{i.type}}</td>
                                <td><a @click="moreDetails(i.type,i._id)">查看详情</a><a @click="del(i.type,i._id)" style="margin-left:10px">删除</a></td>
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
            :current-page="queryParams.page"
            :page-size="queryParams.perPage"
            layout="prev, pager, next, jumper"
            :total="totalCount">
            </el-pagination>
        </div>
        <confirm title="提示！" :content="wording" :show="showModal" @confirm="doConfirm" @show="showModal=true"
                 @hide="showModal=false"></confirm>
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
                this.getallDetailsbyname(this.$route.query.title)
            }
            else{
                this.getdata();
                detailApi.getallCountList(this.typeid).then(data => {
                    this.totalCount=data.length;
                })
            }
        },
        data() {
            let data = {
                showModal:false,
                wording:"确认删除该条记录吗?",
                titleLabel:{
                    searchTitle:'',
                    isSearch:false
                },
                dele:{
                    type:-1,
                    id:-1
                },
                typeid:parseInt(this.$route.query.type),
                list: [],
                totalCount: 0,
                queryParams: {
                    page: parseInt(this.$route.query.page?this.$route.query.page:1),
                    perPage: 10,
                    queryStr: '',
                    isShow: '',
                    tagIds: ''
                }
            };
            return data;
        },
        watch:{
            '$route'(to,from){
                if(this.$route.query.title!=''&&typeof this.$route.query.title!='undefined'){
                    this.titleLabel.searchTitle=this.$route.query.title,
                    this.titleLabel.isSearch=true
                    this.getallDetailsbyname(this.$route.query.title)
                }
                else{
                    this.getdata();
                    detailApi.getallCountList(this.typeid).then(data => {
                        this.totalCount=data.length;
                    })
                    this.titleLabel.searchTitle='',
                    this.titleLabel.isSearch=false
                }
            }
        },
        methods: {
            tipShow(){
                this.titleLabel.searchTitle='',
                this.titleLabel.isSearch=false
                this.search()
            },
            getdata(){
                var params={
                    type:this.typeid,
                    perpage:this.queryParams.perPage,
                    page:this.$route.query.page
                }
                detailApi.getallDetails(params).then(data => {
                    this.list=data;
                })
            },
            doConfirm(){
                var params={
                    _id:this.dele.id
                }
                detailApi.deleteDetail(params).then(data => {
                    console.log(data)
                    if(data.code==0)
                    {
                        if(this.list.length==1&&this.queryParams.page>1)
                                this.queryParams.page=this.queryParams.page-1
                        this.getallDetailsbyname(this.titleLabel.searchTitle)
                        this.$message.success("删除成功")
                    }
                    else
                        this.$message.success("删除失败")
                })
            },
            del(type,id){
                this.showModal=true
                this.dele.type=type
                this.dele.id=id
            },
            moreDetails(type,id){
                this.$router.push({path:"/detail/typeList",query:{id:id,type:type}})
            },
            pageChange(page) {
                let vm = this
                if(typeof vm.$route.query.title!='undefined'){
                    vm.$router.push({path:"a_details",query:{title:vm.$route.query.title,page:page}})
                }
                else{
                    vm.$router.push({path:"a_details",query:{page:page}})
                }
                this.queryParams.page=page
            },
            search() {
                let vm = this;
                vm.queryParams.page=1
                if(vm.queryParams.queryStr!=''){
                    vm.$router.push({path:"a_details",query:{title:vm.queryParams.queryStr,page:vm.queryParams.page}})
                }
                else
               vm.$router.push({path:"a_details",query:{page:vm.queryParams.page}})
                vm.queryParams.queryStr=''
            },
            getallDetailsbyname(title){
                var params={
                    type:this.typeid,
                    title:title,
                    perpage:this.queryParams.perPage,
                    page:this.queryParams.page
                }
                detailApi.getallDetailsbyname(params).then(data=>{
                    this.list=data
                })
                detailApi.getallDetailsCountbyName(params).then(data=>{
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
