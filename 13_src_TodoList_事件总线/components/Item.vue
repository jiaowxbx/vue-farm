<template>
  <li>
    <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <!--以下方法也可以实现，但是不建议使用-->
        <!--<input type="checkbox" v-model="todo.done"/>-->
        <span>{{todo.title}}</span>
    </label>
    <button  class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
</li>
</template>

<script>
export default {
    name:'Item',
    //申明接收todo对象
    props:['todo'],
    methods:{
        //勾选
        handleCheck(id){
            //通知app组件将对应的done值取反
            //this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
            },
        //删除
        handleDelete(id){
            if(confirm('确定删除吗？')){
               // this.deleteTodo(id);
               this.$bus.$emit('deleteTodo',id)
            }

        }
    }
}
</script>

<style>
li{
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding:0 5px;
    border-bottom: 1px solid #ddd;
}
li label{
     float: left;
     cursor: pointer;
 }
  li label li input{
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
 }
 li button{
     float: right;
     display: none;
     margin-top: 3px;
 }
 li:before{
     content: initial;
 }

 li:hover{
     background-color: aquamarine;
 }
 li:hover button{
     display: block;
  }
</style>