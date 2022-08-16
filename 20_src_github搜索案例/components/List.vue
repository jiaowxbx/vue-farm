<template>
  <div>
      <div v-show="info.users.length" v-for="user in info.users" :key="user.login">
          <a :href="user.html_url">
              <img :src="user.avatar_url" style='width:100px'/>
          </a>
          <p>{{user.login}}</p>
      </div>
      <h1 v-show="info.isFirst">欢迎使用</h1>
      <h1 v-show="info.isLoading">等待中...</h1>
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            info:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                users:[]
            }
            
        }
    },
    mounted(){
        this.$bus.$on('updateListData',(dataObj)=>{
            console.log(dataObj);
            this.info=dataObj
        })
    }
}
</script>

<style>

</style>