// 导入样式
import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-chalk/index.css'
// 导入Vue组件
import Vue from 'vue'
// 导入路由
import router from './router/index.js'
// 导入vuex状态管理
import store from './store'
// 导入element-ui框架
import ElementUI from 'element-ui'
// 导入主视图文件
import App from './App.vue'

// 使用element-ui
Vue.use(ElementUI)

// 发布后是否显示提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
