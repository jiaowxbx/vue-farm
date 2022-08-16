<template>
  <div class="student">
    
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
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
    methods:{
        sendStudentName(){
            this.x.$emit('hello',this.name)
        }
    }
}
</script>

<style scoped>
    .student{
        background-color: aquamarine;
    }
</style>