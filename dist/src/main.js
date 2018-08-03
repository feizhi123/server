'use strict';

var _cascader = require('element-ui/lib/theme-chalk/cascader.css');

var _cascader2 = _interopRequireDefault(_cascader);

var _cascader3 = require('element-ui/lib/cascader');

var _cascader4 = _interopRequireDefault(_cascader3);

var _datePicker = require('element-ui/lib/theme-chalk/date-picker.css');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _datePicker3 = require('element-ui/lib/date-picker');

var _datePicker4 = _interopRequireDefault(_datePicker3);

var _pagination = require('element-ui/lib/theme-chalk/pagination.css');

var _pagination2 = _interopRequireDefault(_pagination);

var _pagination3 = require('element-ui/lib/pagination');

var _pagination4 = _interopRequireDefault(_pagination3);

var _message = require('element-ui/lib/theme-chalk/message.css');

var _message2 = _interopRequireDefault(_message);

var _base = require('element-ui/lib/theme-chalk/base.css');

var _base2 = _interopRequireDefault(_base);

var _message3 = require('element-ui/lib/message');

var _message4 = _interopRequireDefault(_message3);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _service = require('./services/service');

var _service2 = _interopRequireDefault(_service);

var _scriptjs = require('scriptjs');

var _scriptjs2 = _interopRequireDefault(_scriptjs);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _filters = require('./utils/filters');

var _filters2 = _interopRequireDefault(_filters);

var _veeValidate = require('vee-validate');

var _veeValidate2 = _interopRequireDefault(_veeValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap');
// import store from './store'

var VueCookie = require('vue-cookie');

var STATUS = require('./constants/status').STATUS;
var TYPE = require('./constants/type').TYPE;

_vue2.default.prototype.$message = _message4.default;
_vue2.default.use(_pagination4.default);

_vue2.default.use(_veeValidate2.default);
_vue2.default.use(VueCookie);
_vue2.default.use(_datePicker4.default);
_vue2.default.use(_cascader4.default);

_vue2.default.config.productionTip = false;

//register filters
for (name in _filters2.default) {
  _vue2.default.filter(name, _filters2.default[name]);
}
new ClipboardJS('.btn');
/* eslint-disable no-new */
_vue2.default.prototype.$status = STATUS;
_vue2.default.prototype.$type = TYPE;

new _vue2.default({
  el: '#app',
  router: _router2.default,
  // store,
  template: '<App/>',
  components: { App: _App2.default }
});

var userInfo = JSON.parse(_vue2.default.prototype.$cookie.get('userInfo'));
if (userInfo) {
  store.commit('setUserInfo', userInfo);
}
//# sourceMappingURL=main.js.map