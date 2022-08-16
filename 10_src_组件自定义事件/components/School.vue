<template>
  <div id="school">
    
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="getName">把学校名给App</button>
     
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            name:'xbx123',
            address:'cd'
        }
    },
    methods:{
        getName(){
            this.getSchoolName(this.name);
        }
    },
    props:['getSchoolName']
   
}
</script>

<style scoped>
   #school{
       background-color: pink;
   }
</style>