<template>
  <div id="app">
    <router-view/>
<!--    <appFooter></appFooter>-->
    <footer-tabbar></footer-tabbar>
  </div>
</template>
<script>
  // import appFooter from './layouts/appFooter'
  import footerTabbar from './layouts/footerTabbar'
  export default {
    components:{
      // appFooter,
      'footer-tabbar':footerTabbar
    }
  }
</script>
<style>
  .test{
    width: 375px;
    height: 20px;
    background-color: wheat;
  }
</style>
