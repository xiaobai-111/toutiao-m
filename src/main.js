import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局加载样式
import './styles/index.less'

// 通过createapp方法来吧store和router来加载到vue跟实例上
// 并且挂载到#app所控制的区域

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
