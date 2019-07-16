<template>
  <div id="app-footer">
    <ul>
      <li v-for="(item,index) of arr" @click="fn(item.path)" :key="index">{{index}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        arr:[
          {
            path:'/appHome'
          },
          {
            path:'/mall'
          },
        ]
      }
    },
    methods:{
      fn(path){
        this.$router.push({path:path})
      }
    }
  }
</script>
<style>
  #app-footer{
    width: 375px;
    height: 50px;
    background-color: #0c82ff;
  }
</style>
