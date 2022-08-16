
import Vue from 'vue'
import App from './App.vue'
import { Button, Row,DatePicker} from 'element-ui';
import ElementUI from 'element-ui';
import '../src/node_modules/element-ui/lib/theme-chalk/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
Vue.config.productionTip=false
Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row)
Vue.component(DatePicker.name, DatePicker);
new Vue({
    el:'#app',
    render: h=>h(App),
    router:router
  
})