import Vue from 'vue';
import App from './App.vue';
import './plugins/element';

// 样式->整体写入插件中
// import '@/assets/theme-chalk/index.scss';
// import '@/assets/theme-chalk/display.scss';

// import Element from '@element';
// Vue.use(Element);
// 这里只用默认导出->整体写入插件中

// 这里按需导出
// import {Row,Col}from '@element';
// console.log(Row,Col);
// Vue.use(Row);
// Vue.use(Col);


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
