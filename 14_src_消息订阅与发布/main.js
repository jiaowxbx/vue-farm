//引入Vue
import Vue from 'vue'

import App from './App.vue'

//引入插件
import plugins from './plugins'
Vue.config.productionTip=false

Vue.use(plugins)
new Vue({
    el:'#app',
    render: h=>h(App),
   
}) 