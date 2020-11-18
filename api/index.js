import axios from "./config"

// 封装
//         登录       名        密码           
export const login = (username, password) => axios({
    url: "/users/login", //axios里返回地址
    method: 'post',
    data: {
        username,
        password
    }
}) 

// 获取登入日志
export const getLoginLog = () =>axios.get("/getloginlog")