import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// 自定义element的样式  https://element.faas.ele.me/#/zh-CN/component/custom-theme
import '@/theme/element/element-variables.scss'
// 重置css基本样式
import 'reset-css';
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
