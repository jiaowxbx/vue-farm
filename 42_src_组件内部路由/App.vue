<template>
    <div>
<Banner/>

        <div>
            <!--vue中借助router-link实现路由切换-->
            <router-link   active-class="active" to="/about">About</router-link>
            <br>
            <router-link  active-class="active" to="/home">Home</router-link>
            <button class="btn btn-success">123</button>
        </div>
        
        <div>
            <!--指定组件的呈现位置-->
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
    name:'App',
    components:{Banner}
}

        
</script>

<style>

.active{
    background-color: aqua;
}

</style>