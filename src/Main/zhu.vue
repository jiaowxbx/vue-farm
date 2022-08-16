<template>
  <el-container style="heith:100%">
  <el-aside width="auto"><common-aside></common-aside></el-aside>
  <el-container>
    <el-header>
      <CommonHeader/>
    </el-header>
    <el-main>
    <router-view></router-view>
      </el-main>
  </el-container>
</el-container>
</template>

<script>
import CommonAside from '../login/CommenAside.vue'
import CommonHeader from '../login/CommenHeader.vue'
import axios from 'axios'
const ax=axios.create({
    baseURL:'http://119.3.182.104:8080/crop/expert/getExpert',

})
export default {
  components: { CommonAside ,CommonHeader},
  name:'Main',
  data(){
    return {
      currentPage: 1,
      menuList:[]
    }
  },
  mounted(){
    ax({
      method:'GET',
      url:'http://119.3.182.104:8080/crop/expert/getExpert'
    }).then(res=>{
      
      console.log('***');
      console.log(res);
     
    })
  },
  methods:{
    handleCurrentChange(val) {
      this.currentPage = val;
  }
  }
}
</script>

<style scoped> 
    ul{
    list-style-type: disc;
    list-style: none;

    }
    li{
        display: inline-block;
        height: 400px;
        border: 1px solid #e3e3e3;
        margin: 0 0px 15px 5px;
    }
    li .tu img{
        width: 100%;
        height: 285px;
    }
    li .wen{
      
      margin: 0;
      vertical-align:middle;
      text-align: center;
    }
    .el-header{
        background-color: #333;
    }
    .el-main{
        padding-top: 0;
    }
    .el-button{
      align-content: center;
      text-align:center;
      vertical-align:middle;
      font-size: 30px;
      width: 85%;
      
    }
</style>
