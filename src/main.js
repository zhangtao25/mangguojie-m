import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/dist/antd.css";

Vue.component(Icon.name, Icon);

require('./mock'); //引入mock数据，关闭则注释该行

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
