//该文件用于创建vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex) 
//准备actions-用于响应组件中的动作
const actions={
    jia(context,value){
        //console.log('actions中的jia被调用');
        context.commit('JIA',value)
    },
    jian(context,value){
        //console.log('actions中的jia被调用');
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if(context.state.sum %2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    }
}
//准备mutations-用于操作数据（state）
const mutations={
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    },
    

}
//准备state-用于储存数据
const state={
    sum:0,//当前的和
}
 
//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})