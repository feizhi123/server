'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _list = require('@/pages/topic/list.vue');

var _list2 = _interopRequireDefault(_list);

var _add = require('@/pages/topic/add.vue');

var _add2 = _interopRequireDefault(_add);

var _edit = require('@/pages/topic/edit.vue');

var _edit2 = _interopRequireDefault(_edit);

var _index = require('@/pages/login/index.vue');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('@/pages/layout/index.vue');

var _index4 = _interopRequireDefault(_index3);

var _list3 = require('@/pages/tag/list.vue');

var _list4 = _interopRequireDefault(_list3);

var _add3 = require('@/pages/tag/add.vue');

var _add4 = _interopRequireDefault(_add3);

var _edit3 = require('@/pages/tag/edit.vue');

var _edit4 = _interopRequireDefault(_edit3);

var _list5 = require('@/pages/answer/list.vue');

var _list6 = _interopRequireDefault(_list5);

var _detail = require('@/pages/answer/detail.vue');

var _detail2 = _interopRequireDefault(_detail);

var _list7 = require('@/pages/question/list.vue');

var _list8 = _interopRequireDefault(_list7);

var _detail3 = require('@/pages/question/detail.vue');

var _detail4 = _interopRequireDefault(_detail3);

var _add5 = require('@/pages/question/add.vue');

var _add6 = _interopRequireDefault(_add5);

var _answerscomments = require('@/pages/question/answerscomments.vue');

var _answerscomments2 = _interopRequireDefault(_answerscomments);

var _commentsofanswer = require('@/pages/question/commentsofanswer.vue');

var _commentsofanswer2 = _interopRequireDefault(_commentsofanswer);

var _list9 = require('@/pages/answerManage/list.vue');

var _list10 = _interopRequireDefault(_list9);

var _edit5 = require('@/pages/answerManage/edit.vue');

var _edit6 = _interopRequireDefault(_edit5);

var _add7 = require('@/pages/answerManage/add.vue');

var _add8 = _interopRequireDefault(_add7);

var _list11 = require('@/pages/imageMore/list.vue');

var _list12 = _interopRequireDefault(_list11);

var _index5 = require('@/pages/weixin-test/index.vue');

var _index6 = _interopRequireDefault(_index5);

var _ddUser = require('@/pages/ddUser/ddUser.vue');

var _ddUser2 = _interopRequireDefault(_ddUser);

var _answerinfo = require('@/pages/question/answerinfo');

var _answerinfo2 = _interopRequireDefault(_answerinfo);

var _activity = require('@/pages/activity/activity');

var _activity2 = _interopRequireDefault(_activity);

var _list13 = require('@/pages/message/list');

var _list14 = _interopRequireDefault(_list13);

var _newMessage = require('@/pages/message/newMessage');

var _newMessage2 = _interopRequireDefault(_newMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
//components
exports.default = new _vueRouter2.default({
    mode: 'history',
    routes: [{ path: '/login', component: _index2.default }, {
        path: '/', component: _index4.default, redirect: '/questionList',
        children: [{ path: 'topicList', component: _list2.default }, { path: 'addTopic', component: _add2.default, meta: { keepAlive: true } }, { path: 'tagList', component: _list4.default }, { path: 'addTag/', name: 'addTag', component: _add4.default }, { path: 'editTag/:tagId', name: 'editTag', component: _edit4.default }, { path: 'editTopic/:topicId', component: _edit2.default, props: true }, { path: 'topicDetail/:topicId', component: _edit2.default, props: true }, { path: 'questionList', component: _list8.default }, { path: 'questionAdd', component: _add6.default }, { path: 'question/:questionId', name: 'questionDetail', component: _detail4.default }, { path: 'question/:questionId/answerscomments', name: 'answerscomments', component: _answerscomments2.default }, { path: 'question/:questionId/answers/:answerId/comments', component: _commentsofanswer2.default }, { path: 'answerInfo/:questionId', name: 'answerInfo', component: _answerinfo2.default, props: true },
        //答主相关
        { path: 'answerManageList', component: _list10.default }, { path: 'answerEdit/:answerId', component: _edit6.default }, { path: 'answerAdd', component: _add8.default }, { path: 'answer/:answerId', component: _detail2.default }, { path: 'answerList', component: _list6.default }, { path: 'imageMoreList', component: _list12.default }, { path: 'ddUserList', component: _ddUser2.default },

        //微信页面测试
        { path: 'weixin', component: _index6.default }, { path: 'activity', component: _activity2.default }, { path: 'messageList', component: _list14.default }, { path: 'newMessage', component: _newMessage2.default, name: 'newMessage' }]
    }]
});
//# sourceMappingURL=index.js.map