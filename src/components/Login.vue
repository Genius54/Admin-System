<template>
  <div class="login_container">
    <div class="login_header">
    </div>
    <div class="safe_annunciation"></div>
    <div class="login_center"></div>
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-form class="login_form" ref="loginFormRef" :model="loginForm" :rules="rules" label-width="0px">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="btu">
          <el-button type="danger" @click="login">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="login_footer"></div>
  </div>
</template>

<script>
    export default {
      name: "Login",
      data(){
          return{
            loginForm: {
              username:'admin',
              password:'123456',
            },
            rules:{
              username:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              password:[
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ]
            },
          }
      },
      methods:{
          login(){
            this.$refs.loginFormRef.validate(async valid=>{
            /*console.log(valid)*/
              if(!valid) return
              else {
                const {data:result} =await this.$http.post("login",this.loginForm);
                if(result.meta.status !==200){
                  return this.$message.error("用户名或密码错误！");
                }else{
                  window.sessionStorage.setItem("token",result.data.token);
                  this.$message.success("登录成功！");
                  this.$router.push('/home');
                }
              }
            })
          }
      }
    }
</script>

<style scoped>
  .login_container{
    background-color: #E93854;
    height: 100%;
  }
  .login_header{
    width: 1262.5px;
    height: 80px;
    background-color: white;
    /*border: 1px solid red;*/
  }
  .safe_annunciation{
    width: 1262.5px;
    height: 38px;
    background-color: #FFF8F0;
    /*border:1px solid green;*/
  }
  .login_center{
    width: 990px;
    height: 475px;
    margin-left: 135px;
    background-color: #83CBFE;
  }
  .login_box{
    width: 348px;
    height: 440px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-left: 311.5px;
    margin-top: 40px;
  /*.avatar_box{
    height: 80px;
    width: 80px;
    img{
      width: 100%;
      height: 100%;
    }
  }*/
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btu{
    display: flex;
    justify-content: flex-end;
  }
  .login_footer{
    width: 1262.5px;
    height: 118px;
    background-color: white;
  }


</style>
