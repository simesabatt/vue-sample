import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import ModalWindow from 'bootstrap-vue'
import Carousel from 'bootstrap-vue'
import Tab from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(ModalWindow)
Vue.use(Carousel)
Vue.use(Tab)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')