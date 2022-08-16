<template>
  
  <div>
    <h2>我是Home内容</h2>
    <div>
      <ul>
        <li>
          <router-link active-class="active" to="/home/message" >Message</router-link>
          
        <li>
          <router-link active-class="active" to="/home/news" >News</router-link>
        </li>
        
      </ul>
      <!--缓存一个-->
      <keep-alive include="News">
        <!--缓存多个-->
      <!-- <keep-alive :include="['News','Message']"> -->
        <router-view></router-view>
      </keep-alive>
      
    </div>  
  </div>
</template>

<script>
export default {
    name:'Home',
    
}
</script>

<style>

</style>