<template>
  <div>
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
    components:{Student, School}
}
</script>

<style>

</style>