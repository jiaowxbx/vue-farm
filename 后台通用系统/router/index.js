//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import Main from '../views/Main'
export default new VueRouter({
    routes:[
        
       {
           path:'/',
           name:'Main',
           component:Main,
           children:[
               {
                   path:'/',
                   name:'home',
                   component:Home
               }
           ]
       },
       {
        path:'/',
        name:'home',
        label:'首页',
        icon:'s-home',
        url:'Home/Home'
    },
    {
        path:'/mall',
        name:'mall',
        label:'商品管理',
        icon:'video-play',
        url:'MallManage/MallManage'
    },
    {
        path:'/user',
        name:'user',
        label:'用户管理',
        icon:'user',
        url:'UserManage/UserManage'
    },
    {
        path:'/qita',
        name:'其他',
        label:'其他',
        icon:'location',
        children:[
            {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'setting',
                url:'Other/PageOne'
            },
            {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'setting',
                url:'Other/PageTwo'
            },
        ]
    },
        
    ]
}) 