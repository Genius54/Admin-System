<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <span>DS后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath">
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children"
                          :key="subItem.id"
                          @click="saveNavState('/' + subItem.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!--路由占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
      data(){
        return {
          menuList:[],
          iconsObj: {
            '125': 'el-icon-user',
            '103': 'el-icon-bank-card',
            '101': 'el-icon-box',
            '102': 'el-icon-document',
            '145': 'el-icon-document-checked'
          },
          isCollapse:false,
          activePath:'',
        }
      },
      created() {
          this.getMenuList();
          this.activePath = window.sessionStorage.getItem('activePath')
      },
      methods: {
        logout() {
          window.sessionStorage.clear()
          this.$router.push('/login')
        },
        //获取所有的菜单列表
        async getMenuList() {
          const {data:res} = await this.$http.get('menus')
          //const data = await this.$http.get('menus')
          if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
          this.menuList = res.data
          console.log(res)
        },
        //点击按钮，切换菜单的折叠与展开
        toggleCollapse(){
          this.isCollapse = !this.isCollapse
        },
        saveNavState(activePath){
          window.sessionStorage.setItem('activePath',activePath)
          this.activePath = activePath
        }
      },

    }
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
    .el-menu {
      border-right: none;
    }
  }

  .el-main {
    background-color: #eaedf1;
  }

  .iconfont {
    margin-right: 10px;
  }

  .toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
</style>

