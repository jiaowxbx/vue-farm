<template>
  <el-container style="heith:100%">
  <el-aside width="auto"><common-aside></common-aside></el-aside>
  <el-container>
    <el-header>
      <CommonHeader/>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
  components: { CommonAside ,CommonHeader},
    name:'Main',
}
</script>

<style scoped> 
    .el-header{
        background-color: #333;
    }
    .el-main{
        padding-top: 0;
    }
</style>