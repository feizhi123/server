<template>
    <div>
        <div>
            <div class="row" v-show="answer.metas.length<1">
                <div class="col-md-2">
                    <!--<textarea class="" style="width: 80%" v-model="content"-->
                    <!--placeholder="请在此处添加回答，而后请按'添加回答'，每条回答可以再编辑，确认无误后可以点'确定'"></textarea>-->
                    <a class="btn btn-sm btn-primary " @click="saveTextData">添加文字</a>
                </div>
                <div class="col-md-2">
                    <file-wrapper class="btn btn-sm btn-primary " @on-file-change="imgChange" ref="fileWrap">
                        <i class="glyphicon glyphicon-picture" title="添加图片">添加图片</i>
                    </file-wrapper>
                </div>

            </div>
            <div v-for="(data,index) in answer.metas" :key="index" class="row">
                <div class="row">
                    <div class="col-md-9">
                        <div v-if="data.type==='TEXT'">
                            <textarea style="width:100%" :rows="rows?rows:3" v-model="data.content"></textarea>
                        </div>
                        <div v-if="data.type==='IMG'">
                            <img class="pic-max-500" :src="data.content" @click="invokeChildImgChange(index)">
                        </div>
                    </div>
                    <div class="col-md-1">
                        <button title="上移" class="btn btn-sm btn-link" :disabled="index===0" @click="moveUp(index)">
                            上移
                        </button>
                    </div>
                    <div class="col-md-1">
                        <button title="下移" class="btn btn-sm btn-link" :disabled="index===answer.metas.length-1"
                                @click="moveDown(index)">
                            下移
                        </button>
                    </div>
                    <div class="col-md-1">
                        <a @click="deleteDataFromList(index)" title="删除" class="btn">
                            <span class="glyphicon glyphicon-remove"></span>
                        </a>
                    </div>
                </div>
                <div class="row  margin-top-20">
                    <div class="dropdown col-md-2">
                        <a class="dropdown-toggle btn btn-sm btn-primary" data-toggle="dropdown">添加文字<span
                                class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li role="presentation">
                                <a role="menuitem" @click="insertMeta(index,'TEXT')">从上添加</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" @click="insertMeta(index+1,'TEXT')">从下添加</a>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown col-md-2 ">
                        <a class="dropdown-toggle btn btn-sm btn-primary" data-toggle="dropdown">添加图片<span
                                class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li role="presentation">
                                <a role="menuitem" @click="insertMeta(index,'IMG')">从上添加</a>
                            </li>
                            <li role="presentation">
                                <a role="menuitem" @click="insertMeta(index+1,'IMG')">从下添加</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="form-horizontal margin-top-20">
                    <div class="form-group">
                        <span class="col-md-2 radio-inline">
                            第三方内容
                        </span>
                        <label class="radio-inline">
                            <input class="radio " type="radio" name="thirdPart" :value=true v-model="answer.showLink">是
                        </label>
                        <label class="radio-inline">
                            <input class="radio " type="radio" name="thirdPart" :value=false v-model="answer.showLink">否
                        </label>

                    </div>
                    <div class="form-group " v-show="answer.showLink?answer.showLink:false">
                        <span class="col-md-4">
                            以上答案内容来自公开信息，原文链接：
                        </span>
                        <input class="col-md-4 " type="text" v-model="answer.link"/>
                    </div>
                </div>
                <hr>
            </div>


        </div>
    </div>
</template>

<script>

    import fileUploader from '@/utils/fileUploader'
    import FileWrapper from '@/components/file-upload-wrapper'
    import util from '@/utils/utils'

    export default {
        components: {
            FileWrapper
        },
        mounted() {
            if (this.answer) {
                if (!this.answer.showLink)
                    this.answer.showLink = false;
                this.$emit('on-get-datalist', this.answer);
                console.log('list grid mounted')
            }
        },

        props: ['metas', 'rows', 'answer'],
        methods: {

            imgChange(file) {
                let vm = this;
                fileUploader.normal(file).then(data => {
                    if (vm.modifyImgIndex >= 0) {

                        console.log(vm.modifyImgIndex)
                        vm.answer.metas[vm.modifyImgIndex].content = data;
                        vm.modifyImgIndex = undefined;
//                    util.getFileSize(file, vm);
                    }
                    else if (vm.insertImgIndex >= 0) {
                        vm._insert(vm.insertImgIndex, {"type": "IMG", "content": data});
                        vm.insertImgIndex = undefined;
                    }
                    else {
                        vm.answer.metas.push({"type": "IMG", "content": data});
                    }
                    this.sendDataToFather();
                }).catch(err => {
                        console.log("catch!!!", err.stack);
                        vm.$message.error("服务出错，请联系管理员");
                    }
                )

            },
            saveTextData() {
                let content = this.content;
//                if (content.trim() === '') {
//                    this.$message.warning("请输入回答内容");
//                    return;
//                }
                this.answer.metas.push({"type": "TEXT", "content": content});
                this.sendDataToFather()
            },
            deleteDataFromList(index) {
                this.answer.metas.splice(index, 1);
                this.sendDataToFather();
            },
            invokeChildImgChange(index) {
                debugger;
                this.modifyImgIndex = index;
                this.$refs.fileWrap.openFinder();
            },
            sendDataToFather() {
                this.$emit("on-data-change", this.answer);
            },

            moveUp(index) {
                this._exchange(index, index - 1);
            },
            moveDown(index) {
                this._exchange(index, index + 1);
            },
            insertMeta(index, type) {
                let vm = this;
                if (type === 'TEXT') {
                    let meta = {"type": "TEXT", "content": ""};
                    vm._insert(index, meta)
                }
                else if (type === 'IMG') {
                    debugger;
                    vm.insertImgIndex = index;
                    vm.$refs.fileWrap.openFinder();
                }
            },
            _insert(index, meta) {
                if (index < 0)
                    index = 0;
                this.answer.metas.splice(index, 0, meta);
            },
            _exchange(index1, index2) {
                //刷新不及时
//                [this.metas[index1], this.metas[index2]] = [this.metas[index2], this.metas[index1]];
//                debugger;
                //如果直接 用 m1=this.metas.slice(index1,index1+1)[0]；
                //           this.metas[index2].content=m1;
                //来结果是非响应式
//                let m1 = this.metas.slice(index1,index1+1)[0].content;
//                let m2 = this.metas.slice(index2,index2+1)[0].content;

                let m1 = this.answer.metas[index1].content;
                let m2 = this.answer.metas[index2].content;
                let type1 = this.answer.metas[index1].type;
                let type2 = this.answer.metas[index2].type;
                this.answer.metas[index2].content = m1;
                this.answer.metas[index1].content = m2;
                this.answer.metas[index2].type = type1;
                this.answer.metas[index1].type = type2;

            }

        },
        data() {
            return {
                /**
                 * initial data from father
                 * eg. answerMetas
                 */
//                list: this.metas,
                content: '',
                image: {
                    width: 0,
                    height: 0
                },
                modifyImgIndex: undefined,
                insertImgIndex: undefined
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .hidden-file-input {
        visibility: hidden;
        position: absolute;
        overflow: hidden;
        width: 0px;
        height: 0px;
        border: none;
        margin: 0px;
        padding: 0px;
    }

    .center-vertical {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .wrap {
        word-break: break-all;
        word-wrap: break-word
    }

    .border-none {
        border: none
    }

    .pic-max-500 {
        max-width: 400px;
        max-height: 400px;
    }


</style>