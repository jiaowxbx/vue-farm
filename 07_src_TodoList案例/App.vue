<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader1 :receive="receive"/>
                <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
            </div>
        </div>
      </div>
    
</template>

<script>
import MyHeader1 from './components/MyHeader1.vue'
import List from './components/List.vue'
import MyFooter from './components/MyFooter.vue'
export default {
    name:'App',
    components:{List,MyHeader1,MyFooter},
    data(){
        return{
            todos:[
                {id:'0001',title:'吃饭',done:true},
                {id:'0002',title:'睡觉',done:true},
                {id:'0003',title:'学习',done:false},
                
            ]
        }
    },
    methods:{
        //添加一个todo
        receive(x){
            this.todos.unshift(x)
        },
        //勾选or取消勾选一个todo
        checkTodo(id){
            this.todos.forEach((todo)=>{
                if(todo.id===id){
                    todo.done=!todo.done
                }
            })
        },
        //删除一个todo
        deleteTodo(id){
            this.todos=this.todos.filter((todo)=>{
                return todo.id!==id;
            })
        },
        //全选or取消全选
        checkAllTodo(done){
            this.todos.forEach((todo)=>{
                todo.done=done;
            })
        },
        clearAllTodo(){
            this.todos=this.todos.filter((todo)=>{
                return !todo.done;
            })
        }
    }
}

</script>

<style>
body{
    background: #fff;
}

.btn{
    
    padding:4px 12px;
    margin-bottom:0;
    font-size: 14px;
    line-height: 20px;
    text-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 raba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    border-radius: 4px;
}
.btn-danger{
    color: #fff;
    background-color: #da4f49;
    border:1px solid #bd362f
}
.btn-danger:hover{
    color: #fff;
    background-color:#da4f49;
   
}
.btn:focus{
    outline: none;
}
.todo-container{
    width:600px;
    margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>