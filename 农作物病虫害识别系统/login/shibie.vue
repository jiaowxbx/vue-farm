<template>
<div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <h3>请上传要识别的农作物图片</h3>
  <div id="tupian">
    
    <el-upload
  action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  
  </div>
  <el-button type="primary" round style="margin:15px 0 0 0 ;" id="anniu">点击识别</el-button>
</div>
  
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    align-content: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
import axios from 'axios'
const ax=axios.create({
    baseURL:'http://119.3.182.104:8080/crop/expert/getExpert',

})
export default {
 
  name:'Main',
  data(){
    return {
      currentPage: 1,
      menuList:[],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  mounted(){
     axios
            .get("http://119.3.182.104:8080/crop/detail/find/user",{params:{cname:'柑橘'}})
            .then((data)=>{
              console.log('*/*');
                console.log(data);
            })
  },
  methods:{
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>
<style >
h3{
  display: flex;    /*实现垂直居中*/


    justify-content: center;
}
  #tupian{
    display: flex;    /*实现垂直居中*/
    justify-content: center;
    /* background-color: #99a9bf; */
  }
  #anniu{
     margin: auto;
  width: 500px;
      FONT-WEIGHT: 700;
      position: absolute;
  margin-left: -250px !important;
  
  left: 50%;
  }

</style>