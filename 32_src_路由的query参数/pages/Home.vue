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
      <router-view></router-view>
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