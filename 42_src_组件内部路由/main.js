//引入Vue
import Vue from 'vue'

import App from './App.vue'


//引入路由
import VueRouter from 'vue-router'
import router from './router'
// import bootstrap from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
Vue.use(VueRouter)
Vue.config.productionTip=false

new Vue({
    el:'#app',
    render: h=>h(App),
    router:router
  
})