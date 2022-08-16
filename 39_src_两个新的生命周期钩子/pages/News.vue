<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
      <li>1  <input type="text"></li>
      <li>2  <input type="text"></li>
      <li>3  <input type="text"></li>
  </ul>
</template>

<script>
export default {
    name:'News',
    data() {
      return {
        
        opacity:1
      }
    },
   /*  beforeDestroy(){
      console.log('News组件即将被销毁');
      clearInterval(this.timer)
    },
    mounted() {
       console.log('mounted',this);
       this.timer=setInterval(() => {
         this.opacity-=0.01
         if (this.opacity<=0) {
           this.opacity=1
         }
       }, 16);
    }, */
    activated() {
      console.log('***');
      this.timer=setInterval(() => {
         this.opacity-=0.01
         console.log('***');
         if (this.opacity<=0) {
           this.opacity=1
         }
       }, 16);
    },
    deactivated() {
      clearInterval(this.timer)
    },
}
</script>

<style>

</style>