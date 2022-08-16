<template>
  <body id="app">
        <div>
      <h1>欢迎使用租车系统</h1>
      <p>用户名</p><input v-model="name" placeholder="请输入内容"/>
      <p>密码</p><input placeholder="请输入密码" v-model="password" show-password/>
      <br>
      <br>
      <el-button type="primary"  @click="click">点击登录</el-button>
      <el-button type="success"  @click="zhuce">点击注册</el-button>
      
  </div>    
  </body>
  
</template>

<script>
import axios from 'axios'

const ax=axios.create({
        baseURL:'http://39.105.187.77:8085/login'
    })

export default {
    
    name:'denglu',
    data(){
        return {
            name:'',
            password:'',
            
        }
    },
    methods: {
        click(){
            const _this=this;
            if(this.name===''){
                ax({
                method:'GET',
                

        }).then(res=>{
            this.title=res.data.message
            console.log(_this);
            alert(res.data.message)
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        }
        else { ax({
                method:'GET',
                url:`?username=${this.name}&password=${this.password}`,

        }).then(res=>{
            this.title=res.data.message
            this.canJ=res.data.data
            
            alert(res.data.message)
            console.log(res);
            
            if(res.data.data==='登录成功'){
                this.$router.push('/login')
            }
        }).catch(err=>{
            console.log(err);
        })
        
        
        }},
        zhuce(){
            this.isZ=false;
            this.$router.push('/zhuce')
        },
        
    },
}
</script>
 
<style scoped>
#app{
            background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
            height: 100vh;
            overflow: hidden;display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
        }
</style>