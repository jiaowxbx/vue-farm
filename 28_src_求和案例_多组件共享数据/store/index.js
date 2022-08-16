//该文件用于创建vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex) 
//准备actions-用于响应组件中的动作
const actions={
    // jia(context,value){
    //     //console.log('actions中的jia被调用');
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     //console.log('actions中的jia被调用');
    //     context.commit('JIAN',value)
    // },
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
        console.log(state);
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    },
    ADD_PERSON(state,value){
        console.log('mutation中的ADD_PERSON被调用了');
        state.personList.unshift(value)
    }

}
//准备state-用于储存数据
const state={
    sum:0,
    school:'xbx',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}
//准备getters用于将state中的数据加工
const getters={
    bigSum(state){
          return state.sum*10
    }
}
//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})