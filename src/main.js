import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Carousel,CarouselItem } from 'element-ui'
// 此时的样式不需要引入了，样式自动按需来引入
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
