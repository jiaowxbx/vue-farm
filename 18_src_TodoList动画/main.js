//引入Vue
import Vue from 'vue'

import App from './App.vue'

//引入插件

Vue.config.productionTip=false

new Vue({
    el:'#app',
    render: h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus=this
    }
})