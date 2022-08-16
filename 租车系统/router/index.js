//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import login from '../login/login'
import denglu from '../登录/denglu'
import zhuce from '../注册/zhuce'

export default new VueRouter({
    routes:[
        
        {
            path:'/zhuce',
            component:zhuce
        },
        {
            path:'/denglu',
            component:denglu,
            
        },
        {
            path:'/login',
            component:login,
            
        },
    ]
}) 