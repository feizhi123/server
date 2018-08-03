'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERRORCODE = require('../constants/code').ERRORCODE;

// Vue.prototype.$http = axios;
axios.defaults.baseURL = _config2.default.serviceDomain;

axios.interceptors.request.use(function (config) {
  // Do something before request is sent

  return config;
}, function (error) {
  // Do something with request error
  return _promise2.default.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if (resp.data.code === ERRORCODE.AUTHENTICATION_FAILED) {
    //route to login
    _router2.default.push({ path: '/login' });
  }
  if (resp.data.code !== ERRORCODE.SUCCESS) {
    var errorMsg = resp.data.errorMessage;
    if (errorMsg) {
      _vue2.default.prototype.$message.error(errorMsg);
    } else {
      _vue2.default.prototype.$message.error('发生错误，请联系管理人员');
    }
    return _promise2.default.reject(resp);
  }
  return resp;
}, function (error) {
  // Do something with response error
  return _promise2.default.reject(error);
});

exports.default = axios;
//# sourceMappingURL=service.js.map