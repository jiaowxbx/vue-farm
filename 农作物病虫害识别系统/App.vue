<template>
    <body id="app">
        <router-view></router-view>
        
        
  
    </body>
</template>

<script>
import axios from 'axios'
import zhuce from './注册/zhuce.vue'
import denglu from './登录/denglu.vue'

export default {
    name:'App',
    data(){
        return {
            isZ:true,

        }
    },
    components:{zhuce,denglu},
    methods: {
        /* zhuce(){
            this.isZ=false;
            this.$router.push('/zhuce')
        },
        denglu(){
            this.isZ=false;
            this.$router.push('/denglu')
        }, */
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