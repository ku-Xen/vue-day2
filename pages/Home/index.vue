<!--<template>
  <div class="home">
<el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgs" :key="item">
      <h3 class="medium">
        <img :src="item" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
   export default {
     data(){ 
       return {
         imgs:[
          " https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=582990798,2135505074&fm=26&gp=0.jpg",
          " https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080777605,67048924&fm=26&gp=0.jpg",
          " https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=253750317,1186239841&fm=26&gp=0.jpg",
          " https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4093678845,2378196548&fm=26&gp=0.jpg"    
         ]
       }
     }
   }
</script>

<style scoped>
  /* 自己修改样式  scoped防止冲突*/
  /* 加了scoped后样式可能不生效  就放到全局 */

</style>-->

<template>
  <div class="home-page">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px"
        ><el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!--顶部  -->
        <el-header>
          <!-- /* 顶部左中右 */ -->
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content bg-purple">图标</div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">千峰管理系统</div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                 <el-avatar shape="square" :size="40"  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=253750317,1186239841&fm=26&gp=0.jpg"></el-avatar>
              <span>欢迎您:</span>
              <b class="nickname">{{userInfo.nickname}}</b>
                                    <!-- nickname 姓名  刷新一下会丢失 存到本地-->
              <span class="quit" @click="quit">退出</span>
              </div
            ></el-col> </el-row
        > </el-header>

        <!-- 主题 -->
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>管理首项</el-breadcrumb-item>
</el-breadcrumb>
     
 <el-table
    :data="tableData"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
  </el-table>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-main{
  background: #ffffff;
}
/* 图像和文字对齐 */

.el-avatar{
  vertical-align: middle;
}
/* 首页面包屑 */

.quit{
  cursor: pointer;
  color: aqua;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
 
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 上组件 左中右 */
.el-row {
  margin-bottom: 20px;
}
.el-row :last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color:hotpink;
}
</style>

<script>
import { getLoginLog } from "@/api";
// 映射 去渲染 得到的userInfo
import {mapState} from "vuex"


export default {
  computed: { 
    ...mapState(['userInfo'])  //把userInfo属性映射过来 把上方的欢迎谁改一下
  },
  data() {
    return {
      isCollapse: true,
     
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 退出
   quit(){
      //退出登入
      // 1.清除token和userInfo
      localStorage.removeItem('IYU-token')
      localStorage.removeItem('IYU-userInfo')
      // 2.跳转到登入页面
       this.$router.push("/login")
   }
  },

  mounted() {
    getLoginLog()
      // 测试下
      .then((res) => {
        console.log(res);
      });
  },

};
</script>