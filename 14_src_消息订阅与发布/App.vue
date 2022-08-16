<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School.vue'
 //引入School组件
 import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student, School},
    data(){
      return {
        msg:'你好'
      }
    },
   
}
</script>

<style>

  .app{
    background-color: grey;
  }
</style>