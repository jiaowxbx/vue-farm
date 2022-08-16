<template>
    <div id="root">
        <Search/>
        <List/>
        
      </div>
    
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'
export default {
    name:'App',
    components:{Search,List}
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
.btn-edit{
     color: #fff;
    background-color:#49da75;
    
    margin-right: 5px;
}


</style>