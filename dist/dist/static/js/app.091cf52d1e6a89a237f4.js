"use strict";

webpackJsonp([1], {

    /***/"+BTi":
    /***/function BTi(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"+IVC":
    /***/function IVC(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "h5  col-md-8 " }, [_vm._v(_vm._s(_vm.q.title))])]), _vm._v(" "), _c('div', {}, [_c('div', { staticClass: "js-wizard-simple block " }, [_c('ul', { staticClass: "nav nav-tabs nav-tabs-alt nav-justified", staticStyle: { "width": "400px" } }, [_c('li', { class: typeof _vm.type === 'undefined' ? 'active' : _vm.type === 'answers' ? 'active' : '' }, [_c('a', { attrs: { "href": "#simple-step1", "data-toggle": "tab" } }, [_vm._v("回答(" + _vm._s(_vm.answers.totalCount) + ")")])]), _vm._v(" "), _c('li', { class: _vm.type === 'comments' ? 'active' : '' }, [_c('a', { attrs: { "href": "#simple-step2", "data-toggle": "tab" } }, [_vm._v("问题评论(" + _vm._s(_vm.comments.totalCount) + ")")])])]), _vm._v(" "), _c('div', { staticClass: "block-content tab-content" }, [_c('div', { staticClass: "tab-pane fade in push-30-t push-50 ", class: typeof _vm.type === 'undefined' ? 'active' : _vm.type === 'answers' ? 'active' : '', staticStyle: { "width": "600px" }, attrs: { "id": "simple-step1" } }, [_vm._l(_vm.answers.list, function (answer, index) {
                return _c('div', { key: answer._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "form-group" }, [answer.isAdmin ? _c('div', { staticClass: "col-md-8" }, [_c('label', [_vm._v("管理员")])]) : _c('div', { staticClass: "col-md-8" }, [_c('img', { staticClass: "img-avatar", attrs: { "src": answer.user.headImgUrl } }), _vm._v(" "), _c('label', [_vm._v(_vm._s(answer.user.nickname))])]), _vm._v(" "), _c('div', { staticClass: " col-md-4" }, [_c('span', { staticClass: "dropdown" }, [_vm._m(1, true), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu", attrs: { "role": "menu" } }, [_c('li', [_c('a', { directives: [{ name: "show", rawName: "v-show", value: answer.isShow, expression: "answer.isShow" }], on: { "click": function click($event) {
                            _vm.setShowConfirm(answer._id.$oid, false, _vm.SET_ANSWER_SHOW_WORDING, _vm.setAnswerShow);
                        } } }, [_vm._v("隐藏回答")]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: !answer.isShow, expression: "!answer.isShow" }], on: { "click": function click($event) {
                            _vm.setShowConfirm(answer._id.$oid, true, _vm.SET_ANSWER_SHOW_WORDING, _vm.setAnswerShow);
                        } } }, [_vm._v("取消隐藏")])]), _vm._v(" "), _c('li', [_c('a', { on: { "click": function click($event) {
                            _vm.baseConfirm(answer._id.$oid, _vm.DELETE_ANSWER_WORDING, _vm.deleteAnswer);
                        } } }, [_vm._v("删除回答")])]), _vm._v(" "), _c('li', [_c('a', { directives: [{ name: "show", rawName: "v-show", value: !answer.isAdmin, expression: "!answer.isAdmin" }], on: { "click": function click($event) {
                            _vm.showEditer(answer._id.$oid);
                        } } }, [_vm._v("编辑回答")])])])]), _vm._v(" "), _c('span', { staticClass: "dropdown col-md-offset-1" }, [_vm._m(2, true), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu", attrs: { "role": "menu" } }, [answer.seq != 0 ? _c('li', [_c('a', { on: { "click": function click($event) {
                            _vm.baseConfirm(answer._id.$oid, _vm.SET_ANSWER_TOP_WORDING, _vm.setAnswerTop);
                        } } }, [_vm._v("置顶")])]) : _vm._e(), _vm._v(" "), _c('li', [_c('a', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.answersParams.page == 1 && index == 0), expression: "!(answersParams.page==1 && index == 0)" }], on: { "click": function click($event) {
                            _vm.answerMove(answer._id.$oid, answer.seq - 1);
                        } } }, [_vm._v("上移")])]), _vm._v(" "), _c('li', [_c('a', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.answersParams.page == 1 && index == _vm.answers.list.length - 1), expression: "!(answersParams.page==1 && index == answers.list.length-1)" }], on: { "click": function click($event) {
                            _vm.answerMove(answer._id.$oid, answer.seq + 1);
                        } } }, [_vm._v("下移")])])])])])]), _vm._v(" "), _vm._l(answer.metas, function (meta, index) {
                    return _c('div', { key: index, staticClass: "container-fluid" }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.EditClickedAnswerId === answer._id.$oid), expression: "!(EditClickedAnswerId===answer._id.$oid)" }] }, [meta.type === 'TEXT' ? _c('p', { staticClass: "col-md-10 pre-wrap" }, [_vm._v(_vm._s(meta.content))]) : _vm._e(), _vm._v(" "), meta.type === 'IMG' ? _c('img', { staticClass: "pic-max-400", attrs: { "src": meta.content } }) : _vm._e()])]);
                }), _vm._v(" "), _c('div', { staticClass: "container-fluid" }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.EditClickedAnswerId === answer._id.$oid, expression: "EditClickedAnswerId===answer._id.$oid" }] }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-10" }, [_c('answer-metas', { attrs: { "metas": answer.metas, "rows": 20 }, on: { "on-data-change": _vm.refreshAnswerMetas } })], 1)]), _vm._v(" "), _c('div', { staticClass: "row " }, [_c('div', { staticClass: "col-md-1" }, [_c('a', { staticClass: "btn btn-sm btn-primary", on: { "click": function click($event) {
                            _vm.editAnswer(answer._id.$oid, answer.metas);
                        } } }, [_vm._v("保存")])]), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('a', { staticClass: "btn btn-sm btn-primary", on: { "click": function click($event) {
                            _vm.showEditer();
                        } } }, [_vm._v("取消")])])])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("date")(answer.createdAt.$date)))])])], 2)])]);
            }), _vm._v(" "), _c('el-pagination', { directives: [{ name: "show", rawName: "v-show", value: _vm.answers.totalCount > 0, expression: "answers.totalCount>0" }], staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.answersParams.page, "page-size": _vm.answersParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.answers.totalCount }, on: { "current-change": _vm.answersPageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.answersParams, "page", $event);
                    } } })], 2), _vm._v(" "), _c('div', { staticClass: "tab-pane fade in push-30-t push-50 ", class: _vm.type === 'comments' ? 'active' : '', staticStyle: { "width": "600px" }, attrs: { "id": "simple-step2" } }, [_vm._l(_vm.comments.list, function (comment, index) {
                return _c('div', { key: comment._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-8" }, [_c('img', { staticClass: "img-avatar", attrs: { "src": comment.user.headImgUrl } }), _vm._v(" "), _c('label', {}, [_vm._v(_vm._s(comment.user.nickname))])]), _vm._v(" "), _c('div', { staticClass: "form-group col-md-4 fr" }, [_c('span', { staticClass: "dropdown" }, [_vm._m(3, true), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu", attrs: { "role": "menu" } }, [_c('li', [_c('a', { directives: [{ name: "show", rawName: "v-show", value: comment.isShow, expression: "comment.isShow" }], on: { "click": function click($event) {
                            _vm.setShowConfirm(comment._id.$oid, false, _vm.SET_COMMENT_HIDE_WORDING, _vm.setCommentShow);
                        } } }, [_vm._v("隐藏评论")]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: !comment.isShow, expression: "!comment.isShow" }], on: { "click": function click($event) {
                            _vm.setShowConfirm(comment._id.$oid, true, _vm.SET_COMMENT_SHOW_WORDING, _vm.setCommentShow);
                        } } }, [_vm._v("取消隐藏")])]), _vm._v(" "), _c('li', [_c('a', { on: { "click": function click($event) {
                            _vm.baseConfirm(comment._id.$oid, _vm.DELETE_COMMENT_WORDING, _vm.deleteComment);
                        } } }, [_vm._v("删除评论")])])])])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-10" }, [_vm._v(_vm._s(comment.content))])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm._f("date")(comment.createdAt.$date)))])])])]);
            }), _vm._v(" "), _c('el-pagination', { directives: [{ name: "show", rawName: "v-show", value: _vm.comments.totalCount, expression: "comments.totalCount" }], staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.commentsParams.page, "page-size": _vm.commentsParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.comments.totalCount }, on: { "current-change": _vm.commentsPageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.commentsParams, "page", $event);
                    } } })], 2)])])])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": _vm.confirmWording, "show": _vm.showModal }, on: { "confirm": _vm.doConfirm, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1)])]), _vm._v(" "), _c('div', { staticClass: "back" }, [_c('button', { staticClass: "btn btn-sm  ", on: { "click": _vm.back2question } }, [_c('span', { staticClass: "glyphicon glyphicon-chevron-left" }), _vm._v("返回问题")])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    查看回答和问题评论\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle", attrs: { "data-toggle": "dropdown" } }, [_c('label', { staticClass: "font-s24" }, [_vm._v("...")])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle", attrs: { "data-toggle": "dropdown" } }, [_vm._v("排序"), _c('span', { staticClass: "caret" })]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle ", attrs: { "data-toggle": "dropdown" } }, [_c('label', { staticClass: "font-s24" }, [_vm._v("...")])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"/899":
    /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (axios) {
            var APP_SIGN_URL = 'cosSign/getAppSign/';

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

            /* harmony default export */__webpack_exports__["a"] = service;
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("mtWM"));

        /***/
    },

    /***/"/9nP":
    /***/function nP(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_question__ = __webpack_require__("g8Ah");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_question__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_cos__ = __webpack_require__("JyLo");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_confirm__ = __webpack_require__("U1ku");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__ = __webpack_require__("ELb+");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
            components: { Confirm: __WEBPACK_IMPORTED_MODULE_2__components_confirm__["a" /* default */], AnswerMetas: __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__["a" /* default */] },
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
                    EditClickedAnswerId: ''
                };
            },

            methods: {
                loadData: function loadData() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.detail(vm.questionId).then(function (data) {
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
                    if (window.questionUrl) this.$router.push(window.questionUrl);else window.history.go(-1);
                },

                /**
                 * COMMENT
                 */
                getComments: function getComments() {
                    var vm = this;
                    vm.commentsParams.questionId = vm.questionId;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.comments(vm.commentsParams).then(function (data) {
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

                /**
                 * ANSWER  //TODO move以后  路由信息会丢失。。然后刷新页面  会回到default的路由
                 */
                getAnswers: function getAnswers() {
                    var vm = this;
                    vm.answersParams.questionId = vm.questionId;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.answers(vm.answersParams).then(function (data) {
                        vm.answers = data;
                    });
                },
                setAnswerShow: function setAnswerShow() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.setAnswerShow(vm.confirmId, vm.isShow).then(function (data) {
                        vm.getAnswers();
                        if (vm.isShow) vm.$message.success("取消隐藏成功");else vm.$message.success("隐藏成功");
                    });
                },
                deleteAnswer: function deleteAnswer() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.deleteAnswer(vm.confirmId).then(function (data) {
                        vm.$message.success("删除成功");
                        vm.loadData();
                    });
                },
                answerMove: function answerMove(id, step) {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.answerMove(id, step).then(function (data) {
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
                editAnswer: function editAnswer(id, metas) {
                    var _this = this;

                    var vm = this;
                    if (metas.length === 0 || metas.length === 1 && metas[0]['content'].trim().length === 0) {
                        vm.$message.success("回答不能为空");
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.editAnswer(id, metas).then(function (data) {
                        vm.$message.success("保存成功");
                        _this.EditClickedAnswerId = '';
                    });
                },
                showEditer: function showEditer(id) {
                    if (id) this.EditClickedAnswerId = id;else {
                        this.EditClickedAnswerId = '';
                        this.loadData();
                    }
                },
                refreshAnswerMetas: function refreshAnswerMetas(data, answer) {
                    //                debugger;
                    //                answer.metas = data;
                    //                answer.metas.content += '123123'
                }
            },
            computed: {}

        };

        /***/
    },

    /***/"0FkJ":
    /***/function FkJ(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($, jQuery) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("NYxO");
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
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
                path: "/questionList"
            }, {
                name: "专题管理",
                subMenus: [{
                    name: "专题列表",
                    path: "/topicList"
                }, {
                    name: "新增专题",
                    path: "/addTopic"
                }]
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
                path: "/tagList"
            }, {
                name: "答主审核",
                path: "/answerList"
            }, {
                name: "答主管理",
                path: "/answerManageList"
            }, {
                name: "图片管理",
                path: "/imageMoreList"
            }];
            /* harmony default export */__webpack_exports__["a"] = {
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
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"), __webpack_require__("7t+N"));

        /***/
    },

    /***/"1gUR":
    /***/function gUR(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"2PW4":
    /***/function PW4(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("昵称：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.nickname, expression: "p.nickname" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "昵称" }, domProps: { "value": _vm.p.nickname }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "nickname", $event.target.value);
                    } } })]), _vm._v("\n                        2-20个字符\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("头像：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_vm.p.headImgUrl ? _c('img', { staticClass: "img-avatar", attrs: { "src": _vm.p.headImgUrl } }) : _vm._e(), _vm._v(" "), _c('file-wrap', { staticClass: "btn btn-primary", on: { "on-file-change": _vm.imgChange } }, [_vm._v("上传图片")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("自我描述")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.desc, expression: "p.desc" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "自我描述", "rows": "5" }, domProps: { "value": _vm.p.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "desc", $event.target.value);
                    } } })]), _vm._v("\n                        30个字符\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2 col-md-offset-2" }, [_c('button', { staticClass: "btn btn-success btn-block", attrs: { "disabled": _vm.added }, on: { "click": _vm.save } }, [_vm._v("确定\n                            ")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('router-link', { staticClass: "btn btn-danger btn-block", attrs: { "to": "/answerManageList" } }, [_vm._v("取消\n                            ")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('h5', { directives: [{ name: "show", rawName: "v-show", value: _vm.showWording, expression: "showWording" }], staticClass: "text-danger" }, [_vm._v(_vm._s(_vm.wording))])])])])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    新增答主\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"2Tzx":
    /***/function Tzx(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("HfD5");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48726dd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("ZB4y");
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48726dd2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"3AVo":
    /***/function AVo(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("pgX7");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74924f1f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("D/uO");
        function injectStyle(ssrContext) {
            __webpack_require__("wyH0");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-74924f1f";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74924f1f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"4Gls":
    /***/function Gls(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "form-label col-md-2" }, [_vm._v("提问者:")]), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-8" }, [_c('a', { directives: [{ name: "show", rawName: "v-show", value: _vm.userId === '', expression: "userId===''" }], staticClass: "btn btn-sm btn-primary", on: { "click": _vm.showChoose } }, [_vm._v("添加答主")]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.userId !== '', expression: "userId!==''" }] }, [_c('span', {}, [_vm._v(_vm._s(_vm.userNickName))]), _vm._v(" "), _c('a', { staticClass: "btn-link ", on: { "click": _vm.showChoose } }, [_vm._v("更改")])])])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "form-label col-md-2" }, [_vm._v("问题标题:")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.title, expression: "q.title" }], staticClass: "form-control ", domProps: { "value": _vm.q.title }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.q, "title", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "form-label col-md-2" }, [_vm._v("问题描述:")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.desc, expression: "q.desc" }], staticClass: "form-control ", domProps: { "value": _vm.q.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.q, "desc", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: " col-md-2" }, [_vm._v("标签:")]), _vm._v(" "), _c('div', { staticClass: "col-md-8 line-height25" }, _vm._l(_vm.q.tags, function (tag, index) {
                return _c('label', { key: tag.$oid }, [_vm.tagName(tag.$oid) !== '' ? _c('label', { staticClass: "label label-default margin-bottom-15" }, [_vm._v(_vm._s(_vm.tagName(tag.$oid)))]) : _vm._e(), _vm._v("  \n                            ")]);
            })), _vm._v(" "), _c('span', { staticClass: "text-right" }, [_vm._v(_vm._s(_vm._f("date")(_vm.q.createdAt.$date)))])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_vm.answers.totalCount > 0 ? _c('span', { staticClass: "col-md-3" }, [_vm._v("共" + _vm._s(_vm.answers.totalCount) + "个回答 \n                            "), _c('router-link', { staticClass: "detail-link", attrs: { "to": { name: 'answerscomments', params: { questionId: _vm.q._id.$oid, type: 'answers' } } } }, [_vm._v("查看全部回答")])], 1) : _vm._e(), _vm._v(" "), _vm.comments.totalCount > 0 ? _c('span', { staticClass: "col-md-3" }, [_vm._v("共" + _vm._s(_vm.comments.totalCount) + "个问题评论 \n                            "), _c('router-link', { staticClass: "detail-link", attrs: { "to": { name: 'answerscomments', params: { questionId: _vm.q._id.$oid, type: 'comments' } } } }, [_vm._v("查看全部问题评论")])], 1) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', { staticClass: "form-group " }, [_c('label', { staticClass: " col-md-2" }, [_vm._v("添加标签:")]), _vm._v(" "), _c('div', { staticClass: "col-md-9 line-height25" }, _vm._l(_vm.tags, function (tag, index) {
                return _c('span', { key: tag._id.$oid }, [_c('a', { staticClass: "label label-default ", on: { "click": function click($event) {
                            _vm.modifyTag(tag);
                        } } }, [_c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.isTagAdded(tag._id.$oid), expression: "isTagAdded(tag._id.$oid)" }], staticClass: "glyphicon glyphicon-ok" }), _vm._v(" "), _vm._v("\n                                        " + _vm._s(tag.name) + "\n                                    ")]), _vm._v("\n                                          \n                                ")]);
            })), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": { name: 'addTag', params: { 'questionId': _vm.questionId } } } }, [_vm._v("\n                            创建其他标签\n                        ")])], 1), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("是否展示问题:(不选默认为否)")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isShow, expression: "q.isShow" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isShow", "value": "true" }, domProps: { "checked": _vm._q(_vm.q.isShow, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isShow", "true");
                    } } }), _vm._v("是\n                            "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isShow, expression: "q.isShow" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isShow", "value": "false" }, domProps: { "checked": _vm._q(_vm.q.isShow, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isShow", "false");
                    } } }), _vm._v("否\n                        ")])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("首页展示:(不选默认为否)")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isRecommended, expression: "q.isRecommended" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isRecommended", "value": "true" }, domProps: { "checked": _vm._q(_vm.q.isRecommended, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isRecommended", "true");
                    } } }), _vm._v("是\n                            "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isRecommended, expression: "q.isRecommended" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isRecommended", "value": "false" }, domProps: { "checked": _vm._q(_vm.q.isRecommended, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isRecommended", "false");
                    } } }), _vm._v("否\n                        ")])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2" }), _vm._v(" "), _c('div', { staticClass: "col-md-3" }, [_c('a', { staticClass: "btn btn-block btn-success", attrs: { "type": "button" }, on: { "click": function click($event) {
                        _vm.save();
                    } } }, [_vm._v("确定")])])])])])])]), _vm._v(" "), _c('answer-users', { attrs: { "title": "添加提问者", "show": _vm.showChooseModal }, on: { "on-choose": _vm.chooseAsker, "show": function show($event) {
                        _vm.showChooseModal = true;
                    }, "hide": function hide($event) {
                        _vm.showChooseModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    新增问题\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"6Jx2":
    /***/function Jx2(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"6RkX":
    /***/function RkX(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("a+xo");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_126cced6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("wRZZ");
        function injectStyle(ssrContext) {
            __webpack_require__("UzbG");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-126cced6";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_126cced6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"7uHN":
    /***/function uHN(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__components_sideNav__ = __webpack_require__("vKlO");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__("Cz8s");
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
            components: {
                SideNav: __WEBPACK_IMPORTED_MODULE_0__components_sideNav__["a" /* default */],
                NavHeader: __WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */]
            }
        };

        /***/
    },

    /***/"9L7j":
    /***/function L7j(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("qeIj");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fcf054_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("h9po");
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90fcf054_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"9S90":
    /***/function S90(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"A7T4":
    /***/function A7T4(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_answer__ = __webpack_require__("wC1S");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_answer__);

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"B2C2":
    /***/function B2C2(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"BCDO":
    /***/function BCDO(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("JNkg");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5391bc1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("oGoQ");
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5391bc1e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"C++z":
    /***/function CZ(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"CGCS":
    /***/function CGCS(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"Cz8s":
    /***/function Cz8s(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__("wqBJ");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_95440eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__("hWB+");
        function injectStyle(ssrContext) {
            __webpack_require__("B2C2");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-95440eea";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_95440eea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"D/uO":
    /***/function DUO(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('router-link', { staticClass: "btn btn-primary fl", attrs: { "to": "/addTag" } }, [_vm._v("+新建标签")])], 1)]), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(1), _vm._v(" "), _c('tbody', { on: { "drop": _vm.onDrop } }, _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid, staticStyle: { "padding-top": "50px" }, attrs: { "draggable": "true", "id": a._id.$oid }, on: { "dragstart": _vm.onDrag, "dragenter": _vm.onDragenter, "dragleave": _vm.onDragleave, "dragend": _vm.onDragend } }, [_c('td', { attrs: { "draggable": "false" } }, [_c('img', { staticClass: "pic", attrs: { "src": a.iconUrl, "draggable": "false" }, on: { "drop": _vm.onDrop } })]), _vm._v(" "), _c('td', { attrs: { "draggable": "false" } }, [_vm._v(_vm._s(a.name))]), _vm._v(" "), _c('td', { attrs: { "draggable": "false" } }, [_c('router-link', { staticClass: "btn btn-xs btn-primary", attrs: { "draggable": "false", "to": '/editTag/' + a._id.$oid } }, [_vm._v("编辑\n                                ")]), _vm._v(" "), _c('a', { staticClass: "btn btn-xs btn-primary", attrs: { "type": "button", "data-toggle": "tooltip", "draggable": "false" }, on: { "click": function click($event) {
                            _vm.removeConfirm(index);
                        } } }, [_vm._v("删除\n                                ")])], 1)]);
            }))])])])])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": "确定要删除话题吗？", "show": _vm.showModal }, on: { "confirm": _vm.remove, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    话题标签\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("图片")]), _vm._v(" "), _c('th', [_vm._v("标签")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"DWeW":
    /***/function DWeW(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_imageMore__ = __webpack_require__("xIye");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_imageMore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_imageMore__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //


            /* harmony default export */__webpack_exports__["a"] = {
                components: {
                    FileWrapper: __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__["a" /* default */]
                },
                mounted: function mounted() {
                    this.getPictures();
                },

                props: {},
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
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"));

        /***/
    },

    /***/"DZwR":
    /***/function DZwR(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"Duic":
    /***/function Duic(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("标签名称：")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.name, expression: "name" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "标签名称" }, domProps: { "value": _vm.name }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.name = $event.target.value;
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("上传标签图片：")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('file-wrapper', { staticClass: "btn btn-primary", on: { "on-file-change": _vm.imgChange } }, [_c('i', { staticClass: "fa fa-upload" }), _vm._v("\n                                选择图片\n                            ")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('img', { attrs: { "src": _vm.iconUrl, "alt": "", "width": _vm.image.width, "height": _vm.image.height } }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.iconUrl, expression: "iconUrl" }] }, [_vm._v("尺寸:" + _vm._s(_vm.image.width) + "X" + _vm._s(_vm.image.height))])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-2" }, [_c('button', { staticClass: "btn btn-primary add-btn", attrs: { "disabled": _vm.added }, on: { "click": _vm.createTag } }, [_vm._v("确定")]), _vm._v(" "), _c('a', { staticClass: "detail-link", on: { "click": _vm.cancel } }, [_vm._v("取消")])])])])])])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": "确定要删除话题吗？", "show": _vm.showModal }, on: { "confirm": _vm.remove, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    新建标签\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"EJ8m":
    /***/function EJ8m(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //


            /* harmony default export */__webpack_exports__["a"] = {
                mounted: function mounted() {
                    var vm = this;
                    vm.loadData();
                    $(this.$refs.modal).on('hidden.bs.modal', function () {
                        vm.$emit('hide');
                    });
                    $(this.$refs.modal).on('shown.bs.modal', function () {
                        vm.$emit('show');
                    });
                },
                data: function data() {
                    return {
                        list: [],
                        queryParams: {
                            page: 1,
                            perPage: 10,
                            queryStr: ''
                        },
                        totalCount: 0,
                        wording: '未搜到该用户'
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
                        vm.queryParams.page = 1;
                        vm.loadData();
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

            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"));

        /***/
    },

    /***/"ELb+":
    /***/function ELb(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_vue__ = __webpack_require__("iOgM");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a65d638e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_vue__ = __webpack_require__("PE4x");
        function injectStyle(ssrContext) {
            __webpack_require__("WYYg");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-a65d638e";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_grid_div_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a65d638e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_grid_div_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"FxvQ":
    /***/function FxvQ(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"GVU2":
    /***/function GVU2(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "sidebar-l sidebar-o side-scroll header-navbar-fixed", attrs: { "id": "page-container" } }, [_c('side-nav'), _vm._v(" "), _c('nav-header'), _vm._v(" "), _c('router-view', { attrs: { "id": "main-container" } })], 1);
        };
        var staticRenderFns = [];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"GX9t":
    /***/function GX9t(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* WEBPACK VAR INJECTION */(function (module) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

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
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("f1Eh")(module));

        /***/
    },

    /***/"Gt4P":
    /***/function Gt4P(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (axios) {
            var uploadUrl = '/image/upload/';
            /* harmony default export */__webpack_exports__["a"] = {
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
                }
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("mtWM"));

        /***/
    },

    /***/"HBpH":
    /***/function HBpH(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('nav', { attrs: { "id": "sidebar" } }, [_c('div', { attrs: { "id": "sidebar-scroll" } }, [_c('div', { staticClass: "sidebar-content" }, [_c('div', { staticClass: "side-header side-content bg-white-op" }, [_c('button', { staticClass: "btn btn-link text-gray pull-right hidden-md hidden-lg", attrs: { "type": "button", "data-toggle": "layout", "data-action": "sidebar_close" }, on: { "click": _vm.close } }, [_c('i', { staticClass: "fa fa-times" })]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', { staticClass: "side-content" }, [_c('ul', { staticClass: "nav-main" }, _vm._l(_vm.menus, function (m, index) {
                return _c('li', { key: index }, [m.subMenus ? _c('a', { staticClass: "nav-submenu", attrs: { "data-toggle": "nav-submenu", "href": "#" } }, [_c('i', { staticClass: "si si-badge" }), _vm._v(" "), _c('span', { staticClass: "sidebar-mini-hide" }, [_vm._v(_vm._s(m.name))])]) : _vm._e(), _vm._v(" "), !m.subMenus ? _c('router-link', { attrs: { "to": m.path } }, [_c('i', { staticClass: "si si-badge" }), _vm._v(" "), _c('span', { staticClass: "sidebar-mini-hide" }, [_vm._v(_vm._s(m.name))])]) : _vm._e(), _vm._v(" "), m.subMenus ? _c('ul', _vm._l(m.subMenus, function (sm, i) {
                    return _c('li', { key: i, on: { "click": _vm.close } }, [_c('router-link', { attrs: { "to": sm.path } }, [_vm._v(_vm._s(sm.name))])], 1);
                })) : _vm._e()], 1);
            }))])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "h5 text-white", attrs: { "href": "index.html" } }, [_c('i', { staticClass: "fa fa-circle-o-notch text-primary" }), _vm._v(" "), _c('span', { staticClass: "h4 font-w600 sidebar-mini-hide" }, [_vm._v("问答社区管理后台")])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"Hf8/":
    /***/function Hf8(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"HfD5":
    /***/function HfD5(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"Hvzj":
    /***/function Hvzj(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("eCL/");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cbd8231_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("gs94");
        function injectStyle(ssrContext) {
            __webpack_require__("Hf8/");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-7cbd8231";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cbd8231_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"JNkg":
    /***/function JNkg(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"JyLo":
    /***/function JyLo(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5__ = __webpack_require__("6qJD");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cos_js_sdk_v5__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_cosSign__ = __webpack_require__("/899");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__config_js__ = __webpack_require__("QmSG");

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

        /* unused harmony default export */var _unused_webpack_default_export = {
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
        };

        /***/
    },

    /***/"KRju":
    /***/function KRju(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('router-view');
        };
        var staticRenderFns = [];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"KouB":
    /***/function KouB(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($) {
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //

            /* harmony default export */__webpack_exports__["a"] = {
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
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"));

        /***/
    },

    /***/"LGJj":
    /***/function LGJj(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("DWeW");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2527f38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("NgJJ");
        function injectStyle(ssrContext) {
            __webpack_require__("CGCS");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2527f38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"M93x":
    /***/function M93x(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b1c5df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("KRju");
        function injectStyle(ssrContext) {
            __webpack_require__("cTZj");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b1c5df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"NHnr":
    /***/function NHnr(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css__ = __webpack_require__("Rh7U");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_theme_chalk_cascader_css__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader__ = __webpack_require__("pkKZ");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_cascader__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css__ = __webpack_require__("isgN");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_theme_chalk_date_picker_css__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker__ = __webpack_require__("tLa+");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_date_picker__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css__ = __webpack_require__("ylrw");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_pagination_css__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination__ = __webpack_require__("6oiW");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_pagination__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css__ = __webpack_require__("cwe7");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_theme_chalk_message_css__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css__ = __webpack_require__("+BTi");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_base_css__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message__ = __webpack_require__("2X9z");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_element_ui_lib_message__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_9_vue__ = __webpack_require__("7+uW");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__App__ = __webpack_require__("M93x");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__router__ = __webpack_require__("YaEn");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__services_service__ = __webpack_require__("NTvx");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_13_scriptjs__ = __webpack_require__("zhAq");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_13_scriptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_scriptjs__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__config__ = __webpack_require__("QmSG");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__utils_filters__ = __webpack_require__("iClD");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_16_vee_validate__ = __webpack_require__("sUu7");

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

        /***/
    },

    /***/"NTvx":
    /***/function NTvx(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (axios) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("QmSG");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__("YaEn");

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
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(resp);
                }
                return resp;
            }, function (error) {
                // Do something with response error
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.reject(error);
            });

            /* unused harmony default export */var _unused_webpack_default_export = axios;
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("mtWM"));

        /***/
    },

    /***/"NgJJ":
    /***/function NgJJ(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('file-wrapper', { ref: "file", on: { "on-file-change": _vm.imgChange } })], 1), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(1), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_c('img', { staticClass: "pic", attrs: { "src": _vm.topicMore, "id": "topicMore" }, on: { "load": function load($event) {
                        _vm.getImageSize('topicMore', _vm.topicImage);
                    } } })]), _vm._v(" "), _c('td', [_vm._v("热门专题-更多")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.topicImage.width) + "X" + _vm._s(_vm.topicImage.height))]), _vm._v(" "), _c('td', [_c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                        _vm.upload('topicMore');
                    } } }, [_vm._v("上传\n                                ")])])]), _vm._v(" "), _c('tr', [_c('td', [_c('img', { staticClass: "pic", attrs: { "src": _vm.tagMore, "id": "tagMore" }, on: { "load": function load($event) {
                        _vm.getImageSize('tagMore', _vm.tagImage);
                    } } })]), _vm._v(" "), _c('td', [_vm._v("话题标签-更多")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.tagImage.width) + "X" + _vm._s(_vm.tagImage.height))]), _vm._v(" "), _c('td', [_c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                        _vm.upload('tagMore');
                    } } }, [_vm._v("上传\n                                ")])])])])])])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    图片管理\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("图片")]), _vm._v(" "), _c('th', [_vm._v("位置")]), _vm._v(" "), _c('th', [_vm._v("尺寸")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"PE4x":
    /***/function PE4x(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.metas.length < 1, expression: "metas.length<1" }], staticClass: "row" }, [_c('div', { staticClass: "col-md-2" }, [_c('a', { staticClass: "btn btn-primary ", on: { "click": _vm.saveTextData } }, [_vm._v("添加文字")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2" }, [_c('file-wrapper', { ref: "fileWrap", staticClass: "btn btn-primary ", on: { "on-file-change": _vm.imgChange } }, [_c('i', { staticClass: "glyphicon glyphicon-picture", attrs: { "title": "添加图片" } }, [_vm._v("添加图片")])])], 1)]), _vm._v(" "), _vm._l(_vm.metas, function (data, index) {
                return _c('div', { key: index, staticClass: "row" }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-9" }, [data.type === 'TEXT' ? _c('div', [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: data.content, expression: "data.content" }], staticStyle: { "width": "100%" }, attrs: { "rows": _vm.rows ? _vm.rows : 3 }, domProps: { "value": data.content }, on: { "input": function input($event) {
                            if ($event.target.composing) {
                                return;
                            }_vm.$set(data, "content", $event.target.value);
                        } } })]) : _vm._e(), _vm._v(" "), data.type === 'IMG' ? _c('div', [_c('img', { staticClass: "pic-max-500", attrs: { "src": data.content }, on: { "click": function click($event) {
                            _vm.invokeChildImgChange(index);
                        } } })]) : _vm._e()]), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('button', { staticClass: "btn btn-link", attrs: { "title": "上移", "disabled": index === 0 }, on: { "click": function click($event) {
                            _vm.moveUp(index);
                        } } }, [_vm._v("\n                        上移\n                    ")])]), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('button', { staticClass: "btn btn-link", attrs: { "title": "下移", "disabled": index === _vm.metas.length - 1 }, on: { "click": function click($event) {
                            _vm.moveDown(index);
                        } } }, [_vm._v("\n                        下移\n                    ")])]), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('a', { staticClass: "btn", attrs: { "title": "删除" }, on: { "click": function click($event) {
                            _vm.deleteDataFromList(index);
                        } } }, [_c('span', { staticClass: "glyphicon glyphicon-remove" })])])]), _vm._v(" "), _c('div', { staticClass: "row  margin-top-20" }, [_c('div', { staticClass: "dropdown col-md-2" }, [_vm._m(0, true), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu" }, [_c('li', { attrs: { "role": "presentation" } }, [_c('a', { attrs: { "role": "menuitem" }, on: { "click": function click($event) {
                            _vm.insertMeta(index, 'TEXT');
                        } } }, [_vm._v("从上添加")])]), _vm._v(" "), _c('li', { attrs: { "role": "presentation" } }, [_c('a', { attrs: { "role": "menuitem" }, on: { "click": function click($event) {
                            _vm.insertMeta(index + 1, 'TEXT');
                        } } }, [_vm._v("从下添加")])])])]), _vm._v(" "), _c('div', { staticClass: "dropdown col-md-2 " }, [_vm._m(1, true), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu" }, [_c('li', { attrs: { "role": "presentation" } }, [_c('a', { attrs: { "role": "menuitem" }, on: { "click": function click($event) {
                            _vm.insertMeta(index, 'IMG');
                        } } }, [_vm._v("从上添加")])]), _vm._v(" "), _c('li', { attrs: { "role": "presentation" } }, [_c('a', { attrs: { "role": "menuitem" }, on: { "click": function click($event) {
                            _vm.insertMeta(index + 1, 'IMG');
                        } } }, [_vm._v("从下添加")])])])])]), _vm._v(" "), _c('hr')]);
            })], 2)]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle btn btn-primary", attrs: { "data-toggle": "dropdown" } }, [_vm._v("添加文字"), _c('span', { staticClass: "caret" })]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle btn btn-primary", attrs: { "data-toggle": "dropdown" } }, [_vm._v("添加图片"), _c('span', { staticClass: "caret" })]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"PKrP":
    /***/function PKrP(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('div', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('img', { staticClass: "img-avatar", attrs: { "src": _vm.q.user.headImgUrl } }), _vm._v(" "), _c('label', {}, [_vm._v(_vm._s(_vm.q.user.nickname))])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isEditTitleClicked, expression: "!isEditTitleClicked" }], staticClass: "h5  col-md-10" }, [_vm._v(_vm._s(_vm.q.title))]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isEditTitleClicked, expression: "isEditTitleClicked" }], staticClass: "col-md-10" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.title, expression: "q.title" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm.q.title }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.q, "title", $event.target.value);
                    } } })]), _vm._v(" "), _c('a', { on: { "click": _vm.editTitle } }, [_vm._v("修改标题")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { directives: [{ name: "show", rawName: "v-show", value: !_vm.isEditDescClicked, expression: "!isEditDescClicked" }], staticClass: "h5 col-md-10" }, [_vm._v(_vm._s(_vm.q.desc))]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.isEditDescClicked, expression: "isEditDescClicked" }], staticClass: "col-md-10" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.desc, expression: "q.desc" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm.q.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.q, "desc", $event.target.value);
                    } } })]), _vm._v(" "), _c('a', { on: { "click": _vm.editDesc } }, [_vm._v("修改描述")])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: " col-md-1" }, [_vm._v("标签:")]), _vm._v(" "), _c('div', { staticClass: "col-md-8 line-height25" }, _vm._l(_vm.q.tags, function (tag, index) {
                return _c('label', { key: tag.$oid }, [_vm.tagName(tag.$oid) !== '' ? _c('label', { staticClass: "label label-default margin-bottom-15" }, [_vm._v(_vm._s(_vm.tagName(tag.$oid)))]) : _vm._e(), _vm._v("  \n                            ")]);
            })), _vm._v(" "), _c('span', { staticClass: "text-right" }, [_vm._v(_vm._s(_vm._f("date")(_vm.q.createdAt.$date)))])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_vm.answers.totalCount > 0 ? _c('span', { staticClass: "col-md-3" }, [_vm._v("共" + _vm._s(_vm.answers.totalCount) + "个回答 \n                            "), _vm._v(" "), _c('a', { staticClass: "detail-link", on: { "click": function click($event) {
                        _vm.toAnswersComments({ name: 'answerscomments', params: { questionId: _vm.q._id.$oid, type: 'answers' } });
                    } } }, [_vm._v("查看全部回答")])]) : _vm._e(), _vm._v(" "), _vm.comments.totalCount > 0 ? _c('span', { staticClass: "col-md-3" }, [_vm._v("共" + _vm._s(_vm.comments.totalCount) + "个问题评论 \n                            "), _c('router-link', { staticClass: "detail-link", attrs: { "to": { name: 'answerscomments', params: { questionId: _vm.q._id.$oid, type: 'comments' } } } }, [_vm._v("查看全部问题评论")])], 1) : _vm._e()]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', { staticClass: "form-group " }, [_c('label', { staticClass: " col-md-1" }, [_vm._v("添加标签:")]), _vm._v(" "), _c('div', { staticClass: "col-md-9 line-height25" }, _vm._l(_vm.tags, function (tag, index) {
                return _c('span', { key: tag._id.$oid }, [_c('a', { staticClass: "label label-default ", on: { "click": function click($event) {
                            _vm.modifyTag(tag);
                        } } }, [_c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.isTagAdded(tag._id.$oid), expression: "isTagAdded(tag._id.$oid)" }], staticClass: "glyphicon glyphicon-ok" }), _vm._v(" "), _vm._v("\n                                        " + _vm._s(tag.name) + "\n                                    ")]), _vm._v("\n                                          \n                                ")]);
            })), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": { name: 'addTag', params: { 'questionId': _vm.questionId } } } }, [_vm._v("\n                            创建其他标签\n                        ")])], 1), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("是否展示问题:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isShow, expression: "q.isShow" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isShow", "value": "true" }, domProps: { "checked": _vm._q(_vm.q.isShow, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isShow", "true");
                    } } }), _vm._v("是\n                        "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isShow, expression: "q.isShow" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isShow", "value": "false" }, domProps: { "checked": _vm._q(_vm.q.isShow, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isShow", "false");
                    } } }), _vm._v("否\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("首页展示:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isRecommended, expression: "q.isRecommended" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isRecommended", "value": "true" }, domProps: { "checked": _vm._q(_vm.q.isRecommended, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isRecommended", "true");
                    } } }), _vm._v("是\n                        "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.q.isRecommended, expression: "q.isRecommended" }], staticClass: "radio-inline ", attrs: { "type": "radio", "name": "isRecommended", "value": "false" }, domProps: { "checked": _vm._q(_vm.q.isRecommended, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.q, "isRecommended", "false");
                    } } }), _vm._v("否\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("答主:")]), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-8" }, [_c('a', { directives: [{ name: "show", rawName: "v-show", value: _vm.userId === '', expression: "userId===''" }], staticClass: "btn btn-sm btn-primary", on: { "click": _vm.showChoose } }, [_vm._v("添加答主")]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.userId !== '', expression: "userId!==''" }] }, [_c('span', {}, [_vm._v(_vm._s(_vm.userNickName))]), _vm._v(" "), _c('a', { staticClass: "btn-link ", on: { "click": _vm.showChoose } }, [_vm._v("更改")])])])])]), _vm._v(" "), _c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "col-md-2 " }, [_vm._v("回答:")]), _vm._v(" "), _c('div', { staticClass: "col-md-8" }, [_c('answer-metas', { attrs: { "metas": _vm.answerMetas, "rows": "10" }, on: { "on-data-change": _vm.refreshAnswerMetas } })], 1)]), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-2" }), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('a', { staticClass: "btn btn-sm btn-success", attrs: { "type": "button" }, on: { "click": _vm.save } }, [_vm._v("确定")])]), _vm._v(" "), _c('div', { staticClass: "col-md-1" }, [_c('router-link', { staticClass: "btn btn-sm btn-danger", attrs: { "to": "/questionList" } }, [_vm._v("取消")])], 1)])])]), _vm._v(" "), _c('answer-users', { attrs: { "title": "添加答主", "show": _vm.showChooseModal }, on: { "on-choose": _vm.chooseAsker, "show": function show($event) {
                        _vm.showChooseModal = true;
                    }, "hide": function hide($event) {
                        _vm.showChooseModal = false;
                    } } })], 1)])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    问题详情\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"Q0xE":
    /***/function Q0xE(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("sfn8");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f58cbe2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("4Gls");
        function injectStyle(ssrContext) {
            __webpack_require__("zgZe");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-0f58cbe2";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f58cbe2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"QQz6":
    /***/function QQz6(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__components_confirm__ = __webpack_require__("U1ku");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_tag__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"QmSG":
    /***/function QmSG(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony default export */
        __webpack_exports__["a"] = {
            serviceDomain: 'https://api.dingnuo.ai/',
            Bucket: 'hqdl-1255473721',
            Region: 'ap-shanghai',
            ImagePath: '/dls/',
            BucketDomain: 'https://hqdl-1255473721.cossh.myqcloud.com'
        };

        /***/
    },

    /***/"Rh7U":
    /***/function Rh7U(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"SgC4":
    /***/function SgC4(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* WEBPACK VAR INJECTION */(function (module) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

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
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("f1Eh")(module));

        /***/
    },

    /***/"T/Zt":
    /***/function TZt(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("tltV");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3517e88d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("iA6l");
        function injectStyle(ssrContext) {
            __webpack_require__("pigS");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-3517e88d";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3517e88d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"U1ku":
    /***/function U1ku(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__ = __webpack_require__("KouB");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca6fc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__ = __webpack_require__("jPc0");
        function injectStyle(ssrContext) {
            __webpack_require__("DZwR");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-7aca6fc1";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_confirm_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7aca6fc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_confirm_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"U2La":
    /***/function U2La(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_choose_user_vue__ = __webpack_require__("EJ8m");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc24d450_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_choose_user_vue__ = __webpack_require__("nkiV");
        function injectStyle(ssrContext) {
            __webpack_require__("9S90");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_choose_user_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc24d450_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_choose_user_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"UzbG":
    /***/function UzbG(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"WYYg":
    /***/function WYYg(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"Wbwb":
    /***/function Wbwb(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_admin_js__ = __webpack_require__("qGR4");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_admin_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_admin_js__);
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
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

        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"Wz6n":
    /***/function Wz6n(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerscomments_vue__ = __webpack_require__("/9nP");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53fe05b7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerscomments_vue__ = __webpack_require__("+IVC");
        function injectStyle(ssrContext) {
            __webpack_require__("hEEN");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-53fe05b7";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_answerscomments_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53fe05b7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_answerscomments_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"XWzf":
    /***/function XWzf(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__("sDxe");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed684cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__("PKrP");
        function injectStyle(ssrContext) {
            __webpack_require__("FxvQ");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-fed684cc";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fed684cc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"YaEn":
    /***/function YaEn(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__pages_topic_list_vue__ = __webpack_require__("Hvzj");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__pages_topic_add_vue__ = __webpack_require__("T/Zt");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__ = __webpack_require__("6RkX");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__pages_login_index_vue__ = __webpack_require__("jT7l");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__pages_layout_index_vue__ = __webpack_require__("osAX");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__pages_tag_list_vue__ = __webpack_require__("3AVo");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__pages_tag_add_vue__ = __webpack_require__("cO2l");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__pages_tag_edit_vue__ = __webpack_require__("cdcD");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__pages_answer_list_vue__ = __webpack_require__("2Tzx");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__pages_answer_detail_vue__ = __webpack_require__("9L7j");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__pages_question_list_vue__ = __webpack_require__("aTCu");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__pages_question_detail_vue__ = __webpack_require__("XWzf");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__pages_question_add_vue__ = __webpack_require__("Q0xE");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__pages_question_answerscomments_vue__ = __webpack_require__("Wz6n");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__pages_answerManage_list_vue__ = __webpack_require__("m6z7");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_17__pages_answerManage_edit_vue__ = __webpack_require__("BCDO");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_18__pages_answerManage_add_vue__ = __webpack_require__("rIBj");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_19__pages_imageMore_list_vue__ = __webpack_require__("LGJj");

        //components


        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
            routes: [{ path: '/login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_index_vue__["a" /* default */] }, {
                path: '/', component: __WEBPACK_IMPORTED_MODULE_6__pages_layout_index_vue__["a" /* default */], redirect: '/topicList',
                children: [{ path: 'topicList', component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_list_vue__["a" /* default */] }, { path: 'addTopic', component: __WEBPACK_IMPORTED_MODULE_3__pages_topic_add_vue__["a" /* default */], meta: { keepAlive: true } }, { path: 'tagList', component: __WEBPACK_IMPORTED_MODULE_7__pages_tag_list_vue__["a" /* default */] }, { path: 'addTag/', name: 'addTag', component: __WEBPACK_IMPORTED_MODULE_8__pages_tag_add_vue__["a" /* default */] }, { path: 'editTag/:tagId', name: 'editTag', component: __WEBPACK_IMPORTED_MODULE_9__pages_tag_edit_vue__["a" /* default */] }, { path: 'editTopic/:topicId', component: __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__["a" /* default */], props: true }, { path: 'topicDetail/:topicId', component: __WEBPACK_IMPORTED_MODULE_4__pages_topic_edit_vue__["a" /* default */], props: true }, { path: 'answer/:answerId', component: __WEBPACK_IMPORTED_MODULE_11__pages_answer_detail_vue__["a" /* default */] }, { path: 'answerList', component: __WEBPACK_IMPORTED_MODULE_10__pages_answer_list_vue__["a" /* default */] }, { path: 'questionList', component: __WEBPACK_IMPORTED_MODULE_12__pages_question_list_vue__["a" /* default */] }, { path: 'question/:questionId', name: 'questionDetail', component: __WEBPACK_IMPORTED_MODULE_13__pages_question_detail_vue__["a" /* default */] }, { path: 'questionAdd', component: __WEBPACK_IMPORTED_MODULE_14__pages_question_add_vue__["a" /* default */] }, { path: 'question/:questionId/answerscomments', name: 'answerscomments', component: __WEBPACK_IMPORTED_MODULE_15__pages_question_answerscomments_vue__["a" /* default */] }, { path: 'answerManageList', component: __WEBPACK_IMPORTED_MODULE_16__pages_answerManage_list_vue__["a" /* default */] }, { path: 'answerEdit/:answerId', component: __WEBPACK_IMPORTED_MODULE_17__pages_answerManage_edit_vue__["a" /* default */] }, { path: 'answerAdd', component: __WEBPACK_IMPORTED_MODULE_18__pages_answerManage_add_vue__["a" /* default */] }, { path: 'imageMoreList', component: __WEBPACK_IMPORTED_MODULE_19__pages_imageMore_list_vue__["a" /* default */] }]
            }]
        });

        /***/
    },

    /***/"ZA+K":
    /***/function ZAK(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content overflow-hidden" }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4" }, [_c('div', { staticClass: "block block-themed animated fadeIn" }, [_c('div', { staticClass: "block-header bg-primary" }, [_c('ul', { staticClass: "block-options" }, [_c('li', [_c('a', { on: { "click": function click($event) {
                        _vm.showModal = true;
                    } } }, [_vm._v("忘记密码?")])])]), _vm._v(" "), _c('h3', { staticClass: "block-title" }, [_vm._v("登录")])]), _vm._v(" "), _c('div', { staticClass: "block-content block-content-full block-content-narrow" }, [_c('h1', { staticClass: "h2 font-w600 push-30-t push-5" }, [_vm._v("问答社区管理后台")]), _vm._v(" "), _c('p', [_vm._v("欢迎, 请登录.")]), _vm._v(" "), _c('form', { staticClass: "js-validation-login form-horizontal push-30-t push-50", attrs: { "method": "post" } }, [_c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-xs-12" }, [_c('div', { staticClass: "form-material form-material-primary " }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.username, expression: "username" }], staticClass: "form-control", attrs: { "type": "text", "id": "login-username", "name": "login-username" }, domProps: { "value": _vm.username }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.username = $event.target.value;
                    } } }), _vm._v(" "), _c('label', { attrs: { "for": "login-username" } }, [_vm._v("用户名")])])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-xs-12" }, [_c('div', { staticClass: "form-material form-material-primary " }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.password, expression: "password" }], staticClass: "form-control", attrs: { "type": "password", "id": "login-password", "name": "login-password" }, domProps: { "value": _vm.password }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.password = $event.target.value;
                    } } }), _vm._v(" "), _c('label', { attrs: { "for": "login-password" } }, [_vm._v("密码")])])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [_c('a', { staticClass: "btn btn-block btn-primary", on: { "click": _vm.login } }, [_c('i', { staticClass: "si si-login pull-right" }), _vm._v(" 登录")])])])])])])])])]);
        };
        var staticRenderFns = [];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"ZB4y":
    /***/function ZB4y(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-1 fr" }, [_c('button', { staticClass: "btn btn-primary btn-block", on: { "click": _vm.loadData } }, [_vm._v("搜索")])]), _vm._v(" "), _c('div', { staticClass: "col-md-3 fr" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入用户昵称" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })])])]), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid }, [_c('td', [_c('img', { staticClass: "img-avatar", attrs: { "src": a.headImgUrl, "alt": "" } })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.nickname))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("date")(a.applyDate.$date)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("auditingStatus")(a.applyStatus)))]), _vm._v(" "), _c('td', [a.applyStatus === 100 || a.applyStatus === 200 ? _c('router-link', { staticClass: "btn btn-xs btn-primary", attrs: { "to": '/answer/' + a._id.$oid } }, [_vm._v("审核\n                                ")]) : _c('router-link', { staticClass: "btn btn-xs btn-primary", attrs: { "to": '/answer/' + a._id.$oid } }, [_vm._v("查看\n                                ")])], 1)]);
            }))])])]), _vm._v(" "), _vm.list.length === 0 ? _c('h5', { staticClass: "text-center red-font" }, [_vm._v("暂时没有你查找的用户")]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "block-content" })])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    答主审核\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("用户头像")]), _vm._v(" "), _c('th', [_vm._v("用户昵称")]), _vm._v(" "), _c('th', [_vm._v("申请时间")]), _vm._v(" "), _c('th', [_vm._v("审核状态")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"a+xo":
    /***/function aXo(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__ = __webpack_require__("Gt4P");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_topic__ = __webpack_require__("q0DR");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_topic__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_confirm__ = __webpack_require__("U1ku");
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //


            /* harmony default export */__webpack_exports__["a"] = {
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
                        p: {},
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
                            //                    debugger;
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
                            bannerUrl: vm.p.bannerUrl,
                            isShow: vm.p.isShow
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
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"));

        /***/
    },

    /***/"aTCu":
    /***/function aTCu(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("z06s");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1862acf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("dmM0");
        function injectStyle(ssrContext) {
            __webpack_require__("d7e2");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-1862acf0";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1862acf0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"c+wT":
    /***/function cWT(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"cO2l":
    /***/function cO2l(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("QQz6");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f94d6d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("Duic");
        function injectStyle(ssrContext) {
            __webpack_require__("c+wT");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-3f94d6d2";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f94d6d2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"cTZj":
    /***/function cTZj(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"cdcD":
    /***/function cdcD(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("yEGN");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e25e98d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("vET2");
        function injectStyle(ssrContext) {
            __webpack_require__("rFU3");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-1e25e98d";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e25e98d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"cwe7":
    /***/function cwe7(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"d7e2":
    /***/function d7e2(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"dmM0":
    /***/function dmM0(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticStyle: { "height": "1500px" } }, [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-1 fl" }, [_c('router-link', { staticClass: "btn btn-primary fl", attrs: { "to": "/questionAdd" } }, [_vm._v("新增问题")])], 1), _vm._v(" "), _c('div', { staticClass: "col-md-1 fr" }, [_c('a', { staticClass: "btn btn-primary btn-block", on: { "click": function click($event) {
                        _vm.search();
                    } } }, [_vm._v("搜索")])]), _vm._v(" "), _c('div', { staticClass: "col-md-3 fr" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入用户昵称/问题标题/问题描述" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })])])]), _vm._v(" "), _c('div', { staticClass: "block-content " }, [_c('div', [_c('table', { staticClass: "table table-striped table-vcenter" }, [_c('thead', [_c('tr', [_c('th', { staticStyle: { "width": "30%" } }, [_vm._v("问题标题")]), _vm._v(" "), _c('th', [_vm._v("回答数量")]), _vm._v(" "), _c('th', [_vm._v("提问用户昵称")]), _vm._v(" "), _c('th', [_c('span', { staticClass: "dropdown" }, [_vm._m(1), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu", attrs: { "role": "menu" } }, _vm._l(_vm.tags, function (tag, index) {
                return _c('li', { key: tag._id_$oid }, [_c('a', { on: { "click": function click($event) {
                            _vm.refreshListByKV(tag._id.$oid, 'tags');
                        } } }, [_c('i', { directives: [{ name: "show", rawName: "v-show", value: _vm.isKeyClicked['tags'][tag._id.$oid.toString()], expression: "isKeyClicked['tags'][tag._id.$oid.toString()]" }], staticClass: "glyphicon glyphicon-ok" }), _vm._v("\n                                                   " + _vm._s(tag.name) + "\n                                               ")])]);
            }))])]), _vm._v(" "), _c('th', [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_c('span', { staticClass: "dropdown" }, [_vm._m(2), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu", attrs: { "role": "menu" } }, [_c('li', [_c('a', { staticClass: "btn-link", on: { "click": function click($event) {
                        _vm.refreshListByKV('true', 'isShow');
                    } } }, [_c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.isKeyClicked['isShow']['true'], expression: "isKeyClicked['isShow']['true']" }], staticClass: "glyphicon glyphicon-ok" }), _vm._v("\n                                                   是\n                                               ")])]), _vm._v(" "), _c('li', [_c('a', { staticClass: "btn-link ", on: { "click": function click($event) {
                        _vm.refreshListByKV('false', 'isShow');
                    } } }, [_c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.isKeyClicked['isShow']['false'], expression: "isKeyClicked['isShow']['false']" }], staticClass: "glyphicon glyphicon-ok" }), _vm._v("\n                                                   否\n                                               ")])])])])]), _vm._v(" "), _c('th', [_vm._v("排序")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]), _vm._v(" "), _vm.totalCount > 0 ? _c('tbody', _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid }, [_c('td', [_vm._v(_vm._s(a.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.answerCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.user.nickname))]), _vm._v(" "), _c('td', _vm._l(a.tags, function (tag, tindex) {
                    return _c('span', { key: tag._id.$oid }, [_vm._v("\n                                " + _vm._s(tag.name) + "\n                            ")]);
                })), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("date")(a.createdAt.$date)))]), _vm._v(" "), _c('td', [_c('select', { directives: [{ name: "model", rawName: "v-model", value: a.isShow, expression: "a.isShow" }], on: { "change": [function ($event) {
                            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                                return o.selected;
                            }).map(function (o) {
                                var val = "_value" in o ? o._value : o.value;return val;
                            });_vm.$set(a, "isShow", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                        }, function ($event) {
                            _vm.showChange(index);
                        }] } }, [_c('option', { domProps: { "value": false } }, [_vm._v("否")]), _vm._v(" "), _c('option', { domProps: { "value": true } }, [_vm._v("是")])])]), _vm._v(" "), _c('td', [!a.isShow ? _c('div', { staticClass: "btn-group" }, [_vm._v("-")]) : _c('div', { staticClass: "btn-group" }, [_c('a', { directives: [{ name: "show", rawName: "v-show", value: !_vm.lastQueryWithOptions && !(_vm.queryParams.page == 1 && index == 0), expression: "!lastQueryWithOptions && !(queryParams.page==1 && index == 0)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "title": "上移" }, on: { "click": function click($event) {
                            _vm.move(a._id.$oid, -1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-up" })]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: !_vm.lastQueryWithOptions && !(_vm.queryParams.page == Math.ceil(_vm.totalCount / _vm.queryParams.perPage) && index == _vm.list.length - 1), expression: "!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "title": "下移" }, on: { "click": function click($event) {
                            _vm.move(a._id.$oid, 1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-down" })]), _vm._v(" "), _c('button', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.queryParams.page == 1 && a.seq == 0), expression: "!(queryParams.page==1 && a.seq == 0)" }], staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                            _vm.setTopConfirm(a._id.$oid, 0 - a.seq);
                        } } }, [_vm._v("置顶\n                                    ")])])]), _vm._v(" "), _c('td', [_c('button', { staticClass: "btn btn-xs btn-primary", attrs: { "type": "button", "data-toggle": "tooltip" }, on: { "click": function click($event) {
                            _vm.removeConfirm(index);
                        } } }, [_vm._v("删除\n                                ")]), _vm._v(" "), a.isRecommended ? _c('button', { staticClass: " btn btn-xs btn-primary", attrs: { "disabled": !a.isShow }, on: { "click": function click($event) {
                            _vm.setRecommend(a._id.$oid, false);
                        } } }, [_c('span', { staticClass: "glyphicon glyphicon-bookmark" }), _vm._v("\n                                    已首页展示\n                                ")]) : _c('button', { staticClass: "btn btn-xs btn-primary ", attrs: { "disabled": !a.isShow }, on: { "click": function click($event) {
                            _vm.setRecommend(a._id.$oid, true);
                        } } }, [_vm._v("首页展示\n                                ")]), _vm._v(" "), _c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                            _vm.detail(a._id.$oid);
                        } } }, [_vm._v("查看")])])]);
            })) : _vm._e()]), _vm._v(" "), _vm.totalCount === 0 ? _c('h5', { staticClass: "text-center red-font" }, [_vm._v("暂时没有你查找的内容")]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "block-content" })]), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } })], 1)])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": _vm.wording, "show": _vm.showModal }, on: { "confirm": _vm.doConfirm, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    问题列表\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle link", attrs: { "data-toggle": "dropdown" } }, [_vm._v("\n                                        话题标签"), _c('span', { staticClass: "caret" })]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "dropdown-toggle link", attrs: { "data-toggle": "dropdown" } }, [_vm._v("\n                                        展示"), _c('span', { staticClass: "caret" })]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"eCL/":
    /***/function eCL(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_confirm__ = __webpack_require__("U1ku");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_topic__ = __webpack_require__("q0DR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_topic__);

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
            computed: {},
            beforeRouteLeave: function beforeRouteLeave(to, from, next) {
                // 设置下一个路由的 meta
                to.meta.keepAlive = false; // C 跳转到 A 时让 A 不缓存，即刷新
                next();
            }
        };

        /***/
    },

    /***/"eySX":
    /***/function eySX(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* WEBPACK VAR INJECTION */(function (module) {
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

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
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("f1Eh")(module));

        /***/
    },

    /***/"g8Ah":
    /***/function g8Ah(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            module.exports = {
                list: function list(params) {
                    return axios.post('wdCmsQuestion/list/', params, {
                        withCredentials: true
                    }).then(function (resp) {
                        return resp.data.data;
                    });
                },

                // list1(isShow, page, perPage, queryStr, tagIds) {
                //     console.log("list111 isshow", isShow," page ", page," perpage ", perPage, " str ",queryStr," tag  ", tagIds)
                //     return axios.post('wdCmsQuestion/list/', {isShow, page, perPage, queryStr, tagIds}, {
                //         withCredentials: true
                //     }).then((resp) => {
                //         console.log("resp isshow", isShow," page ", page," perpage ", perPage, " str ",queryStr," tag  ", tagIds)
                //         return resp.data.data;
                //     })
                // },
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
                editAnswer: function editAnswer(answerId, metas) {
                    return axios.post('/wdCmsQuestion/editAnswer/', { answerId: answerId, metas: metas }, {
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
                comments: function comments(params) {
                    return axios.post('/wdCmsQuestion/comments/', params, {
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
                addAnswer: function addAnswer(questionId, userId, metas) {
                    return axios.post('/wdCmsQuestion/addAnswer/', { questionId: questionId, userId: userId, metas: metas }, {
                        withCredentials: true
                    }).then(function (resp) {
                        return resp.data.data;
                    });
                }
            };
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"gRfR":
    /***/function gRfR(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            module.exports = {
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
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"gs94":
    /***/function gs94(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('a', { attrs: { "href": "../test.html" } }), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('router-link', { staticClass: "btn btn-primary fl", attrs: { "to": "/addTopic" } }, [_vm._v("新增专题")]), _vm._v(" "), _c('div', { staticClass: "col-md-1 fr" }, [_c('button', { staticClass: "btn btn-primary btn-block", on: { "click": function click($event) {
                        _vm.search();
                    } } }, [_vm._v("搜索")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 fr" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入专题标题/专题描述" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })])], 1)]), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid }, [_c('td', [_c('img', { staticClass: "pic", attrs: { "src": a.bannerUrl, "alt": "" } })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.title))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.approvedCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.waitApproveCount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm._f("date")(a.createdAt.$date)))]), _vm._v(" "), _c('td', [_c('select', { directives: [{ name: "model", rawName: "v-model", value: a.isShow, expression: "a.isShow" }], on: { "change": [function ($event) {
                            var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                                return o.selected;
                            }).map(function (o) {
                                var val = "_value" in o ? o._value : o.value;return val;
                            });_vm.$set(a, "isShow", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                        }, function ($event) {
                            _vm.showChange(index);
                        }] } }, [_c('option', { domProps: { "value": false } }, [_vm._v("否")]), _vm._v(" "), _c('option', { domProps: { "value": true } }, [_vm._v("是")])])]), _vm._v(" "), _c('td', [_c('div', { staticClass: "btn-group" }, [_c('button', { directives: [{ name: "show", rawName: "v-show", value: !_vm.lastQueryWithOptions && !(_vm.queryParams.page == 1 && index == 0), expression: "!lastQueryWithOptions && !(queryParams.page==1 && index == 0)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "data-toggle": "tooltip", "title": "上移" }, on: { "click": function click($event) {
                            _vm.move(a._id.$oid, -1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-up" })]), _vm._v(" "), _c('button', { directives: [{ name: "show", rawName: "v-show", value: !_vm.lastQueryWithOptions && !(_vm.queryParams.page == Math.ceil(_vm.totalCount / _vm.queryParams.perPage) && index == _vm.list.length - 1), expression: "!lastQueryWithOptions && !(queryParams.page==Math.ceil(totalCount/queryParams.perPage) && index == list.length-1)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "data-toggle": "tooltip", "title": "下移" }, on: { "click": function click($event) {
                            _vm.move(a._id.$oid, 1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-down" })])])]), _vm._v(" "), _c('td', [_c('button', { staticClass: "btn btn-xs btn-primary", attrs: { "type": "button", "data-toggle": "tooltip" }, on: { "click": function click($event) {
                            _vm.removeConfirm(index);
                        } } }, [_vm._v("删除\n                                ")]), _vm._v(" "), _c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                            _vm.edit(a._id.$oid);
                        } } }, [_vm._v("编辑\n                                ")]), _vm._v(" "), _c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                            _vm.detail(a._id.$oid);
                        } } }, [_vm._v("查看\n                                ")])])]);
            }))])]), _vm._v(" "), _vm.totalCount === 0 ? _c('h5', { staticClass: "text-center red-font" }, [_vm._v("暂时没有你查找的专题")]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "block-content" }), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } })], 1)])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": "确定要删除专题吗？", "show": _vm.showModal }, on: { "confirm": _vm.remove, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    专题列表\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("专题图片")]), _vm._v(" "), _c('th', [_vm._v("专题标题")]), _vm._v(" "), _c('th', [_vm._v("已添加问题")]), _vm._v(" "), _c('th', [_vm._v("待审核问题")]), _vm._v(" "), _c('th', [_vm._v("创建时间")]), _vm._v(" "), _c('th', [_vm._v("展示")]), _vm._v(" "), _c('th', [_vm._v("排序")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"h9po":
    /***/function h9po(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _vm.p.applyStatus === 300 ? _c('label', { staticClass: "col-md-3 btn btn-success" }, [_vm._v("审核通过")]) : _vm.p.applyStatus === 400 ? _c('label', { staticClass: "col-md-3 btn btn-danger" }, [_vm._v("审核拒绝(" + _vm._s(_vm.p.rejectReason) + ")")]) : _vm._e()]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("头像：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('img', { staticClass: "img-avatar", attrs: { "src": _vm.p.headImgUrl } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("昵称：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.nickname, expression: "p.nickname" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "昵称" }, domProps: { "value": _vm.p.nickname }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "nickname", $event.target.value);
                    } } })])]), _vm._v(" "), !(_vm.p.cardImgUrl === '' || typeof _vm.p.cardImgUrl === 'undefined') ? _c('div', [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("名片照片：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('img', { attrs: { "src": _vm.p.cardImgUrl } }), _vm._v(" "), _c('a', { attrs: { "href": _vm.p.cardImgUrl } }, [_vm._v("查看大图")])])])]) : _c('div', [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("姓名：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.name, expression: "p.name" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "姓名" }, domProps: { "value": _vm.p.name }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "name", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("手机号：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.phone, expression: "p.phone" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "手机号" }, domProps: { "value": _vm.p.phone }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "phone", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("就职公司：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.organization, expression: "p.organization" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "就职公司" }, domProps: { "value": _vm.p.organization }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "organization", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("职业：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.title, expression: "p.title" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "职业" }, domProps: { "value": _vm.p.title }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "title", $event.target.value);
                    } } })])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("自我描述")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.desc, expression: "p.desc" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "自我描述" }, domProps: { "value": _vm.p.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "desc", $event.target.value);
                    } } })])]), _vm._v(" "), _vm.p.applyStatus == 100 || _vm.p.applyStatus == 200 ? _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("审核结果")]), _vm._v(" "), _c('div', { staticClass: "col-md-10" }, [_c('div', { staticClass: "col-md-2" }, [_c('label', [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.auditingParams.approve, expression: "auditingParams.approve" }], staticClass: "radio-inline", attrs: { "type": "radio", "name": "auditingResult", "value": "true" }, domProps: { "checked": _vm._q(_vm.auditingParams.approve, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.auditingParams, "approve", "true");
                    } } }), _vm._v("通过")]), _vm._v(" "), _c('label', [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.auditingParams.approve, expression: "auditingParams.approve" }], staticClass: "radio-inline", attrs: { "type": "radio", "name": "auditingResult", "value": "false" }, domProps: { "checked": _vm._q(_vm.auditingParams.approve, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.auditingParams, "approve", "false");
                    } } }), _vm._v("拒绝")])]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.rejectReason, expression: "p.rejectReason" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "请输入拒绝原因" }, domProps: { "value": _vm.p.rejectReason }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "rejectReason", $event.target.value);
                    } } })])])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 col-md-offset-2" }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": _vm.save } }, [_vm._v("确定")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('router-link', { staticClass: "btn btn-danger btn-block", attrs: { "to": "/answerList" } }, [_vm._v("取消")])], 1)]) : _vm._e()])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', {}, [_c('div', {}, [_c('h1', [_vm._v("\n                    名片\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"hEEN":
    /***/function hEEN(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"hWB+":
    /***/function hWB(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('header', { staticClass: "content-mini content-mini-full", attrs: { "id": "header-navbar" } }, [_c('ul', { staticClass: "nav-header pull-right" }, [_c('li', [_c('div', { staticClass: "btn-group" }, [_vm._m(0), _vm._v(" "), _c('ul', { staticClass: "dropdown-menu dropdown-menu-right" }, [_c('li', { staticClass: "dropdown-header" }, [_vm._v("Actions")]), _vm._v(" "), _c('li', [_c('router-link', { attrs: { "tabindex": "-1", "to": "/login" } }, [_c('i', { staticClass: "si si-logout pull-right" }), _vm._v("退出登录\n                      ")])], 1)])])])]), _vm._v(" "), _vm._m(1)]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "btn btn-default btn-image dropdown-toggle", attrs: { "data-toggle": "dropdown", "type": "button" } }, [_c('img', { attrs: { "src": __webpack_require__("vZuO"), "alt": "Avatar" } }), _vm._v(" "), _c('span', { staticClass: "caret" })]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "nav-header pull-left" }, [_c('li', { staticClass: "hidden-md hidden-lg" }, [_c('button', { staticClass: "btn btn-default", attrs: { "data-toggle": "layout", "data-action": "sidebar_toggle", "type": "button" } }, [_c('i', { staticClass: "fa fa-navicon" })])]), _vm._v(" "), _c('li', { staticClass: "hidden-xs hidden-sm" }, [_c('button', { staticClass: "btn btn-default", attrs: { "data-toggle": "layout", "data-action": "sidebar_mini_toggle", "type": "button" } }, [_c('i', { staticClass: "fa fa-ellipsis-v" })])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"iA6l":
    /***/function iA6l(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("专题标题")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.title, expression: "p.title" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "标题" }, domProps: { "value": _vm.p.title }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "title", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("专题描述")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.desc, expression: "p.desc" }], staticClass: "form-control", attrs: { "rows": "3", "type": "text", "placeholder": "描述" }, domProps: { "value": _vm.p.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "desc", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("上传专题图片")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('file-wrapper', { staticClass: "btn btn-primary", on: { "on-file-change": _vm.imgChange } }, [_c('i', { staticClass: "fa fa-upload" }), _vm._v("\n                                选择图片\n                            ")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('img', { staticClass: "pic-max-500", attrs: { "src": _vm.p.bannerUrl, "alt": "", "width": _vm.image.width, "height": _vm.image.height } }), _vm._v(" "), _c('p', { directives: [{ name: "show", rawName: "v-show", value: _vm.p.bannerUrl, expression: "p.bannerUrl" }] }, [_vm._v("尺寸:" + _vm._s(_vm.image.width) + "X" + _vm._s(_vm.image.height))])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("添加问题")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入用户昵称/问题标题/回答内容/话题标签" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })]), _vm._v(" "), _c('div', { staticClass: "col-md-2 text-left" }, [_c('a', { staticClass: "btn btn-primary btn-block", on: { "click": _vm.search } }, [_vm._v("搜索")])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-1 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-10" }, [_c('div', { staticClass: "js-wizard-simple block " }, [_c('ul', { staticClass: "nav nav-tabs nav-tabs-alt nav-justified", staticStyle: { "width": "400px" } }, [_c('li', { staticClass: "active" }, [_c('a', { attrs: { "href": "#simple-step1", "data-toggle": "tab" } }, [_vm._v("搜索列表(" + _vm._s(_vm.questionsSearched.totalCount || 0) + ")")])]), _vm._v(" "), _c('li', [_c('a', { attrs: { "href": "#simple-step2", "data-toggle": "tab" }, on: { "click": _vm.checkAddedQues } }, [_vm._v("已添加问题(" + _vm._s(_vm.topicQuestions.length) + ")")])])]), _vm._v(" "), _c('div', { staticClass: "block-content tab-content" }, [_c('div', { staticClass: "tab-pane fade in push-30-t push-50 active", staticStyle: { "width": "600px" }, attrs: { "id": "simple-step1" } }, [_vm._l(_vm.questionsSearched.list, function (qSearched, index) {
                return _c('div', { key: qSearched._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "quest-title" }, [_vm._v(_vm._s(qSearched.title))]), _vm._v(" "), _c('div', { staticClass: "flex-row", staticStyle: { "margin-top": "7px" } }, [_c('span', { staticStyle: { "margin-right": "20px" } }, [_vm._v("回答(" + _vm._s(qSearched.answerCount) + ")")]), _vm._v(" "), _c('span', [_vm._v("提问时间：" + _vm._s(_vm._f("date")(qSearched.createdAt.$date)))])])]), _vm._v(" "), _c('a', { staticClass: "btn btn-primary add-btn", attrs: { "disabled": _vm.isQuestionAdded(qSearched._id.$oid) }, on: { "click": function click($event) {
                            _vm.addQuestions(qSearched);
                        } } }, [_vm._v("添加\n                                                ")]), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": '/question/' + qSearched._id.$oid } }, [_vm._v("查看\n                                                ")])], 1)]);
            }), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.questionsSearched.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } })], 2), _vm._v(" "), _c('div', { staticClass: "tab-pane fade push-30-t push-50", staticStyle: { "width": "600px" }, attrs: { "id": "simple-step2" } }, _vm._l(_vm.topicQuestions, function (qAdded, index) {
                return _c('div', { key: qAdded._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "quest-title" }, [_vm._v(_vm._s(qAdded.title))]), _vm._v(" "), _c('div', { staticClass: "flex-row", staticStyle: { "margin-top": "7px" } }, [_c('span', { staticStyle: { "margin-right": "20px" } }, [_vm._v("回答(" + _vm._s(qAdded.answerCount) + ")")]), _vm._v(" "), _c('span', [_vm._v("提问时间：" + _vm._s(_vm._f("date")(qAdded.createdAt.$date)))])])]), _vm._v(" "), _c('button', { staticClass: "btn btn-primary add-btn", on: { "click": function click($event) {
                            _vm.removeConfirm(qAdded._id.$oid);
                        } } }, [_vm._v("删除\n                                                        ")]), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": '/question/' + qAdded._id.$oid } }, [_vm._v("查看\n                                                        ")])], 1)]);
            }))])])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-5 col-md-offset-2" }, [_c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.showWording, expression: "showWording" }], staticClass: "red-font" }, [_vm._v(_vm._s(_vm.wording))])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2 col-md-offset-2" }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": _vm.save } }, [_vm._v("确定")])])])])])])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": "确定要删除问题吗？", "show": _vm.showModal }, on: { "confirm": _vm.remove, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    新增专题\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"iClD":
    /***/function iClD(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("oAV5");

        var STATUS = __webpack_require__("GX9t").STATUS;
        var TYPE = __webpack_require__("SgC4").TYPE;

        // import pinyin from 'pinyin/lib/web-pinyin'

        /* harmony default export */__webpack_exports__["a"] = {
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
            }
        };

        /***/
    },

    /***/"iOgM":
    /***/function iOgM(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__ = __webpack_require__("Gt4P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("oAV5");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
            components: {
                FileWrapper: __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__["a" /* default */]
            },
            mounted: function mounted() {
                this.$emit('on-get-datalist', this.metas);
                console.log('list grid mounted');
            },

            props: ['metas', 'rows'],
            methods: {
                imgChange: function imgChange(file) {
                    var _this = this;

                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__utils_fileUploader__["a" /* default */].normal(file).then(function (data) {
                        if (vm.modifyImgIndex >= 0) {
                            debugger;
                            console.log(vm.modifyImgIndex);
                            vm.metas[vm.modifyImgIndex].content = data;
                            vm.modifyImgIndex = undefined;
                            //                    util.getFileSize(file, vm);
                        } else if (vm.insertImgIndex >= 0) {
                            vm._insert(vm.insertImgIndex, { "type": "IMG", "content": data });
                            vm.insertImgIndex = undefined;
                        } else {
                            vm.metas.push({ "type": "IMG", "content": data });
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
                    this.metas.push({ "type": "TEXT", "content": content });
                    this.sendDataToFather();
                },
                deleteDataFromList: function deleteDataFromList(index) {
                    this.metas.splice(index, 1);
                    this.sendDataToFather();
                },
                invokeChildImgChange: function invokeChildImgChange(index) {
                    debugger;
                    this.modifyImgIndex = index;
                    this.$refs.fileWrap.openFinder();
                },
                sendDataToFather: function sendDataToFather() {
                    this.$emit("on-data-change", this.metas);
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
                    this.metas.splice(index, 0, meta);
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

                    var m1 = this.metas[index1].content;
                    var m2 = this.metas[index2].content;
                    var type1 = this.metas[index1].type;
                    var type2 = this.metas[index2].type;
                    this.metas[index2].content = m1;
                    this.metas[index1].content = m2;
                    this.metas[index2].type = type1;
                    this.metas[index1].type = type2;
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
        };

        /***/
    },

    /***/"isgN":
    /***/function isgN(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"iuSh":
    /***/function iuSh(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"jPc0":
    /***/function jPc0(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "modal", staticClass: "modal", attrs: { "id": "modal-small", "tabindex": "-1", "role": "dialog", "aria-hidden": "true" } }, [_c('div', { staticClass: "modal-dialog modal-sm" }, [_c('div', { staticClass: "modal-content" }, [_c('div', { staticClass: "block block-themed block-transparent remove-margin-b" }, [_c('div', { staticClass: "block-header bg-primary-dark" }, [_vm._m(0), _vm._v(" "), _c('h3', { staticClass: "block-title" }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('p', [_vm._v(_vm._s(_vm.content))]), _vm._v(" "), _vm.input ? _c('div', { staticClass: "row form-group" }, [_c('div', { staticClass: "col-md-12" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.text, expression: "text" }], staticClass: "form-control", attrs: { "rows": "3" }, domProps: { "value": _vm.text }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.text = $event.target.value;
                    } } })])]) : _vm._e()])]), _vm._v(" "), _c('div', { staticClass: "modal-footer" }, [_c('button', { staticClass: "btn btn-sm btn-default", attrs: { "type": "button", "data-dismiss": "modal" }, on: { "click": function click($event) {
                        _vm.$emit('cancel');
                    } } }, [_vm._v("取消")]), _vm._v(" "), _c('button', { staticClass: "btn btn-sm btn-primary", attrs: { "type": "button", "data-dismiss": "modal" }, on: { "click": function click($event) {
                        _vm.$emit('confirm', _vm.text);
                    } } }, [_c('i', { staticClass: "fa fa-check" }), _vm._v("确定")])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', { staticClass: "block-options" }, [_c('li', [_c('button', { attrs: { "data-dismiss": "modal", "type": "button" } }, [_c('i', { staticClass: "si si-close" })])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"jRG4":
    /***/function jRG4(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-header form-horizontal" }, [_c('div', { staticClass: "row" }, [_c('div', { staticClass: "col-md-1 fl" }, [_c('router-link', { staticClass: "btn btn-primary", attrs: { "to": "/answerAdd" } }, [_vm._v("新增答主\n                        ")])], 1), _vm._v(" "), _c('div', { staticClass: "col-md-1 fr" }, [_c('a', { staticClass: "btn btn-primary btn-block", on: { "click": function click($event) {
                        _vm.search();
                    } } }, [_vm._v("搜索")])]), _vm._v(" "), _c('div', { staticClass: "col-md-3 fr" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入用户昵称" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })])])]), _vm._v(" "), _c('div', { staticClass: "block-content" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid }, [_c('td', [_c('img', { staticClass: "img-avatar", attrs: { "src": a.headImgUrl, "alt": "" } })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.nickname))]), _vm._v(" "), _c('td', [_c('a', { staticClass: "btn btn-xs btn-primary", on: { "click": function click($event) {
                            _vm.edit(a._id.$oid);
                        } } }, [_vm._v("编辑\n                                ")])])]);
            }))]), _vm._v(" "), _c('el-pagination', { directives: [{ name: "show", rawName: "v-show", value: _vm.totalCount > 0, expression: "totalCount>0" }], staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } })], 1)]), _vm._v(" "), _vm.list.length === 0 ? _c('h5', { staticClass: "text-center red-font" }, [_vm._v("暂时没有你查找的用户")]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "block-content" })])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    答主管理\n                ")])])])]);
        }, function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("用户头像")]), _vm._v(" "), _c('th', [_vm._v("用户昵称")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"jT7l":
    /***/function jT7l(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("Wbwb");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc7cda28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("ZA+K");
        function injectStyle(ssrContext) {
            __webpack_require__("C++z");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fc7cda28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"m57M":
    /***/function m57M(module, __webpack_exports__, __webpack_require__) {

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

        /* harmony default export */
        __webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"m6z7":
    /***/function m6z7(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("A7T4");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df2f4d74_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("jRG4");
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df2f4d74_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"nkiV":
    /***/function nkiV(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "modal", staticClass: "modal fade ", attrs: { "id": "userListModal", "tabindex": "-1", "role": "dialog", "aria-labelledby": "title", "aria-hidden": "true" } }, [_c('div', { staticClass: "modal-dialog" }, [_c('div', { staticClass: "modal-content" }, [_c('div', { staticClass: "modal-header" }, [_c('div', { staticClass: " text-center" }, [_c('div', { staticClass: "row" }, [_c('a', { staticClass: "close", attrs: { "data-dismiss": "modal", "aria-hidden": "true" } }, [_vm._v("×")]), _vm._v(" "), _c('h6', { staticClass: "modal-title", attrs: { "id": "title" } }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', { staticClass: "row" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "请输入用户昵称" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } }), _vm._v(" "), _c('a', { staticClass: "btn btn-sm btn-primary", on: { "click": function click($event) {
                        _vm.search();
                    } } }, [_vm._v("搜索")])])])]), _vm._v(" "), _c('div', { staticClass: "modal-body" }, [_c('div', { staticClass: "table-responsive" }, [_c('table', { staticClass: "table table-striped table-vcenter" }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l(_vm.list, function (a, index) {
                return _c('tr', { key: a._id.$oid }, [_c('td', [_vm._v(" " + _vm._s(a.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(a.nickname))]), _vm._v(" "), _c('td', [_c('a', { on: { "click": function click($event) {
                            _vm.choose(a);
                        } } }, [_vm._v("选择")])])]);
            }))]), _vm._v(" "), _c('el-pagination', { directives: [{ name: "show", rawName: "v-show", value: _vm.totalCount > 0, expression: "totalCount>0" }], staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } }), _vm._v(" "), _c('h5', { directives: [{ name: "show", rawName: "v-show", value: _vm.totalCount === 0, expression: "totalCount===0" }], staticClass: "text-danger text-center" }, [_vm._v(_vm._s(_vm.wording))])], 1)])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('thead', [_c('tr', [_c('th', [_vm._v("用户姓名")]), _vm._v(" "), _c('th', [_vm._v("用户昵称")]), _vm._v(" "), _c('th', [_vm._v("操作")])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"oAV5":
    /***/function oAV5(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

        /* harmony default export */__webpack_exports__["a"] = {
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
            }
        };

        /***/
    },

    /***/"oGoQ":
    /***/function oGoQ(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("昵称：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.nickname, expression: "p.nickname" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "昵称" }, domProps: { "value": _vm.p.nickname }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "nickname", $event.target.value);
                    } } })]), _vm._v("\n                        2-20个字符\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("头像：")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('img', { staticClass: "img-avatar", attrs: { "src": _vm.p.headImgUrl } }), _vm._v(" "), _c('file-wrap', { staticClass: "btn btn-link", on: { "on-file-change": _vm.imgChange } }, [_vm._v("更改")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("自我描述")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.desc, expression: "p.desc" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "自我描述", "rows": "5" }, domProps: { "value": _vm.p.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "desc", $event.target.value);
                    } } })]), _vm._v("\n                        30个字符\n                    ")]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2 col-md-offset-2" }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": _vm.save } }, [_vm._v("确定")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('router-link', { staticClass: "btn btn-danger btn-block", attrs: { "to": "/answerManageList" } }, [_vm._v("取消")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('h5', { directives: [{ name: "show", rawName: "v-show", value: _vm.showWording, expression: "showWording" }], staticClass: "text-danger" }, [_vm._v(_vm._s(_vm.wording))])])])])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    编辑答主\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"osAX":
    /***/function osAX(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("7uHN");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5563b23f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("GVU2");
        function injectStyle(ssrContext) {
            __webpack_require__("6Jx2");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5563b23f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"pE7P":
    /***/function pE7P(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_upload_wrapper_vue__ = __webpack_require__("m57M");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bfacf94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_upload_wrapper_vue__ = __webpack_require__("ysst");
        function injectStyle(ssrContext) {
            __webpack_require__("iuSh");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-4bfacf94";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_file_upload_wrapper_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bfacf94_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_file_upload_wrapper_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"pgX7":
    /***/function pgX7(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__components_confirm__ = __webpack_require__("U1ku");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_tag__);
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"pigS":
    /***/function pigS(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"q0DR":
    /***/function q0DR(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            module.exports = {
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
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"qGR4":
    /***/function qGR4(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            // const LOGIN = 'console/admin/login'
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
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"qeIj":
    /***/function qeIj(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"rFU3":
    /***/function rFU3(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"rIBj":
    /***/function rIBj(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__("tVFC");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7893bd2e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__("2PW4");
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = null;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7893bd2e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"sDxe":
    /***/function sDxe(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_question__ = __webpack_require__("g8Ah");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_question__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_cos__ = __webpack_require__("JyLo");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_tag__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__ = __webpack_require__("ELb+");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_list_choose_user__ = __webpack_require__("U2La");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
            components: { AnswerMetas: __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__["a" /* default */], AnswerUsers: __WEBPACK_IMPORTED_MODULE_4__components_list_choose_user__["a" /* default */] },
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
                        createdAt: {}

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
                    answerMetas: [],
                    //用来判断是新增还是修改已有的回答
                    answerId: ''
                };
            },

            methods: {
                loadData: function loadData() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.detail(vm.questionId).then(function (data) {
                        vm.q = data;
                        vm.getAnswers();
                        vm.getComments();
                        vm.getTags();
                    });
                },
                getAnswers: function getAnswers() {
                    var vm = this;
                    vm.answersParams.questionId = vm.questionId;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.answers(vm.answersParams).then(function (data) {
                        vm.answers = data;
                    });
                },
                getUserAnswer: function getUserAnswer() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.getUserAnswer(vm.questionId, vm.userId).then(function (data) {
                        if (data.metas) vm.answerMetas = data.metas;
                        vm.answerId = data.answerId;
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
                        if (vm.answerMetas.length === 0 || vm.answerMetas.length === 1 && vm.answerMetas[0]['content'].trim().length === 0) {
                            vm.$message.error("回答不能回空");
                            return;
                        }
                        if (vm.answerId) vm.editAnswer();else vm.addAnswer();
                    } else if (!vm.userId && vm.answerMetas.length > 0) {
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
                        tags: tmpTag
                    };
                    if (vm.q.isShow === 'true' || vm.q.isShow === true) qq.isShow = true;else qq.isShow = false;
                    if (vm.q.isRecommended === 'true' || vm.q.isRecommended === true) qq.isRecommended = true;else qq.isRecommended = false;

                    console.log(vm.q);
                    console.log(qq);
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.editDetail(qq).then(function (data) {
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
                refreshAnswerMetas: function refreshAnswerMetas(data) {
                    //                this.q.answerMetas = data;
                },

                /**
                 * 回答部分
                 */
                toAnswersComments: function toAnswersComments(routeParmas) {
                    window.questionUrl = { name: 'questionDetail', params: { questionId: routeParmas.params.questionId } };
                    //                to={name:'answerscomments',params:{questionId:q._id.$oid,type:'answers'}}
                    this.$router.push(routeParmas);
                },
                chooseAsker: function chooseAsker(asker) {
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
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.editAnswer(vm.answerId, vm.answerMetas).then(function (data) {
                        vm.$message.success("修改回答成功");
                        vm.initAnswer();
                    });
                },
                addAnswer: function addAnswer() {
                    var vm = this;
                    __WEBPACK_IMPORTED_MODULE_0__services_question___default.a.addAnswer(vm.questionId, vm.userId, vm.answerMetas).then(function (data) {
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
                    if (!this.answerMetas || this.answerMetas.length === 0) {
                        this.$message.error("回答不能回空");
                        return false;
                    }
                    if (this.answerId) this.editAnswer();else this.addAnswer();
                    return true;
                }
            },
            computed: {}
        };

        /***/
    },

    /***/"sfn8":
    /***/function sfn8(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_question__ = __webpack_require__("g8Ah");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_question__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_cos__ = __webpack_require__("JyLo");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_tag__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_list_grid_div__ = __webpack_require__("ELb+");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_list_choose_user__ = __webpack_require__("U2La");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
                        tags: []
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
                    wording: ''
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
                        tags: tmpTag
                    };
                    if (vm.q.isShow === 'true' || vm.q.isShow === true) qq.isShow = true;else qq.isShow = false;
                    if (vm.q.isRecommended === 'true' || vm.q.isRecommended === true) qq.isRecommended = true;else qq.isRecommended = false;
                    console.log(vm.q);
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
                }
            },
            computed: {}
        };

        /***/
    },

    /***/"tVFC":
    /***/function tVFC(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_answer__ = __webpack_require__("wC1S");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_answer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_answer__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils_fileUploader__ = __webpack_require__("Gt4P");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"tltV":
    /***/function tltV(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("BO1k");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__services_topic__ = __webpack_require__("q0DR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__services_topic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_topic__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_confirm__ = __webpack_require__("U1ku");

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
                        questionIds: []
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
                    __WEBPACK_IMPORTED_MODULE_3__services_topic___default.a.createTopic(this.p).then(function (data) {
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
        };

        /***/
    },

    /***/"vET2":
    /***/function vET2(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._m(0), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("标签名称：")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.name, expression: "name" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "标签名称" }, domProps: { "value": _vm.name }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.name = $event.target.value;
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("上传标签图片：")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('file-wrapper', { staticClass: "btn btn-primary", on: { "on-file-change": _vm.imgChange } }, [_c('i', { staticClass: "fa fa-upload" }), _vm._v("\n                                选择图片\n                            ")])], 1)]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('img', { attrs: { "src": _vm.iconUrl } }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.image.width * _vm.image.height > 0, expression: "image.width*image.height>0" }] }, [_vm._v("尺寸:" + _vm._s(_vm.image.width) + "X" + _vm._s(_vm.image.height))])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-2" }, [_c('a', { staticClass: "btn btn-primary", on: { "click": _vm.editTag } }, [_vm._v("确定")]), _vm._v(" "), _c('a', { staticClass: "btn btn-danger", on: { "click": _vm.cancel } }, [_vm._v("取消")])])])])])])])]);
        };
        var staticRenderFns = [function () {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    修改标签\n                ")])])])]);
        }];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"vKlO":
    /***/function vKlO(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sideNav_vue__ = __webpack_require__("0FkJ");
        /* unused harmony namespace reexport */
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fcc3f8d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sideNav_vue__ = __webpack_require__("HBpH");
        function injectStyle(ssrContext) {
            __webpack_require__("1gUR");
        }
        var normalizeComponent = __webpack_require__("VU/8");
        /* script */

        /* template */

        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-3fcc3f8d";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sideNav_vue__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fcc3f8d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sideNav_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);

        /* harmony default export */__webpack_exports__["a"] = Component.exports;

        /***/
    },

    /***/"vZuO":
    /***/function vZuO(module, exports) {

        module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAYFBAMCCf/EADgQAAIBAgEIBwMNAAAAAAAAAAABAgMEBQYREhQhIjFBUVRhcYGSsUKC8RMyMzVEUpGhwcLR4fD/2gAIAQEAAD8A/TgAAAAAAAAAAAAAAAAAAAAAAAAAAGTiuPwsZOlSSq1lxz8I95gVcZva8tteceyG76CljN7Qlsrzl2T3vU38Kx+F9JUqqVKs+GbhLuNYAAAAA4cYvnYWM5x+klux72TOE4bLFLlqTapx2zlz+JXW1pRtIaNGnGC7FtfiLm0o3cNGtTjNdq2rxJHFsNlhdylFt05bYS5/EpsHvnf2MJy+kjuy70dwAAAAJ/K2TULWPJuT9P5OjJemo4fKXOU3nfgjYBj5UU1LD4y5xmsz8Gc+SUm4XUeScX6/wUAAAAAJ7K37J7/7TryZ+rPff6GsDJym+rPfX6nJkl9r9z9xQgAAAAw8qqLnbUaqWyEmn4/A+clbqLpVbdveT00ulc/92m8DByquoqlSt095vTa6Fy/3YfWStFwtq1VrZOSS8PibgAAAAOW/nbSt50rirCEZLNvSSZG6crK60qNVNwe7UjzNy2yrjoJXFGWl96nz8GLnKuOg1b0ZaX3qnLwRh6cr260q1VJze9UlyLKwnbRt4UrerCcYrNuyTZ1AAAA48RxWjhsM83pVH82C4smrzHru7bSn8lB+zT2fmedDB7263o0ZJP2p7PU7aeStxJb9WnDuzs91kl03X4U/7DyS6Lr8af8AZ4VMlbiK3KtOffnRxV8HvbXelRk0vaht9D0s8eu7RpOfy0F7NTb+ZS4dilHEoNw3Zr50HxR2AAAhpSqYriG179WeZZ+SKywwi3sIpxip1OdSS2+HQdoAAOG/wi3v4vSioVOVSK2+PSSsJVMKxDY9+lPM83BouAAAQ2GzVHEaDm9FRms7fIueIAAA4ENiU1WxGu4PSUpvM1zLkAAE3jOAVXXlXto6cZvPKC4p9hlaherZq9fySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGo3vV7jySGoXr2avX8kjVwbAKqrxr3MdCMHnjB8W+0pAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==";

        /***/
    },

    /***/"wC1S":
    /***/function wC1S(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            module.exports = {
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
                }
            };
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"wRZZ":
    /***/function wRZZ(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "content bg-gray-lighter" }, [_c('div', { staticClass: "row items-push" }, [_c('div', { staticClass: "col-sm-7" }, [_vm.$route.path.indexOf('topicDetail') == -1 ? _c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    编辑专题\n                ")]) : _c('h1', { staticClass: "page-heading" }, [_vm._v("\n                    专题详情\n                ")])])])]), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('div', { staticClass: "block" }, [_c('div', { staticClass: "block-content block-content-narrow" }, [_c('form', { staticClass: "form-horizontal" }, [_c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("专题标题")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.title, expression: "p.title" }], staticClass: "form-control", attrs: { "type": "text", "placeholder": "标题" }, domProps: { "value": _vm.p.title }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "title", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("专题描述")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('textarea', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.desc, expression: "p.desc" }], staticClass: "form-control", attrs: { "rows": "3", "type": "text", "placeholder": "描述" }, domProps: { "value": _vm.p.desc }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.p, "desc", $event.target.value);
                    } } })])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("上传专题图片")]), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('file-wrapper', { staticClass: "btn btn-primary", on: { "on-file-change": _vm.imgChange } }, [_c('i', { staticClass: "fa fa-upload" }), _vm._v("\n                                选择图片\n                            ")])], 1)]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.p.bannerUrl, expression: "p.bannerUrl" }], staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }), _vm._v(" "), _c('div', { staticClass: "col-md-7" }, [_c('img', { staticClass: "pic-max-500", attrs: { "src": _vm.p.bannerUrl, "alt": "" } }), _vm._v(" "), _c('span', { directives: [{ name: "show", rawName: "v-show", value: _vm.p.bannerUrl && _vm.image.width > 0 && _vm.image.height > 0, expression: "p.bannerUrl&&image.width>0&&image.height>0" }] }, [_vm._v("尺寸:" + _vm._s(_vm.image.width) + "X" + _vm._s(_vm.image.height))])])]), _vm._v(" "), _c('div', { staticClass: "form-group" }, [_c('label', { staticClass: "col-md-2 control-label" }, [_vm._v("添加问题")]), _vm._v(" "), _c('div', { staticClass: "col-md-5" }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.queryParams.queryStr, expression: "queryParams.queryStr" }], staticClass: "form-control", attrs: { "placeholder": "输入用户昵称/问题标题/回答内容/话题标签" }, domProps: { "value": _vm.queryParams.queryStr }, on: { "input": function input($event) {
                        if ($event.target.composing) {
                            return;
                        }_vm.$set(_vm.queryParams, "queryStr", $event.target.value);
                    } } })]), _vm._v(" "), _c('div', { staticClass: "col-md-2 text-left" }, [_c('a', { staticClass: "btn btn-primary btn-block", on: { "click": _vm.search } }, [_vm._v("搜索")])])]), _vm._v(" "), _c('div', { staticClass: "col-md-offset-1" }, [_c('div', { staticClass: "js-wizard-simple block" }, [_c('ul', { staticClass: "nav nav-tabs nav-tabs-alt nav-justified", staticStyle: { "width": "500px" } }, [_c('li', { directives: [{ name: "show", rawName: "v-show", value: _vm.isSearched, expression: "isSearched" }], attrs: { "id": "qSearchedLi" } }, [_c('a', { attrs: { "href": "#qSearchedDiv", "data-toggle": "tab" } }, [_vm._v("搜索列表(" + _vm._s(_vm.questionsSearched.totalCount) + ")")])]), _vm._v(" "), _c('li', { staticClass: "active", attrs: { "id": "qAddedLi" } }, [_c('a', { attrs: { "href": "#qAddedDiv", "data-toggle": "tab" } }, [_vm._v("已添加问题(" + _vm._s(_vm.topicQuestions.totalCount) + ")")])]), _vm._v(" "), _c('li', { attrs: { "id": "qApprovingLi" } }, [_c('a', { attrs: { "href": "#qApprovingDiv", "data-toggle": "tab" } }, [_vm._v("已提问待审核问题(" + _vm._s(_vm.topicApprovingQuestions.totalCount) + ")")])])]), _vm._v(" "), _c('div', { staticClass: "block-content tab-content" }, [_c('div', { staticClass: "tab-pane fade push-30-t push-50 ", staticStyle: { "width": "600px" }, attrs: { "id": "qSearchedDiv" } }, [_vm._l(_vm.questionsSearched.list, function (qSearched, index) {
                return _c('div', { key: qSearched._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "quest-title" }, [_vm._v(_vm._s(qSearched.title))]), _vm._v(" "), _c('div', { staticClass: "flex-row", staticStyle: { "margin-top": "7px" } }, [_c('span', { staticStyle: { "margin-right": "20px" } }, [_vm._v("回答(" + _vm._s(qSearched.answerCount) + ")")]), _vm._v(" "), _c('span', [_vm._v("提问时间：" + _vm._s(_vm._f("date")(qSearched.createdAt.$date)))])])]), _vm._v(" "), _c('a', { staticClass: "btn btn-primary add-btn", attrs: { "disabled": _vm.isQuestionAdded(qSearched._id.$oid) }, on: { "click": function click($event) {
                            _vm.addQuestionToTopic(qSearched._id.$oid, 'search');
                        } } }, [_vm._v("添加\n                                            ")]), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": '/question/' + qSearched._id.$oid } }, [_vm._v("\n                                                查看\n                                            ")])], 1)]);
            }), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.queryParams.page, "page-size": _vm.queryParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.questionsSearched.totalCount }, on: { "current-change": _vm.pageChange, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.queryParams, "page", $event);
                    } } })], 2), _vm._v(" "), _c('div', { staticClass: "tab-pane fade in push-30-t push-50  active ", staticStyle: { "width": "600px" }, attrs: { "id": "qAddedDiv" } }, [_vm._l(_vm.topicQuestions.list, function (qAdded, index) {
                return _c('div', { key: qAdded._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "quest-title" }, [_vm._v(_vm._s(qAdded.title))]), _vm._v(" "), _c('div', { staticClass: "flex-row", staticStyle: { "margin-top": "7px" } }, [_c('span', { staticStyle: { "margin-right": "20px" } }, [_vm._v("回答(" + _vm._s(qAdded.answerCount) + ")")]), _vm._v(" "), _c('span', [_vm._v("提问时间：" + _vm._s(_vm._f("date")(qAdded.createdAt.$date)))])])]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.topicQuestionsParams.page == 1 && index == 0), expression: "!(topicQuestionsParams.page==1 && index == 0)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "title": "上移" }, on: { "click": function click($event) {
                            _vm.move(qAdded, -1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-up" })]), _vm._v(" "), _c('a', { directives: [{ name: "show", rawName: "v-show", value: !(_vm.topicQuestionsParams.page == Math.ceil(_vm.topicQuestions.totalCount / _vm.topicQuestionsParams.perPage) && index == _vm.topicQuestions.list.length - 1), expression: "!(topicQuestionsParams.page==Math.ceil(topicQuestions.totalCount/topicQuestionsParams.perPage) && index == topicQuestions.list.length-1)" }], staticClass: "btn btn-xs btn-default", attrs: { "type": "button", "title": "下移" }, on: { "click": function click($event) {
                            _vm.move(qAdded, 1);
                        } } }, [_c('i', { staticClass: "fa fa-long-arrow-down" })]), _vm._v(" "), _c('a', { staticClass: "btn btn-primary add-btn", on: { "click": function click($event) {
                            _vm.beforeConfirm(qAdded._id.$oid, '确定要删除问题吗', _vm.remove);
                        } } }, [_vm._v("删除\n                                            ")]), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": '/question/' + qAdded._id.$oid } }, [_vm._v("查看\n                                            ")])], 1)]);
            }), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.topicQuestionsParams.page, "page-size": _vm.topicQuestionsParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.topicQuestions.totalCount }, on: { "current-change": _vm.loadTopicQuestions, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.topicQuestionsParams, "page", $event);
                    } } })], 2), _vm._v(" "), _c('div', { staticClass: "tab-pane fade push-30-t push-50", staticStyle: { "width": "600px" }, attrs: { "id": "qApprovingDiv" } }, [_vm._l(_vm.topicApprovingQuestions.list, function (qApproving, index) {
                return _c('div', { key: qApproving._id.$oid }, [_c('div', { staticClass: "flex-row list-item" }, [_c('div', { staticClass: "list-left" }, [_c('div', { staticClass: "quest-title" }, [_vm._v(_vm._s(qApproving.title))]), _vm._v(" "), _c('div', { staticClass: "flex-row", staticStyle: { "margin-top": "7px" } }, [_c('span', { staticStyle: { "margin-right": "20px" } }, [_vm._v("回答(" + _vm._s(qApproving.answerCount) + ")")]), _vm._v(" "), _c('span', [_vm._v("提问时间：" + _vm._s(_vm._f("date")(qApproving.createdAt.$date)))])])]), _vm._v(" "), _c('a', { staticClass: "btn btn-primary add-btn", on: { "click": function click($event) {
                            _vm.addQuestionToTopic(qApproving._id.$oid, 'qApproving');
                        } } }, [_vm._v("添加\n                                            ")]), _vm._v(" "), _c('router-link', { staticClass: "detail-link", attrs: { "to": '/question/' + qApproving._id.$oid } }, [_vm._v("查看\n                                            ")])], 1)]);
            }), _vm._v(" "), _c('el-pagination', { staticStyle: { "text-align": "center" }, attrs: { "current-page": _vm.topicApprovingQuestionsParams.page, "page-size": _vm.topicApprovingQuestionsParams.perPage, "layout": "prev, pager, next, jumper", "total": _vm.topicApprovingQuestions.totalCount }, on: { "current-change": _vm.loadTopicApprovingQuestions, "update:currentPage": function updateCurrentPage($event) {
                        _vm.$set(_vm.topicApprovingQuestionsParams, "page", $event);
                    } } })], 2)])])]), _vm._v(" "), _c('div', { staticClass: "form-group " }, [_c('label', { staticClass: "col-md-2 col-md-offset-1" }, [_vm._v("是否展示专题")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.isShow, expression: "p.isShow" }], staticClass: "radio-inline", attrs: { "type": "radio", "name": "isShow", "value": "true" }, domProps: { "checked": _vm._q(_vm.p.isShow, "true") }, on: { "change": function change($event) {
                        _vm.$set(_vm.p, "isShow", "true");
                    } } }), _vm._v("是\n                        "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.p.isShow, expression: "p.isShow" }], staticClass: "radio-inline", attrs: { "type": "radio", "name": "isShow", "value": "false" }, domProps: { "checked": _vm._q(_vm.p.isShow, "false") }, on: { "change": function change($event) {
                        _vm.$set(_vm.p, "isShow", "false");
                    } } }), _vm._v("否\n                    ")]), _vm._v(" "), _vm.$route.path.indexOf('topicDetail') == -1 ? _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2" }), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": _vm.save } }, [_vm._v("确定")])]), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": function click($event) {
                        _vm.beforeConfirm('', '确定要取消吗，你编辑的内容都将不再保存？', _vm.cancelConfirm);
                    } } }, [_vm._v("取消")])])]) : _c('div', { staticClass: "form-group" }, [_c('div', { staticClass: "col-md-2" }), _vm._v(" "), _c('div', { staticClass: "col-md-2 " }, [_c('a', { staticClass: "btn btn-success btn-block", on: { "click": _vm.cancelConfirm } }, [_vm._v("返回")])])])])])])]), _vm._v(" "), _c('confirm', { attrs: { "title": "提示！", "content": _vm.confirmWording, "show": _vm.showModal }, on: { "confirm": _vm.doConfirm, "show": function show($event) {
                        _vm.showModal = true;
                    }, "hide": function hide($event) {
                        _vm.showModal = false;
                    } } })], 1);
        };
        var staticRenderFns = [];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"wqBJ":
    /***/function wqBJ(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function ($) {
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
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
            /* harmony default export */__webpack_exports__["a"] = {
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
            };
            /* WEBPACK VAR INJECTION */
        }).call(__webpack_exports__, __webpack_require__("7t+N"));

        /***/
    },

    /***/"wyH0":
    /***/function wyH0(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"xIye":
    /***/function xIye(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (axios) {
            module.exports = {
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
            /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__("mtWM"));

        /***/
    },

    /***/"xJD8":
    /***/function xJD8(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        //
        //
        //
        //

        /* harmony default export */
        __webpack_exports__["a"] = {
            components: {}
        };

        /***/
    },

    /***/"yEGN":
    /***/function yEGN(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_tag__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils_fileUploader__ = __webpack_require__("Gt4P");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_file_upload_wrapper__ = __webpack_require__("pE7P");
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
        };

        /***/
    },

    /***/"ylrw":
    /***/function ylrw(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/},

    /***/"ysst":
    /***/function ysst(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var render = function render() {
            var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { on: { "click": _vm.openFinder } }, [_c('label', { staticClass: "hidden-file-input", attrs: { "tabindex": "-1" } }, [_vm._v("upload\n        "), _c('input', { ref: "file", attrs: { "type": "file", "accept": "image/jpg,image/jpeg,image/png, image/gif" }, on: { "change": _vm.fileChange } })]), _vm._v(" "), _vm._t("default")], 2);
        };
        var staticRenderFns = [];
        var esExports = { render: render, staticRenderFns: staticRenderFns
            /* harmony default export */ };__webpack_exports__["a"] = esExports;

        /***/
    },

    /***/"z06s":
    /***/function z06s(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_confirm__ = __webpack_require__("U1ku");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__services_question__ = __webpack_require__("g8Ah");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__services_question___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__services_question__);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__services_tag__ = __webpack_require__("gRfR");
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__services_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__services_tag__);

        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //


        /* harmony default export */__webpack_exports__["a"] = {
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
                }
            },

            computed: {}
        };

        /***/
    },

    /***/"zgZe":
    /***/function zgZe(module, exports) {

        // removed by extract-text-webpack-plugin

        /***/}

}, ["NHnr"]);
//# sourceMappingURL=app.091cf52d1e6a89a237f4.js.map
//# sourceMappingURL=app.091cf52d1e6a89a237f4.js.map