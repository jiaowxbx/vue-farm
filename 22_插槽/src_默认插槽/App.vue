<template>
    <div id="root">
        
        <Category title="美食" :listData="foods">
            <a href="xxxx">123</a>
        </Category>
        <Category title="游戏" :listData="games"/>
        <Category title="电影" :listData="films"/>
        
      </div>
    
</template>

<script>
import Category from './components/Category.vue'

export default {
    name:'App',
    components:{Category},
    data(){
        return{
            foods:['火锅','抓饭','烧烤'],
            games:['lol','dota','cs'],
            films:['你','我','他']
        }
    }
}

        
</script>

<style>
#root{
    display: flex;
    justify-content: space-around;
}


</style>