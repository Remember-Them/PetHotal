import App from './App'
import Vue from 'vue';
import router from './router'
import ElementUI from 'element-ui';
import less from 'less';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store/index'
// import {
  // sort
// } from 'semver';
Vue.use(less)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
