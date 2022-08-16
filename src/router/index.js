//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import zhu from '../Main/zhu'
import denglu from '../登录/denglu'
import zhuce from '../注册/zhuce'
import shibie from '../login/shibie'
import chaxun from '../login/chaxun'
import zhuanjia from '../login/zhuanjia'
export default new VueRouter({
    routes:[
        
        {

            path:'/',
            component:zhuce
        },
        {
            name:'denglu',
            path:'/denglu',
            component:denglu,
            
        },
        {
            path:'/zhu',
            component:zhu,
            children:[
                {
                    name:'shibie',
                    path:'shibie',
                    component:shibie,
                },
                {
                    name:'chaxun',
                    path:'chaxun',
                    component:chaxun,
                },
                {
                    name:'zhuanjia',
                    path:'zhuanjia',
                    component:zhuanjia,
                }
            ]
        },
        
    ]
}) 