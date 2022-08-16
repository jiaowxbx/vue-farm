<template>
  <div>
    
    <Student name="zs" sex="nv" :age="19"/>
  </div>
</template>

<script>
 //引入School组件
 import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student}
}
</script>

<style>

</style>