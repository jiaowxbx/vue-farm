<template>
  <div id="school">
    
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
     
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return{
            name:'xbx123',
            address:'cd'
        }
    },
   mounted(){
      this.pubId=pubsub.subscribe('hello',function(msg,data){
          console.log('有人发布了hello消息，hello消息回调了',msg,data);
      })
   },
   beforeDestroy(){
       //this.x.$off('hello')
       pubsub.unsubscribe(this.pubId)
   }
   
}
</script>

<style scoped>
   #school{
       background-color: pink;
   }
</style>