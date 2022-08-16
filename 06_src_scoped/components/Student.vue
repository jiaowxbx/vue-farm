<template>
  <div class="demo1">
    
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
     
     
  </div>
</template>

<script>

export default {
    name:'Student',
    data(){
        return{
            name:'xbx',
            sex:'nan'
        }
    },
}
</script>

<style scoped>
    .demo1{
        background-color: aquamarine;
    }
</style>