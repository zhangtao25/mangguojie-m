<template>
  <div id="footer-tabbar">
    <ul>
      <li @click="go('home')">首页</li>
      <li @click="go('mall')">商城</li>
      <li></li>
      <li @click="go('msg')">消息</li>
      <li @click="go('mine')">我的</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    methods:{
      go(path){
        this.$router.push({path:'/'+path})
      }
    }
  }
</script>
<style scoped>
  #footer-tabbar{
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-shadow: 0 -1px 2px 0 rgba(0,0,0,.1)
  }
  #footer-tabbar>ul{
    display: flex;
    justify-content: space-around;
  }
  #footer-tabbar>ul>li:nth-child(3){
    width: 50px;
    height: 50px;
    background-color: #0c82ff;
  }
</style>
