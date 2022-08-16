<template>
  <div class="category">
      <h1>当前求和为：{{sum}}</h1>
      <h3>当前求和放大10倍为：{{bigSum}}</h3>
      <h3>我是{{school}}，学习{{subject}}</h3>
    <select v-model.number="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name:'Count',
    data(){
        return {
            n:1,//用户选择的数字
            
        }
    },
    computed:{
        //靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        
        //借助mapState生成计算属性，从state中读取数据（对象写法）
        //...mapState({sum:'sum',school:'school',subject:'subject'}),

        //借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','subject','school']),


        /* *********************************************************************************** */
        // bigSum(){
        //     return this.$store.getters.bigSum
        // }
        ...mapGetters({bigSum:'bigSum'}),
        ...mapGetters(['bigSum']),

    },
    methods:{
        increment(){
            this.$store.dispatch('jia',this.n)
        },
        decrement(){
            this.$store.dispatch('jian',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)
        },
    },
    mounted(){
        const x=mapState({sum:'sum',school:'school',subject:'subject'})
        console.log(x);
    }
    
}
</script>

<style>
    button{
        margin: 5px;
    }
</style>