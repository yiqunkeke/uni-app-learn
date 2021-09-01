import Vue from 'vue'
import App from './App'
// import { myRequest } from './util/request.js' // 引入封装的uni.request
// Vue.prototype.$myRequest = myRequest // 挂载到全局

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
