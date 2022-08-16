<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!--定义一个插槽-->
      <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
      
      <ul>
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
          
      </ul>

      <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData','title']
}
</script>

<style>
    .category{
        background-color: aqua;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: burlywood;
    }
</style>