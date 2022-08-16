<template>
  <transition name="todo" appear>
      <li>
    <label>
        <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
        <!--以下方法也可以实现，但是不建议使用-->
        <!--<input type="checkbox" v-model="todo.done"/>-->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
    </label>
    <button  class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button  class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
</li>
  </transition>
</template>

<script>
import pubsub from 'pubsub-js'
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
               //this.$bus.$emit('deleteTodo',id)
               pubsub.publish('deleteTodo',id)
            }

        },
        //编辑
        handleEdit(todo){
            if(todo.hasOwnProperty(todo.isEdit)){
                todo.isEdit=true
            }else{
                this.$set(todo,'isEdit',true);
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
            
        },
        handleBlur(todo,e){
            todo.isEdit=false
            if(!e.target.value.trim()){
                return alert('输入不能为空')
            }
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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
   .todo-enter-active{
        animation: xbx 1s linear;
    }
    .todo-leave-active{
        animation: xbx 1s reverse;
    }
    @keyframes xbx {
        from{
            transform:translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>