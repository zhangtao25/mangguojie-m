<template>
  <div>
    我是登陆
    <a-icon type="alibaba"></a-icon>
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
    }
  }
</script>
