<template>
    <body id="app">
        
    
        <div class="block">
        <div class="isZ" v-if="isZ" >
            <!-- <div class="icon" > <i class="el-icon-right" ></i></div> -->
            <h1>欢迎使用租车系统</h1>
            <el-button type="info" @click="zhuce">跳转到注册</el-button>
            <el-button type="primary" @click="denglu">跳转到登录</el-button>
        </div>
        <router-view></router-view>
        
        
  </div>
    </body>
</template>

<script>
import axios from 'axios'
import zhuce from './注册/zhuce.vue'
import denglu from './登录/denglu.vue'
import login from './login/login.vue'
export default {
    name:'App',
    data(){
        return {
            isZ:true,

        }
    },
    components:{zhuce,denglu,login},
    methods: {
        zhuce(){
            this.isZ=false;
            this.$router.push('/zhuce')
        },
        denglu(){
            this.isZ=false;
            this.$router.push('/denglu')
        },
    },
}

        
</script>

<style >

.isZ{
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 789px;
}
el-button{
    float: left;
}


</style>