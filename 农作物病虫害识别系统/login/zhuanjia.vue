<template>
<div>
  
  <el-input type="text" placeholder="专家姓名或专家等级" v-model="input" style="width:200px" @keyup.enter="getCname"></el-input>
  
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
    baseURL:'http://119.3.182.104:8080/crop/expert/getExpert',

})
export default {
  name:'Main',
  data(){
    return {
        size:'',
        input:'',
        experts:[
            
        ],

    }
  },
  mounted(){
    ax({
      method:'GET',
      url:'http://119.3.182.104:8080/crop/expert/getExpert'
    }).then(res=>{
      
      console.log('***');
      console.log(res);
     this._data.experts=res.data.data.experts
      console.log(this);
     
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
  }
}
</script>
<style>
input::-webkit-input-placeholder{
            color:rgb(208, 202, 226);
}
</style>