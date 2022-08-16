<template>
  <div class="student">
    
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="getName">把学生名给App</button>
     
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
        getName(){
            //触发student组件实例身上的atxbx事件
            this.$emit('atxbx',this.name)
        }
    }
}
</script>

<style scoped>
    .student{
        background-color: aquamarine;
    }
</style>