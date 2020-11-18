import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// let userInfo = JSON.parse(localStorage.getItem('IYU-userInfo'))
// 短路运算
// 如果没有IYU-userInfo的这里为undfind 会执行下一步

//刷新页面会丢失用户信息 ,所以要从localstorage中取
let userInfo = localStorage.getItem('IYU-userInfo') || "{}"
userInfo = JSON.parse(userInfo)

export default new Vuex.Store({
  state: {  
    //  userInfo:{} //不能变成空对象 直接从本地拿  防止刷新消失  
    //  直接写成
    userInfo
  },
  mutations: {
    //更改userInfo
    SET_USERINFO(state,payload){
      state.userInfo = payload;
    }
  },
  actions: {},
  modules: {}
});
