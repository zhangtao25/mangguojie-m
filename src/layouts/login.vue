<template>
  <div>
    <div>
      <a-icon type="left"></a-icon>
      <span>验证码登录</span>
    </div>

    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        error
      />
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
    </van-cell-group>
  </div>
</template>
<script>
  import LoginService from './../service/login'
  export default {
    mounted() {
      LoginService.login().then(res=>{
        console.log(res)
      })
      console.log(window.navigator)
    },
    methods:{
      onLoginClick(){

      }
    }
  }
</script>
<style>
  .m_input{
    border: none;
    border-bottom: 1px solid black;
    caret-color: red;
    font-weight: bolder;
    font-size: 18px;
  }
  .btn{
    border: none;
  }
</style>
