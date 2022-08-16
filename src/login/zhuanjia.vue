<template>
<div id="zhuanjia">
  
  <el-input type="text" placeholder="专家姓名或专家等级" v-model="input" style="width:200px" @keyup.enter="getCname"></el-input>
  <div>
    <img :src="imgurl" >这里是验证码
  </div>
  <!-- <p >
	<input style="width: 250px;" placeholder="图形验证码" @blur="check_imgcode"  type="text"   >
    <img style="height: 40px;float: right;"  :src="imgurl">
    <span  v-show="error_imgcode">验证码不能为空</span>
  </p> -->

  <el-button type="primary" round @click="getCname" >专家查询</el-button>
    <div v-for="i in experts.length" 
    :key="i"
      :label="experts[i-1]"
      :value="experts[i-1]">
     <el-descriptions class="margin-top"  :column="3" :size="size" border style="margin:20px">
    
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-user"></i>
        专家名
      </template>
      {{experts[i-1].name}}
    </el-descriptions-item>
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{experts[i-1].phone}}
    </el-descriptions-item>
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      {{experts[i-1].address}}
    </el-descriptions-item>
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-tickets"></i>
        性别
      </template>
      {{experts[i-1].sex}}
      <!-- <el-tag size="small">学校</el-tag> -->
    </el-descriptions-item>
    <el-descripti1ons-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-office-building"></i>
        邮箱
      </template>
      {{experts[i-1].email}}
    </el-descripti1ons-item>
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-trophy"></i>
        等级
      </template>
      {{experts[i-1].level}}
    </el-descriptions-item>
    <el-descripti1ons-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-keyy"></i>
        工作证
      </template>
      {{experts[i-1].license}}
    </el-descripti1ons-item>
    <el-descriptions-item v-if="experts[i-1]">
      <template slot="label">
        <i class="el-icon-ice-cream"></i>
        个人信息
      </template>
      {{experts[i-1].info}}
    </el-descriptions-item>
  </el-descriptions>
   
</div>
</div>

   
  
</template>
<script>

import axios from 'axios'
const ax=axios.create({
    baseURL:'http://39.103.180.71:8080/captchaImage',

})
export default {
  name:'Main',
  data(){
    return {
        size:'',
        input:'',
        experts:[
            
        ],
        imgurl:'',
        // error_imgcode:''

    }
  },
  mounted(){
    ax({
      method:'GET',
      url:'http://39.103.180.71:8080/captchaImage'
    }).then(res=>{
      
      console.log('***');
      console.log(res);
    //  this._data.experts=res.data.data.experts
    this._data.imgurl="data:image/gif;base64," +res.data.img
      console.log(this);
      this._data.imgurl="data:image/gif;base64," +res.data.img
     
    })
  },
  methods:{
   getCname(){
          ax({
              method:'GET',
              url:`?name=${this.input}`
          }).then(res=>{
            console.log(this);
            
            this.experts=res.data.data.experts
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
        })
    },
  //  check_imgcode(){
  //    if(!this.imgcode){
  //       this.error_imgcode_msg = '图片验证码不能为空！'
  //       this.error_imgcode = true;
  //   }else{
  //       this.error_imgcode = false;
  //   }

  //  }
  }
}
</script>
<style>
input::-webkit-input-placeholder{
            color:rgb(208, 202, 226);
}
#zhuanjia{
  margin-top: 20px;
}
</style>