<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{myAge}}</h2>
      <button @click="changge">点我尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
            msg:'我是一个人',
            myAge:this.age
        }
    },
    methods:{
        changge(){
            this.myAge++;
        }
    },
    props:['name','sex','age']//简单接收
   //接收的同时对数据进行类型限制
//    props:{
//         name:String,
//         age:Number,
//         sex:String
//     }
    //接受的同时对数据进行类型限制+默认值的指定+必要性的限制
    // props:{
    //     name:{
    //         type:String,//name的类型是字符串
    //         required:true//name是必要的
    //     },
    //     age:{
    //         type:Number,
    //         default:99//默认值
    //     },
    //     sex:{
    //         type:String,
    //         require:true
    //     }
    // }
}
</script>

<style>
    .school{
        background-color: aqua;
    }
</style>