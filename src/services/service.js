import Vue from 'vue'
import config from '../config'
import router from '../router'
const ERRORCODE = require('../constants/code').ERRORCODE

// Vue.prototype.$http = axios;
axios.defaults.baseURL = config.serviceDomain;

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.token=localStorage.getItem("info-site-token");
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (resp) {
  if(typeof resp.data.url!="undefined"){
    localStorage.removeItem('info-site-token')
    localStorage.removeItem('info-site-username')
    window.location=resp.data.url
  }
  if(resp.headers.token){
    console.log(resp.headers.token)
    localStorage.setItem('info-site-token',resp.headers.token);
    }
    
  return resp;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios