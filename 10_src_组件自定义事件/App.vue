<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!--通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用v-on)-->
    <!--<Student v-on:atxbx="demo"/>-->
    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref)-->
    <Student ref="student"/>
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
    methods:{
      getSchoolName(name){
        console.log('@@',name);
      },
      demo(name){
        console.log('@@demo被调用了',name);
      }
    },
    mounted(){
        this.$refs.student.$on('atxbx',this.demo);
    }
}
</script>

<style>

  .app{
    background-color: grey;
  }
</style>