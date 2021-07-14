import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state ={
    count:0
}
const mutations ={
    add(state){
        state.count++
    },
    sub(state){
        state.count--
    }
}
const actions ={
    addIsOdd({commit,state}){
        if(state.count%2===1){
           commit("add");
        }
    },
    addAsync({commit}){
        setTimeout(()=>{
            commit("add");
        },1000)
    }
}
const getters ={
    eventOrOdd(state){
        return state.count %2 === 0 ? "偶数" : "奇数"
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})