<template>
  <div style="padding: 20px">
    <div class="index-bar">
      <a-icon class="icon" type="left"></a-icon>
      <span>验证码登录</span>
    </div>

    <p class="title">手机密码登录</p>

    <div class="form">
<!--      <input >-->
      <bank-account-input placeholder="输入手机号" class="m_input" type="text" v-model="m_phoneNum"></bank-account-input>
      <input placeholder="输入密码" class="m_input" type="text" v-model="m_password">
      <input class="m_btn" type="button" value="登录" @click="onLoginClick">
    </div>
  </div>
</template>
<script>
  import LoginService from './../service/login'
  import bankAccountInput from './../components/bankAccountInput'
  export default {
    data(){
      return{
        m_phoneNum:'',
        m_password:'',
      }
    },
    components:{
      'bank-account-input': bankAccountInput
    },
    mounted() {
    },
    methods:{
      onLoginClick(){
        LoginService.login().then(res=>{
          this.$router.push({path:'/mine'})
          console.log(res)
        })
      }
    }
  }
</script>
<style>
  .index-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .index-bar .icon{
    font-size: 20px;
  }
  .title{
    font-size: 25px;text-align: center;margin-top: 40px
  }
  .form{
    padding: 20px;display: flex;flex-direction: column
  }
  .m_input{
    border: none;
    border-bottom: 1px solid #ebedf0;
    caret-color: red;
    font-size: 18px;
    line-height: 40px;
    /*display: block;*/
  }
  .m_btn{
    border: none;
    height: 40px;
    border-radius: 20px;
    font-size: 18px;
    line-height: 40px;
    margin-top: 40px;
  }

</style>
