<template>
    <div>
        <div>
            <h2>Vue Router Demo</h2>
        </div>
        <div>
            <!--vue中借助router-link实现路由切换-->
            <router-link   active-class="active" to="/about">About</router-link>
            <br>
            <router-link  active-class="active" to="/home">Home</router-link>
        </div>
        <div>
            <!--指定组件的呈现位置-->
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>

export default {
    name:'App',
    
}

        
</script>

<style>

.active{
    background-color: aqua;
}

</style>