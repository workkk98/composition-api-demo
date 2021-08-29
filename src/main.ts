import Vue from 'vue'
import App from './App.vue'
import plugin from '@vue/composition-api';
Vue.config.productionTip = false

Vue.use(plugin);
// localStorage.setItem('user', (['admin', 'tenant'])[Math.round(Math.random())]);
localStorage.setItem('user', 'admin');

new Vue({
  render: h => h(App),
}).$mount('#app')
