<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!--定义一个插槽-->
      <slot></slot>
      <ul>
          <li v-for="(item,index) in listData" :key="index">{{item}}</li>
          
      </ul>
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