<template>
   <ul class="todo-main">
       <transition-group appear name="todo">
           <Item 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo" 
            
        />   
       </transition-group>
                     
    </ul>
</template>

<script>
import Item from './Item.vue'
export default {
    name:'List',
    components:{Item},
    props:['todos']
}
</script>

<style scoped>
.todo-main{
    margin-left:0px ;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}
.todo-empty{
    height: 40px;
    line-height: 40px;
    border:1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
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