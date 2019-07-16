<template>
  <div id="app">
    <router-view/>
    <appFooter></appFooter>
  </div>
</template>
<script>
  import appFooter from './layouts/appFooter'
  export default {
    components:{
      appFooter
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
