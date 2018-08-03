// The Vue build version to load with the `import` command
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('bootstrap')
import Vue from 'vue'
import App from './App'
import service from './services/service'
import router from './router'
import filters from './utils/filters'
import VeeValidate from 'vee-validate';
var VueCookie = require('vue-cookie');
import { Message,Pagination,DatePicker,Input} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import config from './config'
const STATUS = require('./constants/status').STATUS
const TYPE = require('./constants/type').TYPE
Vue.prototype.$message = Message
Vue.use(Pagination);Vue.use(Input);Vue.use(VeeValidate)
Vue.use(VueCookie);Vue.use(DatePicker);
Vue.config.productionTip = false
axios.defaults.baseURL = config.serviceDomain;
//register filters
for(name in filters){
  Vue.filter(name, filters[name])
}
new ClipboardJS('.btn')
/* eslint-disable no-new */
Vue.prototype.$status = STATUS
Vue.prototype.$type = TYPE
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
let userInfo = JSON.parse(Vue.prototype.$cookie.get('userInfo'))
if(userInfo){
  store.commit('setUserInfo',userInfo)
}
