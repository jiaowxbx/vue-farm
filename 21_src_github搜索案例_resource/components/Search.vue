<template>
  <div>
      <h1>Search Github Users</h1>
        <input type="" value="enter the name you search" v-model="keyWord"/>
        <button @click="searchUsers">search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{

                    console.log('请求成功了',response.data.items);
                    this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    console.log('请求失败了',error.message);
                    his.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:error.message,users:[]})
                }
            )
        }
    },
}
</script>

<style>

</style>