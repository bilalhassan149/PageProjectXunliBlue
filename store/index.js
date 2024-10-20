import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";

//准备actions --用于响应组件中的动作
const actions = {
    jia(minStore,value){
        console.log('actions中的加被调用了2')
        context.commit('JIA',value) //报错
    }
}
//准备mutations --用于操作数据(state)
const mutations = {
    JIA(state,value){
        console.log('mutations调用了给state.sum 进行赋值')
        state.sum += value;
    }
}

//准备getters --用于将state中的数据加工
const getters = {

}
//输出暴露store
export default new Vuex.Store({
  actions,
  mutations, 
  state
}); 