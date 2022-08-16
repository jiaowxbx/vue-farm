<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
 //引入School组件
 import School from './components/School.vue'
export default {
    name:'App',
    data(){
      return {
        msg:'你好'
      }
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title);//真实DOM元素
        console.log(this.$refs.btn);//真实DOM元素
        console.log(this.$refs.sch);//Scool组件的实例对象（vc）
      }
    },
    components:{School}
}
</script>

<style>

</style>