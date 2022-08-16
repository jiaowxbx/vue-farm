<template>
  <div id="school">
    
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
     
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
   mounted(){
       console.log(this);
       this.x.$on('hello',(data)=>{
           console.log('我是School组件，收到了数据',data);
       })
   },
   beforeDestroy(){
       this.x.$off('hello')
   }
   
}
</script>

<style scoped>
   #school{
       background-color: pink;
   }
</style>