// 配置axios
// 引入
import axios from "axios";
import { config } from "vue";

import router from "../router" //引进router去设置 失效了跳转页面
import ElementUI from 'element-ui'; //引进来 去修改

// 配置跨域
// 定义baseURL            判断环境            = development 是api   不是的话为服务器原始请求地址
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api":"http://www.chst.vip"

axios.defaults.wiwthCredentials = true; //允许请求携带认证  关掉了cookies就会一直让登录

// 创建请求拦截器,可以给每个请求都携带上想要传递的内容
axios.interceptors.request.use(config => {
    // 登录和注册是不需要携带token  所以要判断一下
    if(config.url == "users/login"){
        return config  //放行
    }else{
        // 登录需要
        // 每次请求的时候把存的值取出来
        let token = localStorage.getItem('IYU-token') 
        //config值是每个请求对象 
        //在请求头携带 authorization   
        config.headers['authorization']  = token;
        //    console.log(config);

        //    放行
        return config
    }  
})

//响应拦截
axios.interceptors.response.use(config =>{ //这里服务器接收到但没有响应(放行)
//   console.log(config);
let {data} = config;    
if(data.code == '1004' || data.code == '10022'){ //10022表示session到期失效提示错误并让页面跳转
//如果code为1004(自己定义的)就代表token失效,提示错误并让让页面跳转
//    console.log(router);
// console.log(ElementUI);
//    alert ('登入信息失效,请从新登录')
ElementUI.Message.error("登录信息失效,请重新登入") //添加弹窗
    router.push("/login")   //失效跳转页面  router上面引进来的
}
  return config //放行
})


axios.create({
    timeout:4000  //请求4秒钟
})

// 把export导处去
export default axios