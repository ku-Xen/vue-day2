import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/base.css"
import "@/assets/style/el-reset.css"

// 全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 按需引入 (组件名)
// import { Carousel,CarouselItem } from "element-ui"
// 注册组件
// Vue.component('el-carousel',Carousel)
// Vue.component('el-carousel-item',CarouselItem)

Vue.config.productionTip = false;


//路由前置钩子 (导航守卫) 组织利用路由不注册直接进
//from是从哪来  to 去哪里  next是放行
router.beforeEach((to,from,next)=>{
      //  console.log(to);
      //  console.log(from);
      //用户登入之后localstorare 中是否有token  有就可以自由进入
      let token = localStorage.getItem('IYU-token')
      if(token){
        // 如果是注册或登录页面直接放行
         next()
      } else{  //没token
        // 通过to判断是否在path
         if(to.path === "/login"){
          next()
         } else { //当访问的不是登录页 就要跳转到登入页
          next({path:"/login"})
         }
      }
})






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
