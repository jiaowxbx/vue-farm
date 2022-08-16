<template>
  <el-menu  
    class="el-menu-vertical-demo" 
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
      <h3 class="hh" v-show="!isCollapse">农作物病害识别系统</h3>
      <h3 class="hh" v-show="isCollapse">病害识别</h3>
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
    <i :class="'el-icon-'+item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">
      
    <template slot="title">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
   
    
  </el-submenu>
  

</el-menu>
</template>

<script>
import bus from '@/bus.js'
export default {
data() {
      return {
        dt:'',
        menu:[
            {
                path:'/zhu',
                name:'',
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            },
            {
                path:'/shibie',
                name:'shibie',
                label:'病害识别',
                icon:'video-play',
                url:'MallManage/MallManage'
            },
            {
                path:'/chaxun',
                name:'chaxun',
                label:'病害查询',
                icon:'user',
                url:'UserManage/UserManage'
            },
            {
                path:'/zhuanjia',
                name:'zhuanjia',
                label:'专家查询',
                icon:'setting',
                url:'Other/PageOne'
                
            },
            
        ]
      };
    },
    
    methods: {
      /* handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },*/
      clickMenu(item){
          bus.$emit('jieshou',item.label)
          console.log(item);
          if(item.label=="首页")
          {
            this.$router.push({path:item.path})
          }
          this.$router.push({name:item.name})
      } 
    },
    computed:{
        noChildren(){
            return this.menu.filter((item)=>!item.children)
        },

        hasChildren(){
            return this.menu.filter((item)=>item.children)
        },
        isCollapse(){
            
            return this.$store._modules.root.state.isCollapse
        }
    }
}
</script>

<style>
.el-menu-item{
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 275px;
    min-height: 789px ;
  }
  .el-menu {
    
    height: 789px ;
  }
  .el-aside{
    background-color: #545c64;
    width: 500px;
  }
.hh{
    color:white;
}
</style>