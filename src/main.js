// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
import './plugins/element.js'
import axios from 'axios'
import less from 'less'

Vue.config.productionTip = false
//配置请求的genlujing
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http=axios

Vue.use(less)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
