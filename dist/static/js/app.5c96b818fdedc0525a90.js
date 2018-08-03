webpackJsonp([1],{

/***/ "+BTi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/899":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(axios) {var APP_SIGN_URL = 'cosSign/getAppSign/';

var service = {
  getAppSign: function getAppSign(data) {
    return axios.post(APP_SIGN_URL, data).then(function (response) {
      if (response.data) {
        return response.data;
      } else {}
    }, function (response) {
      return false;
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (service);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("mtWM")))

/***/ }),

/***/ "/9nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__ = __webpack_require__("ELb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_comment__ = __webpack_require__("lVAl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__("oAV5");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: { Confirm: __WEBPACK_IMPORTED_MODULE_2__components_confirm__["a" /* default */], AnswerMetas: __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__["a" /* default */], Comment: __WEBPACK_IMPORTED_MODULE_4__components_comment__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;
        vm.questionId = vm.$route.params.questionId;
        vm.type = vm.$route.params.type;
        console.log(vm.questionId);
        vm.loadData();
        //            vm.getTags();
    },

    props: [],
    data: function data() {
        return {

            SET_COMMENT_HIDE_WORDING: '确定要隐藏这个评论吗？',
            SET_COMMENT_SHOW_WORDING: '确定要取消隐藏这个评论吗？',
            DELETE_COMMENT_WORDING: '确定要删除这个评论吗',

            SET_ANSWER_HIDE_WORDING: '确定要隐藏这个回答吗？',
            SET_ANSWER_SHOW_WORDING: '确定要取消隐藏这个回答吗？',
            DELETE_ANSWER_WORDING: '确定要删除这个回答吗',
            EDIT_ANSWER_WORDING: '确定要编辑这个回答吗',

            SET_ANSWER_TOP_WORDING: '确定要置顶这个回答吗',

            type: '', //answers  comments

            tagMap: {},
            questionId: '',
            q: {},
            answers: {
                list: [{
                    user: {
                        headImgUrl: ''
                    },
                    createdAt: {
                        $date: ''
                    },
                    _id: {
                        $oid: ''
                    },
                    metas: []
                }]
            },
            comments: {
                list: [{
                    user: {
                        headImgUrl: ''
                    },
                    _id: {
                        $oid: ''
                    },
                    createdAt: {
                        $date: ''
                    }
                }]
            },

            answersParams: {
                questionId: '',
                page: 1,
                perPage: 10
            },
            commentsParams: {
                questionId: '',
                page: 1,
                perPage: 10
            },

            lastQueryWithOptions: false,

            tags: {},
            actFn: '',
            confirmId: '',
            confirmWording: '',
            showModal: false,
            isShow: '',
            EditClickedAnswerId: '',
            count: {},

            showEditLikeBase: '',

            tmpLikeBase: 0
        };
    },

    methods: {
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.detail(vm.questionId).then(function (data) {
                vm.q = data;
                vm.getAnswers();
                vm.getComments();
            });
        },

        //actFun 方法名
        baseConfirm: function baseConfirm(id, wording, actFn) {
            this.confirmId = id;
            this.confirmWording = wording;
            this.showModal = true;
            this.actFn = actFn;
        },
        setShowConfirm: function setShowConfirm(id, isShow, wording, actFn) {
            this.isShow = isShow;
            this.baseConfirm(id, wording, actFn);
        },
        doConfirm: function doConfirm() {
            this.actFn();
        },
        back2question: function back2question() {
            var url = JSON.parse(sessionStorage.getItem("questionUrl"));
            if (url) this.$router.push(url);else window.history.go(-1);
        },

        /**
         * COMMENT
         */
        getComments: function getComments() {
            var vm = this;
            vm.commentsParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.comments(vm.commentsParams).then(function (data) {
                vm.comments = data;
            });
        },
        setCommentShow: function setCommentShow() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.setCommentShow(vm.confirmId, vm.isShow).then(function (data) {
                vm.getComments();
                if (vm.isShow) vm.$message.success("取消隐藏成功");else vm.$message.success("隐藏成功");
            });
        },
        deleteComment: function deleteComment() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.deleteComment(vm.confirmId).then(function (data) {
                vm.loadData();
            });
        },
        commentsPageChange: function commentsPageChange(page) {
            this.commentsParams.page = page;
            this.getComments();
        },

        /**
         * ANSWER  //TODO move以后  路由信息会丢失。。然后刷新页面  会回到default的路由
         */
        getAnswers: function getAnswers() {
            var vm = this;
            vm.answersParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.answers(vm.answersParams).then(function (data) {
                debugger;
                vm.answers = data;
                var list = vm.answers.list;

                var _loop = function _loop(i) {
                    __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.commentsOfAnswer({ answerId: list[i]._id.$oid }).then(function (d) {
                        debugger;
                        vm.$set(list[i], 'commentsCount', d.totalCount);
                    });
                };

                for (var i = 0; i < list.length; i++) {
                    _loop(i);
                }
            });
        },
        setAnswerShow: function setAnswerShow() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.setAnswerShow(vm.confirmId, vm.isShow).then(function (data) {
                vm.getAnswers();
                if (vm.isShow) vm.$message.success("取消隐藏成功");else vm.$message.success("隐藏成功");
            });
        },
        deleteAnswer: function deleteAnswer() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.deleteAnswer(vm.confirmId).then(function (data) {
                vm.$message.success("删除成功");
                vm.loadData();
            });
        },
        answerMove: function answerMove(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.answerMove(id, step).then(function (data) {
                vm.loadData();
                //                    vm.$root.reload()
            });
        },
        setAnswerTop: function setAnswerTop() {
            this.answerMove(this.confirmId, 0);
        },
        answersPageChange: function answersPageChange(page) {
            this.answersParams.page = page;
            this.getAnswers();
        },
        editAnswer: function editAnswer(answer) {
            var _this = this;

            var vm = this;
            if (answer.metas.length === 0 || answer.metas.length === 1 && answer.metas[0]['content'].trim().length === 0) {
                vm.$message.success("回答不能为空");
                return;
            }
            if (answer.showLink && (!answer.link || answer.link.trim() === '')) {
                vm.$message.success("第三方链接不能为空");
                return;
            }
            var ans = {
                answerId: answer._id.$oid,
                metas: answer.metas,
                showLink: answer.showLink ? answer.showLink : false,
                link: answer.link ? answer.link : ''
            };
            console.log(ans);
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.editAnswer(ans).then(function (data) {
                vm.$message.success("保存成功");
                _this.EditClickedAnswerId = '';
            });
        },
        toCommentsOfAnswer: function toCommentsOfAnswer(answer) {
            //                window.answerUrl = this.$route.path;
            sessionStorage.setItem("answerUrl", this.$route.path);
            sessionStorage.setItem("answer", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(answer));
            //                window.answer = answer;
            this.$router.push('answers/' + answer._id.$oid + '/comments');
        },
        showEditer: function showEditer(id) {
            if (id) this.EditClickedAnswerId = id;else {
                this.EditClickedAnswerId = '';
                this.loadData();
            }
        },
        toAnswerEditPage: function toAnswerEditPage(user, answerId) {
            localStorage.setItem("returnPath", this.$route.path);
            this.$router.push({ name: 'answerInfo', query: { user: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(user), answerId: answerId } });
        },
        refreshAnswerMetas: function refreshAnswerMetas(data, answer) {
            //                debugger;
            //                answer.metas = data;
            //                answer.metas.content += '123123'
        },
        getCountOfCommentsOfAnswer: function getCountOfCommentsOfAnswer(id) {
            var params = {
                answerId: id
            };
            return __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.commentsOfAnswer(params).then(function (data) {
                return data.totalCount;
            });
            //                console.log(a)
        },
        clickShowEditLikeBase: function clickShowEditLikeBase(id, likeBase) {
            this.showEditLikeBase = id;
            this.tmpLikeBase = likeBase;
        },
        editLikeBase: function editLikeBase(id, likeBase) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.editAnswerLikeBase(id, parseInt(likeBase)).then(function () {
                _this2.showEditLikeBase = "";
                _this2.getAnswers();
            });
        },
        cancelEditLikeBase: function cancelEditLikeBase(answer) {
            //                this.getAnswers();
            answer.likeBase = this.tmpLikeBase;
            this.showEditLikeBase = "";
        },
        copy2clipboard: function copy2clipboard() {
            __WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* default */].copy2clipboard('已复制链接到剪贴板', this);
        }
    },
    computed: {}

});

/***/ }),

/***/ "0FkJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var menus = [{
    name: "问题管理",
    path: "/questionList",
    icon: '~@/static/img/question.png'
}, {
    name: "专题管理",
    path: "/topicList",
    icon: '@/assets/imgs/topic.png'
}, {
    //            name: "话题标签管理",
    //            subMenus: [
    //                {
    //                    name: '话题列表',
    //                    path: "/tagList"
    //                }, {
    //                    name: '新增话题',
    //                    path: '/addTag'
    //                }
    //            ]
    name: "话题标签管理",
    path: "/tagList",
    icon: '@/assets/imgs/tag.png'

}, {
    name: "答主管理",
    subMenus: [{
        name: "答主列表",
        path: "/answerManageList"
    }, {
        name: "答主审核",
        path: "/answerList"
    }],
    icon: '@/assets/imgs/answer.png'

}, {
    name: "图片管理",
    path: "/imageMoreList",
    icon: '@/assets/imgs/img.png'

}, {
    name: "活动管理",
    path: "/activity",
    icon: '@/assets/imgs/activity.png'

}, {
    name: "服务消息管理",
    path: "/messageList",
    icon: '@/assets/imgs/message.png'

}, {
    name: "实名用户(叮当币)",
    path: "/ddUserList",
    icon: '@/assets/imgs/answer.png'

}];
/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        this.$lPage = $("#page-container");
        setTimeout(function () {
            // 这里写jquery代码
            $('[data-toggle="nav-submenu"]').on("click", function (e) {
                // Get link
                var $link = jQuery(this);

                // Get link's parent
                var $parentLi = $link.parent("li");

                if ($parentLi.hasClass("open")) {
                    // If submenu is open, close it..
                    $parentLi.removeClass("open");
                } else {
                    // .. else if submenu is closed, close all other (same level) submenus first before open it
                    $link.closest("ul").find("> li").removeClass("open");

                    $parentLi.addClass("open");
                }

                // Remove focus from submenu link
                if ($("html").hasClass("no-focus")) {
                    $link.blur();
                }

                return false;
            });
        }, 10);
    },

    props: {},
    data: function data() {
        return {
            menus: menus
        };
    },

    methods: {
        close: function close() {
            var $windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.$lPage.removeClass("sidebar-o-xs");
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N"), __webpack_require__("7t+N")))

/***/ }),

/***/ "1G/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"1500px"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-1 fl"},[_c('router-link',{staticClass:"btn btn-sm btn-primary fl dll-add",attrs:{"to":"/questionAdd"}},[_vm._v("新增问题")])],1),_vm._v(" "),_c('div',{staticClass:"col-md-1 fr"},[_c('a',{staticClass:"btn btn-sm btn-primary btn-block dll-search",on:{"click":function($event){_vm.search()}}},[_vm._v("搜索")])]),_vm._v(" "),_c('div',{staticClass:"input-group input-group-sm col-md-3 fr"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-input",attrs:{"placeholder":"输入用户昵称/问题标题/问题描述"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"block-content "},[_c('div',[_c('table',{staticClass:"table table-striped table-vcenter"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"width":"25%"}},[_vm._v("问题标题")]),_vm._v(" "),_c('th',[_vm._v("浏览量")]),_vm._v(" "),_c('th',[_vm._v("实际曝光量")]),_vm._v(" "),_c('th',[_vm._v("回答数量")]),_vm._v(" "),_c('th',[_vm._v("提问用户昵称")]),_vm._v(" "),_c('th',[_c('span',{staticClass:"dropdown"},[_vm._m(1),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},_vm._l((_vm.tags),function(tag,index){return _c('li',{key:tag._id_$oid},[_c('a',{on:{"click":function($event){_vm.refreshListByKV(tag._id.$oid,'tags')}}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.isKeyClicked['tags'][tag._id.$oid.toString()]),expression:"isKeyClicked['tags'][tag._id.$oid.toString()]"}],staticClass:"glyphicon glyphicon-ok"}),_vm._v("\n                                                   "+_vm._s(tag.name)+"\n                                               ")])])}))])]),_vm._v(" "),_c('th',[_vm._v("创建时间")]),_vm._v(" "),_c('th',[_c('span',{staticClass:"dropdown"},[_vm._m(2),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},[_c('li',[_c('a',{staticClass:"btn-link",on:{"click":function($event){_vm.refreshListByKV('true','isShow')}}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isKeyClicked['isShow']['true']),expression:"isKeyClicked['isShow']['true']"}],staticClass:"glyphicon glyphicon-ok"}),_vm._v("\n                                                   是\n                                               ")])]),_vm._v(" "),_c('li',[_c('a',{staticClass:"btn-link ",on:{"click":function($event){_vm.refreshListByKV('false','isShow')}}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isKeyClicked['isShow']['false']),expression:"isKeyClicked['isShow']['false']"}],staticClass:"glyphicon glyphicon-ok"}),_vm._v("\n                                                   否\n                                               ")])])])])]),_vm._v(" "),_c('th',[_vm._v("排序")]),_vm._v(" "),_c('th',[_vm._v("操作")])])]),_vm._v(" "),(_vm.totalCount>0)?_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',[_vm._v(_vm._s(a.title))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.visitCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.exposeCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.answerCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.user.nickname))]),_vm._v(" "),_c('td',_vm._l((a.tags),function(tag,tindex){return _c('span',{key:tag._id.$oid},[_vm._v("\n                                "+_vm._s(tag.name)+"\n                            ")])})),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("date")(a.createdAt.$date)))]),_vm._v(" "),_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(a.isShow),expression:"a.isShow"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(a, "isShow", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){_vm.showChange(index)}]}},[_c('option',{domProps:{"value":false}},[_vm._v("否")]),_vm._v(" "),_c('option',{domProps:{"value":true}},[_vm._v("是")])])]),_vm._v(" "),_c('td',[(!a.isShow)?_c('div',{staticClass:"btn-group"},[_vm._v("-")]):_c('div',{staticClass:"btn-group"},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(!_vm.lastQueryWithOptions && !(_vm.queryParams.page==1 && index == 0)),expression:"!lastQueryWithOptions && !(queryParams.page==1 && index == 0)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","title":"上移"},on:{"click":function($event){_vm.move(a._id.$oid,-1)}}},[_c('i',{staticClass:"fa fa-long-arrow-up"})]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!_vm.lastQueryWithOptions && !(_vm.queryParams.page==Math.ceil(_vm.totalCount/_vm.queryParams.perPage) && index == _vm.list.length-1)),expression:"!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","title":"下移"},on:{"click":function($event){_vm.move(a._id.$oid,1)}}},[_c('i',{staticClass:"fa fa-long-arrow-down"})]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.queryParams.page==1 && a.seq == 0)),expression:"!(queryParams.page==1 && a.seq == 0)"}],staticClass:"btn btn-xs btn-default",on:{"click":function($event){_vm.setTopConfirm(a._id.$oid,0-a.seq)}}},[_vm._v("置顶\n                                    ")])])]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",attrs:{"type":"button","data-toggle":"tooltip"},on:{"click":function($event){_vm.removeConfirm(index)}}},[_vm._v("删除\n                                ")]),_vm._v(" "),(a.isRecommended)?_c('button',{staticClass:" btn btn-xs btn-link",attrs:{"disabled":!a.isShow},on:{"click":function($event){_vm.setRecommend(a._id.$oid,false)}}},[_c('span',{staticClass:"glyphicon glyphicon-bookmark"}),_vm._v("\n                                    已首页展示\n                                ")]):_c('button',{staticClass:"btn btn-xs btn-link ",attrs:{"disabled":!a.isShow},on:{"click":function($event){_vm.setRecommend(a._id.$oid,true)}}},[_vm._v("首页展示\n                                ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.detail(a._id.$oid)}}},[_vm._v("编辑")]),_vm._v(" "),_c('a',{staticClass:"btn btn-xs ",attrs:{"data-clipboard-text":a.wxappUrl},on:{"click":_vm.copy2clipboard}},[_vm._v("复制链接")])])])})):_vm._e()]),_vm._v(" "),(_vm.totalCount===0)?_c('h5',{staticClass:"text-center red-font"},[_vm._v("暂时没有你查找的内容")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"block-content"})]),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],1)])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":_vm.wording,"show":_vm.showModal},on:{"confirm":_vm.doConfirm,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    问题列表\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle link",attrs:{"data-toggle":"dropdown"}},[_vm._v("\n                                        话题标签"),_c('span',{staticClass:"caret"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle link",attrs:{"data-toggle":"dropdown"}},[_vm._v("\n                                        展示"),_c('span',{staticClass:"caret"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "1roY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1y/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('router-link',{staticClass:"btn btn-sm btn-primary fl dll-add",attrs:{"to":"/addTopic"}},[_vm._v("新增专题")]),_vm._v(" "),_c('div',{staticClass:"col-md-1 fr"},[_c('button',{staticClass:"btn  btn-sm btn-primary dll-search",on:{"click":function($event){_vm.search()}}},[_vm._v("搜索")])]),_vm._v(" "),_c('div',{staticClass:"input-group input-group-sm col-md-3 fr dll-queryStr"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control",attrs:{"placeholder":"输入专题标题/专题描述"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})])],1)])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',[_c('img',{staticClass:"pic",attrs:{"src":a.bannerUrl,"alt":""}})]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.title))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.visitCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.exposeCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.approvedCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("date")(a.createdAt.$date)))]),_vm._v(" "),_c('td',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(a.isShow),expression:"a.isShow"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(a, "isShow", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){_vm.showChange(index)}]}},[_c('option',{domProps:{"value":false}},[_vm._v("否")]),_vm._v(" "),_c('option',{domProps:{"value":true}},[_vm._v("是")])])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"btn-group"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.lastQueryWithOptions && !(_vm.queryParams.page==1 && index == 0)),expression:"!lastQueryWithOptions && !(queryParams.page==1 && index == 0)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","data-toggle":"tooltip","title":"上移"},on:{"click":function($event){_vm.move(a._id.$oid,-1)}}},[_c('i',{staticClass:"fa fa-long-arrow-up"})]),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.lastQueryWithOptions && !(_vm.queryParams.page==Math.ceil(_vm.totalCount/_vm.queryParams.perPage) && index == _vm.list.length-1)),expression:"!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","data-toggle":"tooltip","title":"下移"},on:{"click":function($event){_vm.move(a._id.$oid,1)}}},[_c('i',{staticClass:"fa fa-long-arrow-down"})])])]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",attrs:{"type":"button","data-toggle":"tooltip"},on:{"click":function($event){_vm.removeConfirm(index)}}},[_vm._v("删除\n                                ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.edit(a._id.$oid)}}},[_vm._v("编辑\n                                ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-xs ",attrs:{"data-clipboard-text":a.wxappUrl},on:{"click":_vm.copy2clipboard}},[_vm._v("复制链接")])])])}))])]),_vm._v(" "),(_vm.totalCount===0)?_c('h5',{staticClass:"text-center red-font"},[_vm._v("暂时没有你查找的专题")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"block-content"}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],1)])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":"确定要删除专题吗？","show":_vm.showModal},on:{"confirm":_vm.remove,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    专题列表\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("专题图片")]),_vm._v(" "),_c('th',[_vm._v("专题标题")]),_vm._v(" "),_c('th',[_vm._v("浏览量")]),_vm._v(" "),_c('th',[_vm._v("实际曝光量")]),_vm._v(" "),_c('th',[_vm._v("已添加问题")]),_vm._v(" "),_c('th',[_vm._v("创建时间")]),_vm._v(" "),_c('th',[_vm._v("展示")]),_vm._v(" "),_c('th',[_vm._v("排序")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "26Gu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('file-wrapper',{ref:"file",on:{"on-file-change":_vm.imgChange}})],1),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_c('img',{staticClass:"pic",attrs:{"src":_vm.topicMore,"id":"topicMore"},on:{"load":function($event){_vm.getImageSize('topicMore',_vm.topicImage)}}})]),_vm._v(" "),_c('td',[_vm._v("热门专题-更多")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.topicImage.width)+"X"+_vm._s(_vm.topicImage.height))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.upload('topicMore')}}},[_vm._v("上传\n                                ")])])]),_vm._v(" "),_c('tr',[_c('td',[_c('img',{staticClass:"pic",attrs:{"src":_vm.tagMore,"id":"tagMore"},on:{"load":function($event){_vm.getImageSize('tagMore',_vm.tagImage)}}})]),_vm._v(" "),_c('td',[_vm._v("话题标签-更多")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.tagImage.width)+"X"+_vm._s(_vm.tagImage.height))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.upload('tagMore')}}},[_vm._v("上传\n                                ")])])])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    图片管理\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("图片")]),_vm._v(" "),_c('th',[_vm._v("位置")]),_vm._v(" "),_c('th',[_vm._v("尺寸")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2Tzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("HfD5");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d8956a1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("ncuJ");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d8956a1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "3AVo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("pgX7");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a1631832_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("biRm");
function injectStyle (ssrContext) {
  __webpack_require__("mh6m")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a1631832"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a1631832_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4GbN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerinfo_vue__ = __webpack_require__("L/My");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b6908e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerinfo_vue__ = __webpack_require__("q5xV");
function injectStyle (ssrContext) {
  __webpack_require__("LPOo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerinfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b6908e6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerinfo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "5Q15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activity_vue__ = __webpack_require__("w68N");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20dd7f04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activity_vue__ = __webpack_require__("bvjg");
function injectStyle (ssrContext) {
  __webpack_require__("GuPP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_activity_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20dd7f04_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_activity_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "6Jx2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6RkX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("a+xo");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_824e03c8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("dYAs");
function injectStyle (ssrContext) {
  __webpack_require__("qVPN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-824e03c8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_824e03c8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "7uHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sideNav__ = __webpack_require__("vKlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__("Cz8s");
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    SideNav: __WEBPACK_IMPORTED_MODULE_0__components_sideNav__["a" /* default */],
    NavHeader: __WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */]
  }
});

/***/ }),

/***/ "8Zp2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9L7j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("qeIj");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fcf054_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("h9po");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fcf054_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9eTU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"block-content "},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row col-md-8"},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-8"},[_c('img',{staticClass:"img-avatar",attrs:{"src":_vm.answer.user.headImgUrl}}),_vm._v(" "),_c('label',[_vm._v(_vm._s(_vm.answer.user.nickname))])])]),_vm._v(" "),_vm._l((_vm.answer.metas),function(meta,index){return _c('div',{key:index,staticClass:"container-fluid"},[_c('div',[(meta.type==='TEXT')?_c('p',{staticClass:"col-md-10 pre-wrap"},[_vm._v(_vm._s(meta.content))]):_vm._e(),_vm._v(" "),(meta.type==='IMG')?_c('img',{staticClass:"pic-max-400",attrs:{"src":meta.content}}):_vm._e()])])}),_vm._v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{},[_c('span',[_vm._v("评论("+_vm._s(_vm.comments.totalCount)+") ")])]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm._f("date")(_vm.answer.createdAt.$date)))])])])],2)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"container-fluid list-item"},[_c('comment',{attrs:{"type":"answer","id":_vm.answer._id.$oid},on:{"success":_vm.getComments}})],1),_vm._v(" "),_vm._l((_vm.comments.list),function(comment,index){return _c('div',{key:comment._id.$oid},[_c('br'),_vm._v(" "),_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-xs-8 col-sm-8 col-md-8"},[_c('img',{staticClass:"img-avatar",attrs:{"src":comment.user.headImgUrl}}),_vm._v(" "),_c('label',{},[_vm._v(_vm._s(comment.user.nickname))])]),_vm._v(" "),_c('div',{staticClass:"col-xs-4 col-sm-4 col-md-4 fr"},[_c('span',{staticClass:"dropdown"},[_vm._m(1,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},[_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(comment.isShow),expression:"comment.isShow"}],on:{"click":function($event){_vm.setShowConfirm(comment._id.$oid,false,_vm.SET_COMMENT_HIDE_WORDING,_vm.setCommentShow)}}},[_vm._v("隐藏评论")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!comment.isShow),expression:"!comment.isShow"}],on:{"click":function($event){_vm.setShowConfirm(comment._id.$oid,true,_vm.SET_COMMENT_SHOW_WORDING,_vm.setCommentShow)}}},[_vm._v("取消隐藏")])]),_vm._v(" "),_c('li',[_c('a',{on:{"click":function($event){_vm.baseConfirm(comment._id.$oid,_vm.DELETE_COMMENT_WORDING,_vm.deleteComment)}}},[_vm._v("删除评论")])])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-10"},[_vm._v(_vm._s(comment.content))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm._f("date")(comment.createdAt.$date)))])])])])}),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.comments.totalCount),expression:"comments.totalCount"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.commentsParams.page,"page-size":_vm.commentsParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.comments.totalCount},on:{"current-change":_vm.commentsPageChange,"update:currentPage":function($event){_vm.$set(_vm.commentsParams, "page", $event)}}})],2)]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":_vm.confirmWording,"show":_vm.showModal},on:{"confirm":_vm.doConfirm,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)])])]),_vm._v(" "),_c('div',{staticClass:"back"},[_c('a',{staticClass:"btn btn-sm  btn-link",on:{"click":_vm.back2answer}},[_c('span',{staticClass:"glyphicon glyphicon-chevron-left"}),_vm._v("返回回答\n            ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    查看回答评论\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle ",attrs:{"data-toggle":"dropdown"}},[_c('label',{staticClass:"font-s24"},[_vm._v("...")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "A7T4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_answer__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        var vm = this;
        vm.loadData();
    },

    props: {},
    data: function data() {
        //            let page;
        //            try {
        //                let p = sessionStorage.getItem("answerManageParams");
        //                if (p) {
        //                    page = JSON.parse(p).page;
        //                }
        //            } catch (e) {
        //            }
        return {
            list: [],
            showModal: false,
            totalCount: 0,
            removeIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: ''
            }
        };
    },

    methods: {
        loadData: function loadData() {
            var vm = this;
            if (window.answerManageParams) {
                vm.queryParams.page = window.answerManageParams.page;
                vm.queryParams.perPage = window.answerManageParams.perPage;
                vm.queryParams.queryStr = window.answerManageParams.queryStr;
            }
            var p = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            __WEBPACK_IMPORTED_MODULE_1__services_answer___default.a.answerList(p).then(function (data) {
                vm.list = data.list;
                vm.totalCount = data.totalCount;
                if (window.answerManageParams) vm.queryParams.page = window.answerManageParams.page;
                window.answerManageParams = null;
            });
        },
        pageChange: function pageChange(page) {
            debugger;
            this.queryParams.page = page;
            this.loadData();
        },
        search: function search() {
            var vm = this;
            vm.queryParams.page = 1;
            vm.loadData();
        },
        edit: function edit(id) {
            var vm = this;
            window.answerManageParams = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            //                try {
            //                    sessionStorage.setItem('answerManageParams', JSON.stringify(vm.queryParams));
            //                } catch (e) {
            //
            //                }
            vm.$router.push('/answerEdit/' + id);
        }
    },
    computed: {}
});

/***/ }),

/***/ "A8gK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_msg_template__ = __webpack_require__("q2vl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message__ = __webpack_require__("mdtg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_message__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { MsgTemplate: __WEBPACK_IMPORTED_MODULE_1__components_msg_template__["a" /* default */] },
    mounted: function mounted() {
        this.tempList();
        this.msgList();
    },
    data: function data() {
        return {
            templateParams: {
                page: 1,
                perPage: 20
            },
            template: [],
            messageParams: {
                page: 1,
                perPage: 10

            },
            message: {},
            removeIndex: '',
            previewIndex: '',
            previewMessage: {
                title: '',
                keys: []
            }
        };
    },

    methods: {
        tempList: function tempList() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_message___default.a.tempList(vm.templateParams).then(function (data) {
                vm.template = data;
            });
        },
        msgList: function msgList() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_message___default.a.msgList(vm.messageParams).then(function (data) {
                vm.message = data;
            });
        },
        messagePageChange: function messagePageChange(page) {
            this.messageParams.page = page;
            this.msgList();
        },
        tempPageChange: function tempPageChange(page) {
            this.templateParams.page = page;
            this.tempList();
        },
        removeConfirm: function removeConfirm(index) {
            this.removeIndex = index;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_message___default.a.deleteTemp(this.list[this.removeIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功!');
                vm.loadData();
            });
        },
        newMessage: function newMessage(template) {
            this.$router.push({ name: 'newMessage', query: { template: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(template) } });
        },
        resend: function resend(m) {
            var params = {};
            params.template_id = m.templateId;
            params.keys = m.data;
            params.title = m.templateTitle;
            params.page = m.page;
            this.$router.push({ name: 'newMessage', query: { template: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(params) } });
        },
        preview: function preview(index) {
            this.previewMessage.title = this.message[index].templateTitle;
            this.previewMessage.keys = this.message[index].data;
            $(this.$refs.modal).modal('show');
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "B0V9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("C0eU");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6cc0abc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("e/i/");
function injectStyle (ssrContext) {
  __webpack_require__("1roY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6cc0abc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "B2C2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BCDO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("JNkg");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e8dacbc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("a5fg");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e8dacbc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "C++z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "C0eU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sideNav__ = __webpack_require__("vKlO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__("Cz8s");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weixin__ = __webpack_require__("zlMP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_weixin__);
//
//
//
//
//
//
//





var getQueryStrings = function getQueryStrings() {
  var query_string = {};
  var query = window.location.href.split("?")[1];
  if (query) {
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
  }
  return query_string;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    SideNav: __WEBPACK_IMPORTED_MODULE_0__components_sideNav__["a" /* default */],
    NavHeader: __WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */]
  },
  mounted: function mounted() {
    var params = getQueryStrings();
    this.code = params.code;
    this.state = params.state;
    __WEBPACK_IMPORTED_MODULE_2__services_weixin___default.a.getSignature().then(function (data) {
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
      });
      wx.ready(function () {
        console.log('wx ready');
        var baseUrl = 'http://logic.dingnuo.ai/get-weixin-code.html?appid=wx493ee39e4edc9ddd&scope=snsapi_userinfo&redirect_uri=';
        wx.onMenuShareTimeline({
          title: '', // 分享标题
          link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '' // 分享图标
        });
        wx.onMenuShareAppMessage({
          title: '测试标题', // 分享标题
          desc: '测试描述', // 分享描述
          link: baseUrl + encodeURIComponent(location.origin + location.pathname), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '' // 分享图标
        });
      });
    });
  },
  data: function data() {
    return {
      code: '',
      state: ''
    };
  }
});

/***/ }),

/***/ "Cz8s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("wqBJ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_95440eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("hWB+");
function injectStyle (ssrContext) {
  __webpack_require__("B2C2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-95440eea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_95440eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "D1Ph":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("A8gK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b91e7a0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("zyzY");
function injectStyle (ssrContext) {
  __webpack_require__("jezg")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8b91e7a0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "D1X9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DWeW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_imageMore__ = __webpack_require__("xIye");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_imageMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_imageMore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__["a" /* default */]
    },
    mounted: function mounted() {
        this.getPictures();
    },
    data: function data() {
        return {
            tagMore: '',
            topicMore: '',

            type: '',
            imgUrl: '',

            imageUrl: '',
            image: {
                width: 0,
                height: 0
            },

            tagImage: {
                width: 0,
                height: 0
            },
            topicImage: {
                width: 0,
                height: 0
            }
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.imageUrl = data;
                __WEBPACK_IMPORTED_MODULE_0__services_imageMore___default.a.editPicture(vm.type, vm.imageUrl);
                //                    let reader = new FileReader();
                //                    reader.onload = function (e) {
                //                        let data = e.target.result;
                //                        let image = new Image();
                //                        image.onload = function () {
                //                            vm.image.width = image.naturalWidth;
                //                            vm.image.height = image.naturalHeight;
                //                            console.log(image.width, image.height)
                //                        };
                //                        image.src = data;
                //                    };
                //                    reader.readAsDataURL(file);
                vm.refreshData();
            });
        },
        getPictures: function getPictures() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_imageMore___default.a.getPictures().then(function (data) {
                vm.tagMore = data.tagMore;
                vm.topicMore = data.topicMore;
            });
        },
        refreshData: function refreshData() {
            var vm = this;
            var imgType = void 0;
            if (vm.type === 'tagMore') {
                vm.tagMore = vm.imageUrl;
                imgType = vm.tagImage;
            } else if (vm.type === 'topicMore') {
                vm.topicMore = vm.imageUrl;
                imgType = vm.topicImage;
            }
            //                vm.getImageSize(vm.type, imgType);
        },
        getImageSize: function getImageSize(type, imgType) {
            var screenImage = $("#" + type);
            // Create new offscreen image to test
            var theImage = new Image();
            theImage.src = screenImage.attr("src");
            // Get accurate measurements from that.
            imgType.width = theImage.naturalWidth;
            imgType.height = theImage.naturalHeight;
        },
        upload: function upload(type) {
            var vm = this;
            vm.type = type;
            vm.$refs.file.openFinder();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "DZwR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EJ8m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        var vm = this;
        vm.recentAnswer();
        $(this.$refs.modal).on('hidden.bs.modal', function () {
            vm.$emit('hide');
        });
        $(this.$refs.modal).on('shown.bs.modal', function () {
            vm.$emit('show');
        });
    },
    data: function data() {
        return {
            recentList: [],
            list: [],
            queryParams: {
                page: 1,
                perPage: 4,
                queryStr: ''
            },
            totalCount: 0,
            wording: '未搜到该用户',
            searched: false
        };
    },

    props: {
        title: "",
        content: "",
        show: false
    },
    methods: {
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.answerList(vm.queryParams).then(function (data) {
                vm.list = data.list;
                vm.totalCount = data.totalCount;
            });
        },
        choose: function choose(user) {
            this.$emit('on-choose', user);
            $(this.$refs.modal).modal('hide');
        },
        pageChange: function pageChange(page) {
            this.queryParams.page = page;
            this.loadData();
        },
        search: function search() {
            var vm = this;
            vm.searched = true;
            vm.queryParams.page = 1;
            vm.loadData();
        },
        recentAnswer: function recentAnswer() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.recentAnswerers().then(function (data) {
                vm.recentList = data;
            });
        }
    },
    watch: {
        show: function show(newVal, oldVal) {
            if (newVal) {
                $(this.$refs.modal).modal('show');
            } else {
                $(this.$refs.modal).modal({ show: false });
            }
        }
    }

});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "ELb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_vue__ = __webpack_require__("iOgM");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c3b89ada_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_vue__ = __webpack_require__("Jy43");
function injectStyle (ssrContext) {
  __webpack_require__("c8fi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c3b89ada"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c3b89ada_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ESH7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-1 fl"},[_c('router-link',{staticClass:"btn btn-sm btn-primary dll-add",attrs:{"to":"/answerAdd"}},[_vm._v("新增答主\n                        ")])],1),_vm._v(" "),_c('div',{staticClass:"col-md-1 fr"},[_c('a',{staticClass:"btn btn-sm btn-primary dll-search",on:{"click":function($event){_vm.search()}}},[_vm._v("搜索")])]),_vm._v(" "),_c('div',{staticClass:"input-group input-group-sm col-md-3 fr"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-query",attrs:{"placeholder":"输入用户昵称"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',[_c('img',{staticClass:"img-avatar",attrs:{"src":a.headImgUrl,"alt":""}})]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.nickname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.answerCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.likeCount))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.edit(a._id.$oid)}}},[_vm._v("编辑\n                                ")])])])}))]),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalCount>0),expression:"totalCount>0"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],1)]),_vm._v(" "),(_vm.list.length===0)?_c('h5',{staticClass:"text-center red-font"},[_vm._v("暂时没有你查找的用户")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"block-content"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    答主列表\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("用户头像")]),_vm._v(" "),_c('th',[_vm._v("用户昵称")]),_vm._v(" "),_c('th',[_vm._v("回答数量")]),_vm._v(" "),_c('th',[_vm._v("获赞数量")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "F5ez":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FhpN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newMessage_vue__ = __webpack_require__("dxUk");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6b68e98_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newMessage_vue__ = __webpack_require__("R+vj");
function injectStyle (ssrContext) {
  __webpack_require__("D1X9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newMessage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b6b68e98_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_newMessage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "GVU2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-l sidebar-o side-scroll header-navbar-fixed",attrs:{"id":"page-container"}},[_c('side-nav'),_vm._v(" "),_c('nav-header'),_vm._v(" "),_c('router-view',{attrs:{"id":"main-container"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GWdk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ddUser__ = __webpack_require__("Nlwj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ddUser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_ddUser__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_1__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        this.loadData();
    },

    props: {},
    data: function data() {

        return {
            list: [],
            showModal: false,
            totalCount: 1,
            removeIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: ''
            }
        };
    },

    methods: {
        pageChange: function pageChange(page) {
            this.queryParams.page = page;
            this.loadData();
        },
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_ddUser___default.a.list(vm.queryParams).then(function (data) {
                vm.list = data.list;
                vm.totalCount = data.totalCount;
                if (vm.queryParams.queryStr) {
                    vm.lastQueryWithOptions = true;
                } else {
                    vm.lastQueryWithOptions = false;
                }
            });
        },
        search: function search() {
            var vm = this;
            vm.queryParams.page = 1;
            vm.loadData();
        },
        move: function move(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_ddUser___default.a.move(id, step).then(function (data) {
                vm.loadData();
            });
        },
        removeConfirm: function removeConfirm(index) {
            this.removeIndex = index;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_ddUser___default.a.remove(this.list[this.removeIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功!');
                vm.loadData();
            });
        },
        showChange: function showChange(index) {
            __WEBPACK_IMPORTED_MODULE_2__services_ddUser___default.a.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(function (data) {});
        },
        edit: function edit(id) {
            debugger;
            var vm = this;
            window.topicParams = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            vm.$router.push('/editTopic/' + id);
        },
        detail: function detail(id) {
            var vm = this;
            window.topicParams = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            vm.$router.push('/topicDetail/' + id);
        }
    },
    computed: {}
});

/***/ }),

/***/ "GX9t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

(function (root, factory) {
    if (typeof define === 'function') {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.STATUS = factory();
    }
})(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    var status = {
        AGENCY_STATUS: {
            AUDITING: 100,
            REJECTED: 200,
            APPROVED: 300,
            PAID: 400,
            STOPPED: 500
        },
        DEPOSIT_ORDER_STATUS: {
            WAIT_PAY: 100,
            PAID: 200
        },
        TRAINEE_STATUS: {
            NOT_ENTER: 100,
            ENTER: 200,
            INVALID: 300
        },
        WITHDRAW_STATUS: {
            WAIT_APPROVE: 100,
            APPROVED: 200,
            REJECT: 300
        },
        MATERIAL_POST_STATUS: {
            WAIT_POST: 100,
            POSTED: 200
        },
        APPLY_STATUS: {
            NOT_APPLY: 100,
            AUDITING: 200,
            APPROVED: 300,
            FAILED: 400
        }
    };

    return status;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("f1Eh")(module)))

/***/ }),

/***/ "Gt4P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(axios) {var uploadUrl = '/image/upload/';
var compressUpload = '/image/compressUpload/';

/* harmony default export */ __webpack_exports__["a"] = ({
    normal: function normal(file) {
        var formData = new FormData();
        formData.append('file', file);
        return axios.post(uploadUrl, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(function (resp) {
            console.log("file resp", resp);
            return resp.data.data;
        });
    },
    compress: function compress(file) {
        var formData = new FormData();
        formData.append('file', file);
        return axios.post(compressUpload, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(function (resp) {
            console.log("file resp", resp);
            return resp.data.data;
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("mtWM")))

/***/ }),

/***/ "GtE/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GuPP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HZji":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HfD5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        var vm = this;
        vm.loadData();
    },

    props: {},
    data: function data() {
        return {
            list: [],
            showModal: false,
            totalCount: 0,
            removeIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: ''
            }
        };
    },

    methods: {
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.list(vm.queryParams).then(function (data) {
                vm.list = data;
            });
        }
    },
    computed: {}
});

/***/ }),

/***/ "Hvzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("eCL/");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_372124cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("1y/9");
function injectStyle (ssrContext) {
  __webpack_require__("kOsN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-372124cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_372124cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "JNkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: { FileWrap: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */], fileUploader: __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;
        vm.loadData();
    },

    props: {},
    data: function data() {
        return {
            p: {
                userId: '',
                nickname: '',
                headImgUrl: '',
                desc: ''
            },
            auditingParams: {
                approve: '',
                rejectReason: '',
                answerId: ''
            },
            wording: '',
            showWording: false
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.p.headImgUrl = data;
            }).catch(function (err) {
                console.log("catch!!!", err.stack);
            });
        },
        save: function save() {
            var vm = this;
            if (vm.check()) {

                __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.edit(vm.p).then(function (data) {
                    vm.$message.success("保存成功");
                    //                        vm.loadData();
                    vm.$router.push('/answerManageList');
                });
                vm.showWording = false;
            }
        },
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.detail(vm.$route.params.answerId).then(function (data) {
                vm.p = data;
                vm.p.userId = vm.$route.params.answerId;
            });
        },
        check: function check() {
            var vm = this;
            var p = vm.p;
            if (p.nickname.trim() === '' || p.nickname.length < 2 || p.nickname.length > 20) {
                vm.showWording = true;
                vm.wording = '请输入正确的昵称';
                return false;
            }
            if (p.headImgUrl === '') {
                vm.showWording = true;
                vm.wording = '请上传答主头像';
                return false;
            }
            if (p.desc.length > 30) {
                vm.showWording = true;
                vm.wording = '请输入正确的自我描述';
                return false;
            }
            return true;
        }
    }
});

/***/ }),

/***/ "Jw4U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jxy6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('file-wrapper',{ref:"fileWrap",on:{"on-file-change":_vm.imgChange}}),_vm._v(" "),_c('div',{staticClass:"col-xs-9 col-sm-9 col-md-9 col-lg-9",attrs:{"id":"rootDiv"}},[_vm._l((_vm.answer.metas),function(data,index){return _c('div',{key:index,staticClass:"row",attrs:{"draggable":"true","id":'div'+index},on:{"dragstart":_vm.onDrag,"dragenter":_vm.onDragenter,"dragleave":_vm.onDragleave,"dragend":_vm.onDragend,"mouseover":function($event){_vm.mouseover(index)},"mouseout":function($event){_vm.mouseout(index)},"click":function($event){_vm.select(index)}}},[_c('div',{staticClass:"row",attrs:{"draggable":"false"}},[_c('div',{class:(_vm.selectedIndex===index?' chosen ':(_vm.mouseOverIndex===index?' border-black ':' border-white')),attrs:{"draggable":"false"}},[(data.type==='TEXT')?_c('div',{staticClass:"padding10 ",attrs:{"draggable":"false"},on:{"dblclick":function($event){_vm.showEdit(index)}}},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.showEditIndex!==index),expression:"showEditIndex!==index"}],class:'p'+index+' padding10 ',staticStyle:{"word-wrap":"break-word","word-break":"normal"},attrs:{"draggable":"false"}},[_vm._v(_vm._s(data.content))]),_vm._v(" "),_c('textarea',{directives:[{name:"show",rawName:"v-show",value:(_vm.showEditIndex===index),expression:"showEditIndex===index"},{name:"model",rawName:"v-model",value:(data.content),expression:"data.content"}],class:'textarea'+index +' border-none ',staticStyle:{"width":"100%"},attrs:{"draggable":"false","rows":"3"},domProps:{"value":(data.content)},on:{"click":function($event){},"input":function($event){if($event.target.composing){ return; }_vm.$set(data, "content", $event.target.value)}}})]):_vm._e(),_vm._v(" "),(data.type==='IMG')?_c('div',{staticClass:"padding10",attrs:{"id":index,"draggable":"false"}},[_c('img',{staticClass:"  pic-max",attrs:{"src":data.content,"draggable":"false"}})]):_vm._e()]),_vm._v(" "),_c('div',{class:'fr '+(_vm.mouseOverIndex===index?'active':'deactive')},[(data.type==='TEXT')?_c('a',{staticClass:"glyphicon glyphicon-edit font20",on:{"click":function($event){_vm.showEdit(index)}}}):_vm._e(),_vm._v(" "),_c('a',{staticClass:"glyphicon glyphicon-trash font20",on:{"click":function($event){_vm.deleteDataFromList(index)}}})])]),_vm._v(" "),_c('br')])}),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"form-horizontal "},[_c('div',{staticClass:"form-group"},[_c('span',{staticClass:"col-md-2 radio-inline"},[_vm._v("\n                        第三方内容\n                    ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.showLink),expression:"answer.showLink"}],staticClass:"radio ",attrs:{"type":"radio","name":"thirdPart"},domProps:{"value":true,"checked":_vm._q(_vm.answer.showLink,true)},on:{"change":function($event){_vm.$set(_vm.answer, "showLink", true)}}}),_vm._v("是\n                        ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.showLink),expression:"answer.showLink"}],staticClass:"radio ",attrs:{"type":"radio","name":"thirdPart"},domProps:{"value":false,"checked":_vm._q(_vm.answer.showLink,false)},on:{"change":function($event){_vm.$set(_vm.answer, "showLink", false)}}}),_vm._v("否\n                        ")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.answer.showLink?_vm.answer.showLink:false),expression:"answer.showLink?answer.showLink:false"}],staticClass:"form-group "},[_c('span',{staticClass:"col-md-2"},[_vm._v("\n                         以上答案内容来自公开信息，原文链接：\n                         ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.link),expression:"answer.link"}],staticClass:"col-md-4 ",attrs:{"type":"text"},domProps:{"value":(_vm.answer.link)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.answer, "link", $event.target.value)}}})])])])],2),_vm._v(" "),_c('div',{staticClass:"col-xs-1 col-sm-1 col-md-1 col-lg-1"}),_vm._v(" "),_c('div',{staticClass:"col-xs-2 col-sm-2 col-md-2 col-lg-2"},[_c('div',{staticClass:"menu"},[_c('div',[_c('span',{staticClass:"btn border glyphicon glyphicon-file",on:{"click":function($event){_vm.insertMeta('TEXT')}}},[_vm._v("插入文本")])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"btn border glyphicon glyphicon-picture",on:{"click":function($event){_vm.insertMeta('IMG')}}},[_vm._v("插入图片")])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"btn border glyphicon glyphicon-eye-close",on:{"click":_vm.init}},[_vm._v("取消选中")])])])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Jy43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.answer.metas.length<1),expression:"answer.metas.length<1"}],staticClass:"row"},[_c('div',{staticClass:"col-md-2"},[_c('a',{staticClass:"btn btn-sm btn-primary ",on:{"click":_vm.saveTextData}},[_vm._v("添加文字")])]),_vm._v(" "),_c('div',{staticClass:"col-md-2"},[_c('file-wrapper',{ref:"fileWrap",staticClass:"btn btn-sm btn-primary ",on:{"on-file-change":_vm.imgChange}},[_c('i',{staticClass:"glyphicon glyphicon-picture",attrs:{"title":"添加图片"}},[_vm._v("添加图片")])])],1)]),_vm._v(" "),_vm._l((_vm.answer.metas),function(data,index){return _c('div',{key:index,staticClass:"row"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-9"},[(data.type==='TEXT')?_c('div',[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(data.content),expression:"data.content"}],staticStyle:{"width":"100%"},attrs:{"rows":_vm.rows?_vm.rows:3},domProps:{"value":(data.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(data, "content", $event.target.value)}}})]):_vm._e(),_vm._v(" "),(data.type==='IMG')?_c('div',[_c('img',{staticClass:"pic-max-500",attrs:{"src":data.content},on:{"click":function($event){_vm.invokeChildImgChange(index)}}})]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-md-1"},[_c('button',{staticClass:"btn btn-sm btn-link",attrs:{"title":"上移","disabled":index===0},on:{"click":function($event){_vm.moveUp(index)}}},[_vm._v("\n                        上移\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-md-1"},[_c('button',{staticClass:"btn btn-sm btn-link",attrs:{"title":"下移","disabled":index===_vm.answer.metas.length-1},on:{"click":function($event){_vm.moveDown(index)}}},[_vm._v("\n                        下移\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-md-1"},[_c('a',{staticClass:"btn",attrs:{"title":"删除"},on:{"click":function($event){_vm.deleteDataFromList(index)}}},[_c('span',{staticClass:"glyphicon glyphicon-remove"})])])]),_vm._v(" "),_c('div',{staticClass:"row  margin-top-20"},[_c('div',{staticClass:"dropdown col-md-2"},[_vm._m(0,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu"},[_c('li',{attrs:{"role":"presentation"}},[_c('a',{attrs:{"role":"menuitem"},on:{"click":function($event){_vm.insertMeta(index,'TEXT')}}},[_vm._v("从上添加")])]),_vm._v(" "),_c('li',{attrs:{"role":"presentation"}},[_c('a',{attrs:{"role":"menuitem"},on:{"click":function($event){_vm.insertMeta(index+1,'TEXT')}}},[_vm._v("从下添加")])])])]),_vm._v(" "),_c('div',{staticClass:"dropdown col-md-2 "},[_vm._m(1,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu"},[_c('li',{attrs:{"role":"presentation"}},[_c('a',{attrs:{"role":"menuitem"},on:{"click":function($event){_vm.insertMeta(index,'IMG')}}},[_vm._v("从上添加")])]),_vm._v(" "),_c('li',{attrs:{"role":"presentation"}},[_c('a',{attrs:{"role":"menuitem"},on:{"click":function($event){_vm.insertMeta(index+1,'IMG')}}},[_vm._v("从下添加")])])])])]),_vm._v(" "),_c('div',{staticClass:"form-horizontal margin-top-20"},[_c('div',{staticClass:"form-group"},[_c('span',{staticClass:"col-md-2 radio-inline"},[_vm._v("\n                        第三方内容\n                    ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.showLink),expression:"answer.showLink"}],staticClass:"radio ",attrs:{"type":"radio","name":"thirdPart"},domProps:{"value":true,"checked":_vm._q(_vm.answer.showLink,true)},on:{"change":function($event){_vm.$set(_vm.answer, "showLink", true)}}}),_vm._v("是\n                    ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.showLink),expression:"answer.showLink"}],staticClass:"radio ",attrs:{"type":"radio","name":"thirdPart"},domProps:{"value":false,"checked":_vm._q(_vm.answer.showLink,false)},on:{"change":function($event){_vm.$set(_vm.answer, "showLink", false)}}}),_vm._v("否\n                    ")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.answer.showLink?_vm.answer.showLink:false),expression:"answer.showLink?answer.showLink:false"}],staticClass:"form-group "},[_c('span',{staticClass:"col-md-4"},[_vm._v("\n                        以上答案内容来自公开信息，原文链接：\n                    ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.answer.link),expression:"answer.link"}],staticClass:"col-md-4 ",attrs:{"type":"text"},domProps:{"value":(_vm.answer.link)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.answer, "link", $event.target.value)}}})])]),_vm._v(" "),_c('hr')])})],2)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle btn btn-sm btn-primary",attrs:{"data-toggle":"dropdown"}},[_vm._v("添加文字"),_c('span',{staticClass:"caret"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle btn btn-sm btn-primary",attrs:{"data-toggle":"dropdown"}},[_vm._v("添加图片"),_c('span',{staticClass:"caret"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "JyLo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5__ = __webpack_require__("6qJD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cosSign__ = __webpack_require__("/899");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_js__ = __webpack_require__("QmSG");





// 初始化实例
var cos = new __WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5___default.a({
  getAuthorization: function getAuthorization(options, callback) {
    // 异步获取签名
    var data = {
      method: (options.Method || 'get').toLowerCase(),
      pathname: '/' + (options.Key || '')
    };
    __WEBPACK_IMPORTED_MODULE_2__services_cosSign__["a" /* default */].getAppSign(data).then(function (data) {
      callback(data.data);
    });
  }
});

/* unused harmony default export */ var _unused_webpack_default_export = ({
  uploadFile: function uploadFile(file) {
    var name = new Date().getTime() + file.name;
    return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      cos.putObject({
        Bucket: __WEBPACK_IMPORTED_MODULE_3__config_js__["a" /* default */].Bucket, /* 必须 */
        Region: __WEBPACK_IMPORTED_MODULE_3__config_js__["a" /* default */].Region,
        Key: __WEBPACK_IMPORTED_MODULE_3__config_js__["a" /* default */].ImagePath + name, /* 必须 */
        Body: file,
        onProgress: function onProgress(progressData) {}
      }, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve({ data: data, path: __WEBPACK_IMPORTED_MODULE_3__config_js__["a" /* default */].BucketDomain + __WEBPACK_IMPORTED_MODULE_3__config_js__["a" /* default */].ImagePath + name, name: file.name });
        }
      });
    });
  }
});

/***/ }),

/***/ "KRju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KouB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  mounted: function mounted() {
    var vm = this;
    $(this.$refs.modal).on('hidden.bs.modal', function () {
      vm.$emit('hide');
    });
    $(this.$refs.modal).on('shown.bs.modal', function () {
      vm.$emit('show');
    });
  },

  props: {
    title: "",
    content: "",
    show: false,
    input: false
  },
  data: function data() {
    return {
      text: ''
    };
  },

  methods: {},
  computed: {},
  watch: {
    show: function show(val, oldVal) {
      if (val) {
        $(this.$refs.modal).modal("show");
      } else {
        $(this.$refs.modal).modal({ show: false });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "L/My":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_list_choose_user_vue__ = __webpack_require__("U2La");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_grid_div_v2_vue__ = __webpack_require__("ixQc");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: { AnswerUsers: __WEBPACK_IMPORTED_MODULE_0__components_list_choose_user_vue__["a" /* default */], AnswerMetas: __WEBPACK_IMPORTED_MODULE_2__components_list_grid_div_v2_vue__["a" /* default */] },
    mounted: function mounted() {
        var user = void 0;
        if (this.$route.query.user) user = JSON.parse(this.$route.query.user);
        this.answerId = this.$route.query.answerId ? this.$route.query.answerId : '';
        if (user) {
            this.isEdit = true;
            this.chooseAnswer(user);
            this.getUserAnswer();
        }
    },

    props: ['questionId'],
    data: function data() {
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
            user: { userNickName: '', userId: '', headImgUrl: '' },
            //如果是从答案跳转过来编辑的，那就不能更改答主
            isEdit: false
        };
    },

    methods: {
        chooseAnswer: function chooseAnswer(user) {
            this.initAnswer();
            this.user = user;
            this.userId = user._id.$oid;
            if (this.questionId) this.getUserAnswer();
        },
        getUserAnswer: function getUserAnswer() {
            var _this = this;

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.getUserAnswer(vm.questionId, vm.userId).then(function (data) {
                debugger;
                if (data) vm.answer = data;
                if (!vm.answer.metas) _this.$set(vm.answer, 'metas', []);
                vm.answerId = data.answerId;
            });
        },
        refreshAnswer: function refreshAnswer(data) {
            this.answer = data;
        },
        back2question: function back2question() {
            //                let name = window.localStorage.getItem('urlName');
            //                let params = JSON.parse(window.localStorage.getItem('urlParams'));
            var returnPath = localStorage.getItem('returnPath');
            this.$router.push(returnPath);
        },
        save: function save() {
            if (!this.userId) {
                this.$message.error("请选择答主");
                return false;
            }
            if (!this.answer.metas || this.answer.metas.length === 0) {
                this.$message.error("回答不能回空");
                return false;
            }
            if (this.answerId) this.editAnswer();else this.addAnswer();
        },
        showChoose: function showChoose() {
            this.showChooseModal = true;
        },
        initAnswer: function initAnswer() {
            this.answerMetas = [];
            this.userId = '';
            this.answerId = '';
        },
        editAnswer: function editAnswer() {
            var vm = this;
            var an = {
                answerId: vm.answerId,
                metas: vm.answer.metas ? vm.answer.metas : [],
                showLink: vm.answer.showLink ? vm.answer.showLink : false,
                link: vm.answer.link ? vm.answer.link : ''
            };
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.editAnswer(an).then(function (data) {
                vm.$message.success("修改回答成功");
                //                    vm.initAnswer();
                vm.back2question();
            });
        },
        addAnswer: function addAnswer() {
            var vm = this;
            var an = {
                questionId: vm.questionId,
                userId: vm.userId,
                metas: vm.answer.metas ? vm.answer.metas : [],
                showLink: vm.answer.showLink ? vm.answer.showLink : false,
                link: vm.answer.link ? vm.answer.link : ''
            };

            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.addAnswer(an).then(function (data) {
                vm.$message.success("新增回答成功");
                //                    vm.initAnswer();
                vm.back2question();
            });
        }
    }

});

/***/ }),

/***/ "LGJj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("DWeW");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f79628fc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("26Gu");
function injectStyle (ssrContext) {
  __webpack_require__("bC5r")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f79628fc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LPOo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b1c5df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("KRju");
function injectStyle (ssrContext) {
  __webpack_require__("cTZj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b1c5df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MIuI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("昵称：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.nickname),expression:"p.nickname"}],staticClass:"form-control dll-nickname",attrs:{"type":"text","placeholder":"昵称"},domProps:{"value":(_vm.p.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "nickname", $event.target.value)}}})]),_vm._v("\n                        2-20个字符\n                    ")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("头像：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[(_vm.p.headImgUrl)?_c('img',{staticClass:"img-avatar",attrs:{"src":_vm.p.headImgUrl}}):_vm._e(),_vm._v(" "),_c('file-wrap',{staticClass:"btn btn-primary dll-headimg",on:{"on-file-change":_vm.imgChange}},[_vm._v("上传图片")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("自我描述")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.desc),expression:"p.desc"}],staticClass:"form-control dll-desc",attrs:{"type":"text","placeholder":"自我描述","rows":"5"},domProps:{"value":(_vm.p.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "desc", $event.target.value)}}})]),_vm._v("\n                        30个字符\n                    ")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('a',{staticClass:"btn btn-success btn-block dll-add",attrs:{"disabled":_vm.added},on:{"click":_vm.save}},[_vm._v("确定\n                                    ")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('router-link',{staticClass:"btn btn-danger btn-block dll-cancel",attrs:{"to":"/answerManageList"}},[_vm._v("取消\n                                    ")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('h5',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWording),expression:"showWording"}],staticClass:"text-danger"},[_vm._v(_vm._s(_vm.wording))])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    新增答主\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "MgG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"form-label col-md-2"},[_vm._v("提问者:")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8"},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.userId===''),expression:"userId===''"}],staticClass:"btn  btn-primary dll-add-answer",on:{"click":_vm.showChoose}},[_vm._v("添加答主")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.userId!==''),expression:"userId!==''"}]},[_c('span',{},[_vm._v(_vm._s(_vm.userNickName))]),_vm._v(" "),_c('a',{staticClass:"btn-link dll-change-answer",on:{"click":_vm.showChoose}},[_vm._v("更改")])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"form-label col-md-2"},[_vm._v("问题标题:")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.title),expression:"q.title"}],staticClass:"form-control dll-title",attrs:{"id":"tit"},domProps:{"value":(_vm.q.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.q, "title", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"form-label col-md-2"},[_vm._v("问题描述:")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.desc),expression:"q.desc"}],staticClass:"form-control dll-desc",attrs:{"id":"desc"},domProps:{"value":(_vm.q.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.q, "desc", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:" col-md-2"},[_vm._v("标签:")]),_vm._v(" "),_c('div',{staticClass:"col-md-8 line-height25"},_vm._l((_vm.q.tags),function(tag,index){return _c('label',{key:tag.$oid},[(_vm.tagName(tag.$oid)!=='')?_c('label',{staticClass:"label label-default margin-bottom-15"},[_vm._v(_vm._s(_vm.tagName(tag.$oid)))]):_vm._e(),_vm._v("  \n                            ")])})),_vm._v(" "),_c('span',{staticClass:"text-right"},[_vm._v(_vm._s(_vm._f("date")(_vm.q.createdAt.$date)))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[(_vm.answers.totalCount>0)?_c('span',{staticClass:"col-md-3"},[_vm._v("共"+_vm._s(_vm.answers.totalCount)+"个回答 \n                            "),_c('router-link',{staticClass:"detail-link",attrs:{"to":{name:'answerscomments',params:{questionId:_vm.q._id.$oid,type:'answers'}}}},[_vm._v("查看全部回答")])],1):_vm._e(),_vm._v(" "),(_vm.comments.totalCount>0)?_c('span',{staticClass:"col-md-3"},[_vm._v("共"+_vm._s(_vm.comments.totalCount)+"个问题评论 \n                            "),_c('router-link',{staticClass:"detail-link",attrs:{"to":{name:'answerscomments',params:{questionId:_vm.q._id.$oid,type:'comments'}}}},[_vm._v("查看全部问题评论")])],1):_vm._e()]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"form-group "},[_c('label',{staticClass:" col-md-2"},[_vm._v("添加标签:")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 line-height25"},_vm._l((_vm.tags),function(tag,index){return _c('span',{key:tag._id.$oid},[_c('a',{staticClass:"label label-default ",on:{"click":function($event){_vm.modifyTag(tag)}}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isTagAdded(tag._id.$oid)),expression:"isTagAdded(tag._id.$oid)"}],staticClass:"glyphicon glyphicon-ok"}),_vm._v(" "),_vm._v("\n                                        "+_vm._s(tag.name)+"\n                                    ")]),_vm._v("\n                                          \n                                ")])})),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":{name:'addTag',params:{'questionId':_vm.questionId}}}},[_vm._v("\n                            创建其他标签\n                        ")])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2"},[_vm._v("相关知识：")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"form-inline"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.q.knowledge|| _vm.q.knowledge.length<1),expression:"!q.knowledge|| q.knowledge.length<1"}]},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.klg),expression:"klg"}],staticClass:"form-control dll-knowledge",attrs:{"type":"text"},domProps:{"value":(_vm.klg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.klg=$event.target.value}}}),_vm._v(" "),_c('a',{staticClass:"dll-knowledge-add",on:{"click":_vm.addKnowledge}},[_vm._v("确定")]),_vm._v(" "),_c('a',{on:{"click":_vm.initKlg}},[_vm._v("取消")])])]),_vm._v(" "),_c('div',{staticClass:"line-height25"},[_vm._l((_vm.q.knowledge),function(k,index){return _c('span',{key:index},[_c('span',[_c('span',{staticClass:"label label-default"},[_vm._v("\n                                            "+_vm._s(k)+"\n                                            ")]),_vm._v(" "),_c('a',{staticClass:" delete img-circle glyphicon glyphicon-remove ",on:{"click":function($event){_vm.deleteKnowledge(index)}}})]),_vm._v("\n                                         \n                                    ")])}),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.q.knowledge&&_vm.q.knowledge.length>0&&!_vm.showAdd),expression:"q.knowledge&&q.knowledge.length>0&&!showAdd"}],on:{"click":function($event){_vm.showAdd=true}}},[_vm._v("继续添加")])],2),_vm._v(" "),_c('div',{staticClass:"form-inline  margin-top-15"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showAdd),expression:"showAdd"}]},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.klg),expression:"klg"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.klg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.klg=$event.target.value}}}),_vm._v(" "),_c('a',{on:{"click":_vm.addKnowledge}},[_vm._v("确定")]),_vm._v(" "),_c('a',{on:{"click":_vm.initKlg}},[_vm._v("取消")])])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 "},[_vm._v("是否展示问题:")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isShow),expression:"q.isShow"}],staticClass:"radio-inline dll-show-true",attrs:{"type":"radio","name":"isShow"},domProps:{"value":true,"checked":_vm._q(_vm.q.isShow,true)},on:{"change":function($event){_vm.$set(_vm.q, "isShow", true)}}}),_vm._v("是\n                            "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isShow),expression:"q.isShow"}],staticClass:"radio-inline dll-show-false",attrs:{"type":"radio","name":"isShow"},domProps:{"value":false,"checked":_vm._q(_vm.q.isShow,false)},on:{"change":function($event){_vm.$set(_vm.q, "isShow", false)}}}),_vm._v("否\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 "},[_vm._v("首页展示:")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isRecommended),expression:"q.isRecommended"}],staticClass:"radio-inline dll-indexshow-true",attrs:{"type":"radio","name":"isRecommended"},domProps:{"value":true,"checked":_vm._q(_vm.q.isRecommended,true)},on:{"change":function($event){_vm.$set(_vm.q, "isRecommended", true)}}}),_vm._v("是\n                            "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isRecommended),expression:"q.isRecommended"}],staticClass:"radio-inline dll-indexshow-false",attrs:{"type":"radio","name":"isRecommended"},domProps:{"value":false,"checked":_vm._q(_vm.q.isRecommended,false)},on:{"change":function($event){_vm.$set(_vm.q, "isRecommended", false)}}}),_vm._v("否\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('a',{staticClass:"btn  btn-success btn-block dll-save",attrs:{"type":"button"},on:{"click":function($event){_vm.save()}}},[_vm._v("确定")])])])])])])])])]),_vm._v(" "),_c('answer-users',{attrs:{"title":"添加提问者","show":_vm.showChooseModal},on:{"on-choose":_vm.chooseAsker,"show":function($event){_vm.showChooseModal=true},"hide":function($event){_vm.showChooseModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    新增问题\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Mxp2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('img',{staticClass:"img-avatar ",attrs:{"src":_vm.q.user.headImgUrl}}),_vm._v(" "),_c('label',{},[_vm._v(_vm._s(_vm.q.user.nickname))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEditTitleClicked),expression:"!isEditTitleClicked"}],staticClass:"h5  col-md-10"},[_vm._v(_vm._s(_vm.q.title))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isEditTitleClicked),expression:"isEditTitleClicked"}],staticClass:"col-md-10"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.title),expression:"q.title"}],staticClass:"form-control dll-title",attrs:{"type":"text"},domProps:{"value":(_vm.q.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.q, "title", $event.target.value)}}})]),_vm._v(" "),_c('a',{on:{"click":_vm.editTitle}},[_vm._v("修改标题")])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEditDescClicked),expression:"!isEditDescClicked"}],staticClass:"h5 col-md-10"},[_vm._v(_vm._s(_vm.q.desc))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isEditDescClicked),expression:"isEditDescClicked"}],staticClass:"col-md-10"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.desc),expression:"q.desc"}],staticClass:"form-control dll-desc",attrs:{"type":"text"},domProps:{"value":(_vm.q.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.q, "desc", $event.target.value)}}})]),_vm._v(" "),_c('a',{on:{"click":_vm.editDesc}},[_vm._v("修改描述")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:" col-md-1"},[_vm._v("标签:")]),_vm._v(" "),_c('div',{staticClass:"col-md-8 line-height25"},_vm._l((_vm.q.tags),function(tag,index){return _c('label',{key:tag.$oid},[(_vm.tagName(tag.$oid)!=='')?_c('label',{staticClass:"label label-default margin-bottom-15"},[_vm._v(_vm._s(_vm.tagName(tag.$oid)))]):_vm._e(),_vm._v("  \n                            ")])})),_vm._v(" "),_c('span',{staticClass:"text-right"},[_vm._v(_vm._s(_vm._f("date")(_vm.q.createdAt.$date)))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[(_vm.answers.totalCount>0)?_c('span',{staticClass:"col-md-3"},[_vm._v("共"+_vm._s(_vm.answers.totalCount)+"个回答 \n                            "),_vm._v(" "),_c('a',{staticClass:"detail-link",on:{"click":function($event){_vm.toAnswersComments({name:'answerscomments',params:{questionId:_vm.q._id.$oid,type:'answers'}})}}},[_vm._v("查看全部回答")])]):_vm._e(),_vm._v(" "),(_vm.comments.totalCount>0)?_c('span',{staticClass:"col-md-3"},[_vm._v("共"+_vm._s(_vm.comments.totalCount)+"个问题评论 \n                            "),_c('a',{staticClass:"detail-link",on:{"click":function($event){_vm.toAnswersComments({name:'answerscomments',params:{questionId:_vm.q._id.$oid,type:'comments'}})}}},[_vm._v("查看全部问题评论")])]):_vm._e()]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"form-group "},[_c('label',{staticClass:" col-md-1"},[_vm._v("添加标签:")]),_vm._v(" "),_c('div',{staticClass:"col-md-9 line-height25"},_vm._l((_vm.tags),function(tag,index){return _c('span',{key:tag._id.$oid},[_c('a',{staticClass:"label label-default ",on:{"click":function($event){_vm.modifyTag(tag)}}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isTagAdded(tag._id.$oid)),expression:"isTagAdded(tag._id.$oid)"}],staticClass:"glyphicon glyphicon-ok"}),_vm._v(" "),_vm._v("\n                                        "+_vm._s(tag.name)+"\n                                    ")]),_vm._v("\n                                          \n                                ")])})),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":{name:'addTag',params:{'questionId':_vm.questionId}}}},[_vm._v("\n                            创建其他标签\n                        ")])],1),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-1"},[_vm._v("相关知识：")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-10"},[_c('div',{staticClass:"form-inline"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.q.knowledge|| _vm.q.knowledge.length<1),expression:"!q.knowledge|| q.knowledge.length<1"}]},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.klg),expression:"klg"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.klg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.klg=$event.target.value}}}),_vm._v(" "),_c('a',{on:{"click":_vm.addKnowledge}},[_vm._v("确定")]),_vm._v(" "),_c('a',{on:{"click":_vm.initKlg}},[_vm._v("取消")])])]),_vm._v(" "),_c('div',{staticClass:"line-height25"},[_vm._l((_vm.q.knowledge),function(k,index){return _c('span',{key:index},[_c('span',[_c('span',{staticClass:"label label-default"},[_vm._v("\n                                            "+_vm._s(k)+"\n                                            ")]),_vm._v(" "),_c('a',{staticClass:" delete img-circle glyphicon glyphicon-remove ",on:{"click":function($event){_vm.deleteKnowledge(index)}}})]),_vm._v("\n                                         \n                                    ")])}),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.q.knowledge&&_vm.q.knowledge.length>0&&!_vm.showAdd),expression:"q.knowledge&&q.knowledge.length>0&&!showAdd"}],on:{"click":function($event){_vm.showAdd=true}}},[_vm._v("继续添加")])],2),_vm._v(" "),_c('div',{staticClass:"form-inline  margin-top-15"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showAdd),expression:"showAdd"}]},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.klg),expression:"klg"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.klg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.klg=$event.target.value}}}),_vm._v(" "),_c('a',{on:{"click":_vm.addKnowledge}},[_vm._v("确定")]),_vm._v(" "),_c('a',{on:{"click":_vm.initKlg}},[_vm._v("取消")])])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-1 "},[_vm._v("是否展示问题:")]),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isShow),expression:"q.isShow"}],staticClass:"radio-inline dll-show-true",attrs:{"type":"radio","name":"isShow"},domProps:{"value":true,"checked":_vm._q(_vm.q.isShow,true)},on:{"change":function($event){_vm.$set(_vm.q, "isShow", true)}}}),_vm._v("是\n                            "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isShow),expression:"q.isShow"}],staticClass:"radio-inline dll-show-false",attrs:{"type":"radio","name":"isShow"},domProps:{"value":false,"checked":_vm._q(_vm.q.isShow,false)},on:{"change":function($event){_vm.$set(_vm.q, "isShow", false)}}}),_vm._v("否\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-1 "},[_vm._v("首页展示:")]),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isRecommended),expression:"q.isRecommended"}],staticClass:"radio-inline dll-recommend-true",attrs:{"type":"radio","name":"isRecommended"},domProps:{"value":true,"checked":_vm._q(_vm.q.isRecommended,true)},on:{"change":function($event){_vm.$set(_vm.q, "isRecommended", true)}}}),_vm._v("是\n                            "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q.isRecommended),expression:"q.isRecommended"}],staticClass:"radio-inline dll-recommend-false",attrs:{"type":"radio","name":"isRecommended"},domProps:{"value":false,"checked":_vm._q(_vm.q.isRecommended,false)},on:{"change":function($event){_vm.$set(_vm.q, "isRecommended", false)}}}),_vm._v("否\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"form-group "},[_c('label',{staticClass:"col-md-1 "},[_vm._v("回答:")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-8"},[_c('a',{staticClass:"btn btn-sm btn-primary",on:{"click":_vm.toAnswerInfo}},[_vm._v("新增回答")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name:'answerInfo',params:{'questionId':_vm.questionId}}}})],1)])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-1"}),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2"},[_c('a',{staticClass:"btn btn-sm btn-success ",on:{"click":_vm.save}},[_vm._v("   确定   ")])]),_vm._v(" "),_c('div',{staticClass:"col-md-2"},[_c('router-link',{staticClass:"btn btn-sm btn-danger ",attrs:{"to":"/questionList"}},[_vm._v("   取消   \n                                    ")])],1)])])])])]),_vm._v(" "),_c('answer-users',{attrs:{"title":"添加答主","show":_vm.showChooseModal},on:{"on-choose":_vm.chooseAnswer,"show":function($event){_vm.showChooseModal=true},"hide":function($event){_vm.showChooseModal=false}}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    问题详情\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "N5v2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css__ = __webpack_require__("Rh7U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader__ = __webpack_require__("pkKZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css__ = __webpack_require__("isgN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker__ = __webpack_require__("tLa+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css__ = __webpack_require__("ylrw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination__ = __webpack_require__("6oiW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css__ = __webpack_require__("cwe7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css__ = __webpack_require__("+BTi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message__ = __webpack_require__("2X9z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_service__ = __webpack_require__("NTvx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scriptjs__ = __webpack_require__("zhAq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_scriptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_scriptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__("QmSG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_filters__ = __webpack_require__("iClD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_vee_validate__ = __webpack_require__("sUu7");









// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
__webpack_require__("gNGx");






// import store from './store'


var VueCookie = __webpack_require__("K/Lq");

var STATUS = __webpack_require__("GX9t").STATUS;
var TYPE = __webpack_require__("SgC4").TYPE;

__WEBPACK_IMPORTED_MODULE_9_vue__["default"].prototype.$message = __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message___default.a;
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination___default.a);

__WEBPACK_IMPORTED_MODULE_9_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_16_vee_validate__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].use(VueCookie);
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker___default.a);
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader___default.a);

__WEBPACK_IMPORTED_MODULE_9_vue__["default"].config.productionTip = false;

//register filters
for (name in __WEBPACK_IMPORTED_MODULE_15__utils_filters__["a" /* default */]) {
  __WEBPACK_IMPORTED_MODULE_9_vue__["default"].filter(name, __WEBPACK_IMPORTED_MODULE_15__utils_filters__["a" /* default */][name]);
}
new ClipboardJS('.btn');
/* eslint-disable no-new */
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].prototype.$status = STATUS;
__WEBPACK_IMPORTED_MODULE_9_vue__["default"].prototype.$type = TYPE;

new __WEBPACK_IMPORTED_MODULE_9_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_11__router__["a" /* default */],
  // store,
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_10__App__["a" /* default */] }
});

var userInfo = JSON.parse(__WEBPACK_IMPORTED_MODULE_9_vue__["default"].prototype.$cookie.get('userInfo'));
if (userInfo) {
  store.commit('setUserInfo', userInfo);
}

/***/ }),

/***/ "NTvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(axios) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("QmSG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("YaEn");




var ERRORCODE = __webpack_require__("eySX").ERRORCODE;

// Vue.prototype.$http = axios;
axios.defaults.baseURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].serviceDomain;

axios.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if (resp.data.code === ERRORCODE.AUTHENTICATION_FAILED) {
    //route to login
    __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].push({ path: '/login' });
  }
  if (resp.data.code !== ERRORCODE.SUCCESS) {
    var errorMsg = resp.data.errorMessage;
    if (errorMsg) {
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.error(errorMsg);
    } else {
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].prototype.$message.error('发生错误，请联系管理人员');
    }
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(resp);
  }
  return resp;
}, function (error) {
  // Do something with response error
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
});

/* unused harmony default export */ var _unused_webpack_default_export = (axios);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("mtWM")))

/***/ }),

/***/ "Nlwj":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    list: function list(params) {
        return axios.post('/ddCmsUser/authenticationList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "NxeV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Q0xE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("sfn8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19d52395_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("MgG+");
function injectStyle (ssrContext) {
  __webpack_require__("Jw4U")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19d52395"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19d52395_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "QQz6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_file_upload_wrapper__ = __webpack_require__("pE7P");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_3__components_file_upload_wrapper__["a" /* default */], Confirm: __WEBPACK_IMPORTED_MODULE_0__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        this.name = "";
    },

    props: {},
    data: function data() {
        return {
            added: false,
            list: {},
            name: '',
            showModal: false,
            totalCount: 10,
            stopIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                name: ''
            },
            iconUrl: '',
            image: {
                width: 0,
                height: 0
            }
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.iconUrl = data;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    var image = new Image();
                    image.onload = function () {
                        vm.image.width = image.naturalWidth;
                        vm.image.height = image.naturalHeight;
                        console.log(image.width, image.height);
                    };
                    image.src = data;
                };
                reader.readAsDataURL(file);
            });
        },

        //            loadData() {
        //                let vm = this;
        //                tagApi.list(this.queryParams).then(data => {
        //                    vm.list = data;
        //                    if (vm.queryParams.queryStr) {
        //                        vm.lastQueryWithOptions = true
        //                    } else {
        //                        vm.lastQueryWithOptions = false
        //                    }
        //                })
        //            },
        move: function move(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.move(id, step).then(function (data) {
                vm.loadData();
            });
        },
        removeConfirm: function removeConfirm(index) {
            this.stopIndex = index;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.remove(this.list[this.stopIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功!');
                //                    vm.loadData()
            });
        },
        cancel: function cancel() {
            var vm = this;
            vm.name = '';
            vm.$router.push('/tagList');
        },
        createTag: function createTag() {
            var vm = this;
            if (this.name.trim() === '') {
                vm.$message.info("名称不能为空");
                return;
            }
            vm.added = true;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.createTag(this.name, this.iconUrl).then(function (data) {
                vm.$message.success("新建成功");
                if (vm.$route.params.questionId) {
                    vm.$router.push("/question/" + vm.$route.params.questionId);
                }
                vm.added = true;
                setTimeout(vm.reload, 500);
            });
        },
        reload: function reload() {
            window.location.reload();
        }
    },
    computed: {}
});

/***/ }),

/***/ "QTX4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2"},[_vm._v("评论者：")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.userId===''),expression:"userId===''"}],staticClass:"btn btn-xs btn-primary dll-add-commentator",on:{"click":_vm.showChoose}},[_vm._v("添加评论者")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.userId!==''),expression:"userId!==''"}]},[_c('span',{},[_vm._v(_vm._s(_vm.userNickName))]),_vm._v(" "),_c('a',{staticClass:"btn-link dll-change",on:{"click":_vm.showChoose}},[_vm._v("更改")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2"},[_vm._v("内容：")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.content),expression:"content"}],staticClass:"col-md-7 dll-content",attrs:{"rows":"2"},domProps:{"value":(_vm.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.content=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2"}),_vm._v(" "),_c('a',{staticClass:"btn btn-xs btn-primary dll-add-comment",on:{"click":_vm.addComment}},[_vm._v("评论")])])]),_vm._v(" "),_c('answer-users',{attrs:{"show":_vm.showChooseModal},on:{"title":function($event){_vm.添加评论者},"on-choose":_vm.chooseCom,"show":function($event){_vm.showChooseModal=true},"hide":function($event){_vm.showChooseModal=false}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "QmSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	serviceDomain: 'https://api.dingnuo.ai/',
	Bucket: 'hqdl-1255473721',
	Region: 'ap-shanghai',
	ImagePath: '/dls/',
	BucketDomain: 'https://hqdl-1255473721.cossh.myqcloud.com'
});

/***/ }),

/***/ "R+vj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('div',{staticClass:"row"},[_c('msg-template',{staticClass:"col-md-5 tmp ",attrs:{"temp":_vm.temp}}),_vm._v(" "),_c('div',{staticClass:"col-md-1"}),_vm._v(" "),_c('div',{staticClass:"form-horizontal col-md-7"},[_vm._l((_vm.temp.keys),function(d,index){return _c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v(_vm._s(d.name))]),_vm._v(" "),_c('div',{staticClass:"col-md-10"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(d.value),expression:"d.value"}],staticClass:" form-control",domProps:{"value":(d.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(d, "value", $event.target.value)}}})])])}),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("消息链接")]),_vm._v(" "),_c('div',{staticClass:"col-md-10"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.page),expression:"page"}],staticClass:" form-control",domProps:{"value":(_vm.page)},on:{"input":function($event){if($event.target.composing){ return; }_vm.page=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-10"},[_c('a',{staticClass:"btn btn-primary",on:{"click":_vm.send}},[_vm._v("发送")]),_vm._v(" "),_c('a',{staticClass:"btn border",on:{"click":_vm.cancel}},[_vm._v("取消")])])])],2)],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "R81X":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    getFloatIconConfig: function getFloatIconConfig() {
        return axios.post('/wdCmsAdmin/getFloatIconConfig/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editFloatIconConfig: function editFloatIconConfig(params) {
        return axios.post('/wdCmsAdmin/editFloatIconConfig/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    getRoundTableConfig: function getRoundTableConfig() {
        return axios.post('/wdCmsAdmin/getRoundTableConfig/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editRoundTableConfig: function editRoundTableConfig(params) {
        return axios.post('/wdCmsAdmin/editRoundTableConfig/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "Rh7U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "S+Bu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "S1OC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group "},[_c('label',{staticClass:"h5  col-md-8 "},[_vm._v(_vm._s(_vm.q.title))])]),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"js-wizard-simple block "},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-alt nav-justified",staticStyle:{"width":"400px"}},[_c('li',{class:(typeof _vm.type)==='undefined'?'active':(_vm.type==='answers'?'active':'')},[_c('a',{attrs:{"href":"#simple-step1","data-toggle":"tab"}},[_vm._v("回答("+_vm._s(_vm.answers.totalCount)+")")])]),_vm._v(" "),_c('li',{class:_vm.type==='comments'?'active':''},[_c('a',{attrs:{"href":"#simple-step2","data-toggle":"tab"}},[_vm._v("问题评论("+_vm._s(_vm.comments.totalCount)+")")])])]),_vm._v(" "),_c('div',{staticClass:"block-content tab-content"},[_c('div',{staticClass:"tab-pane fade in push-30-t push-50 ",class:(typeof _vm.type)==='undefined'?'active':(_vm.type==='answers'?'active':''),staticStyle:{"width":"600px"},attrs:{"id":"simple-step1"}},[_vm._l((_vm.answers.list),function(answer,index){return _c('div',{key:answer._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"form-group"},[(answer.isAdmin)?_c('div',{staticClass:"col-md-8"},[_c('label',[_vm._v("管理员")])]):_c('div',{staticClass:"col-md-8"},[_c('img',{staticClass:"img-avatar",attrs:{"src":answer.user.headImgUrl}}),_vm._v(" "),_c('label',[_vm._v(_vm._s(answer.user.nickname))])]),_vm._v(" "),_c('div',{staticClass:" col-md-4"},[_c('span',{staticClass:"dropdown"},[_vm._m(1,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},[_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(answer.isShow),expression:"answer.isShow"}],on:{"click":function($event){_vm.setShowConfirm(answer._id.$oid,false,_vm.SET_ANSWER_SHOW_WORDING,_vm.setAnswerShow)}}},[_vm._v("隐藏回答")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!answer.isShow),expression:"!answer.isShow"}],on:{"click":function($event){_vm.setShowConfirm(answer._id.$oid,true,_vm.SET_ANSWER_SHOW_WORDING,_vm.setAnswerShow)}}},[_vm._v("取消隐藏")])]),_vm._v(" "),_c('li',[_c('a',{on:{"click":function($event){_vm.baseConfirm(answer._id.$oid,_vm.DELETE_ANSWER_WORDING,_vm.deleteAnswer)}}},[_vm._v("删除回答")])]),_vm._v(" "),_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(!answer.isAdmin),expression:"!answer.isAdmin"}],on:{"click":function($event){_vm.toAnswerEditPage(answer.user,answer._id.$oid)}}},[_vm._v("编辑回答")])])])]),_vm._v(" "),_c('span',{staticClass:"dropdown col-md-offset-1"},[_vm._m(2,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},[(answer.seq!=0)?_c('li',[_c('a',{on:{"click":function($event){_vm.baseConfirm(answer._id.$oid,_vm.SET_ANSWER_TOP_WORDING,_vm.setAnswerTop)}}},[_vm._v("置顶")])]):_vm._e(),_vm._v(" "),_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.answersParams.page==1 && index == 0)),expression:"!(answersParams.page==1 && index == 0)"}],on:{"click":function($event){_vm.answerMove(answer._id.$oid,answer.seq-1)}}},[_vm._v("上移")])]),_vm._v(" "),_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.answersParams.page==1 && index == _vm.answers.list.length-1)),expression:"!(answersParams.page==1 && index == answers.list.length-1)"}],on:{"click":function($event){_vm.answerMove(answer._id.$oid,answer.seq+1)}}},[_vm._v("下移")])])])])])]),_vm._v(" "),_vm._l((answer.metas),function(meta,index){return _c('div',{key:index,staticClass:"container-fluid"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.EditClickedAnswerId===answer._id.$oid)),expression:"!(EditClickedAnswerId===answer._id.$oid)"}]},[(meta.type==='TEXT')?_c('p',{staticClass:"col-md-10 pre-wrap"},[_vm._v(_vm._s(meta.content))]):_vm._e(),_vm._v(" "),(meta.type==='IMG')?_c('img',{staticClass:"pic-max-400",attrs:{"src":meta.content}}):_vm._e()])])}),_vm._v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{},[_c('a',{on:{"click":function($event){_vm.toCommentsOfAnswer(answer)}}},[_vm._v("评论("+_vm._s(answer.commentsCount)+") ")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.showEditLikeBase===answer._id.$oid)),expression:"!(showEditLikeBase===answer._id.$oid)"}]},[_vm._v("\n                                                            +"+_vm._s(answer.likeBase ? answer.likeBase : 0)+"个赞\n                                                            "),_c('a',{on:{"click":function($event){_vm.clickShowEditLikeBase(answer._id.$oid,answer.likeBase)}}},[_vm._v("编辑")])]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showEditLikeBase===answer._id.$oid),expression:"showEditLikeBase===answer._id.$oid"}]},[_vm._v("\n                                                            +\n                                                            "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(answer.likeBase),expression:"answer.likeBase"}],staticStyle:{"width":"30px"},attrs:{"type":"text"},domProps:{"value":(answer.likeBase)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(answer, "likeBase", $event.target.value)}}}),_vm._v("\n                                                            个赞\n                                                            "),_c('a',{on:{"click":function($event){_vm.editLikeBase(answer._id.$oid,answer.likeBase)}}},[_vm._v("确定")]),_vm._v(" "),_c('a',{on:{"click":function($event){_vm.cancelEditLikeBase(answer)}}},[_vm._v("取消")])]),_vm._v("\n                                                                   \n                                                        "),_c('span',[_vm._v("\n                                                             浏览量("+_vm._s(_vm._f("fondsFormat")(answer.visitCount))+")\n                                                        ")]),_vm._v(" "),_c('span',[_vm._v("\n                                                             曝光量("+_vm._s(_vm._f("fondsFormat")(answer.exposeCount))+")\n                                                        ")]),_vm._v(" "),_c('span',[_c('a',{staticClass:"btn btn-xs ",attrs:{"data-clipboard-text":answer.wxappUrl},on:{"click":_vm.copy2clipboard}},[_vm._v("复制链接")])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm._f("date")(answer.createdAt.$date)))])])])],2)])])}),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.answers.totalCount>0),expression:"answers.totalCount>0"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.answersParams.page,"page-size":_vm.answersParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.answers.totalCount},on:{"current-change":_vm.answersPageChange,"update:currentPage":function($event){_vm.$set(_vm.answersParams, "page", $event)}}})],2),_vm._v(" "),_c('div',{staticClass:"tab-pane fade in push-30-t push-50 ",class:_vm.type==='comments'?'active':'',staticStyle:{"width":"600px"},attrs:{"id":"simple-step2"}},[_c('div',{},[_c('comment',{attrs:{"type":"question","id":_vm.questionId},on:{"success":_vm.getComments}}),_vm._v(" "),_c('hr')],1),_vm._v(" "),_vm._l((_vm.comments.list),function(comment,index){return _c('div',{key:comment._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-8"},[_c('img',{staticClass:"img-avatar",attrs:{"src":comment.user.headImgUrl}}),_vm._v(" "),_c('label',{},[_vm._v(_vm._s(comment.user.nickname))])]),_vm._v(" "),_c('div',{staticClass:"form-group col-md-4 fr"},[_c('span',{staticClass:"dropdown"},[_vm._m(3,true),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu",attrs:{"role":"menu"}},[_c('li',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(comment.isShow),expression:"comment.isShow"}],on:{"click":function($event){_vm.setShowConfirm(comment._id.$oid,false,_vm.SET_COMMENT_HIDE_WORDING,_vm.setCommentShow)}}},[_vm._v("隐藏评论")]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!comment.isShow),expression:"!comment.isShow"}],on:{"click":function($event){_vm.setShowConfirm(comment._id.$oid,true,_vm.SET_COMMENT_SHOW_WORDING,_vm.setCommentShow)}}},[_vm._v("取消隐藏")])]),_vm._v(" "),_c('li',[_c('a',{on:{"click":function($event){_vm.baseConfirm(comment._id.$oid,_vm.DELETE_COMMENT_WORDING,_vm.deleteComment)}}},[_vm._v("删除评论")])])])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('p',{staticClass:"col-md-10"},[_vm._v(_vm._s(comment.content))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm._f("date")(comment.createdAt.$date)))])])])])}),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.comments.totalCount),expression:"comments.totalCount"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.commentsParams.page,"page-size":_vm.commentsParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.comments.totalCount},on:{"current-change":_vm.commentsPageChange,"update:currentPage":function($event){_vm.$set(_vm.commentsParams, "page", $event)}}})],2)])])])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":_vm.confirmWording,"show":_vm.showModal},on:{"confirm":_vm.doConfirm,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)])]),_vm._v(" "),_c('div',{staticClass:"back"},[_c('button',{staticClass:"btn btn-sm btn-link",on:{"click":_vm.back2question}},[_c('span',{staticClass:"glyphicon glyphicon-chevron-left"}),_vm._v("返回问题\n        ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    查看回答和问题评论\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[_c('label',{staticClass:"font-s24"},[_vm._v("...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[_vm._v("排序"),_c('span',{staticClass:"caret"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"dropdown-toggle ",attrs:{"data-toggle":"dropdown"}},[_c('label',{staticClass:"font-s24"},[_vm._v("...")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "SWgQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__("oAV5");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_3__components_file_upload_wrapper__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        if (this.answer) {
            if (!this.answer.showLink) this.answer.showLink = false;
            this.$emit('on-get-datalist', this.answer);
            console.log('list grid mounted');
        }
    },

    props: ['metas', 'rows', 'answer'],
    methods: {
        imgChange: function imgChange(file) {
            var _this = this;

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */].compress(file).then(function (data) {
                debugger;
                if (vm.modifyImgIndex >= 0) {
                    console.log(vm.modifyImgIndex);
                    vm.answer.metas[vm.modifyImgIndex].content = data;
                    vm.modifyImgIndex = undefined;
                    //                    util.getFileSize(file, vm);
                } else if (vm.insertImgIndex >= 0) {
                    vm._insert(vm.insertImgIndex, {
                        "type": "IMG",
                        "content": data.originUrl,
                        "compressUrl": data.compressUrl
                    });
                    vm.insertImgIndex = undefined;
                    vm.selectedIndex = undefined;
                } else {
                    vm.answer.metas.push({
                        "type": "IMG",
                        "content": data.originUrl,
                        "compressUrl": data.compressUrl
                    });
                }
                _this.sendDataToFather();
            }).catch(function (err) {
                console.log("catch!!!", err.stack);
                vm.$message.error("服务出错，请联系管理员");
            });
        },
        saveTextData: function saveTextData() {
            var content = this.content;
            //                if (content.trim() === '') {
            //                    this.$message.warning("请输入回答内容");
            //                    return;
            //                }
            this.answer.metas.push({ "type": "TEXT", "content": content });
            this.sendDataToFather();
        },
        deleteDataFromList: function deleteDataFromList(index) {
            debugger;
            this.showEditIndex = '';
            this.mouseOverIndex = '';
            this.selectedIndex = '';
            this.answer.metas.splice(index, 1);
            this.sendDataToFather();
        },
        invokeChildImgChange: function invokeChildImgChange(index) {
            debugger;
            this.modifyImgIndex = index;
            this.$refs.fileWrap.openFinder();
        },
        sendDataToFather: function sendDataToFather() {
            this.$emit("on-data-change", this.answer);
        },
        moveUp: function moveUp(index) {
            this._exchange(index, index - 1);
        },
        moveDown: function moveDown(index) {
            this._exchange(index, index + 1);
        },
        insertMeta: function insertMeta(type) {
            debugger;
            var vm = this;
            if (vm.selectedIndex !== '') {
                if (type === 'TEXT') vm.showEditIndex = vm.selectedIndex + 1;
                vm._insertMeta(vm.selectedIndex + 1, type);
            } else {
                vm.showEditIndex = vm.answer.metas.length;
                vm._insertMeta(vm.answer.metas.length, type);
            }
        },
        _insertMeta: function _insertMeta(index, type) {
            var vm = this;
            if (type === 'TEXT') {
                var meta = { "type": "TEXT", "content": "" };
                vm._insert(index, meta);
                vm.selectedIndex = '';
            } else if (type === 'IMG') {
                debugger;
                vm.insertImgIndex = index;
                vm.$refs.fileWrap.openFinder();
            }
        },
        _insert: function _insert(index, meta) {
            if (index < 0) index = 0;
            this.answer.metas.splice(index, 0, meta);
        },
        _remove: function _remove(index) {},
        _exchange: function _exchange(index1, index2) {
            //刷新不及时
            //                [this.metas[index1], this.metas[index2]] = [this.metas[index2], this.metas[index1]];
            //                debugger;
            //如果直接 用 m1=this.metas.slice(index1,index1+1)[0]；
            //           this.metas[index2].content=m1;
            //来结果是非响应式
            //                let m1 = this.metas.slice(index1,index1+1)[0].content;
            //                let m2 = this.metas.slice(index2,index2+1)[0].content;
            debugger;
            var m1 = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(this.answer.metas[index1]));
            var m2 = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(this.answer.metas[index2]));
            var c1 = m1.content;
            var c2 = m2.content;
            var type1 = m1.type;
            var type2 = m2.type;
            //                m2.content = c1;
            //                m1.content = c2;
            //                m2.type = type1;
            //                m1.type = type2;
            console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(m1).length);
            console.log(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(m2).length);
            for (var m in m1) {
                console.log(m);
            }
            this.$set(this.answer.metas, index2, m1);
            this.$set(this.answer.metas, index1, m2);
        },
        init: function init() {
            this.showEditIndex = '';
            this.selectedIndex = '';
        },
        showEdit: function showEdit(index) {
            this.showEditIndex = index;
            //                $.each($("textarea"), function (i, n) {
            ////                vm.autoTextarea($(n)[0]);
            //                    debugger
            //                    console.log("n", n, n.scrollHeight)
            ////                    $(n).css("height", 1000 + "px");
            //
            //                });
            this.setTextareaHeight(index);
        },
        mouseover: function mouseover(index) {
            this.mouseOverIndex = index;
            console.log('mouse over ', index);
        },
        mouseout: function mouseout(index) {
            this.mouseOverIndex = '';
            console.log('mouse out');
        },

        //选中
        select: function select(index) {
            debugger;
            if (this.selectedIndex === index) this.selectedIndex = '';else this.selectedIndex = index;
            console.log("选中了", index);
        },

        //本来通过id来选择 但是为了拖拽方便所以就用class了
        setTextareaHeight: function setTextareaHeight(index) {
            $('.textarea' + index).css({ 'height': $('.p' + index).height() + 20 });
        },


        /**
         * 拖拽部分
         */
        onDrag: function onDrag(event) {
            var vm = this;
            vm.dragId = event.target.id;
            console.log("被拖拽的 元素id", vm.dragId);
        },
        getIndexById: function getIndexById(id) {
            return parseInt(id.replace('div', ''));
        },
        onDragover: function onDragover(event) {
            console.log("++++dragover", event);
            console.log("++++dragover target", event.target);
        },
        onDrop: function onDrop(event) {
            event.preventDefault();
        },

        /**
         *经过测试 在元素后面添加 比较好，在前面添加会出现 不断删除 插入 TmpNode的问题 体验不好  dragenter dragleave 事件会不停出发触发
         */
        onDragenter: function onDragenter(event) {
            var vm = this;
            //get id from tr
            var node = event.target;
            var rootNode = $("#rootDiv")[0];
            //不断遍历 知道找到div[index]
            while (node.id === '') {
                node = node.parentNode;
            } //进入到tmp 或者 自己 或者相邻的前一个元素的时候是不需要添加的
            if (node.id.indexOf('TmpNode') !== -1 || node.id === vm.dragId
            //最后一个元素不存在的话不会return
            || node.nextSibling && node.nextSibling.id === vm.dragId) {
                vm.enteredId = '';
                return;
            }
            vm.enteredId = node.id;
            console.log("****当前进入的元素的id ", node.id, "****当前被拖动元素的id", vm.dragId);
            console.log('add tmp node');
            vm.addTmpNode(rootNode, node.nextSibling, node.id, 'TmpNode');
        },
        onDragleave: function onDragleave(event) {
            var vm = this;
            var node = event.target;
            var rootNode = $("#rootDiv")[0];
            while (node.id === '') {
                node = node.parentNode;
            }console.log("----当前离开的tr的id ", node.id, "----当前被拖动tr的id", vm.dragId);
            if (node.id !== vm.dragId) {
                vm.deleteTmpNode(rootNode, node.id, 'TmpNode');
            }
        },

        /**
         * 分两种情况
         * 1) 上移 dragId > enteredId
         *   1.delete mate, index = drag index
         *   2.insert into mates, index=entered Index + 1
         * 2) 下移 dragId < enteredId
         *   1.insert into mates, index=entered index + 1
         *   2.delete mate, index = drag index
         */
        onDragend: function onDragend() {
            var vm = this;
            debugger;
            if (vm.enteredId !== '') {
                try {
                    debugger;
                    var enteredIndex = vm.getIndexById(vm.enteredId);
                    var dragIndex = vm.getIndexById(vm.dragId);
                    var dragMeta = vm.answer.metas.slice(dragIndex, dragIndex + 1)[0];
                    //                        let enteredMeta = vm.answer.metas.slice(enteredIndex,enteredIndex+1);
                    //                        vm._exchange(enteredIndex, dragIndex);

                    if (dragIndex > enteredIndex) {
                        vm.answer.metas.splice(dragIndex, 1);
                        vm.answer.metas.splice(enteredIndex + 1, 0, dragMeta);
                    } else if (dragIndex < enteredIndex) {
                        vm.answer.metas.splice(enteredIndex + 1, 0, dragMeta);
                        vm.answer.metas.splice(dragIndex, 1);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            vm.enteredId = '';
            console.log('drag end');
        },


        //插入兄弟元素
        /**
         * 将TmpNode 插入到目标元素前面
         * @param fnode 父级元素
         * @param targeNode 目标元素。
         * @param id 目标元素前面一个元素的id
         * 即将TmpNode 与 目标元素前面一个元素 绑定，当离开的时候 删除对应的TmpNode
         * @param tagString 加在id后面的一个标识符  用于和 包含数据项的tr的id 区分
         */
        addTmpNode: function addTmpNode(fnode, targeNode, id, tagString) {
            var vm = this;
            var TmpNode = document.createElement("div");
            TmpNode.id = id + tagString;
            TmpNode.innerHTML = "<div style='background:#f7e1b5;padding:20px 0 20px 0;'>将会移动到此处</div>";
            vm.addNode(fnode, TmpNode, targeNode);
        },
        addNode: function addNode(fnode, node, targeNode) {
            //如果是最有一个元素 调用appendChild
            if (targeNode) fnode.insertBefore(node, targeNode);else fnode.appendChild(node);
        },

        /**
         * 删除父级元素中的子元素
         * @param fnode see addTmpNode
         * @param id see addTmpNode
         * @param tagString see addTmpNode
         */
        deleteTmpNode: function deleteTmpNode(fnode, id, tagString) {
            var key = id + tagString;
            if (fnode.children[key]) {
                console.log("delete tmp div");
                fnode.removeChild(fnode.children[key]);
            }
        }
    },

    data: function data() {
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
            insertImgIndex: undefined,
            showEditIndex: '',
            mouseOverIndex: '',
            selectedIndex: '',
            dragIndex: '',
            dragId: '',
            enteredId: ''
        };
    },

    computed: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "SgC4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

(function (root, factory) {
  if (typeof define === 'function') {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(exports)) === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.TYPE = factory();
  }
})(this, function () {

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  var type = {
    MSG_TYPE: {
      TRAINEE: 'TRAINEE',
      WITHDRAW: 'WITHDRAW'
    }
  };

  return type;
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("f1Eh")(module)))

/***/ }),

/***/ "Sqb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"modal",staticClass:"modal fade ",attrs:{"id":"userListModal","tabindex":"-1","role":"dialog","aria-labelledby":"title","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog"},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('div',{staticClass:" text-center"},[_c('div',{staticClass:"row"},[_c('a',{staticClass:"close",attrs:{"data-dismiss":"modal","aria-hidden":"true"}},[_vm._v("×")]),_vm._v(" "),_c('h5',{staticClass:"modal-title",attrs:{"id":"title"}},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-query",attrs:{"type":"text","placeholder":"请输入用户昵称"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}}),_vm._v(" "),_c('span',{staticClass:"input-group-addon dll-search"},[_c('a',{staticClass:" ",on:{"click":function($event){_vm.search()}}},[_vm._v("搜索")])])])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.searched),expression:"!searched"}],staticClass:"modal-body recent overflow-y-auto"},[_c('h5',[_vm._v("常用答主")]),_vm._v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_c('tbody',_vm._l((_vm.recentList),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',{staticStyle:{"width":"70%"}},[_c('img',{staticClass:"img-avatar",attrs:{"src":a.headImgUrl}}),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(a.nickname))])]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-rounded btn-primary ",on:{"click":function($event){_vm.choose(a)}}},[_vm._v("选择")])])])}))])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.searched),expression:"searched"}],staticClass:"modal-body"},[_c('h5',[_vm._v("搜索结果")]),_vm._v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',{staticStyle:{"width":"70%"}},[_c('img',{staticClass:"img-avatar",attrs:{"src":a.headImgUrl}}),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(a.nickname))])]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-rounded btn-primary",on:{"click":function($event){_vm.choose(a)}}},[_vm._v("选择")])])])}))]),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalCount>0),expression:"totalCount>0"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}}),_vm._v(" "),_c('h5',{directives:[{name:"show",rawName:"v-show",value:(_vm.totalCount===0),expression:"totalCount===0"}],staticClass:"text-danger text-center"},[_vm._v(_vm._s(_vm.wording))])],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "T/Zt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("tltV");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff8af3d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("u1b0");
function injectStyle (ssrContext) {
  __webpack_require__("NxeV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ff8af3d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff8af3d0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TfLw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U1ku":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__ = __webpack_require__("KouB");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca6fc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__ = __webpack_require__("jPc0");
function injectStyle (ssrContext) {
  __webpack_require__("DZwR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7aca6fc1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca6fc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "U2La":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_choose_user_vue__ = __webpack_require__("EJ8m");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0071bd7c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_choose_user_vue__ = __webpack_require__("Sqb2");
function injectStyle (ssrContext) {
  __webpack_require__("ua9a")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_choose_user_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0071bd7c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_choose_user_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "UI73":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAFeCAYAAADNK3caAAAZ90lEQVR4nO3deZzddX3v8ff3d9bZM5mZzGRmEhKWBBKSQBMCWSZkIWGztkqrtdIFvVgEKyIoarSgYqVS10r1Xi+392q9V7pY22u9V1IMBgUEimxFRdFMJsvsM2f2s/x+v/5xMhgg6+R3vr9zzryej4cPHuDkdz5nMnnle77nd34/07x0tS8E7Bjf0gJ9p42RjDGSzCsezPeP/Gfpyz9FI/OK5ynln2P5PE85jvxITIpEJeP8+r97roybldycCvJkX/1tPfH/gRmKhj1AeTrGD2qBfn596eXIHvVBy+TPzfRT9Mv8ecr3ZXIZKZc59teYcnmys5Nz4i8BAASJ8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALHMkP+wZAGAW8VnxAoBthBcALCO8AGAZ4QUAywgvAFjmcFIDAFjks+IFAOsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALAsauNBItGoxsbGNDIwZOPhgKIwd16TksmEXNct2GMYJ6L0yKAyExNyIgEd1Jd8X6qob1QknpTvzWz+SCSivv4BZScmAxosDL6q6+tVW1sjN5cL7Kimeclv+DImsAO+5gGMUXpiUrFkQqtWLJNR/jcVKFfG5H/Gn3n+Bbmep2gkqCK++nGMslPjqmpsU/X8+XLTAf3B8qVIMqbRg/s0OditSDw5o9kmxse1YEG72ua3yC/RP/TxeEx9/YN68acvKlFVGcxBfd/CitcYDe3r1N2f+5Ruv/mdBX84oFhc80c36Jv3/6OaF51RkON7bk6ZsZQ27/yqlly9RmPdwRw3ViHl0tK3//S3NbJ/dEbhzeSyGkmN6r5/+pQuXn1BMIOF5HVvfbsef3RYzQGF15gC7/EaYzTQ26+285frPTe8vZAPBRSdK7ZdKmVzBXtBmRlLqX7ReWpatkaTA5KXPf3/uRkpXil1P/O8Bn72lOI1c2Y02/BQSstXLCv56H5vzyP617/7lhpaWwI7puNECrvi9Y2UHejRbXd9WIlEvJAPBRSd7Vs6VN3WqvHJKVUmT33VeFzGKD06pHnL16m6WYGtdqX8NsmBJ3cpPTas5NzmU94bNMbIGxjS1o5LghsqJDv//NNSNKp4NCrP8wI5ZiTiFG7Fa4zRYF+/2s9fqRuue2uhHgYoWosWtOvi1RdotH8w+IN7npxoTC0rN+bfVAtoCzUSlyYGpJ7nH1GssmZGb8i4nicl4tp+6aZghgrJd3bt1mMPPKiGhe2BRVeSHKeA4ZUxyvb36dabrlcykSjYwwDFbNum9dL4hEzA+w3ZyXHVzF+spmXrlR6VFNDhE7XSwM/3avAXzypRO3dGx0iNjqltyVnasrG0V7wf/8wXpURC8UiwmXScSGHCa4zRYG+f2s9foRv++PcL8RBASdixZZOchnqls9lAj5tO9avp3ItUf0aNMmMBHdTPv7HW8/weTQx0KxI79QWTkZTp69emSy5SdXVVQIPZ951du/XYdx9U44J2eV6wZ2QUdMWbGejNr3aD3tsCSsjqC1Zo5YplSg0Gew675+XUsnKDYlWSH9BpwiYqZcak7md/KCce10yW0b4kua62X7oxmKFCctdn7pWSScWiwSfSGBN8eKf3dtvOX6Eb/pi9XWDL+kvkDacC225wM1OqbGxV84oOZcYV3DZDtTS0d0j9P31SFbWNmsnG8djkpKoXtOuyzR3BDBWC7+zarUcfeFCNC9oCX+3m+QVY8RqTX+3eeL2SSfZ2ge1bOqRkUq4bzBs0UyMDajj7As09u12Z0UAOKd+XEjVS7388otFDexVNzuyc1fH+Aa1bc6EWtM0PZrAQ3PXZe6V4XLGA93an+X7A5/Hmz9vtU9vyFXrnddcGeWigZG1af7EWLjlLqdEgKmmUmxxX84oNqqiX3IC2jh1HcnNS9zMPy/c9yZx6Gowx0sRE/g3FEvX//m23Hv3ug2pcGPze7jTP84INr2+MsgM9uvVdrHaBaVWVFbp03Vpl+gZOe7vBd7NK1NSrZWWH3ExAA0qKVUoj+3PqfeFHStQ2aCbbDFOZjJy5DdqxtXRPI/v4p/NnMsQK9DFvSXJdN7jwTp/J0LpshW582x8EdVigLFy2uUPyvdO+ZkF6dFj1i5ercelKTY0ENJyfP42s7ydPKrXvZ4pX1czoMKnBYa1atVwXrlge0GB25fd2v3d4bze483ZfzXVzwYV3erV727veoUScT6kBR9qxeaPqzlio0dO5UpcxSo8Nad75l6hmvpQL6qJfJr+z0P3sHmUnx2RmsNozxsgfHta2jesCGsq+6fN2C7nalSTfD+jNtenVbtvylbrx7ax2gVdraZ6n9Rf9hib6+me83eB7riKxhFpWbspvBAS0BRlNSON9+U+rxavrZnTcnOtKyaR2bCnNbYZ/feB7euzlMxkKt9qVAnxz7dd7u6x2gWO57NIN0tTMl6nZiVHVtZ+jecsuVnpEwX5a7cUXNfjSc0rUzPDTaqkRnXHeEnWsXxvMUJblV7vJgq92pwUS3r6D3bpkxxW65Ya3BXE4oCxdvnWTYvOaNJlOn/ovNkbp1ICalq1V3cIKZccDGsqXokmp57k9mhrulxM99YWTMUbZgQFtXre2JC8P8O3vPqgfffff1GRhtTstkKuTxYzRgvb5uv+fvq2JyVK+2jxmPd/X5OiYrrxquxYvXBDooZefu0QXrlqpxx9/UsmW5lOey/c9tazaqGji8KfVAljxOlEpPZL/tFo0UaGZ7DN4vif5h89XLoBcztX/+ea/aGJiQvECvKL+wn/7G8Xn1CsaiZRWeBvbW/X/dz2kv//qN4I4HBAe35fcId14207de89dgR9+W8c6Pb7rezKneFeG3NSEquct1LzzO/LXZgj0oji96n/xKSXqGmZ0jNHxCc1ZfIYuK9DHhH/w2BP6wze/UVJVfkM6YMmmRjW1tyoX8PU0jieQ8OayWVVWVqjyrMVBHA4IVV9vnx554scFOfaOLR36ZFWVsrncKd0SKD0yoAWXXKmGM+flr0YWAN+XYlVSz/M/0Hhvl2pazzzlYxhjNNk3qG1vuFrNTY3BDPYqDzy0R1KtWs5dUrBbCNmMrmTpZpenIhqNanRsTCM9vfl7ZATxV7vnqaa5SbU1Ncqd4IZ1juMol8up72C35Lo67dsH+L5kpLnzW5RMJgt648OZiMZiGhgY1NTAoBTkGwuep+qmRtXNqVUuG9xNAm2om1uvZ59/Qf/+9HNafcGKQI+9fu0anXXeUnV27lPD3PqT/FVGufSkmldsUKJWmkoFM4vjSG5a6nnuB0f8WTvVsPlSelLbNm0IZqij2P3wYzJ1tSV737ajKbrwjo+Nq7WlWVdt36Jczj3tb7YxRrFoVE8//4IOHepW4gRXS8tkMkokEvqt375ayWTyhKE+kYjjyPN9/fvTz2kolSq6sz7GUyktP3eJli09WxOTU4Ec0xgpHovr2Rd+qv1dB5SoKK0r1CViMXkDg3pg957AwxuPx7R5/Vrd99TTMg1zT+rn28tmlKxrVPOKTcrN4H25Y4lVSamuSfX+5IkZf1ptMp1RbN68gn1a7fmfvKinnnlOdXNndrZFsSq68A53d+v1V+3Q//rrTwd63Otvvl3//Uv3qfnMRcf9utGxcdXPmaNv/e1XAn38rb/1Fv1q9y/V3FpcFw8Z7tqnt7z/Ft36rusDP/Z7PvQxff4vPqvmc84K/NiF5Pu+VFmpBx9+VB+85abAj799c4fuu/cr8jzvpM7pTY8OquncNZq3bKkyYwrkNu6+pIp6qfPhxzWy/+eqbGyd0XFSg0O6+OI1Wrb0nNMf6ih27d6jTG+f5i49hxVvQRlz2qvMo8m5Ock58Q+5MUa+72tsfFzVVcFdyNnzvNPftigIR+lMgB/6P0I2l8u/ni1B1Y0N+tGTP9a+rgNauKAt0GNv27RBDWcu0sj4uOqqq0/49ZnxES1Yf7Xmni2NdEkzOOPrtZz8Rc8PPf19uelJGScyo3urKZXS1o2FuyjOg3t+KCWTZRVdqUjDW4hvsuf5pxS+bMDx9/1Te3x7TMFOoSnev2xOrLoiqe6fv6QHHnpY/+UPfi/QYzc21Gvj2tX653/4lubU1Jzg591XVVObep79ob7znpeUncgE8raHcRzJ99Xz3KOqmrdgRvdWy+Zcqapal28tzGlk3T19euTJH6uycWZnWxSz4gsvUAyMkaIR7XroB4GHV5K2b96of/76/fJPuK9qFK+u06Fn9ij98IicaEB/kfn51lY2zFOsolqee+oLjdRwSucsP1fr164OZqZX2fX9hzXU2aXmMjxbivBiVvJPcLED3/cVb2jQnkef0HBqRHPqagN9/B1bL1W8pVkTk1OqOMqnvY7c+/VyGSWq5yhRPSfQGaZfjXhu7qRWvEd+hTFGuYEBbbn2TYrFYsHOddiu3Q+/PNfxXhUEfSNRGwgvZhXHceS6rno7u6QTbSf5vroPvaivfuMf9e4/uS7QOc45c5HOOWux/uOHuzQaOcppZZ736xg6jgL7xMQrHuPwqY3GnNyFz48cwXUljRTsFj/7DxzS1/7m65KbUs8vfnnsL6yoUOvh26+X0j4w4cWsksnlNJIa0ftuf4/aWo//6TEjo8H+AS1dUpizMr5490f10Pd3aE7DkeHN1y2dTst182c9OLG4jOMEFhZjjHzPk5vN5C9R6DhyXr6j8NEfw0iKH3E2RTaTk4lGdOVlmwOZ6dWyuZzu/NhO1dRUyTnGitYYo7379uu+v71fiXhcEUsXuAkC4cWs4TiOBvZ2qmPbZn3qox8Kexxt3rhOm0v4+rWFtPiMBbrj/Tef8Os6uw7o81/+H4rURkoqvKV5rg8wA5lcTvJ8ffQDt4Q9CgLSdeCgIpFIye3zEl7MCo7jaKBzv7a+7nJt6SjdmzGiPBBezAqZbE7yPe285V1hjwIQXpQ/x3E00NWlLVdfrq0d7KkifIQXZS+Tze/tfuS9wV93AZgJwouy5jiOBvblV7vs7aJYEF6UtXQuJ3mePnIre7soHoQXZctxHA12dmnz1ZdrC+fLoogQXpSt6dXun932p2GPArwC4UVZml7tbnndFax2UXQIL8pSOpeTXJfVLooS4UXZcRxHg3v3actvXqnNGy4JexzgNQgvyk46l83v7d7KahfFifCirDjGaLBzv3a88fXavJHVLooT4UVZmUynlais1F9+9INhjwIcE9fjRVkxxqhpQZvu/uxfK5fLBX7TUpw63/c13NunD33wvdpeoDtWlBrCi7KSTCSUzWT0v7/xD1I2e3K3tEFh+b401as3vfkawnsY4UVZmb5VfXPr/JAnwTTf99W7T6qprgp7lKLBcgAALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAyrk6GWcUYI0nq6euXPzUlOaw9Cu7wZSHHJybCnqRI+IQXs4wxGhwa0ppVK9TS3KRMNhv2RGXP930NdvdqYXtb2KMUDcKLWcNxHPUcPKRFZy7SQ//3flVWVoQ9EmYpXmdh1sh5nrzUsD7x4fcTXYSK8GJWiEQc9e3dp3VX7NDvvfE3wx4Hsxzhxawwmc5Inqd77uTuwwgf4UXZi0QiGnppr65565u04eI1YY8DEF6UN2OMRkbHFKmv01/ccXvY4wCSCC/KnHEcjXV16t03Xa+zFp0R9jiAJMKLMmaM0WD/gOYuPlN3vO/msMcBXsZ5vChbvpHSvYd095f+SnW1NWGPA7zMOfwJSqCsOI6jvgOHdM6ai/Tud1wX9jjAKziG8qIMZV1X3siI/vwjt8tx+BlHcXGMYZsX5cVxHPV37tP6qy7X77z+yrDHAV7DiUbZ5kV5mcpkJM/XPXd8IOxRgKNyojHCi/Iy1NmlG997k9avXR32KMBRRR22GlBG0um0apoadc1Vl+vgoR5lc7mwR4KkbC6nlqZGVVdXhT1KUYhKftgzAIGJxWKqrqnRO2/bqbHxCXmeF/ZIs57v++rZt19f+59f0rVvekPY4xQF9hlQViKRiDKZtIaGhuX7niTOaAib7/vS5IiyWV59TIu6LisClA/f92VkVF1VGfYoOMz3fU0maxTj/aSXOa7L30IAYJOTy7lhzwAAs4qT3wcDANjCuWQAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwLJZc4HM8YkJaWpYw6k5x/269HBKqerq/MWbS4gxRp7naWR0TJ7nyZiTvQD4iCanpgo6WzExkmSMRsfGlMlk5TisPQrN931paliZTCbsUYrGrAlvQ329qhvbNK+15bhfl6qqUmvLvJL7A+kfjklzU6MS8bhy3sld7rNnbFx1tTUFnq54mEhEqVRK1VVVam+t455sNvi+el1XlZVcnH7arAnvX358pz6+8zZFThBU3/flOI5qa0onRpGIo4Mv7dW6Szfqm1/7r6pIJnSy11nOua5qqmbHDQiNMRro61P93Lna/S/fUHtrizKZbNhjzQqu56m2pjrsMYrGrAlvTXW1aqrL7zfeSBqfmJJ8X5+/+w61zGsKe6Si5UnK9PXqY/fcpfOWnB32OJjFSuv1NF7DRCJK7f2VrrvhbbrowlVhj1O0HMdRb+c+rdm2Ve/4o98PexzMcoS3hBljNNQ/oNq2dn3qz24Pe5yiNjWVllxPX/jkHWGPAsyerYZy5Ema6j2ou798rxob5oY9TtGKRCIa+tWLuvad12vdRavDHgdgxVuqHMdR7779WrZug27+k+vCHqdoGWM0NDioqtb5uufOD4Q9DiCJFW/JSmez0uSkvvDJO8Mepaj5xmiy+4Du+eLneeMRRYMVbwmKRCIa/MUv9YY/fIu2Xboh7HGKluM46unar6Vr1+m2m64PexzgZYS3xBhjlEqlFJtbr8/d9eGwxylq6WxWGhvXF+7mDTUUF8Jbahyj8QP79KHbb9HC9rawpyla068KXn/tm7Vjy6awxwFegfCWEMdx1HvgkBatulA733tT2OMUrfyrghFF6ufoc5/4SNjjAK/Bm2slJOu68lLD+swn7lMsym/dMTlG4wc69eFP3qXFCxeEPQ3wGkW54j35K2uVjtN9Ro7jqP9Xnbr8d6/RG67eEchMhRbG76NjjPoOdmvRqgt15/tutv74sKvULmY1rfimdl3F47GwpwhcJBqVXG/Gv350dEyNrfP19S9/NsCpCiuZSEgnebGeoEylM1LO1de/8leKRCJWHxv21dfVyvO80ruM6/xzV/teEc2cmZpSy/wWrVp+XtijBOrxp57R0NCw4on4jH795NSU5rc0q+PiNRoZy19z92h8P78KONFV2Gx44Wc/V1dnl+KVFdYeM5vNKllRoSu2dGhicvZcZ3i2Gkql9MRTzygSicpxSuOVsmOKMLyRaFSjo6Ma7ekLe5RA1bfNV0VFUu4MV4CRSETpdFoDB7slz5OO+zLel4rg97SqqUF1c+bIzdq79KLjOPI8Tz37D0pca7f8JRNqbWstqVVvUYYXAMqZY4pxjxcAyhzhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALHO4BjoA2OOLFS8AWEd4AcAywgsAlhFeALCM8AKAZY4JewIAmEWMWPECgHWcxwsAFuXP46W8AGCPz1YDAFjniHfXAMAew4oXAKwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBljs9HhgHAGp+PDAOAfYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGAZ4QUAywgvAFhGeAHAMsILAJYRXgCwjPACgGWEFwAsI7wAYBnhBQDLCC8AWEZ4AcAywgsAlhFeALCM8AKAZYQXACwjvABgGeEFAMsILwBYRngBwDLCCwCWEV4AsIzwAoBlhBcALCO8AGBZNOwBypN/3H8NmjGSMUaSecWD+v6R/yx9+adoZF7xPKX8cyyf5ynHkR+JSZGoZI5YG3mujJuV3JwK9mRf/a099n/EafhPwl9a2GG/q7UAAAAASUVORK5CYII="

/***/ }),

/***/ "Wbwb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admin_js__ = __webpack_require__("qGR4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_admin_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_admin_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import store from '@/store/index.js'
//    import Confirm from "@/components/confirm";

/* harmony default export */ __webpack_exports__["a"] = ({
    //        components: {
    //            Confirm
    //        },
    mounted: function mounted() {},
    data: function data() {
        return {
            username: '',
            password: '',
            showModal: false
        };
    },

    methods: {
        login: function login() {
            var _this = this;

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_admin_js___default.a.login(this.username, this.password).then(function (data) {
                _this.$router.push({ path: '/topicList' });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ "WuC/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_list_grid_div__ = __webpack_require__("ELb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_comment__ = __webpack_require__("lVAl");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: { Confirm: __WEBPACK_IMPORTED_MODULE_1__components_confirm__["a" /* default */], AnswerMetas: __WEBPACK_IMPORTED_MODULE_2__components_list_grid_div__["a" /* default */], Comment: __WEBPACK_IMPORTED_MODULE_3__components_comment__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;

        //            vm.answerId = vm.$route.params.answerId;
        //            vm.type = vm.$route.params.type;
        //            console.log(vm.answerId)
        console.log("answer", vm.answer);
        vm.getComments();
        //            vm.getTags();
    },

    props: [],
    data: function data() {
        return {

            SET_COMMENT_HIDE_WORDING: '确定要隐藏这个评论吗？',
            SET_COMMENT_SHOW_WORDING: '确定要取消隐藏这个评论吗？',
            DELETE_COMMENT_WORDING: '确定要删除这个评论吗',

            answer: JSON.parse(sessionStorage.getItem("answer")),
            type: '', //answers  comments

            tagMap: {},
            metas: {},
            comments: {
                //                    list: [{
                //                        user: {
                //                            headImgUrl: ''
                //                        },
                //                        _id: {
                //                            $oid: '1'
                //                        },
                //                        createdAt: {
                //                            $date: ''
                //                        },
                //                    }, {
                //                        user: {
                //                            headImgUrl: ''
                //                        },
                //                        _id: {
                //                            $oid: '2'
                //                        },
                //                        createdAt: {
                //                            $date: ''
                //                        },
                //                    }, {
                //                        user: {
                //                            headImgUrl: ''
                //                        },
                //                        _id: {
                //                            $oid: '3'
                //                        },
                //                        createdAt: {
                //                            $date: ''
                //                        },
                //                    }],
                //                    totalCount: 1
            },

            commentsParams: {
                answerId: '',
                page: 1,
                perPage: 10
            },

            tags: {},
            actFn: '',
            confirmId: '',
            confirmWording: '',
            showModal: false,
            isShow: '',
            editClickedCommentId: ''
        };
    },

    methods: {
        //actFun 方法名
        baseConfirm: function baseConfirm(id, wording, actFn) {
            this.confirmId = id;
            this.confirmWording = wording;
            this.showModal = true;
            this.actFn = actFn;
        },
        setShowConfirm: function setShowConfirm(id, isShow, wording, actFn) {
            this.isShow = isShow;
            this.baseConfirm(id, wording, actFn);
        },
        doConfirm: function doConfirm() {
            this.actFn();
        },
        back2answer: function back2answer() {
            var url = sessionStorage.getItem("answerUrl");
            if (url) this.$router.push(url);else window.history.go(-1);
        },

        /**
         * COMMENT
         */
        getComments: function getComments() {
            var vm = this;
            vm.commentsParams.answerId = vm.answer._id.$oid;
            console.log(vm.commentsParams);
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.commentsOfAnswer(vm.commentsParams).then(function (data) {
                vm.comments = data;
            });
        },
        setCommentShow: function setCommentShow() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.setCommentShow(vm.confirmId, vm.isShow).then(function (data) {
                vm.getComments();
                if (vm.isShow) vm.$message.success("取消隐藏成功");else vm.$message.success("隐藏成功");
            });
        },
        deleteComment: function deleteComment() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.deleteComment(vm.confirmId).then(function (data) {
                vm.loadData();
            });
        },
        commentsPageChange: function commentsPageChange(page) {
            this.commentsParams.page = page;
            this.getComments();
        },
        showEditer: function showEditer(id) {
            if (id) this.editClickedCommentId = id;else {
                this.editClickedCommentId = '';
                this.loadData();
            }
        }
    },
    computed: {}

});

/***/ }),

/***/ "Wz6n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerscomments_vue__ = __webpack_require__("/9nP");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac47318_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerscomments_vue__ = __webpack_require__("S1OC");
function injectStyle (ssrContext) {
  __webpack_require__("F5ez")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ac47318"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerscomments_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac47318_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerscomments_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "XWzf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("sDxe");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af4808e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("Mxp2");
function injectStyle (ssrContext) {
  __webpack_require__("xlMy")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4af4808e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4af4808e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_list_vue__ = __webpack_require__("Hvzj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_topic_add_vue__ = __webpack_require__("T/Zt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__ = __webpack_require__("6RkX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_index_vue__ = __webpack_require__("jT7l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_layout_index_vue__ = __webpack_require__("osAX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tag_list_vue__ = __webpack_require__("3AVo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tag_add_vue__ = __webpack_require__("cO2l");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tag_edit_vue__ = __webpack_require__("cdcD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_answer_list_vue__ = __webpack_require__("2Tzx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_answer_detail_vue__ = __webpack_require__("9L7j");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_question_list_vue__ = __webpack_require__("aTCu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_question_detail_vue__ = __webpack_require__("XWzf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_question_add_vue__ = __webpack_require__("Q0xE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_question_answerscomments_vue__ = __webpack_require__("Wz6n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_question_commentsofanswer_vue__ = __webpack_require__("radp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_answerManage_list_vue__ = __webpack_require__("m6z7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_answerManage_edit_vue__ = __webpack_require__("BCDO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_answerManage_add_vue__ = __webpack_require__("rIBj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_imageMore_list_vue__ = __webpack_require__("LGJj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_weixin_test_index_vue__ = __webpack_require__("B0V9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_ddUser_ddUser_vue__ = __webpack_require__("aSKI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_question_answerinfo__ = __webpack_require__("4GbN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_activity_activity__ = __webpack_require__("5Q15");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_message_list__ = __webpack_require__("D1Ph");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_message_newMessage__ = __webpack_require__("FhpN");


//components


























__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [{ path: '/login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_index_vue__["a" /* default */] }, {
        path: '/', component: __WEBPACK_IMPORTED_MODULE_6__pages_layout_index_vue__["a" /* default */], redirect: '/topicList',
        children: [{ path: 'topicList', component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_list_vue__["a" /* default */] }, { path: 'addTopic', component: __WEBPACK_IMPORTED_MODULE_3__pages_topic_add_vue__["a" /* default */], meta: { keepAlive: true } }, { path: 'tagList', component: __WEBPACK_IMPORTED_MODULE_7__pages_tag_list_vue__["a" /* default */] }, { path: 'addTag/', name: 'addTag', component: __WEBPACK_IMPORTED_MODULE_8__pages_tag_add_vue__["a" /* default */] }, { path: 'editTag/:tagId', name: 'editTag', component: __WEBPACK_IMPORTED_MODULE_9__pages_tag_edit_vue__["a" /* default */] }, { path: 'editTopic/:topicId', component: __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__["a" /* default */], props: true }, { path: 'topicDetail/:topicId', component: __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__["a" /* default */], props: true }, { path: 'questionList', component: __WEBPACK_IMPORTED_MODULE_12__pages_question_list_vue__["a" /* default */] }, { path: 'questionAdd', component: __WEBPACK_IMPORTED_MODULE_14__pages_question_add_vue__["a" /* default */] }, { path: 'question/:questionId', name: 'questionDetail', component: __WEBPACK_IMPORTED_MODULE_13__pages_question_detail_vue__["a" /* default */] }, { path: 'question/:questionId/answerscomments', name: 'answerscomments', component: __WEBPACK_IMPORTED_MODULE_15__pages_question_answerscomments_vue__["a" /* default */] }, { path: 'question/:questionId/answers/:answerId/comments', component: __WEBPACK_IMPORTED_MODULE_16__pages_question_commentsofanswer_vue__["a" /* default */] }, { path: 'answerInfo/:questionId', name: 'answerInfo', component: __WEBPACK_IMPORTED_MODULE_23__pages_question_answerinfo__["a" /* default */], props: true },
        //答主相关
        { path: 'answerManageList', component: __WEBPACK_IMPORTED_MODULE_17__pages_answerManage_list_vue__["a" /* default */] }, { path: 'answerEdit/:answerId', component: __WEBPACK_IMPORTED_MODULE_18__pages_answerManage_edit_vue__["a" /* default */] }, { path: 'answerAdd', component: __WEBPACK_IMPORTED_MODULE_19__pages_answerManage_add_vue__["a" /* default */] }, { path: 'answer/:answerId', component: __WEBPACK_IMPORTED_MODULE_11__pages_answer_detail_vue__["a" /* default */] }, { path: 'answerList', component: __WEBPACK_IMPORTED_MODULE_10__pages_answer_list_vue__["a" /* default */] }, { path: 'imageMoreList', component: __WEBPACK_IMPORTED_MODULE_20__pages_imageMore_list_vue__["a" /* default */] }, { path: 'ddUserList', component: __WEBPACK_IMPORTED_MODULE_22__pages_ddUser_ddUser_vue__["a" /* default */] },

        //微信页面测试
        { path: 'weixin', component: __WEBPACK_IMPORTED_MODULE_21__pages_weixin_test_index_vue__["a" /* default */] }, { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_24__pages_activity_activity__["a" /* default */] }, { path: 'messageList', component: __WEBPACK_IMPORTED_MODULE_25__pages_message_list__["a" /* default */] }, { path: 'newMessage', component: __WEBPACK_IMPORTED_MODULE_26__pages_message_newMessage__["a" /* default */], name: 'newMessage' }]
    }]
}));

/***/ }),

/***/ "ZA+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content overflow-hidden"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4"},[_c('div',{staticClass:"block block-themed animated fadeIn"},[_c('div',{staticClass:"block-header bg-primary"},[_c('ul',{staticClass:"block-options"},[_c('li',[_c('a',{on:{"click":function($event){_vm.showModal = true}}},[_vm._v("忘记密码?")])])]),_vm._v(" "),_c('h3',{staticClass:"block-title"},[_vm._v("登录")])]),_vm._v(" "),_c('div',{staticClass:"block-content block-content-full block-content-narrow"},[_c('h1',{staticClass:"h2 font-w600 push-30-t push-5"},[_vm._v("问答社区管理后台")]),_vm._v(" "),_c('p',[_vm._v("欢迎, 请登录.")]),_vm._v(" "),_c('form',{staticClass:"js-validation-login form-horizontal push-30-t push-50",attrs:{"method":"post"}},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-xs-12"},[_c('div',{staticClass:"form-material form-material-primary "},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.username),expression:"username"}],staticClass:"form-control",attrs:{"type":"text","id":"login-username","name":"login-username"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value}}}),_vm._v(" "),_c('label',{attrs:{"for":"login-username"}},[_vm._v("用户名")])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-xs-12"},[_c('div',{staticClass:"form-material form-material-primary "},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"type":"password","id":"login-password","name":"login-password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('label',{attrs:{"for":"login-password"}},[_vm._v("密码")])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-xs-12 col-sm-6 col-md-4"},[_c('a',{staticClass:"btn btn-block btn-primary",on:{"click":_vm.login}},[_c('i',{staticClass:"si si-login pull-right"}),_vm._v(" 登录")])])])])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "a+xo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic__ = __webpack_require__("q0DR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_topic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_confirm__ = __webpack_require__("U1ku");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */], Confirm: __WEBPACK_IMPORTED_MODULE_3__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        vm.topicId = vm.$route.params.topicId;
        vm.queryParams.topicId = vm.topicId;
        vm.loadData();
    },

    props: {},
    data: function data() {
        return {
            p: {
                title: '',
                desc: '',
                bannerUrl: '',
                questionIds: [],
                shareImgUrl: ''
            },
            topicQuestions: {},
            topicQuestionsParams: {
                page: 1,
                perPage: 10,
                topicId: ''
            },
            questionsSearched: {},
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: '',
                topicId: ''
            },
            isSearched: false,
            topicApprovingQuestions: {},
            topicApprovingQuestionsParams: {
                page: 1,
                perPage: 10,
                topicId: ''
            },

            removeQuestionId: '',

            wording: '',
            showWording: false,

            confirmWording: '',

            showModal: false,

            topicId: '',

            actFn: '',

            image: {
                width: 0,
                height: 0
            }

        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.p.bannerUrl = data;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    console.log(data);
                    var image = new Image();
                    image.onload = function () {
                        vm.image.width = image.naturalWidth;
                        vm.image.height = image.naturalHeight;
                        console.log(image.width, image.height);
                    };
                    image.src = data;
                };
                reader.readAsDataURL(file);
            });
        },
        shareImgChange: function shareImgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.$set(vm.p, 'shareImgUrl', data);
            });
        },
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.detail(vm.topicId).then(function (data) {
                vm.p = data;
            });
            vm.loadTopicQuestions();
            vm.loadTopicApprovingQuestions();
        },
        loadTopicQuestions: function loadTopicQuestions(page) {
            var vm = this;
            vm.topicQuestionsParams.topicId = vm.topicId;
            //                vm.topicQuestionsParams.page = page || 1;
            console.log("page", vm.topicQuestionsParams.page);
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.topicQuestions(vm.topicQuestionsParams).then(function (data) {
                vm.topicQuestions = data;
            });
        },
        isQuestionAdded: function isQuestionAdded(questionId) {
            var vm = this;
            for (var q in vm.topicQuestions.list) {
                if (vm.topicQuestions.list[q]._id.$oid === questionId) {
                    return true;
                }
            }
            return false;
        },
        loadTopicApprovingQuestions: function loadTopicApprovingQuestions(page) {
            var vm = this;
            vm.topicApprovingQuestionsParams.topicId = vm.topicId;
            //                vm.topicApprovingQuestionsParams.page = page || 1;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.topicApprovingQuestions(vm.topicApprovingQuestionsParams).then(function (data) {
                vm.topicApprovingQuestions = data;
            });
        },
        deleteAddedQuestion: function deleteAddedQuestion(questionId) {
            var vm = this;
            var qs = vm.topicQuestions;
            for (var i = 0; i < qs.length; i++) {
                if (qs[i]._id.$oid === questionId) {
                    qs.splice(i, 1);
                    if (qs.length === 0) {
                        vm.showWord('该专题下还没有问题，快去添加吧');
                    }
                    return;
                }
            }
        },
        addQuestionToTopic: function addQuestionToTopic(questionId, tab) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.addQuestionToTopic(vm.topicId, questionId).then(function (data) {
                vm.loadTopicQuestions(vm.topicQuestionsParams.page);
                if (tab === 'search') vm.search();else if (tab === 'qApproving') vm.loadTopicApprovingQuestions(vm.topicApprovingQuestionsParams.page);
            });
        },
        deleteQuestionFromTopic: function deleteQuestionFromTopic() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.deleteQuestionFromTopic(vm.topicId, vm.removeQuestionId).then(function (data) {
                vm.loadTopicQuestions(vm.topicApprovingQuestionsParams.page);
            });
        },

        //actFun 方法名 remove
        beforeConfirm: function beforeConfirm(questionId, wording, actFn) {
            this.removeQuestionId = questionId;
            this.confirmWording = wording;
            this.showModal = true;
            this.actFn = actFn;
        },
        remove: function remove() {
            this.deleteQuestionFromTopic();
        },
        doConfirm: function doConfirm() {
            var vm = this;
            vm.actFn();
        },
        search: function search() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.searchQuestions(vm.queryParams).then(function (data) {
                vm.questionsSearched = data;
                $('#qAddedLi').removeClass('active');
                $('#qApprovingLi').removeClass('active');
                $('#qSearchedLi').addClass('active');
                $('#qAddedDiv').removeClass('in active');
                $('#qApprovingDiv').removeClass('in active');
                $('#qSearchedDiv').addClass('in active');
                vm.isSearched = true;
            });
        },
        pageChange: function pageChange(page) {
            var vm = this;
            vm.queryParams.page = page;
            vm.search();
        },
        save: function save() {
            var vm = this;
            var topic = {
                topicId: vm.topicId,
                title: vm.p.title,
                desc: vm.p.desc,
                bannerUrl: vm.p.bannerUrl || '',
                isShow: vm.p.isShow,
                shareImgUrl: vm.p.shareImgUrl || ''
            };
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.editTopic(topic).then(function (data) {
                vm.$message.success('成功！');
                vm.$router.push('/topicList');
            });
        },
        checkAddedQues: function checkAddedQues() {
            var vm = this;
            if (vm.topicQuestions.length === 0) vm.showWord('该专题下还没有问题，快去添加吧');
        },
        showWord: function showWord(wording) {
            var vm = this;
            vm.wording = wording;
            vm.showWording = true;
        },
        cancelConfirm: function cancelConfirm() {
            var vm = this;
            vm.$router.push('/topicList');
        },
        check: function check() {
            var vm = this;
            if (vm.p.title.trim() === '') {
                vm.showWord('标题不能为空');
                return false;
            }
            if (vm.topicQuestions.totalCount === 0) {
                vm.showWord('问题不能为空');
                return false;
            }
            return true;
        },
        move: function move(question, step) {
            var vm = this;
            var params = {
                topicId: vm.topicId,
                questionId: question._id.$oid,
                toSeq: question.seq + step
            };
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.moveTopicQuestion(params).then(function (data) {
                vm.loadTopicQuestions();
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "a5fg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("昵称：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.nickname),expression:"p.nickname"}],staticClass:"form-control dll-nickname",attrs:{"type":"text","placeholder":"昵称"},domProps:{"value":(_vm.p.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "nickname", $event.target.value)}}})]),_vm._v("\n                        2-20个字符\n                    ")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("头像：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('img',{staticClass:"img-avatar",attrs:{"src":_vm.p.headImgUrl}}),_vm._v(" "),_c('file-wrap',{staticClass:"btn btn-link dll-headimg",on:{"on-file-change":_vm.imgChange}},[_vm._v("更改")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("自我描述")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.desc),expression:"p.desc"}],staticClass:"form-control dll-desc",attrs:{"type":"text","placeholder":"自我描述","rows":"5"},domProps:{"value":(_vm.p.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "desc", $event.target.value)}}})]),_vm._v("\n                        30个字符\n                    ")]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 "},[_c('a',{staticClass:"btn btn-success btn-block dll-save",on:{"click":_vm.save}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('router-link',{staticClass:"btn btn-danger btn-block dll-cancel",attrs:{"to":"/answerManageList"}},[_vm._v("取消\n                                    ")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('h5',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWording),expression:"showWording"}],staticClass:"text-danger"},[_vm._v(_vm._s(_vm.wording))])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    编辑答主\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "aSKI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ddUser_vue__ = __webpack_require__("GWdk");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ecf7c84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ddUser_vue__ = __webpack_require__("qtlc");
function injectStyle (ssrContext) {
  __webpack_require__("N5v2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ecf7c84"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ddUser_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ecf7c84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ddUser_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "aTCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("z06s");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_396d4b14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("1G/M");
function injectStyle (ssrContext) {
  __webpack_require__("ghg6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-396d4b14"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_396d4b14_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "bC5r":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "biRm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-1 fl"},[_c('router-link',{staticClass:"btn btn-sm btn-primary fl dll-add",attrs:{"to":"/addTag"}},[_vm._v("新建标签")])],1)])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',{on:{"drop":_vm.onDrop}},_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid,staticStyle:{"padding-top":"50px"},attrs:{"draggable":"true","id":a._id.$oid},on:{"dragstart":_vm.onDrag,"dragenter":_vm.onDragenter,"dragleave":_vm.onDragleave,"dragend":_vm.onDragend}},[_c('td',{attrs:{"draggable":"false"}},[_c('img',{staticClass:"pic",attrs:{"src":a.iconUrl,"draggable":"false"},on:{"drop":_vm.onDrop}})]),_vm._v(" "),_c('td',{attrs:{"draggable":"false"}},[_vm._v(_vm._s(a.name))]),_vm._v(" "),_c('td',{attrs:{"draggable":"false"}},[_c('router-link',{staticClass:"btn btn-xs ",attrs:{"draggable":"false","to":'/editTag/'+a._id.$oid}},[_vm._v("编辑\n                                ")]),_vm._v(" "),_c('a',{staticClass:"btn btn-xs ",attrs:{"type":"button","data-toggle":"tooltip","draggable":"false"},on:{"click":function($event){_vm.removeConfirm(index)}}},[_vm._v("删除\n                                ")])],1)])}))])])])])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":"确定要删除话题吗？","show":_vm.showModal},on:{"confirm":_vm.remove,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    话题标签\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("图片")]),_vm._v(" "),_c('th',[_vm._v("标签")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bvjg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_vm._m(0),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"tab-content"},[_c('div',{staticClass:"tab-pane fade in active",attrs:{"id":"headFloat"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        显示状态：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.floatConfig.isShow),expression:"floatConfig.isShow"}],staticClass:"radio dll-show-true",attrs:{"type":"radio","name":"floatConfig.isShow"},domProps:{"value":true,"checked":_vm._q(_vm.floatConfig.isShow,true)},on:{"change":function($event){_vm.$set(_vm.floatConfig, "isShow", true)}}}),_vm._v("显示\n                                        ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline dll-show-false"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.floatConfig.isShow),expression:"floatConfig.isShow"}],staticClass:"radio ",attrs:{"type":"radio","name":"floatConfig.isShow"},domProps:{"value":false,"checked":_vm._q(_vm.floatConfig.isShow,false)},on:{"change":function($event){_vm.$set(_vm.floatConfig, "isShow", false)}}}),_vm._v("隐藏\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        活动图标：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('a',{staticClass:"btn btn-primary dll-icon",on:{"click":function($event){_vm.upload('icon')}}},[_vm._v("\n                                            上传图片\n                                        ")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('img',{staticClass:"max",attrs:{"src":_vm.floatConfig.icon}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        内容图片：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('a',{staticClass:"btn btn-primary dll-content",on:{"click":function($event){_vm.upload('content')}}},[_vm._v("\n                                            上传图片\n                                        ")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('img',{staticClass:"max",attrs:{"src":_vm.floatConfig.contentImgUrl}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('a',{staticClass:"btn btn-primary dll-apply-icon",on:{"click":_vm.applyFloatConfig}},[_vm._v("应用")])])])])])]),_vm._v(" "),_c('div',{staticClass:"tab-pane fade",attrs:{"id":"roundtableBanner"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        显示状态：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.roundtableConfig.isShow),expression:"roundtableConfig.isShow"}],staticClass:"radio dll-show-roundtable-true",attrs:{"type":"radio","name":"roundtableConfig.isShow"},domProps:{"value":true,"checked":_vm._q(_vm.roundtableConfig.isShow,true)},on:{"change":function($event){_vm.$set(_vm.roundtableConfig, "isShow", true)}}}),_vm._v("显示\n                                        ")]),_vm._v(" "),_c('label',{staticClass:"radio-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.roundtableConfig.isShow),expression:"roundtableConfig.isShow"}],staticClass:"radio dll-show-roundtable-false",attrs:{"type":"radio","name":"roundtableConfig.isShow"},domProps:{"value":false,"checked":_vm._q(_vm.roundtableConfig.isShow,false)},on:{"change":function($event){_vm.$set(_vm.roundtableConfig, "isShow", false)}}}),_vm._v("隐藏\n                                        ")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        横幅图片：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('a',{staticClass:"btn btn-primary dll-roundtable",on:{"click":function($event){_vm.upload('roundtable')}}},[_vm._v("\n                                            上传图片\n                                        ")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.roundtableConfig.banner),expression:"roundtableConfig.banner"}],staticClass:"max",attrs:{"src":_vm.roundtableConfig.banner}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("\n                                        页面链接：\n                                    ")]),_vm._v(" "),_c('div',{staticClass:"col-md-5 "},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.roundtableConfig.link),expression:"roundtableConfig.link"}],staticClass:"form-control dll-link",attrs:{"type":"text"},domProps:{"value":(_vm.roundtableConfig.link)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.roundtableConfig, "link", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 "},[_c('a',{staticClass:"btn btn-primary dll-apply-roundtable",on:{"click":_vm.applyRoundTable}},[_vm._v("应用")])])])])])])])])])]),_vm._v(" "),_c('file-wrapper',{ref:"fileWrap",on:{"on-file-change":_vm.imgChange}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"nav nav-tabs"},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#headFloat","data-toggle":"tab"}},[_vm._v("首页浮动图标")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#roundtableBanner","data-toggle":"tab"}},[_vm._v("圆桌横幅")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "c8fi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cO2l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("QQz6");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3064fe12_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("uqMi");
function injectStyle (ssrContext) {
  __webpack_require__("TfLw")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3064fe12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3064fe12_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "cQTS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row border border-radius "},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:" padding"},[_c('h5',[_vm._v(_vm._s(_vm.temp.title))]),_vm._v(" "),_c('span',[_vm._v("X月X日 hh:mm")])]),_vm._v(" "),_c('div',{staticClass:"form-horizontal border-bottom padding"},_vm._l((_vm.temp.keys),function(d,index){return _c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-4 "},[_vm._v(_vm._s(d.name))]),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('p',{staticClass:"text-primary "},[_vm._v(_vm._s(d.value))])])])})),_vm._v(" "),_vm._m(1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-bottom padding "},[_c('img',{staticClass:"img-avatar logo",attrs:{"src":__webpack_require__("UI73")}}),_vm._v(" "),_c('label',{staticClass:"font"},[_vm._v("叮当问财")]),_vm._v(" "),_c('label',{staticClass:"ellipse fr fa fa-ellipsis-h text-right"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" padding spacebetween"},[_c('h6',{},[_vm._v("进入小程序查看")]),_vm._v(" "),_c('h6',{},[_vm._v(">")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "cTZj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cdcD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("yEGN");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63792cd4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("mQ7s");
function injectStyle (ssrContext) {
  __webpack_require__("8Zp2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63792cd4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63792cd4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "cwe7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dYAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[(_vm.$route.path.indexOf('topicDetail')==-1)?_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    编辑专题\n                ")]):_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    专题详情\n                ")])])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("专题标题")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.title),expression:"p.title"}],staticClass:"form-control dll-title",attrs:{"type":"text","placeholder":"标题"},domProps:{"value":(_vm.p.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "title", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("专题描述")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.desc),expression:"p.desc"}],staticClass:"form-control dll-desc",attrs:{"rows":"3","type":"text","placeholder":"描述"},domProps:{"value":(_vm.p.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "desc", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传专题图片")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-topic-pic",on:{"on-file-change":_vm.imgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.p.bannerUrl),expression:"p.bannerUrl"}],staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{staticClass:"pic-max-500",attrs:{"src":_vm.p.bannerUrl,"alt":""}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.p.bannerUrl&&_vm.image.width>0&&_vm.image.height>0),expression:"p.bannerUrl&&image.width>0&&image.height>0"}]},[_vm._v("尺寸:"+_vm._s(_vm.image.width)+"X"+_vm._s(_vm.image.height))])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传专题分享图片")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-share-pic",on:{"on-file-change":_vm.shareImgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.p.shareImgUrl),expression:"p.shareImgUrl"}],staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{staticClass:"pic-max-500",attrs:{"src":_vm.p.shareImgUrl,"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("添加问题")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-add-q",attrs:{"placeholder":"输入用户昵称/问题标题/回答内容/话题标签"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-md-2 text-left"},[_c('a',{staticClass:"btn btn-primary btn-block dll-search-q",on:{"click":_vm.search}},[_vm._v("搜索")])])]),_vm._v(" "),_c('div',{staticClass:"col-md-offset-1"},[_c('div',{staticClass:"js-wizard-simple block"},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-alt nav-justified",staticStyle:{"width":"500px"}},[_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSearched),expression:"isSearched"}],attrs:{"id":"qSearchedLi"}},[_c('a',{attrs:{"href":"#qSearchedDiv","data-toggle":"tab"}},[_vm._v("搜索列表("+_vm._s(_vm.questionsSearched.totalCount)+")")])]),_vm._v(" "),_c('li',{staticClass:"active",attrs:{"id":"qAddedLi"}},[_c('a',{attrs:{"href":"#qAddedDiv","data-toggle":"tab"}},[_vm._v("已添加问题("+_vm._s(_vm.topicQuestions.totalCount)+")")])]),_vm._v(" "),_c('li',{attrs:{"id":"qApprovingLi"}},[_c('a',{attrs:{"href":"#qApprovingDiv","data-toggle":"tab"}},[_vm._v("已提问待审核问题("+_vm._s(_vm.topicApprovingQuestions.totalCount)+")")])])]),_vm._v(" "),_c('div',{staticClass:"block-content tab-content"},[_c('div',{staticClass:"tab-pane fade push-30-t push-50 ",staticStyle:{"width":"600px"},attrs:{"id":"qSearchedDiv"}},[_vm._l((_vm.questionsSearched.list),function(qSearched,index){return _c('div',{key:qSearched._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"quest-title"},[_vm._v(_vm._s(qSearched.title))]),_vm._v(" "),_c('div',{staticClass:"flex-row",staticStyle:{"margin-top":"7px"}},[_c('span',{staticStyle:{"margin-right":"20px"}},[_vm._v("回答("+_vm._s(qSearched.answerCount)+")")]),_vm._v(" "),_c('span',[_vm._v("提问时间："+_vm._s(_vm._f("date")(qSearched.createdAt.$date)))])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary add-btn",attrs:{"disabled":_vm.isQuestionAdded(qSearched._id.$oid)},on:{"click":function($event){_vm.addQuestionToTopic(qSearched._id.$oid,'search')}}},[_vm._v("添加\n                                            ")]),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":'/question/'+qSearched._id.$oid}},[_vm._v("\n                                                查看\n                                            ")])],1)])}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.questionsSearched.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],2),_vm._v(" "),_c('div',{staticClass:"tab-pane fade in push-30-t push-50  active ",staticStyle:{"width":"600px"},attrs:{"id":"qAddedDiv"}},[_vm._l((_vm.topicQuestions.list),function(qAdded,index){return _c('div',{key:qAdded._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"quest-title"},[_vm._v(_vm._s(qAdded.title))]),_vm._v(" "),_c('div',{staticClass:"flex-row",staticStyle:{"margin-top":"7px"}},[_c('span',{staticStyle:{"margin-right":"20px"}},[_vm._v("回答("+_vm._s(qAdded.answerCount)+")")]),_vm._v(" "),_c('span',[_vm._v("提问时间："+_vm._s(_vm._f("date")(qAdded.createdAt.$date)))])])]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.topicQuestionsParams.page==1 && index == 0)),expression:"!(topicQuestionsParams.page==1 && index == 0)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","title":"上移"},on:{"click":function($event){_vm.move(qAdded,-1)}}},[_c('i',{staticClass:"fa fa-long-arrow-up"})]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.topicQuestionsParams.page==Math.ceil(_vm.topicQuestions.totalCount/_vm.topicQuestionsParams.perPage) && index == _vm.topicQuestions.list.length-1)),expression:"!(topicQuestionsParams.page==Math.ceil(topicQuestions.totalCount/topicQuestionsParams.perPage) && index == topicQuestions.list.length-1)"}],staticClass:"btn btn-xs btn-default",attrs:{"type":"button","title":"下移"},on:{"click":function($event){_vm.move(qAdded,1)}}},[_c('i',{staticClass:"fa fa-long-arrow-down"})]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary add-btn",on:{"click":function($event){_vm.beforeConfirm(qAdded._id.$oid,'确定要删除问题吗',_vm.remove)}}},[_vm._v("删除\n                                            ")]),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":'/question/'+qAdded._id.$oid}},[_vm._v("查看\n                                            ")])],1)])}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.topicQuestionsParams.page,"page-size":_vm.topicQuestionsParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.topicQuestions.totalCount},on:{"current-change":_vm.loadTopicQuestions,"update:currentPage":function($event){_vm.$set(_vm.topicQuestionsParams, "page", $event)}}})],2),_vm._v(" "),_c('div',{staticClass:"tab-pane fade push-30-t push-50",staticStyle:{"width":"600px"},attrs:{"id":"qApprovingDiv"}},[_vm._l((_vm.topicApprovingQuestions.list),function(qApproving,index){return _c('div',{key:qApproving._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"quest-title"},[_vm._v(_vm._s(qApproving.title))]),_vm._v(" "),_c('div',{staticClass:"flex-row",staticStyle:{"margin-top":"7px"}},[_c('span',{staticStyle:{"margin-right":"20px"}},[_vm._v("回答("+_vm._s(qApproving.answerCount)+")")]),_vm._v(" "),_c('span',[_vm._v("提问时间："+_vm._s(_vm._f("date")(qApproving.createdAt.$date)))])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary add-btn",on:{"click":function($event){_vm.addQuestionToTopic(qApproving._id.$oid,'qApproving')}}},[_vm._v("添加\n                                            ")]),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":'/question/'+qApproving._id.$oid}},[_vm._v("查看\n                                            ")])],1)])}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.topicApprovingQuestionsParams.page,"page-size":_vm.topicApprovingQuestionsParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.topicApprovingQuestions.totalCount},on:{"current-change":_vm.loadTopicApprovingQuestions,"update:currentPage":function($event){_vm.$set(_vm.topicApprovingQuestionsParams, "page", $event)}}})],2)])])]),_vm._v(" "),_c('div',{staticClass:"form-group "},[_c('label',{staticClass:"col-md-2 col-md-offset-1"},[_vm._v("是否展示专题")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.isShow),expression:"p.isShow"}],staticClass:"radio-inline dll-show-true",attrs:{"type":"radio","name":"isShow"},domProps:{"value":true,"checked":_vm._q(_vm.p.isShow,true)},on:{"change":function($event){_vm.$set(_vm.p, "isShow", true)}}}),_vm._v("是\n                        "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.isShow),expression:"p.isShow"}],staticClass:"radio-inline dll-show-false",attrs:{"type":"radio","name":"isShow"},domProps:{"value":false,"checked":_vm._q(_vm.p.isShow,false)},on:{"change":function($event){_vm.$set(_vm.p, "isShow", false)}}}),_vm._v("否\n                    ")]),_vm._v(" "),(_vm.$route.path.indexOf('topicDetail')==-1)?_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-2 "},[_c('a',{staticClass:"btn btn-success btn-block dll-save",on:{"click":_vm.save}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 "},[_c('a',{staticClass:"btn btn-success btn-block dll-cancel",on:{"click":function($event){_vm.beforeConfirm('','确定要取消吗，你编辑的内容都将不再保存？',_vm.cancelConfirm)}}},[_vm._v("取消")])])]):_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-2 "},[_c('a',{staticClass:"btn btn-success btn-block dll-back",on:{"click":_vm.cancelConfirm}},[_vm._v("返回")])])])])])])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":_vm.confirmWording,"show":_vm.showModal},on:{"confirm":_vm.doConfirm,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dxUk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_msg_template__ = __webpack_require__("q2vl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message__ = __webpack_require__("mdtg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_message__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { msgTemplate: __WEBPACK_IMPORTED_MODULE_0__components_msg_template__["a" /* default */] },
    mounted: function mounted() {
        this.temp = JSON.parse(this.$route.query.template);
        this.page = this.temp.page ? this.temp.page : '';
    },
    data: function data() {
        return {
            temp: {
                msgCount: 3,
                title: "交易提醒",
                keys: [{
                    field: "keyword1",
                    name: "交易时间"
                }, {
                    field: "keyword2",
                    name: "交易类型"
                }, {
                    field: "keyword3",
                    name: "交易金额"
                }],
                template_id: "YJVo-6miv4Ocqa-mKvf0jNz_f0_xKaadbJ2aC8vb0gI",
                content: "交易时间{{keyword1.DATA}}\n交易类型{{keyword2.DATA}}\n交易金额{{keyword3.DATA}}\n",
                example: "交易时间：2016年8月8日\n交易类型：银行转账\n交易金额：100元\n"
            },
            page: ''

        };
    },

    methods: {
        send: function send() {
            var vm = this;
            var params = {};
            params.templateId = vm.temp.template_id;
            params.data = vm.temp.keys;
            params.templateTitle = vm.temp.title;
            params.page = vm.page;
            for (var x in params.data) {
                if (!params.data[x].value || params.data[x].value.trim() === '') {
                    vm.$message.error(params.data[x].name + '不能为空');
                    return;
                }
            }

            if (!params.page || params.page.trim() === '') {
                vm.$message.error('链接不能为空');
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1__services_message___default.a.sendGroupTemplateMsg(params).then(function (data) {
                vm.$message.success('发送成功');
                vm.cancel();
            });
        },
        cancel: function cancel() {
            this.$router.push('/messageList');
        }
    }
});

/***/ }),

/***/ "e/i/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('span',[_vm._v("code:"+_vm._s(_vm.code))]),_vm._v(" "),_c('span',[_vm._v("state:"+_vm._s(_vm.state))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "eCL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic__ = __webpack_require__("q0DR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_topic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("oAV5");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_1__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        this.loadData();
    },

    props: {},
    data: function data() {
        //            let page;
        //            try {
        //                let p = sessionStorage.getItem("topicParams");
        //                if (p) {
        //                    page = JSON.parse(p).page;
        //                }
        //            } catch (e) {
        //            }
        return {
            list: [],
            showModal: false,
            totalCount: 1,
            removeIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: ''
            }
        };
    },

    methods: {
        pageChange: function pageChange(page) {
            this.queryParams.page = page;
            this.loadData();
        },
        loadData: function loadData() {
            var vm = this;
            if (window.topicParams) {
                vm.queryParams.page = window.topicParams.page;
                vm.queryParams.perPage = window.topicParams.perPage;
                vm.queryParams.queryStr = window.topicParams.queryStr;
            }
            var p = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.list(p).then(function (data) {
                vm.list = data.list;
                vm.totalCount = data.totalCount;
                if (window.topicParams) vm.queryParams.page = window.topicParams.page;
                window.topicParams = null;
                if (vm.queryParams.queryStr) {
                    vm.lastQueryWithOptions = true;
                } else {
                    vm.lastQueryWithOptions = false;
                }
            });
        },
        search: function search() {
            var vm = this;
            vm.queryParams.page = 1;
            vm.loadData();
        },
        move: function move(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.move(id, step).then(function (data) {
                vm.loadData();
            });
        },
        removeConfirm: function removeConfirm(index) {
            this.removeIndex = index;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.remove(this.list[this.removeIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功!');
                vm.loadData();
            });
        },
        showChange: function showChange(index) {
            __WEBPACK_IMPORTED_MODULE_2__services_topic___default.a.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(function (data) {});
        },
        edit: function edit(id) {
            var vm = this;
            window.topicParams = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            vm.$router.push('/editTopic/' + id);
        },
        detail: function detail(id) {
            var vm = this;
            window.topicParams = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            vm.$router.push('/topicDetail/' + id);
        },
        copy2clipboard: function copy2clipboard() {
            __WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* default */].copy2clipboard('已复制链接到剪贴板', this);
        }
    },
    computed: {},
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
        next();
    }
});

/***/ }),

/***/ "eySX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

/**
 * Created by xuejiaqi on 21/1/16.
 */
(function (root, factory) {
  if (typeof define === 'function') {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(exports)) === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.ERRORCODE = factory();
  }
})(this, function () {

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return {

    SUCCESS: 0,

    /*
     * auth error
     * */
    AUTHENTICATION_FAILED: 100,

    AUTHURIZATION_FAILED: 101,

    WRONG_AUTHCODE: 102,

    WRONG_SMS_CODE: 103,

    WRONG_USERNAME_OR_PASSWORD: 104,

    /*
     * params error
     * */

    PARAMETER_INVALID: 201,

    INVALID_RESULT: 202,

    /*
     * Logic error
     */
    CREATE_FAILED: 401,

    QUERY_FAILED: 402,

    UPDATE_FAILED: 403,

    ENROLL_FAILED: 404,

    VERIFY_FAILED: 405,

    SEND_SMS_FAILED: 406,

    CHANGE_PASSWORD_FAILED: 407,

    LOGOUT_FAILED: 408,

    AMOUNT_ERROR: 409,

    ACCOUNT_ERROR: 410,

    LOW_BALANCE: 411,

    RECHARGE_FAILED: 412,

    ACTIVE_FAILED: 413,

    BUILD_FAILED: 414,

    USERNAME_HAS_BEEN_TAKEN: 415,

    SEND_SMS_TOO_QUICKLY: 416,

    DOWNLOAD_TOO_MANY_TIMES: 417,

    DOWNLOAD_FAILED: 418,

    /*
     * system error
     * */
    SYSTEM_BUSY: 501

    /*
     USER_NOT_FOUND: 1,
      WRONG_PASSWORD: 2,
      WRONG_PARAM: 3,
      AUTH_FAILED: 4,
      TIMESTAMP_EXPIRED: 5,
      WRONG_AUTHCODE: 6,
      LOGIN_FAILED: 7,
      STORE_NOT_FOUND: 8,
      LOGIN_STATUS_ERROR: 9,
      UPLOAD_IMG_FAILED: 10,
      CREATE_ITEM_FAILED: 11,
      PATIALLY_SUCCESS: 12,
      STORE_NOT_EXIST: 13,
      USER_NOT_EXIST: 14,
      //PASSWORD_ERROR: 15,
      UPDATE_ITEM_FAILED: 16,
      DELETE_ITEM_FAILED: 17,
      ITEM_NOT_EXIST: 18,
      QUERY_FAILED: 19,
      ITEM_DUPLICATED: 20,
      USER_NOT_ALLOWED: 21,
      NETWORK_BUSY: 22,
      CDKEY_NOT_FOUND: 23,
      CDKEY_ALREADY_USERD: 24,
      UPLOAD_FAILED: 25
     */
  };
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("f1Eh")(module)))

/***/ }),

/***/ "g8Ah":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    list: function list(params) {
        return axios.post('wdCmsQuestion/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setShow: function setShow(questionId, show) {
        return axios.post('wdCmsQuestion/setShow/', { questionId: questionId, show: show }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setRecommend: function setRecommend(questionId, recommend) {
        return axios.post('wdCmsQuestion/setRecommend/', { questionId: questionId, recommend: recommend }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(questionId, step) {
        return axios.post('wdCmsQuestion/move/', { questionId: questionId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    delete: function _delete(questionId) {
        return axios.post('wdCmsQuestion/delete/', { questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(questionId) {
        return axios.post('wdCmsQuestion/detail/', { questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editDetail: function editDetail(question) {
        return axios.post('wdCmsQuestion/editDetail/', question, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addQuestion: function addQuestion(params) {
        return axios.post('wdCmsQuestion/addQuest/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answers: function answers(params) {
        return axios.post('/wdCmsQuestion/answers/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setAnswerShow: function setAnswerShow(answerId, show) {
        return axios.post('/wdCmsQuestion/setAnswerShow/', {
            answerId: answerId,
            show: show
        }, { withCredentials: true }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteAnswer: function deleteAnswer(answerId) {
        return axios.post('/wdCmsQuestion/deleteAnswer/', { answerId: answerId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editAnswer: function editAnswer(answer) {

        return axios.post('/wdCmsQuestion/editAnswer/', answer, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answerMove: function answerMove(answerId, toSeq) {
        return axios.post('/wdCmsQuestion/answerMove/', { answerId: answerId, toSeq: toSeq }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },

    /**
     * 问题评论
     */
    comments: function comments(params) {
        return axios.post('/wdCmsQuestion/comments/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addComment: function addComment(params) {
        return axios.post('/wdCmsQuestion/addComment/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setCommentShow: function setCommentShow(commentId, show) {
        return axios.post('/wdCmsQuestion/setCommentShow/', {
            commentId: commentId,
            show: show
        }, { withCredentials: true }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteComment: function deleteComment(commentId) {
        return axios.post('/wdCmsQuestion/deleteComment/', { commentId: commentId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    getUserAnswer: function getUserAnswer(questionId, userId) {
        return axios.post('/wdCmsQuestion/getUserAnswer/', { questionId: questionId, userId: userId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addAnswer: function addAnswer(answer) {
        return axios.post('/wdCmsQuestion/addAnswer/', answer, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },


    /**
     *回答评论
     */
    commentsOfAnswer: function commentsOfAnswer(params) {
        return axios.post('/wdCmsAnswer/comments/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addCommentOfAnswer: function addCommentOfAnswer(params) {
        return axios.post('/wdCmsAnswer/addComment/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editAnswerLikeBase: function editAnswerLikeBase(answerId, likeBase) {
        return axios.post('/wdCmsAnswer/editAnswerLikeBase/', { answerId: answerId, likeBase: likeBase }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "gJ56":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_list_choose_user__ = __webpack_require__("U2La");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_question__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        AnswerUsers: __WEBPACK_IMPORTED_MODULE_0__components_list_choose_user__["a" /* default */]
    },
    props: {
        id: '',
        type: ''
    },
    data: function data() {
        return {
            userId: '',
            content: '',
            userNickName: '',
            showChooseModal: false
        };
    },

    methods: {
        chooseCom: function chooseCom(com) {
            this.userId = com._id.$oid;
            this.userNickName = com.nickname;
        },
        addComment: function addComment() {
            var vm = this;
            if (!vm.userId) {
                vm.$message.info('请选择评论者');
                return;
            }
            if (!vm.content || vm.content.trim() === '') {
                vm.$message.info('请填写评论内容');
                return;
            }
            var params = {
                userId: vm.userId,
                content: vm.content
            };
            if (vm.type === 'answer') {
                params.answerId = vm.id;
                __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.addCommentOfAnswer(params).then(function (data) {
                    vm.$message.success('评论成功');
                    vm.init();
                    vm.$emit("success");
                });
            } else if (vm.type === 'question') {
                params.questionId = vm.id;
                __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.addComment(params).then(function (data) {
                    vm.$message.success('评论成功');
                    vm.init();
                    vm.$emit("success");
                });
            }
        },
        showChoose: function showChoose() {
            this.showChooseModal = true;
        },
        init: function init() {
            this.content = '';
            this.userId = '';
        }
    }
});

/***/ }),

/***/ "gRfR":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    list: function list(params) {
        return axios.post('/wdCmsTag/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    createTag: function createTag(name, iconUrl) {
        return axios.post('/wdCmsTag/createTag/', { name: name, iconUrl: iconUrl }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(tagId, step) {
        return axios.post('/wdCmsTag/move/', { tagId: tagId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    remove: function remove(tagId) {
        return axios.post('/wdCmsTag/delete/', { tagId: tagId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editTag: function editTag(params) {
        return axios.post('/wdCmsTag/editTag/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(tagId) {
        return axios.post('/wdCmsTag/detail/', { tagId: tagId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "ghg6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "grUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"id":"sidebar"}},[_c('div',{attrs:{"id":"sidebar-scroll"}},[_c('div',{staticClass:"sidebar-content"},[_c('div',{staticClass:"side-header side-content bg-white-op"},[_c('button',{staticClass:"btn btn-link text-gray pull-right hidden-md hidden-lg",attrs:{"type":"button","data-toggle":"layout","data-action":"sidebar_close"},on:{"click":_vm.close}},[_c('i',{staticClass:"fa fa-times"})]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{staticClass:"side-content"},[_c('ul',{staticClass:"nav-main"},_vm._l((_vm.menus),function(m,index){return _c('li',{key:index},[(m.subMenus)?_c('a',{staticClass:"nav-submenu",attrs:{"data-toggle":"nav-submenu","href":"#"}},[_c('img',{attrs:{"src":m.icon}}),_vm._v(" "),_c('span',{staticClass:"sidebar-mini-hide"},[_vm._v(_vm._s(m.name))])]):_vm._e(),_vm._v(" "),(!m.subMenus)?_c('router-link',{attrs:{"to":m.path}},[_c('img',{attrs:{"src":m.icon}}),_vm._v(" "),_c('span',{staticClass:"sidebar-mini-hide"},[_vm._v(_vm._s(m.name))])]):_vm._e(),_vm._v(" "),(m.subMenus)?_c('ul',_vm._l((m.subMenus),function(sm,i){return _c('li',{key:i,on:{"click":_vm.close}},[_c('router-link',{attrs:{"to":sm.path}},[_vm._v(_vm._s(sm.name))])],1)})):_vm._e()],1)}))])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"h5 text-white",attrs:{"href":"/"}},[_c('img',{staticClass:"img-avatar logo ",attrs:{"src":__webpack_require__("UI73")}}),_vm._v(" "),_c('span',{staticClass:"h5 font-w600 sidebar-mini-hide"},[_vm._v("叮当问财社区后台")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "h9po":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),(_vm.p.applyStatus===300)?_c('label',{staticClass:"col-md-3 btn btn-success"},[_vm._v("审核通过")]):(_vm.p.applyStatus===400)?_c('label',{staticClass:"col-md-3 btn btn-danger"},[_vm._v("审核拒绝("+_vm._s(_vm.p.rejectReason)+")")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("头像：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('img',{staticClass:"img-avatar",attrs:{"src":_vm.p.headImgUrl}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("昵称：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.nickname),expression:"p.nickname"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"昵称"},domProps:{"value":(_vm.p.nickname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "nickname", $event.target.value)}}})])]),_vm._v(" "),(!(_vm.p.cardImgUrl===''||(typeof _vm.p.cardImgUrl==='undefined')))?_c('div',[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("名片照片：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('img',{attrs:{"src":_vm.p.cardImgUrl}}),_vm._v(" "),_c('a',{attrs:{"href":_vm.p.cardImgUrl}},[_vm._v("查看大图")])])])]):_c('div',[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("姓名：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.name),expression:"p.name"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"姓名"},domProps:{"value":(_vm.p.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "name", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("手机号：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.phone),expression:"p.phone"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"手机号"},domProps:{"value":(_vm.p.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "phone", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("就职公司：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.organization),expression:"p.organization"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"就职公司"},domProps:{"value":(_vm.p.organization)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "organization", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("职业：")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.title),expression:"p.title"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"职业"},domProps:{"value":(_vm.p.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "title", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("自我描述")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.desc),expression:"p.desc"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"自我描述"},domProps:{"value":(_vm.p.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "desc", $event.target.value)}}})])]),_vm._v(" "),(_vm.p.applyStatus==100||_vm.p.applyStatus==200)?_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("审核结果")]),_vm._v(" "),_c('div',{staticClass:"col-md-10"},[_c('div',{staticClass:"col-md-2"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.auditingParams.approve),expression:"auditingParams.approve"}],staticClass:"radio-inline",attrs:{"type":"radio","name":"auditingResult","value":"true"},domProps:{"checked":_vm._q(_vm.auditingParams.approve,"true")},on:{"change":function($event){_vm.$set(_vm.auditingParams, "approve", "true")}}}),_vm._v("通过")]),_vm._v(" "),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.auditingParams.approve),expression:"auditingParams.approve"}],staticClass:"radio-inline",attrs:{"type":"radio","name":"auditingResult","value":"false"},domProps:{"checked":_vm._q(_vm.auditingParams.approve,"false")},on:{"change":function($event){_vm.$set(_vm.auditingParams, "approve", "false")}}}),_vm._v("拒绝")])]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.rejectReason),expression:"p.rejectReason"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"请输入拒绝原因"},domProps:{"value":(_vm.p.rejectReason)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "rejectReason", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 col-md-offset-2"},[_c('a',{staticClass:"btn btn-success btn-block",on:{"click":_vm.save}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"col-md-2 "},[_c('router-link',{staticClass:"btn btn-danger btn-block",attrs:{"to":"/answerList"}},[_vm._v("取消")])],1)]):_vm._e()])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{},[_c('div',{},[_c('h1',[_vm._v("\n                    名片\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "hWB+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"content-mini content-mini-full",attrs:{"id":"header-navbar"}},[_c('ul',{staticClass:"nav-header pull-right"},[_c('li',[_c('div',{staticClass:"btn-group"},[_vm._m(0),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-menu-right"},[_c('li',{staticClass:"dropdown-header"},[_vm._v("Actions")]),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"tabindex":"-1","to":"/login"}},[_c('i',{staticClass:"si si-logout pull-right"}),_vm._v("退出登录\n                      ")])],1)])])])]),_vm._v(" "),_vm._m(1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-default btn-image dropdown-toggle",attrs:{"data-toggle":"dropdown","type":"button"}},[_c('img',{attrs:{"src":__webpack_require__("vZuO"),"alt":"Avatar"}}),_vm._v(" "),_c('span',{staticClass:"caret"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav-header pull-left"},[_c('li',{staticClass:"hidden-md hidden-lg"},[_c('button',{staticClass:"btn btn-default",attrs:{"data-toggle":"layout","data-action":"sidebar_toggle","type":"button"}},[_c('i',{staticClass:"fa fa-navicon"})])]),_vm._v(" "),_c('li',{staticClass:"hidden-xs hidden-sm"},[_c('button',{staticClass:"btn btn-default",attrs:{"data-toggle":"layout","data-action":"sidebar_mini_toggle","type":"button"}},[_c('i',{staticClass:"fa fa-ellipsis-v"})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iClD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("oAV5");


var STATUS = __webpack_require__("GX9t").STATUS;
var TYPE = __webpack_require__("SgC4").TYPE;

// import pinyin from 'pinyin/lib/web-pinyin'

/* harmony default export */ __webpack_exports__["a"] = ({
    prettyDate: function prettyDate(time) {
        // var date = new Date(time),
        var diff = (new Date().getTime() - time) / 1000,
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) {
            return '';
        } else if (day_diff >= 31) {
            return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].formatDate(new Date(time));
        }

        return day_diff === 0 && (diff < 60 && "刚刚" || diff < 120 && "1分钟前" || diff < 3600 && Math.floor(diff / 60) + "分钟前" || diff < 7200 && "1个小时前" || diff < 86400 && Math.floor(diff / 3600) + "小时前") || day_diff === 1 && "昨天" || day_diff < 7 && day_diff + "天前" || day_diff < 31 && Math.ceil(day_diff / 7) + "周前";
    },
    date: function date(_date) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

        _date = new Date(_date);
        if (!_date || _date == 'Invalid Date') {
            return '';
        }
        return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].formatDate(_date, fmt);
    },
    agencyStatus: function agencyStatus(status) {
        var text = '';
        switch (status) {
            case STATUS.AGENCY_STATUS.AUDITING:
                text = '待审核';
                break;
            case STATUS.AGENCY_STATUS.REJECTED:
                text = '驳回';
                break;
            case STATUS.AGENCY_STATUS.APPROVED:
                text = '审核通过';
                break;
            case STATUS.AGENCY_STATUS.PAID:
                text = '审核通过';
                break;
            case STATUS.AGENCY_STATUS.STOPPED:
                text = '停用';
                break;
            default:
                break;
        }
        return text;
    },
    withdrawStatus: function withdrawStatus(status) {
        var text = '';
        switch (status) {
            case STATUS.WITHDRAW_STATUS.WAIT_APPROVE:
                text = '待审核';
                break;
            case STATUS.WITHDRAW_STATUS.APPROVED:
                text = '审核通过';
                break;
            case STATUS.WITHDRAW_STATUS.REJECT:
                text = '被驳回';
                break;
            default:
                break;
        }
        return text;
    },
    postStatus: function postStatus(status) {
        var text = '';
        switch (status) {
            case STATUS.MATERIAL_POST_STATUS.WAIT_POST:
                text = '未邮寄';
                break;
            case STATUS.MATERIAL_POST_STATUS.POSTED:
                text = '已邮寄';
                break;
            default:
                break;
        }
        return text;
    },
    traineeStatus: function traineeStatus(status) {
        var text = '';
        switch (status) {
            case STATUS.TRAINEE_STATUS.NOT_ENTER:
                text = '未入学';
                break;
            case STATUS.TRAINEE_STATUS.ENTER:
                text = '已入学';
                break;
            case STATUS.TRAINEE_STATUS.INVALID:
                text = '无效';
                break;
            default:
                break;
        }
        return text;
    },
    detailAddress: function detailAddress(address) {
        var province = address.province || '',
            city = address.city || '',
            district = address.district || '',
            detailAddress = address.address || '';
        return province + city + district + detailAddress;
    },
    percentPrice: function percentPrice(totalPrice, percent) {
        totalPrice = totalPrice || 0;
        percent = percent || 0;
        return Number((totalPrice * percent / 100).toFixed(2));
    },
    auditingStatus: function auditingStatus(status) {
        var text = '';
        switch (status) {
            case STATUS.APPLY_STATUS.AUDITING:
                text = '审核中';
                break;
            case STATUS.APPLY_STATUS.NOT_APPLY:
                text = '待审核';
                break;
            case STATUS.APPLY_STATUS.APPROVED:
                text = '通过';
                break;
            case STATUS.APPLY_STATUS.FAILED:
                text = '拒绝';
            default:
                break;
        }
        return text;
    },
    fondsFormat: function fondsFormat(number) {
        if (!number) return 0;
        if (typeof number === 'number') number = number.toString();
        //将其数字反转
        number = number.split("").reverse().join("");
        //存取反正后分割数据
        var numberSB = "";
        var leng = number.length;
        leng = leng % 3 === 0 ? leng / 3 : leng / 3 + 1;
        for (var i = 0; i < leng; i++) {
            numberSB += ",";
            if (i + 1 < leng) numberSB += number.substring(i * 3, (i + 1) * 3);
            if (i + 1 === leng) numberSB += number.substring(i * 3);
        }
        var resultNumber = numberSB.substring(0, numberSB.length - 1);
        resultNumber = resultNumber.split("").reverse().join("");
        resultNumber = resultNumber.substring(0, resultNumber.length - 1);
        // resultNumber += "." + lastNumber;
        return resultNumber;
    },
    keywords: function keywords(data) {
        var sb = [];
        for (var x in data) {
            sb.push(data[x].name);
        }
        var re = sb.join(" ");
        if (re.length > 40) re = re.substring(0, 40) + "...";
        return re;
    },
    content: function content(data) {
        var element = [];
        var content = [];
        for (var x in data) {
            element.push(data[x].name);
            element.push(data[x].value);
            content.push(element.join(": "));
            element = [];
        }
        var re = content.join("; ");
        if (re.length > 50) re = re.substring(0, 50) + "...";
        return re;
    }
});

/***/ }),

/***/ "iOgM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("oAV5");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */]
    },
    mounted: function mounted() {
        if (this.answer) {
            if (!this.answer.showLink) this.answer.showLink = false;
            this.$emit('on-get-datalist', this.answer);
            console.log('list grid mounted');
        }
    },


    props: ['metas', 'rows', 'answer'],
    methods: {
        imgChange: function imgChange(file) {
            var _this = this;

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                if (vm.modifyImgIndex >= 0) {

                    console.log(vm.modifyImgIndex);
                    vm.answer.metas[vm.modifyImgIndex].content = data;
                    vm.modifyImgIndex = undefined;
                    //                    util.getFileSize(file, vm);
                } else if (vm.insertImgIndex >= 0) {
                    vm._insert(vm.insertImgIndex, { "type": "IMG", "content": data });
                    vm.insertImgIndex = undefined;
                } else {
                    vm.answer.metas.push({ "type": "IMG", "content": data });
                }
                _this.sendDataToFather();
            }).catch(function (err) {
                console.log("catch!!!", err.stack);
                vm.$message.error("服务出错，请联系管理员");
            });
        },
        saveTextData: function saveTextData() {
            var content = this.content;
            //                if (content.trim() === '') {
            //                    this.$message.warning("请输入回答内容");
            //                    return;
            //                }
            this.answer.metas.push({ "type": "TEXT", "content": content });
            this.sendDataToFather();
        },
        deleteDataFromList: function deleteDataFromList(index) {
            this.answer.metas.splice(index, 1);
            this.sendDataToFather();
        },
        invokeChildImgChange: function invokeChildImgChange(index) {
            debugger;
            this.modifyImgIndex = index;
            this.$refs.fileWrap.openFinder();
        },
        sendDataToFather: function sendDataToFather() {
            this.$emit("on-data-change", this.answer);
        },
        moveUp: function moveUp(index) {
            this._exchange(index, index - 1);
        },
        moveDown: function moveDown(index) {
            this._exchange(index, index + 1);
        },
        insertMeta: function insertMeta(index, type) {
            var vm = this;
            if (type === 'TEXT') {
                var meta = { "type": "TEXT", "content": "" };
                vm._insert(index, meta);
            } else if (type === 'IMG') {
                debugger;
                vm.insertImgIndex = index;
                vm.$refs.fileWrap.openFinder();
            }
        },
        _insert: function _insert(index, meta) {
            if (index < 0) index = 0;
            this.answer.metas.splice(index, 0, meta);
        },
        _exchange: function _exchange(index1, index2) {
            //刷新不及时
            //                [this.metas[index1], this.metas[index2]] = [this.metas[index2], this.metas[index1]];
            //                debugger;
            //如果直接 用 m1=this.metas.slice(index1,index1+1)[0]；
            //           this.metas[index2].content=m1;
            //来结果是非响应式
            //                let m1 = this.metas.slice(index1,index1+1)[0].content;
            //                let m2 = this.metas.slice(index2,index2+1)[0].content;

            var m1 = this.answer.metas[index1].content;
            var m2 = this.answer.metas[index2].content;
            var type1 = this.answer.metas[index1].type;
            var type2 = this.answer.metas[index2].type;
            this.answer.metas[index2].content = m1;
            this.answer.metas[index1].content = m2;
            this.answer.metas[index2].type = type1;
            this.answer.metas[index1].type = type2;
        }
    },
    data: function data() {
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
        };
    },

    computed: {}
});

/***/ }),

/***/ "isgN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iuSh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ixQc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_v2_vue__ = __webpack_require__("SWgQ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e3fbbca6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_v2_vue__ = __webpack_require__("Jxy6");
function injectStyle (ssrContext) {
  __webpack_require__("S+Bu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e3fbbca6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_v2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e3fbbca6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_v2_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "jPc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"modal",staticClass:"modal",attrs:{"id":"modal-small","tabindex":"-1","role":"dialog","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog modal-sm"},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"block block-themed block-transparent remove-margin-b"},[_c('div',{staticClass:"block-header bg-primary-dark"},[_vm._m(0),_vm._v(" "),_c('h3',{staticClass:"block-title"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('p',[_vm._v(_vm._s(_vm.content))]),_vm._v(" "),(_vm.input)?_c('div',{staticClass:"row form-group"},[_c('div',{staticClass:"col-md-12"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.text),expression:"text"}],staticClass:"form-control",attrs:{"rows":"3"},domProps:{"value":(_vm.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.text=$event.target.value}}})])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-sm btn-default",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":function($event){_vm.$emit('cancel')}}},[_vm._v("取消")]),_vm._v(" "),_c('button',{staticClass:"btn btn-sm btn-primary",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":function($event){_vm.$emit('confirm',_vm.text)}}},[_c('i',{staticClass:"fa fa-check"}),_vm._v("确定")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"block-options"},[_c('li',[_c('button',{attrs:{"data-dismiss":"modal","type":"button"}},[_c('i',{staticClass:"si si-close"})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jT7l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Wbwb");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc7cda28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("ZA+K");
function injectStyle (ssrContext) {
  __webpack_require__("C++z")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc7cda28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "jezg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kOsN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lVAl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comment_vue__ = __webpack_require__("gJ56");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_245068e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comment_vue__ = __webpack_require__("QTX4");
function injectStyle (ssrContext) {
  __webpack_require__("oWRT")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_comment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_245068e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_comment_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "m57M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    ready: function ready() {},

    props: {},
    mounted: function mounted() {
        console.log('file wrapper mounted');
    },

    methods: {
        openFinder: function openFinder() {
            this.$refs.file.click();
        },
        fileChange: function fileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (files && files.length > 0) {
                this.$emit('on-file-change', files[0]);
                e.target.value = null;
            }
        }
    },
    data: function data() {
        return {};
    },

    computed: {}
});

/***/ }),

/***/ "m6z7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("A7T4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7348ae8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("ESH7");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b7348ae8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mQ7s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group "},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("标签名称：")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"form-control dll-name",attrs:{"type":"text","placeholder":"标签名称"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传标签图片：")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-img",on:{"on-file-change":_vm.imgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{attrs:{"src":_vm.iconUrl}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.image.width*_vm.image.height>0),expression:"image.width*image.height>0"}]},[_vm._v("尺寸:"+_vm._s(_vm.image.width)+"X"+_vm._s(_vm.image.height))])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 "},[_c('a',{staticClass:"btn btn-success btn-block dll-save",on:{"click":_vm.editTag}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('a',{staticClass:"btn btn-danger btn-block dll-cancel",on:{"click":_vm.cancel}},[_vm._v("取消")])])])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    修改标签\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "mdtg":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    tempList: function tempList(params) {
        return axios.post('wdTemplate/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteTemp: function deleteTemp(id) {
        return axios.post('wdTemplate/delete/', { id: id }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    msgList: function msgList(params) {
        return axios.post('wdTemplate/msgList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    sendGroupTemplateMsg: function sendGroupTemplateMsg(params) {
        return axios.post('wdTemplate/sendGroupTemplateMsg/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    reSendGroupTemplateMsg: function reSendGroupTemplateMsg(templateMsgId) {
        return axios.post('wdTemplate/reSendGroupTemplateMsg/', { templateMsgId: templateMsgId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "mh6m":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ncuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-1 fr"},[_c('button',{staticClass:"btn btn-sm btn-primary dll-search",on:{"click":_vm.loadData}},[_vm._v("搜索")])]),_vm._v(" "),_c('div',{staticClass:"input-group input-group-sm col-md-3 fr"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-query",attrs:{"placeholder":"输入用户昵称"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})])])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',[_c('img',{staticClass:"img-avatar",attrs:{"src":a.headImgUrl,"alt":""}})]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.nickname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("date")(a.applyDate.$date)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("auditingStatus")(a.applyStatus)))]),_vm._v(" "),_c('td',[(a.applyStatus===100||a.applyStatus===200)?_c('router-link',{staticClass:"btn btn-xs ",attrs:{"to":'/answer/'+a._id.$oid}},[_vm._v("审核\n                                ")]):_c('router-link',{staticClass:"btn btn-xs ",attrs:{"to":'/answer/'+a._id.$oid}},[_vm._v("查看\n                                ")])],1)])}))])])]),_vm._v(" "),(_vm.list.length===0)?_c('h5',{staticClass:"text-center red-font"},[_vm._v("暂时没有你查找的用户")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"block-content"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    答主审核\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("用户头像")]),_vm._v(" "),_c('th',[_vm._v("用户昵称")]),_vm._v(" "),_c('th',[_vm._v("申请时间")]),_vm._v(" "),_c('th',[_vm._v("审核状态")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oAV5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

/* harmony default export */ __webpack_exports__["a"] = ({
    getQueryStrings: function getQueryStrings() {
        var query_string = {};
        var query = window.location.href.split("?")[1];
        if (query) {
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                // If first entry with this name
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = decodeURIComponent(pair[1]);
                    // If second entry with this name
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                    query_string[pair[0]] = arr;
                    // If third or later entry with this name
                } else {
                    query_string[pair[0]].push(decodeURIComponent(pair[1]));
                }
            }
        }
        return query_string;
    },
    setTitle: function setTitle(title) {
        document.title = title;
        // hack在微信等webview中无法修改document.title的情况
        var iframe = document.createElement('iframe');
        iframe.src = 'http://www.baidu.com/favicon.ico';
        iframe.onload = function () {
            setTimeout(function () {
                document.body.removeChild(iframe);
            }, 0);
        };
        document.body.appendChild(iframe);
    },
    formatDate: function formatDate(date) {
        var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

        var o = {
            'M+': date.getMonth() + 1,
            'D+': date.getDate(),
            'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
            'H+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'S': date.getMilliseconds()
        };
        var week = {
            '0': '/u65e5',
            '1': '/u4e00',
            '2': '/u4e8c',
            '3': '/u4e09',
            '4': '/u56db',
            '5': '/u4e94',
            '6': '/u516d'
        };
        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468' : '') + week[date.getDay() + '']);
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    },
    isObjectHasKeywords: function (_isObjectHasKeywords) {
        function isObjectHasKeywords(_x2, _x3) {
            return _isObjectHasKeywords.apply(this, arguments);
        }

        isObjectHasKeywords.toString = function () {
            return _isObjectHasKeywords.toString();
        };

        return isObjectHasKeywords;
    }(function (obj, keywords) {
        // 递归匹配obj 所有property 是否包含keywords
        var has = false;
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                var property = obj[k];
                if ((typeof property === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(property)) == "object") {
                    has = isObjectHasKeywords(property, keywords);
                } else {
                    if (typeof property == 'number') {
                        property += '';
                    }
                    if (property.indexOf && property.toUpperCase().indexOf(keywords.toUpperCase()) !== -1) {
                        has = true;
                    }
                }
                if (has) {
                    break;
                }
            }
        }
        return has;
    }),
    compressImage: function compressImage(source_img_obj, quality, output_format) {
        var mime_type = "image/jpeg";
        if (typeof output_format !== "undefined" && output_format == "png") {
            mime_type = "image/png";
        }

        var cvs = document.createElement('canvas');
        cvs.width = source_img_obj.naturalWidth;
        cvs.height = source_img_obj.naturalHeight;
        var ctx = cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
        var newImageData = cvs.toDataURL(mime_type, quality / 100);
        var result_image_obj = new Image();
        result_image_obj.src = newImageData;
        return result_image_obj;
    },
    dataURItoBlob: function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: mimeString });
    },
    getFileSize: function getFileSize(file, vm) {
        var reader = new FileReader();
        var image = {};
        reader.onload = function (e) {
            var data = e.target.result;
            console.log(data);
            var image = new Image();
            image.onload = function () {
                vm.image.width = image.naturalWidth;
                vm.image.height = image.naturalHeight;
            };
            image.src = data;
        };
        reader.readAsDataURL(file);
        return image;
    },
    copy2clipboard: function copy2clipboard(msg, vm) {
        try {
            var clipboard = new ClipboardJS('.btn');
            vm.$message.success(msg);
            clipboard.destroy();
        } catch (e) {
            vm.$message.error('复制失败');
        }
    },
    copy2clipboard2: function copy2clipboard2(txt, msg, vm) {
        if (window.clipboardData) {
            window.clipboardData.clearData();
            window.clipboardData.setData("Text", txt);
            vm.$message.success(msg);
        } else if (navigator.userAgent.indexOf("Opera") !== -1) {
            window.location = txt;
            vm.$message.success(msg);
        } else if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("被浏览器拒绝！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
            }
            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if (!clip) return;
            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if (!trans) return;
            trans.addDataFlavor('text/unicode');
            var str = new Object();
            var len = new Object();
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            var copytext = txt;
            str.data = copytext;
            trans.setTransferData("text/unicode", str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip) return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
            vm.$message.success(msg);
        }
    }
});

/***/ }),

/***/ "oWRT":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "osAX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("7uHN");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5563b23f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("GVU2");
function injectStyle (ssrContext) {
  __webpack_require__("6Jx2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5563b23f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "pE7P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_upload_wrapper_vue__ = __webpack_require__("m57M");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bfacf94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_upload_wrapper_vue__ = __webpack_require__("ysst");
function injectStyle (ssrContext) {
  __webpack_require__("iuSh")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4bfacf94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_upload_wrapper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bfacf94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_upload_wrapper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "pgX7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_tag__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_0__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        this.loadData();
        this.name = '';
    },

    props: {},
    data: function data() {
        return {
            list: [],
            showModal: false,
            totalCount: 10,
            stopIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 10,
                name: ''
            },
            removeIndex: '',
            dragId: '',
            enteredId: '',
            leaveedId: ''
        };
    },

    methods: {
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.list(this.queryParams).then(function (data) {
                vm.list = data;
            });
        },
        move: function move(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.move(id, step).then(function (data) {
                vm.loadData();
            });
        },
        removeConfirm: function removeConfirm(index) {
            this.removeIndex = index;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_tag___default.a.remove(this.list[this.removeIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功');
                vm.loadData();
            });
        },
        onDrag: function onDrag(event) {
            var vm = this;
            vm.dragId = event.target.id;
        },
        getTagFromListById: function getTagFromListById(id) {
            var vm = this;
            var list = vm.list;
            for (var i in list) {
                if (list[i]._id.$oid === id) return list[i];
            }
            return null;
        },
        onDragover: function onDragover(event) {
            console.log("++++dragover", event);
            console.log("++++dragover target", event.target);
        },
        onDrop: function onDrop(event) {
            //                console.log(111111111111111111111);
            event.preventDefault();
        },

        /**
         *经过测试 在元素后面添加 比较好，在前面添加会出现 不断删除 插入 tmptr的问题 体验不好  dragenter dragleave 事件会不停出发触发
         */
        onDragenter: function onDragenter(event) {
            var vm = this;
            //get id from tr
            var node = event.target;
            var tr = node.parentNode;
            //不断遍历 知道找到父元素 tr
            while (tr.nodeName !== 'TR') {
                tr = tr.parentNode;
            }var tb = tr.parentNode;
            //进入到tmp 或者 自己 或者相邻的前一个元素的时候是不需要添加的
            if (tr.id.indexOf('tmptr') !== -1 || tr.id === vm.dragId
            //最后一个元素不存在的话不会return
            || tr.nextSibling && tr.nextSibling.id === vm.dragId) {
                vm.enteredId = '';
                return;
            }
            vm.enteredId = tr.id;
            console.log("****当前进入的tr的id ", tr.id, "****当前被拖动tr的id", vm.dragId);
            console.log('add tmp node');
            vm.addTmpTr(tb, tr.nextSibling, tr.id, 'tmptr');
        },
        onDragleave: function onDragleave(event) {
            var vm = this;
            //get id from tr
            var node = event.target;
            var tr = node.parentNode;
            while (tr.nodeName !== 'TR') {
                tr = tr.parentNode;
            }console.log("----当前离开的tr的id ", tr.id, "----当前被拖动tr的id", vm.dragId);
            var tb = tr.parentNode;
            //离开自己的 时候 不需要做remove
            //                if (tr.id === vm.dragId) {
            //                    console.log("id相当 不需要remove");
            //                    return;
            //                }
            if (tr.id !== vm.dragId) {
                vm.deleteTmpTr(tb, tr.id, 'tmptr');
            }
        },
        onDragend: function onDragend() {
            var vm = this;
            if (vm.enteredId !== '') {
                try {
                    var step = vm.getTagFromListById(vm.enteredId).seq - vm.getTagFromListById(vm.dragId).seq;
                    //往上移的话需要加1
                    if (step < 0) step += 1;
                    vm.move(vm.dragId, step);
                } catch (e) {
                    console.log(e);
                }
            }
            vm.enteredId = '';
            console.log('drag end');
        },


        //插入兄弟元素
        /**
         * 将tmptr 插入到目标元素前面
         * @param fnode 父级元素
         * @param targeNode 目标元素。
         * @param id 目标元素前面一个元素的id
         * 即将tmptr 与 目标元素前面一个元素 绑定，当离开的时候 删除对应的tmptr
         * @param tagString 加在id后面的一个标识符  用于和 包含数据项的tr的id 区分
         */
        addTmpTr: function addTmpTr(fnode, targeNode, id, tagString) {
            var vm = this;
            var tmpTr = document.createElement("tr");
            tmpTr.id = id + tagString;
            tmpTr.innerHTML = "<td colspan='3'   style='background:#f7e1b5;'>将会移动到此处</td>";
            vm.addNode(fnode, tmpTr, targeNode);
        },
        addNode: function addNode(fnode, node, targeNode) {
            //如果是最有一个元素 调用appendChild
            if (targeNode) fnode.insertBefore(node, targeNode);else fnode.appendChild(node);
        },

        /**
         * 删除父级元素中的子元素
         * @param fnode see addTmpTr
         * @param id see addTmpTr
         * @param tagString see addTmpTr
         */
        deleteTmpTr: function deleteTmpTr(fnode, id, tagString) {
            var key = id + tagString;
            if (fnode.children[key]) {
                console.log("delete tmp tr");
                fnode.removeChild(fnode.children[key]);
            }
        }
    },
    computed: {}
});

/***/ }),

/***/ "q0DR":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    list: function list(params) {
        return axios.post('wdCmsTopic/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setShow: function setShow(topicId, show) {
        return axios.post('wdCmsTopic/setShow/', { topicId: topicId, show: show }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(topicId) {
        return axios.post('wdCmsTopic/detail/', { topicId: topicId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editTopic: function editTopic(params) {
        return axios.post('wdCmsTopic/editTopic/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(topicId, step) {
        return axios.post('wdCmsTopic/move/', { topicId: topicId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    remove: function remove(topicId) {
        return axios.post('wdCmsTopic/delete/', { topicId: topicId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    createTopic: function createTopic(params) {
        return axios.post('wdCmsTopic/createTopic/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    searchQuestions: function searchQuestions(params) {
        return axios.post('wdCmsTopic/searchQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    topicQuestions: function topicQuestions(params) {
        return axios.post('wdCmsTopic/topicQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    topicApprovingQuestions: function topicApprovingQuestions(params) {
        return axios.post('wdCmsTopic/topicApprovingQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addQuestionToTopic: function addQuestionToTopic(topicId, questionId) {
        return axios.post('wdCmsTopic/addQuestionToTopic/', { topicId: topicId, questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteQuestionFromTopic: function deleteQuestionFromTopic(topicId, questionId) {
        return axios.post('wdCmsTopic/deleteQuestionFromTopic/', { topicId: topicId, questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    moveTopicQuestion: function moveTopicQuestion(params) {
        return axios.post('wdCmsTopic/moveTopicQuestion/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "q2vl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_msg_template_vue__ = __webpack_require__("xZsF");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be91f8a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_msg_template_vue__ = __webpack_require__("cQTS");
function injectStyle (ssrContext) {
  __webpack_require__("GtE/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_msg_template_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_be91f8a8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_msg_template_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "q5xV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"block ",staticStyle:{"min-height":"400px"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"block-content "},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.user.userId===''),expression:"user.userId===''"}],staticClass:"btn btn-link btn-primary",on:{"click":_vm.showChoose}},[_vm._v("选择答主")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.user.userId!==''),expression:"user.userId!==''"}]},[_c('img',{staticClass:"img-avatar",attrs:{"src":_vm.user.headImgUrl}}),_vm._v(" "),_c('span',{},[_vm._v(_vm._s(_vm.user.nickname))]),_vm._v(" "),_c('a',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEdit),expression:"!isEdit"}],staticClass:"btn-link ",on:{"click":_vm.showChoose}},[_vm._v("更改")])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('answer-metas',{attrs:{"answer":_vm.answer,"rows":"10"},on:{"on-data-change":_vm.refreshAnswer}})],1)]),_vm._v(" "),_c('div',{staticClass:"block-content "}),_vm._v(" "),_c('div',{staticClass:"flex"},[_c('a',{staticClass:"btn btn-primary btn-sm margin-right-15 dll-save",on:{"click":_vm.save}},[_vm._v("保存")]),_vm._v(" "),_c('a',{staticClass:"btn btn-sm border dll-cancel",on:{"click":_vm.back2question}},[_vm._v("取消")])])])])]),_vm._v(" "),_c('answer-users',{attrs:{"title":"添加答主","show":_vm.showChooseModal},on:{"on-choose":_vm.chooseAnswer,"show":function($event){_vm.showChooseModal=true},"hide":function($event){_vm.showChooseModal=false}}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qGR4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {// const LOGIN = 'console/admin/login'
var LOGIN = 'wdCmsAdmin/login/';

module.exports = {
    login: function login(username, password) {
        return axios.post(LOGIN, { username: username, password: password }, {
            withCredentials: true
        }).then(function (resp) {
            console.log(resp);
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "qVPN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qeIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    mounted: function mounted() {
        var vm = this;
        vm.loadData();
    },

    props: {},
    data: function data() {
        return {
            p: {},
            auditingParams: {
                approve: '',
                rejectReason: '',
                answerId: ''
            }

        };
    },

    methods: {
        save: function save() {
            var vm = this;
            if (vm.auditingParams.approve === "false") {
                var r = vm.p.rejectReason.trim();
                if (r === '' || r === 'undefined') {
                    vm.$message.info("请输入拒绝原因");
                    return;
                }
                vm.auditingParams.approve = false;
                vm.auditingParams.rejectReason = vm.p.rejectReason;
            } else {
                vm.auditingParams.approve = true;
            }
            vm.auditingParams.answerId = vm.$route.params.answerId;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.audit(vm.auditingParams).then(function (data) {
                vm.$message.success("审核成功");
                vm.loadData();
                vm.$router.push('/answerList');
            });
        },
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.detail(vm.$route.params.answerId).then(function (data) {
                vm.p = data;
            });
        }
    }
});

/***/ }),

/***/ "qtlc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-header form-horizontal"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-1 fr"},[_c('button',{staticClass:"btn  btn-sm btn-primary",on:{"click":function($event){_vm.search()}}},[_vm._v("搜索")])]),_vm._v(" "),_c('div',{staticClass:"input-group input-group-sm col-md-3 fr"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control",attrs:{"placeholder":"输入用户昵称/手机号"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})])])])]),_vm._v(" "),_c('div',{staticClass:"block-content"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.list),function(a,index){return _c('tr',{key:a._id.$oid},[_c('td',[_vm._v("\n                               "+_vm._s(a.nickname)+"\n                            ")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.phone))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("date")(a.authenticationDate.$date)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.actualName))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(a.idCardNO))])])}))])]),_vm._v(" "),(_vm.totalCount===0)?_c('h5',{staticClass:"text-center red-font"},[_vm._v("暂时没有你查找的专题")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"block-content"}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],1)])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":"确定要删除专题吗？","show":_vm.showModal},on:{"confirm":_vm.remove,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    实名用户\n                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("用户昵称")]),_vm._v(" "),_c('th',[_vm._v("注册手机号")]),_vm._v(" "),_c('th',[_vm._v("上传实名信息时间")]),_vm._v(" "),_c('th',[_vm._v("姓名")]),_vm._v(" "),_c('th',[_vm._v("身份证号")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rIBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("tVFC");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62437624_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("MIuI");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62437624_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "radp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_commentsofanswer_vue__ = __webpack_require__("WuC/");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b94acda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_commentsofanswer_vue__ = __webpack_require__("9eTU");
function injectStyle (ssrContext) {
  __webpack_require__("HZji")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b94acda"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_commentsofanswer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b94acda_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_commentsofanswer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "sDxe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_cos__ = __webpack_require__("JyLo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_grid_div__ = __webpack_require__("ELb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_list_choose_user__ = __webpack_require__("U2La");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: { AnswerMetas: __WEBPACK_IMPORTED_MODULE_4__components_list_grid_div__["a" /* default */], AnswerUsers: __WEBPACK_IMPORTED_MODULE_5__components_list_choose_user__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;
        vm.questionId = vm.$route.params.questionId;
        vm.loadData();
    },

    props: [],
    data: function data() {
        return {
            tagMap: {},
            questionId: '',
            q: {
                //如果不定义这两个  chrome中 console 会报 can't read property  xxx(eg. user.yy,createdAt.$date) of undefined
                user: {},
                createdAt: {},
                knowledge: []
            },
            answers: {},
            comments: {},

            answersParams: {
                questionId: '',
                page: 1,
                perPage: 1
            },
            commentsParams: {
                questionId: '',
                page: 1,
                perPage: 1
            },
            tags: {},
            tagsMap: {},
            isEditTitleClicked: false,
            isEditDescClicked: false,

            //添加答主
            userId: '',
            userNickName: '',
            showChooseModal: false,

            answer: {
                metas: []
            },

            //                answerMetas: [],

            //用来判断是新增还是修改已有的回答
            answerId: '',

            //相关知识
            klg: '',
            showAdd: false
        };
    },

    methods: {
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.detail(vm.questionId).then(function (data) {
                vm.q = data;
                if (!vm.q.knowledge) vm.$set(vm.q, 'knowledge', []);
                vm.getAnswers();
                vm.getComments();
                vm.getTags();
            });
        },
        getAnswers: function getAnswers() {
            var vm = this;
            vm.answersParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.answers(vm.answersParams).then(function (data) {
                vm.answers = data;
            });
        },
        getUserAnswer: function getUserAnswer() {
            var _this = this;

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.getUserAnswer(vm.questionId, vm.userId).then(function (data) {
                debugger;
                if (data) vm.answer = data;
                if (!vm.answer.metas) _this.$set(vm.answer, 'metas', []);
                vm.answerId = data.answerId;
            });
        },
        getComments: function getComments() {
            var vm = this;
            vm.commentsParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.comments(vm.commentsParams).then(function (data) {
                vm.comments = data;
            });
        },
        getTags: function getTags() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__services_tag___default.a.list().then(function (data) {
                vm.tags = data;
            });
        },
        modifyTag: function modifyTag(tag) {
            var vm = this;
            var tagId = tag._id.$oid;
            var qTags = vm.q.tags;
            if (vm.isTagAdded(tagId)) {
                console.log('delete tag', tag);
                for (var i in qTags) {
                    if (vm.q.tags[i].$oid === tagId) {
                        vm.q.tags.splice(i, 1);
                    }
                }
            } else {
                console.log('add tag', tag);
                //TODO tag id
                vm.q.tags.push({ '$oid': tagId });
            }
            console.log(qTags);
        },
        isTagAdded: function isTagAdded(tagId) {
            var vm = this;
            var tags = vm.q.tags;
            for (var i in tags) {
                if (tags[i].$oid === tagId) return true;
            }
            return false;
        },

        //            实现的功能与上面的一样
        //            isTagAdded(tagId){
        //                console.log("qtagid",tagId)
        //                return this.q.tags.some((id)=>{
        //                    console.log("id",id)
        //                    return qTagId===id.$oid
        //                })
        //            },
        save: function save() {
            var vm = this;
            var tmpTag = [];
            if (!vm.q.title || vm.q.title.trim() === '') {
                vm.$message.error("标题不能为空");
                return;
            }
            //TODO 这里是异步  一般来说没什么问题 除非网络等出现异常。
            debugger;
            if (vm.userId) {
                if (vm.answer.metas.length === 0 || vm.answer.metas.length === 1 && vm.answer.metas[0]['content'].trim().length === 0) {
                    vm.$message.error("回答不能回空");
                    return;
                }
                if (vm.answer.showLink && (!vm.answer.link || vm.answer.link.trim() === '')) {
                    vm.$message.success("第三方链接不能为空");
                    return;
                }
                if (vm.answerId) vm.editAnswer();else vm.addAnswer();
            } else if (!vm.userId && vm.answer.metas.length > 0) {
                vm.$message.error("请选择答主");
                return;
            }
            for (var i in vm.q.tags) {
                tmpTag.push(vm.q.tags[i].$oid);
            }
            var qq = {
                questionId: vm.questionId,
                title: vm.q.title,
                desc: vm.q.desc,
                tags: tmpTag,
                isShow: vm.q.isShow,
                isRecommended: vm.q.isRecommended,
                knowledge: vm.q.knowledge
            };
            console.log(vm.q);
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.editDetail(qq).then(function (data) {
                vm.$message.success("保存成功");
                vm.loadData();
                vm.$router.push("/questionList");
            });
        },
        tagName: function tagName(id) {
            //遍历question的tag id 返回name
            var vm = this;
            var ts = vm.tags;
            for (var j in ts) {
                if (id === ts[j]._id.$oid) {
                    return ts[j].name;
                }
            }
            return "";
        },
        editTitle: function editTitle() {
            if (this.isEditTitleClicked) this.isEditTitleClicked = false;else this.isEditTitleClicked = true;
        },
        editDesc: function editDesc() {
            if (this.isEditDescClicked) this.isEditDescClicked = false;else this.isEditDescClicked = true;
        },
        refreshAnswer: function refreshAnswer(data) {
            this.answer = data;
        },


        /**
         * 回答部分
         */
        toAnswersComments: function toAnswersComments(routeParmas) {
            var questionUrl = { name: 'questionDetail', params: { questionId: routeParmas.params.questionId } };
            sessionStorage.setItem("questionUrl", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(questionUrl));
            //                to={name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}}
            this.$router.push(routeParmas);
        },
        chooseAnswer: function chooseAnswer(asker) {
            this.initAnswer();
            this.userId = asker._id.$oid;
            this.userNickName = asker.nickname;
            this.getUserAnswer();
        },
        showChoose: function showChoose() {
            this.showChooseModal = true;
        },
        initAnswer: function initAnswer() {
            this.answerMetas = [];
            this.userId = '';
            this.answerId = '';
        },
        editAnswer: function editAnswer() {
            var vm = this;
            var an = {
                answerId: vm.answerId,
                metas: vm.answer.metas ? vm.answer.metas : [],
                showLink: vm.answer.showLink ? vm.answer.showLink : false,
                link: vm.answer.link ? vm.answer.link : ''
            };
            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.editAnswer(an).then(function (data) {
                vm.$message.success("修改回答成功");
                vm.initAnswer();
            });
        },
        addAnswer: function addAnswer() {
            var vm = this;
            debugger;
            var an = {
                questionId: vm.questionId,
                userId: vm.userId,
                metas: vm.answer.metas ? vm.answer.metas : [],
                showLink: vm.answer.showLink ? vm.answer.showLink : false,
                link: vm.answer.link ? vm.answer.link : ''
            };

            __WEBPACK_IMPORTED_MODULE_1__services_question___default.a.addAnswer(an).then(function (data) {
                vm.$message.success("新增回答成功");
                vm.initAnswer();
                vm.getAnswers();
            });
        },

        //如果以后要新增一个按钮来单独添加或修改 那直接调用这个方法就行了
        modifyAnswer: function modifyAnswer() {
            if (!this.userId) {
                this.$message.error("请选择答主");
                return false;
            }
            if (!this.answer.metas || this.answer.metas.length === 0) {
                this.$message.error("回答不能回空");
                return false;
            }
            if (this.answerId) this.editAnswer();else this.addAnswer();
            return true;
        },
        addKnowledge: function addKnowledge() {
            if (this.klg && this.klg.trim() !== '') {
                this.q.knowledge.push(this.klg);
                this.initKlg();
            } else this.$message.error("请填写知识");
        },
        initKlg: function initKlg() {
            this.showAdd = false;
            this.klg = '';
        },
        deleteKnowledge: function deleteKnowledge(index) {
            this.q.knowledge.splice(index, 1);
        },
        toAnswerInfo: function toAnswerInfo() {
            localStorage.setItem("returnPath", this.$route.path);
            this.$router.push({ name: 'answerInfo', params: { 'questionId': this.questionId } });
        }
    },
    computed: {}
});

/***/ }),

/***/ "sfn8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_cos__ = __webpack_require__("JyLo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__ = __webpack_require__("ELb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_choose_user__ = __webpack_require__("U2La");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: { AnswerMetas: __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__["a" /* default */], AnswerUsers: __WEBPACK_IMPORTED_MODULE_4__components_list_choose_user__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;
        vm.questionId = vm.$route.params.questionId;
        //            vm.loadData();
        vm.getTags();
    },

    props: [],
    data: function data() {
        return {
            tagMap: {},
            questionId: '',
            q: {
                //如果不定义这两个  chrome中 console 会报 can't read property  xxx(eg. user.yy,createdAt.$date) of undefined
                title: '',
                desc: '',
                user: {},
                createdAt: {},
                answerMetas: [],
                tags: [],
                knowledge: [],
                isShow: false,
                isRecommended: false
            },
            answers: {},
            comments: {},

            answersParams: {
                questionId: '',
                page: 1,
                perPage: 1
            },
            commentsParams: {
                questionId: '',
                page: 1,
                perPage: 1
            },
            tags: {},
            tagsMap: {},
            isEditTitleClicked: false,
            isEditDescClicked: false,
            //添加提问者用的
            userId: '',
            userNickName: '',
            showChooseModal: false,

            added: false,
            wording: '',

            //相关知识
            klg: '',
            showAdd: false
        };
    },

    methods: {
        getAnswers: function getAnswers() {
            var vm = this;
            vm.answersParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.answers(vm.answersParams).then(function (data) {
                vm.answers = data;
            });
        },
        getComments: function getComments() {
            var vm = this;
            vm.commentsParams.questionId = vm.questionId;
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.comments(vm.commentsParams).then(function (data) {
                vm.comments = data;
            });
        },
        getTags: function getTags() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_tag___default.a.list().then(function (data) {
                vm.tags = data;
            });
        },
        modifyTag: function modifyTag(tag) {
            var vm = this;
            var tagId = tag._id.$oid;
            var qTags = vm.q.tags;
            if (vm.isTagAdded(tagId)) {
                console.log('delete tag', tag);
                for (var i in qTags) {
                    if (vm.q.tags[i].$oid === tagId) {
                        vm.q.tags.splice(i, 1);
                    }
                }
            } else {
                console.log('add tag', tag);
                vm.q.tags.push({ '$oid': tagId });
            }
            console.log(qTags);
        },
        isTagAdded: function isTagAdded(tagId) {
            var vm = this;
            var tags = vm.q.tags;
            for (var i in tags) {
                if (tags[i].$oid === tagId) return true;
            }
            return false;
        },
        save: function save() {
            var vm = this;
            if (!vm.userId) {
                vm.$message.error('请选择提问者');
                return;
            }
            if (!vm.q.title || vm.q.title.trim() === '') {
                vm.$message.error("标题不能为空");
                return;
            }
            //                if (!vm.q.desc || vm.q.desc.trim() === '') {
            //                    vm.$message.error("描述不能为空");
            //                    return;
            //                }
            var tmpTag = [];
            for (var i in vm.q.tags) {
                tmpTag.push(vm.q.tags[i].$oid);
            }
            var qq = {
                userId: vm.userId,
                title: vm.q.title,
                desc: vm.q.desc,
                tags: tmpTag,
                knowledge: vm.q.knowledge,
                isShow: vm.q.isShow,
                isRecommended: vm.q.isRecommended
            };
            console.log(qq);
            __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.addQuestion(qq).then(function (data) {
                vm.$message.success("添加成功");
                //                    vm.loadData()
                vm.$router.push("/questionList");
            });
        },
        tagName: function tagName(id) {
            //遍历question的tag id 返回name
            var vm = this;
            var ts = vm.tags;
            for (var j in ts) {
                if (id === ts[j]._id.$oid) {
                    return ts[j].name;
                }
            }
            return "";
        },
        editTitle: function editTitle() {
            if (this.isEditTitleClicked) this.isEditTitleClicked = false;else this.isEditTitleClicked = true;
        },
        editDesc: function editDesc() {
            if (this.isEditDescClicked) this.isEditDescClicked = false;else this.isEditDescClicked = true;
        },
        refreshAnswerMetas: function refreshAnswerMetas(data) {
            //                this.q.answerMetas = data;
        },


        /**
         *
         */
        showChoose: function showChoose() {
            this.showChooseModal = true;
        },
        chooseAsker: function chooseAsker(asker) {
            this.userId = asker._id.$oid;
            this.userNickName = asker.nickname;
        },
        addKnowledge: function addKnowledge() {
            if (this.klg && this.klg.trim() !== '') {
                this.q.knowledge.push(this.klg);
                this.initKlg();
            } else this.$message.error("请填写知识");
        },
        initKlg: function initKlg() {
            this.showAdd = false;
            this.klg = '';
        },
        deleteKnowledge: function deleteKnowledge(index) {
            this.q.knowledge.splice(index, 1);
        }
    },
    computed: {}
});

/***/ }),

/***/ "tVFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    components: { FileWrap: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */], fileUploader: __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */] },
    mounted: function mounted() {
        var vm = this;
    },

    props: {},
    data: function data() {
        return {
            p: {
                nickname: '',
                headImgUrl: '',
                desc: ''
            },
            auditingParams: {
                approve: '',
                rejectReason: '',
                answerId: ''
            },
            wording: '',
            showWording: false,

            added: false
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.p.headImgUrl = data;
            }).catch(function (err) {
                console.log("catch!!!", err.stack);
            });
        },
        save: function save() {
            var vm = this;
            if (vm.check()) {
                vm.add = true;
                __WEBPACK_IMPORTED_MODULE_0__services_answer___default.a.add(vm.p).then(function (data) {
                    vm.$message.success("添加成功");
                    vm.$router.push('/answerManageList');
                    vm.add = false;
                });
                vm.showWording = false;
            }
        },
        check: function check() {
            var vm = this;
            var p = vm.p;
            if (p.nickname.trim() === '' || p.nickname.length < 2 || p.nickname.length > 20) {
                vm.showWording = true;
                vm.wording = '请输入正确的昵称';
                return false;
            }
            if (p.headImgUrl.trim() === '') {
                vm.showWording = true;
                vm.wording = '请上传答主头像';
                return false;
            }
            if (p.desc.length > 30) {
                vm.showWording = true;
                vm.wording = '请输入正确的自我描述';
                return false;
            }
            return true;
        }
    }
});

/***/ }),

/***/ "tltV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("BO1k");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_topic__ = __webpack_require__("q0DR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_topic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirm__ = __webpack_require__("U1ku");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__["a" /* default */], Confirm: __WEBPACK_IMPORTED_MODULE_4__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {},

    props: {},
    data: function data() {
        return {
            p: {
                title: '',
                desc: '',
                bannerUrl: '',
                questionIds: [],
                shareImgUrl: ''
            },
            //用来存储已经放进去的question，判断按钮置灰的时候用到
            topicQuestions: [],
            questionsSearched: {},
            removeQuestionId: '',
            queryParams: {
                page: 1,
                perPage: 10,
                queryStr: '',
                topicId: ''
            },
            totalCount: 0,

            wording: '',
            showWording: false,

            topicQuestionsParams: {
                page: 1,
                perPage: 10,
                topicId: ''
            },
            topicQuestionsTotalCount: 0,

            showModal: false,

            topicId: '',
            image: {
                width: 0,
                height: 0
            }
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.p.bannerUrl = data;
                vm.getFileSize(file);
            });
        },
        shareImgChange: function shareImgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.p.shareImgUrl = data;
            });
        },
        getFileSize: function getFileSize(file) {
            var vm = this;
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result;
                console.log(data);
                var image = new Image();
                image.onload = function () {
                    vm.image.width = image.naturalWidth;
                    vm.image.height = image.naturalHeight;
                    console.log(image.width, image.height);
                };
                image.src = data;
            };
            reader.readAsDataURL(file);
        },

        /**
         * QUESTION
         */
        search: function search() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__services_topic___default.a.searchQuestions(vm.queryParams).then(function (data) {
                vm.questionsSearched = data;
            });
        },
        addQuestions: function addQuestions(question) {
            var vm = this;
            vm.topicQuestions.push(question);
            vm.showWording = false;
            vm.topicQuestionsTotalCount += 1;
        },

        //TODO 目前能用 有空完善
        // 添加的时候 应该将已添加的问题从 搜索问题的数组中去掉或者 将 添加按钮 disable..具体细节后期完善
        // 可以定义一个 临时变量用于 和 questionsSearched 做集合的减法操作
        // 最终确定  后台过滤已经添加的问题 就行了；前端不需要做太多工作
        deleteAddedQuestion: function deleteAddedQuestion(questionId) {
            var vm = this;
            var qs = vm.topicQuestions;
            for (var i = 0; i < qs.length; i++) {
                if (qs[i]._id.$oid === questionId) {
                    qs.splice(i, 1);
                    console.log(qs.length);
                    if (qs.length === 0) {
                        vm.showWord('该专题下还没有问题，快去添加吧');
                    }
                    return;
                }
            }
        },
        checkAddedQues: function checkAddedQues() {
            var vm = this; //lert(vm.topicQuestions.length)
            if (vm.topicQuestions.length === 0) vm.showWord('该专题下还没有问题，快去添加吧');
        },
        isQuestionAdded: function isQuestionAdded(questionId) {
            var vm = this;
            for (var q in vm.topicQuestions) {
                if (vm.topicQuestions[q]._id.$oid === questionId) {
                    return true;
                }
            }
            return false;
        },
        removeConfirm: function removeConfirm(questionId) {
            this.removeQuestionId = questionId;
            this.showModal = true;
        },
        remove: function remove() {
            var vm = this;
            vm.deleteAddedQuestion(vm.removeQuestionId);
        },
        pageChange: function pageChange(page) {
            var vm = this;
            vm.queryParams.page = page;
            vm.search();
        },

        //            topicQuestionPageChange(page) {
        //                let vm = this;
        //                vm.topicQuestionsParams.page = page;
        //                vm.search();
        //            },
        save: function save() {
            var vm = this;
            if (!vm.check()) return;
            __WEBPACK_IMPORTED_MODULE_3__services_topic___default.a.createTopic(vm.p).then(function (data) {
                vm.$message.success('添加成功！');
                vm.$router.push('/topicList');
            });
        },
        showWord: function showWord(wording) {
            var vm = this;
            vm.wording = wording;
            vm.showWording = true;
        },
        check: function check() {
            var vm = this;
            if (vm.p.title.trim() === '') {
                vm.showWord('标题不能为空');
                return false;
            }
            vm.p.questionIds = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(vm.topicQuestions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var qs = _step.value;

                    vm.p.questionIds.push(qs._id.$oid);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var qCount = vm.p.questionIds.length;
            if (qCount === 0) {
                vm.showWord('问题不能为空');
                return false;
            }
            return true;
        }
    }
});

/***/ }),

/***/ "u1b0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("专题标题")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.title),expression:"p.title"}],staticClass:"form-control dll-title",attrs:{"type":"text","placeholder":"标题"},domProps:{"value":(_vm.p.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "title", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("专题描述")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.p.desc),expression:"p.desc"}],staticClass:"form-control dll-desc",attrs:{"rows":"3","type":"text","placeholder":"描述"},domProps:{"value":(_vm.p.desc)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.p, "desc", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传专题图片")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-topic-pic",on:{"on-file-change":_vm.imgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{staticClass:"pic-max-500",attrs:{"src":_vm.p.bannerUrl,"alt":"","width":_vm.image.width,"height":_vm.image.height}}),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.p.bannerUrl),expression:"p.bannerUrl"}]},[_vm._v("尺寸:"+_vm._s(_vm.image.width)+"X"+_vm._s(_vm.image.height))])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传专题分享图片")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-share-pic",on:{"on-file-change":_vm.shareImgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{staticClass:"pic-max-500",attrs:{"src":_vm.p.shareImgUrl,"alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("添加问题")]),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.queryParams.queryStr),expression:"queryParams.queryStr"}],staticClass:"form-control dll-add-q",attrs:{"placeholder":"输入用户昵称/问题标题/回答内容/话题标签"},domProps:{"value":(_vm.queryParams.queryStr)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.queryParams, "queryStr", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"col-md-2 text-left"},[_c('a',{staticClass:"btn btn-primary add-btn dll-search-q",on:{"click":_vm.search}},[_vm._v("搜索")])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-1 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-10"},[_c('div',{staticClass:"js-wizard-simple block "},[_c('ul',{staticClass:"nav nav-tabs nav-tabs-alt nav-justified",staticStyle:{"width":"400px"}},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#simple-step1","data-toggle":"tab"}},[_vm._v("搜索列表("+_vm._s(_vm.questionsSearched.totalCount || 0)+")")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#simple-step2","data-toggle":"tab"},on:{"click":_vm.checkAddedQues}},[_vm._v("已添加问题("+_vm._s(_vm.topicQuestions.length)+")")])])]),_vm._v(" "),_c('div',{staticClass:"block-content tab-content"},[_c('div',{staticClass:"tab-pane fade in push-30-t push-50 active",staticStyle:{"width":"600px"},attrs:{"id":"simple-step1"}},[_vm._l((_vm.questionsSearched.list),function(qSearched,index){return _c('div',{key:qSearched._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"quest-title"},[_vm._v(_vm._s(qSearched.title))]),_vm._v(" "),_c('div',{staticClass:"flex-row",staticStyle:{"margin-top":"7px"}},[_c('span',{staticStyle:{"margin-right":"20px"}},[_vm._v("回答("+_vm._s(qSearched.answerCount)+")")]),_vm._v(" "),_c('span',[_vm._v("提问时间："+_vm._s(_vm._f("date")(qSearched.createdAt.$date)))])])]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary add-btn",attrs:{"disabled":_vm.isQuestionAdded(qSearched._id.$oid)},on:{"click":function($event){_vm.addQuestions(qSearched)}}},[_vm._v("添加\n                                                ")]),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":'/question/'+qSearched._id.$oid}},[_vm._v("查看\n                                                ")])],1)])}),_vm._v(" "),_c('el-pagination',{staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.queryParams.page,"page-size":_vm.queryParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.questionsSearched.totalCount},on:{"current-change":_vm.pageChange,"update:currentPage":function($event){_vm.$set(_vm.queryParams, "page", $event)}}})],2),_vm._v(" "),_c('div',{staticClass:"tab-pane fade push-30-t push-50",staticStyle:{"width":"600px"},attrs:{"id":"simple-step2"}},_vm._l((_vm.topicQuestions),function(qAdded,index){return _c('div',{key:qAdded._id.$oid},[_c('div',{staticClass:"flex-row list-item"},[_c('div',{staticClass:"list-left"},[_c('div',{staticClass:"quest-title"},[_vm._v(_vm._s(qAdded.title))]),_vm._v(" "),_c('div',{staticClass:"flex-row",staticStyle:{"margin-top":"7px"}},[_c('span',{staticStyle:{"margin-right":"20px"}},[_vm._v("回答("+_vm._s(qAdded.answerCount)+")")]),_vm._v(" "),_c('span',[_vm._v("提问时间："+_vm._s(_vm._f("date")(qAdded.createdAt.$date)))])])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary add-btn",on:{"click":function($event){_vm.removeConfirm(qAdded._id.$oid)}}},[_vm._v("删除\n                                                ")]),_vm._v(" "),_c('router-link',{staticClass:"detail-link",attrs:{"to":'/question/'+qAdded._id.$oid}},[_vm._v("查看\n                                                ")])],1)])}))])])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-5 col-md-offset-2"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWording),expression:"showWording"}],staticClass:"red-font"},[_vm._v(_vm._s(_vm.wording))])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-2"},[_c('a',{staticClass:"btn btn-success add-btn dll-save",on:{"click":_vm.save}},[_vm._v("确定")])])])])])])])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":"确定要删除问题吗？","show":_vm.showModal},on:{"confirm":_vm.remove,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    新增专题\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ua9a":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uqMi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_c('form',{staticClass:"form-horizontal"},[_c('div',{staticClass:"form-group "},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("标签名称：")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],staticClass:"form-control dll-name",attrs:{"type":"text","placeholder":"标签名称"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"},[_vm._v("上传标签图片：")]),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('file-wrapper',{staticClass:"btn btn-primary dll-img",on:{"on-file-change":_vm.imgChange}},[_c('i',{staticClass:"fa fa-upload"}),_vm._v("\n                                选择图片\n                            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{staticClass:"col-md-2 control-label"}),_vm._v(" "),_c('div',{staticClass:"col-md-7"},[_c('img',{attrs:{"src":_vm.iconUrl,"alt":"","width":_vm.image.width,"height":_vm.image.height}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.iconUrl),expression:"iconUrl"}]},[_vm._v("尺寸:"+_vm._s(_vm.image.width)+"X"+_vm._s(_vm.image.height))])])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('div',{staticClass:"col-md-2"}),_vm._v(" "),_c('div',{staticClass:"col-md-5"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3 "},[_c('button',{staticClass:"btn btn-success btn-block dll-save",attrs:{"disabled":_vm.added},on:{"click":_vm.createTag}},[_vm._v("确定")])]),_vm._v(" "),_c('div',{staticClass:"col-md-3 "},[_c('a',{staticClass:"btn btn-danger btn-block dll-cancel",on:{"click":_vm.cancel}},[_vm._v("取消")])])])])])])])])]),_vm._v(" "),_c('confirm',{attrs:{"title":"提示！","content":"确定要删除话题吗？","show":_vm.showModal},on:{"confirm":_vm.remove,"show":function($event){_vm.showModal=true},"hide":function($event){_vm.showModal=false}}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content bg-gray-lighter"},[_c('div',{staticClass:"row items-push"},[_c('div',{staticClass:"col-sm-7"},[_c('h1',{staticClass:"page-heading"},[_vm._v("\n                    新建标签\n                ")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "uxFY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vKlO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sideNav_vue__ = __webpack_require__("0FkJ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb30b63e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sideNav_vue__ = __webpack_require__("grUi");
function injectStyle (ssrContext) {
  __webpack_require__("uxFY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bb30b63e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sideNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bb30b63e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sideNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "vZuO":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAYFBAMCCf/EADgQAAIBAgEIBwMNAAAAAAAAAAABAgMEBQYREhQhIjFBUVRhcYGSsUKC8RMyMzVEUpGhwcLR4fD/2gAIAQEAAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAGTiuPwsZOlSSq1lxz8I95gVcZva8tteceyG76CljN7Qlsrzl2T3vU38Kx+F9JUqqVKs+GbhLuNYAAAAA4cYvnYWM5x+klux72TOE4bLFLlqTapx2zlz+JXW1pRtIaNGnGC7FtfiLm0o3cNGtTjNdq2rxJHFsNlhdylFt05bYS5/EpsHvnf2MJy+kjuy70dwAAAAJ/K2TULWPJuT9P5OjJemo4fKXOU3nfgjYBj5UU1LD4y5xmsz8Gc+SUm4XUeScX6/wUAAAAAJ7K37J7/7TryZ+rPff6GsDJym+rPfX6nJkl9r9z9xQgAAAAw8qqLnbUaqWyEmn4/A+clbqLpVbdveT00ulc/92m8DByquoqlSt095vTa6Fy/3YfWStFwtq1VrZOSS8PibgAAAAOW/nbSt50rirCEZLNvSSZG6crK60qNVNwe7UjzNy2yrjoJXFGWl96nz8GLnKuOg1b0ZaX3qnLwRh6cr260q1VJze9UlyLKwnbRt4UrerCcYrNuyTZ1AAAA48RxWjhsM83pVH82C4smrzHru7bSn8lB+zT2fmedDB7263o0ZJP2p7PU7aeStxJb9WnDuzs91kl03X4U/7DyS6Lr8af8AZ4VMlbiK3KtOffnRxV8HvbXelRk0vaht9D0s8eu7RpOfy0F7NTb+ZS4dilHEoNw3Zr50HxR2AAAhpSqYriG179WeZZ+SKywwi3sIpxip1OdSS2+HQdoAAOG/wi3v4vSioVOVSK2+PSSsJVMKxDY9+lPM83BouAAAQ2GzVHEaDm9FRms7fIueIAAA4ENiU1WxGu4PSUpvM1zLkAAE3jOAVXXlXto6cZvPKC4p9hlaherZq9fySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGoXr2avX8kjVwbAKqrxr3MdCMHnjB8W+0pAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="

/***/ }),

/***/ "w68N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity__ = __webpack_require__("R81X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_activity__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { fileUploader: __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */], FileWrapper: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */] },
    mounted: function mounted() {
        this.getFloatIconConfig();
        this.getRoundTableConfig();
    },
    data: function data() {
        return {

            imgCategory: '',

            floatConfig: {
                isShow: false,
                contentImgUrl: '',
                icon: ''
            },

            roundtableConfig: {
                isShow: false,
                banner: '',
                link: ''

            }
        };
    },

    methods: {
        imgChange: function imgChange(file) {

            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                debugger;
                switch (vm.imgCategory) {
                    case 'icon':
                        vm.floatConfig.icon = data;
                        break;
                    case 'content':
                        vm.floatConfig.contentImgUrl = data;
                        break;
                    case 'roundtable':
                        vm.roundtableConfig.banner = data;
                        break;
                    default:
                        break;
                }
            });
        },
        upload: function upload(imgCategory) {
            this.imgCategory = imgCategory;
            this.$refs.fileWrap.openFinder();
        },
        applyFloatConfig: function applyFloatConfig() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_activity___default.a.editFloatIconConfig(this.floatConfig).then(function (data) {
                vm.$message.success('修改浮动图片成功');
            });
        },
        applyRoundTable: function applyRoundTable() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_activity___default.a.editRoundTableConfig(this.roundtableConfig).then(function (data) {
                vm.$message.success('修改圆桌横幅成功');
            });
        },
        getFloatIconConfig: function getFloatIconConfig() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_activity___default.a.getFloatIconConfig().then(function (data) {
                vm.floatConfig.isShow = data.isShow;
                vm.floatConfig.contentImgUrl = data.contentImgUrl;
                vm.floatConfig.icon = data.icon;
            });
        },
        getRoundTableConfig: function getRoundTableConfig() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_2__services_activity___default.a.getRoundTableConfig().then(function (data) {
                vm.roundtableConfig.isShow = data.isShow;
                vm.roundtableConfig.banner = data.banner;
                vm.roundtableConfig.link = data.link;
            });
        }
    }
});

/***/ }),

/***/ "wC1S":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    list: function list(params) {
        return axios.post('wdCmsAnswer/applyList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(answerId) {
        return axios.post('wdCmsAnswer/detail/', { answerId: answerId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    audit: function audit(params) {
        console.log("audit para:", params);
        return axios.post('wdCmsAnswer/audit/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    edit: function edit(params) {
        return axios.post('wdCmsAnswer/editAnswerer/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    add: function add(params) {
        return axios.post('wdCmsAnswer/addAnswerer/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answerList: function answerList(params) {
        return axios.post('wdCmsAnswer/answererList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },

    //常用答主
    recentAnswerers: function recentAnswerers() {
        return axios.post('/wdCmsAnswer/recentAnswerers/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "wqBJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var uiLayoutApi = function uiLayoutApi($mode) {
    var $windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var $lPage = $('#page-container');
    // Mode selection
    switch ($mode) {
        case 'sidebar_toggle':
            if ($windowW > 991) {
                $lPage.toggleClass('sidebar-o');
            } else {
                $lPage.toggleClass('sidebar-o-xs');
            }
            break;
        case 'sidebar_mini_toggle':
            if ($windowW > 991) {
                $lPage.toggleClass('sidebar-mini');
            }
            break;
        default:
            return false;
    }
};
/* harmony default export */ __webpack_exports__["a"] = ({
    mounted: function mounted() {
        var $lHtml = $('html');
        $('[data-toggle="layout"]').on('click', function () {
            var $btn = $(this);

            uiLayoutApi($btn.data('action'));

            if ($lHtml.hasClass('no-focus')) {
                $btn.blur();
            }
        });
    },

    props: {},
    data: function data() {
        return {};
    },

    methods: {},
    computed: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("7t+N")))

/***/ }),

/***/ "xIye":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
    getPictures: function getPictures() {
        return axios.post('/wdCmsAdmin/getPictures/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editPicture: function editPicture(type, imgUrl) {
        return axios.post('/wdCmsAdmin/editPicture/', { type: type, imgUrl: imgUrl }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {}
});

/***/ }),

/***/ "xZsF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    mounted: function mounted() {
        console.log(this.temp);
    },

    props: ['temp'],
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ "xlMy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yEGN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        FileWrapper: __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__["a" /* default */]
    },
    mounted: function mounted() {
        var vm = this;
        this.tagId = vm.$route.params.tagId;
        vm.loadData();
    },

    props: {},
    data: function data() {
        return {
            added: false,
            tagId: '',
            name: '',
            iconUrl: '',
            image: {
                width: 0,
                height: 0
            }
        };
    },

    methods: {
        imgChange: function imgChange(file) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                vm.iconUrl = data;
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    var image = new Image();
                    image.onload = function () {
                        vm.image.width = image.naturalWidth;
                        vm.image.height = image.naturalHeight;
                        console.log(image.width, image.height);
                    };
                    image.src = data;
                };
                reader.readAsDataURL(file);
            });
        },
        loadData: function loadData() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_0__services_tag___default.a.detail(vm.tagId).then(function (data) {
                vm.name = data.name;
                vm.iconUrl = data.iconUrl;
            });
        },
        cancel: function cancel() {
            var vm = this;
            vm.name = '';
            vm.$router.push('/tagList');
        },
        editTag: function editTag() {
            var vm = this;
            if (this.name.trim() === '') {
                vm.$message.error("名称不能为空");
                return;
            }
            if (this.iconUrl === '') {
                vm.$message.error("图片不能为空");
                return;
            }

            vm.added = true;
            var params = {
                name: vm.name,
                iconUrl: vm.iconUrl,
                tagId: vm.tagId
            };
            __WEBPACK_IMPORTED_MODULE_0__services_tag___default.a.editTag(params).then(function (data) {
                vm.$message.success("修改成功");
                vm.$router.push("/tagList");
            });
        }
    }
});

/***/ }),

/***/ "ylrw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ysst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":_vm.openFinder}},[_c('label',{staticClass:"hidden-file-input",attrs:{"tabindex":"-1"}},[_vm._v("upload\n        "),_c('input',{ref:"file",attrs:{"type":"file","accept":"image/jpg,image/jpeg,image/png, image/gif"},on:{"change":_vm.fileChange}})]),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "z06s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_confirm__ = __webpack_require__("U1ku");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_question__ = __webpack_require__("g8Ah");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_question__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tag__ = __webpack_require__("gRfR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__services_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__("oAV5");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_2__components_confirm__["a" /* default */]
    },
    mounted: function mounted() {

        this.loadData();
        this.getTags();
    },

    props: {},
    data: function data() {
        //            let p;
        //            try {
        //                p = JSON.parse(sessionStorage.getItem("questionParams"));
        //            } catch (e) {
        //            }
        //            let page;
        //            let p;
        //            try {
        //                p = sessionStorage.getItem("questionParams");
        //                if (p) {
        //                    page = JSON.parse(p).page;
        //                }
        //            } catch (e) {
        //            }
        //            console.log(p);

        var data = {

            DELETE_WORDING: '确定要删除问题吗?',
            SET_TOP_WORDING: '确定要置顶问题吗?',
            wording: '',

            list: [],
            showModal: false,
            totalCount: 0,
            removeIndex: '',
            lastQueryWithOptions: false,
            queryParams: {
                page: 1,
                perPage: 15,
                queryStr: '',
                isShow: '',
                tagIds: ''
            },
            tags: [],
            // keyName:[key:true]
            //  'tags':[{'id':'true/false'}]
            //   'isShow':[{'true',true/false}]
            isKeyClicked: window.isKeyClicked || {
                tags: {},
                isShow: {}
            },
            clicked: false,
            actFn: '',
            setTopId: '',
            setTopStep: ''
        };
        //            debugger
        //            if(window.questionParams){
        //                data.queryParams=window.questionParams;
        //            }

        return data;
    },

    methods: {
        pageChange: function pageChange(page) {
            this.queryParams.page = page;
            this.loadData();
        },

        //            loadData(filter) {
        //                let vm = this;
        //                questionApi.list(this.queryParams).then(data => {
        //                    vm.list = data.list;
        //                    if (vm.queryParams.queryStr || filter) {
        //                        vm.lastQueryWithOptions = true
        //                    } else {
        //                        vm.lastQueryWithOptions = false
        //                    }
        //                    vm.totalCount = data.totalCount;
        //                    if (filter)
        //                        filter();
        //                })
        //            },
        loadData: function loadData() {
            var vm = this;
            //直接使用vm.queryParams = window.qparam  其中page会被初始化为1.。。导致每次返回后都在第一页。   估计是 分页组件 sync的问题
            if (window.qparam) {
                vm.queryParams.page = window.qparam.page;
                vm.queryParams.perPage = window.qparam.perPage;
                vm.queryParams.isShow = window.qparam.isShow;
                vm.queryParams.queryStr = window.qparam.queryStr;
                vm.queryParams.tagIds = window.qparam.tagIds;
            }
            var p = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            __WEBPACK_IMPORTED_MODULE_3__services_question___default.a.list(p).then(function (data) {
                vm.list = data.list;
                //确保page不会被刷到1
                if (window.qparam) vm.queryParams.page = window.qparam.page;
                window.qparam = null;
                if (vm.queryParams.queryStr) {
                    vm.lastQueryWithOptions = true;
                } else {
                    vm.lastQueryWithOptions = false;
                }
                vm.totalCount = data.totalCount;
            });
        },
        move: function move(id, step) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__services_question___default.a.move(id, step).then(function (data) {
                vm.loadData();
            });
        },
        removeConfirm: function removeConfirm(index) {
            this.wording = this.DELETE_WORDING;
            this.removeIndex = index;
            this.showModal = true;
            this.actFn = this.remove;
        },
        remove: function remove() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__services_question___default.a.delete(this.list[this.removeIndex]._id.$oid).then(function (data) {
                vm.$message.success('删除成功!');
                vm.loadData();
            });
        },
        setTopConfirm: function setTopConfirm(id, step) {
            this.wording = this.SET_TOP_WORDING;
            this.showModal = true;
            this.actFn = this.move;
            this.setTopId = id;
            this.setTopStep = step;
            this.actFn = this.setTop;
        },
        setTop: function setTop() {
            this.move(this.setTopId, this.setTopStep);
        },
        doConfirm: function doConfirm() {
            this.actFn();
        },
        showChange: function showChange(index) {
            __WEBPACK_IMPORTED_MODULE_3__services_question___default.a.setShow(this.list[index]._id.$oid, this.list[index].isShow).then(function (data) {});
        },
        setRecommend: function setRecommend(questionId, recommend) {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_3__services_question___default.a.setRecommend(questionId, recommend).then(function (data) {
                vm.loadData();
            });
        },
        getTags: function getTags() {
            var vm = this;
            __WEBPACK_IMPORTED_MODULE_4__services_tag___default.a.list().then(function (data) {
                vm.tags = data;
            });
        },

        /**
         * 1. if key is clicked , the isKeyClicked[keyName][key]=true  then set =false
         * 2. and vice versa
         * @param key list[index][keyName]._id.$oid
         * @param keyName  the name of the key of the objects in this.list.  eg. tags isShow ......
         */
        refreshListByKV: function refreshListByKV(key, keyName) {
            var vm = this;
            //这样做 isKeyClicked[keyName]不具备响应式
            //                if (vm.isKeyClicked[keyName][key]) {
            //                    vm.isKeyClicked[keyName][key] = false;
            //                }
            //                else {
            //                    vm.isKeyClicked[keyName][key] = true;
            //                }
            if (vm.isKeyClicked[keyName][key]) {
                vm.$set(vm.isKeyClicked[keyName], key, false);
            } else {
                vm.$set(vm.isKeyClicked[keyName], key, true);
            }
            if (keyName === 'isShow') {
                if (key === 'true') {
                    if (vm.isKeyClicked[keyName]['false']) vm.isKeyClicked[keyName]['false'] = false;
                } else if (key === 'false') {
                    if (vm.isKeyClicked[keyName]['true']) vm.isKeyClicked[keyName]['true'] = false;
                }
            }
            console.log("*******after click");
            console.log(keyName, key, vm.isKeyClicked[keyName][key]);
            vm.filterList();
        },
        filterList: function filterList() {
            var vm = this;
            var keyClicked = vm.isKeyClicked;
            var clickedTags = keyClicked["tags"];
            console.log(clickedTags);
            var tagIds = [];
            console.log(tagIds);
            for (var i in clickedTags) {
                if (clickedTags[i]) tagIds.push(i);
            }
            var isShow = void 0;
            if (keyClicked["isShow"]["true"]) isShow = true;else if (keyClicked["isShow"]["false"]) isShow = false;
            vm.queryParams.tagIds = tagIds;
            vm.queryParams.isShow = isShow;
            console.log(vm.queryParams);
            vm.loadData();
        },
        isContained: function isContained(target, value) {
            if ((typeof target === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(target)) === 'object') {
                for (var t in target) {
                    console.log("遍历list", target[t]._id.$oid, value, target[t]._id.$oid === value, t);
                    if (target[t]._id.$oid === value) return true;
                }
            }
            if (typeof target === 'boolean') {
                console.log(target, value);
                if (target === (value === 'true')) return true;
            }
            return false;
        },
        search: function search() {
            var vm = this;
            vm.queryParams.page = 1;
            vm.loadData();
        },
        detail: function detail(id) {
            var vm = this;
            debugger;
            window.qparam = JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(vm.queryParams));
            window.page = vm.queryParams.page;
            window.tagIds = vm.queryParams.tagIds;
            window.isKeyClicked = vm.isKeyClicked;
            console.log("qparam", window.qparam);
            //                try {
            //                    sessionStorage.setItem('questionParams', JSON.stringify(vm.queryParams));
            //                } catch (e) {
            //
            //                }
            vm.$router.push('/question/' + id);
        },
        copyUrl: function copyUrl(url) {
            //TODO copyurl
            url = 123;
            //                window.clipboardData.clearData('url')
            window.clipboardData.setData('url', url);
        },
        copy2clipboard: function copy2clipboard() {
            __WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* default */].copy2clipboard('已复制链接到剪贴板', this);
        }
    },

    computed: {}
});

/***/ }),

/***/ "zlMP":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(axios) {module.exports = {
  getSignature: function getSignature() {
    var url = location.href;
    console.log('url:' + url);
    return axios.post('ddUser/getShareSignature/', { url: url }, {
      withCredentials: true
    }).then(function (resp) {
      console.log(resp);
      return resp.data.data;
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("mtWM")))

/***/ }),

/***/ "zyzY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"content"},[_c('div',{staticClass:"block"},[_c('div',{staticClass:"block-content block-content-narrow"},[_vm._m(0),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"tab-content"},[_c('div',{staticClass:"tab-pane fade in active",attrs:{"id":"templateList"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.template),function(t,index){return _c('tr',{key:t.template_id},[_c('td',[_vm._v("\n                                        "+_vm._s(t.title)+"\n                                    ")]),_vm._v(" "),_c('td',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm._f("keywords")(t.keys)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(t.msgCount))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.newMessage(t)}}},[_vm._v("新建消息\n                                        ")]),_vm._v("\n                                        |\n                                        "),_c('a',{staticClass:"btn btn-xs ",attrs:{"type":"button","data-toggle":"tooltip"},on:{"click":function($event){_vm.removeConfirm(index)}}},[_vm._v("删除\n                                        ")])])])}))]),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.template.length>0),expression:"template.length>0"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.templateParams.page,"page-size":_vm.templateParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.template.length},on:{"current-change":_vm.tempPageChange,"update:currentPage":function($event){_vm.$set(_vm.templateParams, "page", $event)}}})],1)]),_vm._v(" "),_c('div',{staticClass:"tab-pane fade",attrs:{"id":"messageList"}},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped table-vcenter"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.message.list),function(m,index){return _c('tr',{key:m._id.$oid},[_c('td',[_vm._v("\n                                        "+_vm._s(m.templateTitle)+"\n                                    ")]),_vm._v(" "),_c('td',{staticClass:"text-muted"},[_vm._v(_vm._s(_vm._f("content")(m.data)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("date")(m.createdAt.$date)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(m.sendCount))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(m.clickCount))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.resend(m)}}},[_vm._v("再次发送\n                                        ")]),_vm._v("\n                                        |\n                                        "),_c('a',{staticClass:"btn btn-xs ",on:{"click":function($event){_vm.preview(index)}}},[_vm._v("查看详情\n                                        ")])])])}))]),_vm._v(" "),_c('el-pagination',{directives:[{name:"show",rawName:"v-show",value:(_vm.message.totalCount>0),expression:"message.totalCount>0"}],staticStyle:{"text-align":"center"},attrs:{"current-page":_vm.messageParams.page,"page-size":_vm.messageParams.perPage,"layout":"prev, pager, next, jumper","total":_vm.message.totalCount},on:{"current-change":_vm.messagePageChange,"update:currentPage":function($event){_vm.$set(_vm.messageParams, "page", $event)}}})],1)])])])])]),_vm._v(" "),_c('div',{ref:"modal",staticClass:"modal fade ",attrs:{"id":"userListModal","tabindex":"-1","role":"dialog","aria-labelledby":"title","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog"},[_c('div',{staticClass:"modal-content"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_c('msg-template',{staticClass:"previewdiv",attrs:{"temp":_vm.previewMessage}})],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"nav nav-tabs"},[_c('li',{staticClass:"active"},[_c('a',{attrs:{"href":"#templateList","data-toggle":"tab"}},[_vm._v("模板列表")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"#messageList","data-toggle":"tab"}},[_vm._v("消息列表")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("模板名称")]),_vm._v(" "),_c('th',{staticStyle:{"width":"40%"}},[_vm._v("关键词")]),_vm._v(" "),_c('th',[_vm._v("推送消息量")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("模板类型")]),_vm._v(" "),_c('th',{staticStyle:{"width":"40%"}},[_vm._v("消息内容")]),_vm._v(" "),_c('th',[_vm._v("发送时间")]),_vm._v(" "),_c('th',[_vm._v("送达人数")]),_vm._v(" "),_c('th',[_vm._v("点击量")]),_vm._v(" "),_c('th',[_vm._v("操作")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_c('div',{staticClass:" text-center"},[_c('div',{staticClass:"row"},[_c('a',{staticClass:"close",attrs:{"data-dismiss":"modal","aria-hidden":"true"}},[_vm._v("×")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.5c96b818fdedc0525a90.js.map