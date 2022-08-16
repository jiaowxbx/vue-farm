<template>
  <div class="todo-footer" v-show="todos.length">
                    <label>
                        <input type="checkbox" :checked="isAll" @click="checkAll">
                    </label>
                    <span>
                        <span>已完成{{doneTotal}}</span>全部/{{todos.length}}
                    </span>
                    <button class="btn btn-danger" @click="clearAll">清除已完成的任务</button>
                </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
        doneTotal(){
            let total=0;
            this.todos.forEach(todo => {
                if(todo.done===true){
                    total++;
                }
            });
            return total;
        },
        isAll(){
            return this.todos.length===this.doneTotal&&this.todos.length>0;
        },
    },
    methods:{
        checkAll(e){
            this.checkAllTodo(e.target.checked)
            
        },
        clearAll(){
            this.clearAllTodo();
        }
    }
}
</script>

<style>
 
.todo-footer{
    height:40px;
    line-height: 40px;
    padding-top:6px ;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float: right;
    margin-top: 5px;
}
</style>