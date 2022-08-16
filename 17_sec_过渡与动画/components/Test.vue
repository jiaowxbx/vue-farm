<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition name="hello">
          <h1 v-show="isShow">你好啊</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return {
            isShow:true
        }
    },

}
</script>

<style>
    h1{
        background-color: aqua;
    }
    .hello-enter-active{
        animation: xbx 1s linear;
    }
    .hello-leave-active{
        animation: xbx 1s reverse;
    }
    @keyframes xbx {
        from{
            transform:translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>