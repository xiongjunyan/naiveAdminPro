import { createApp } from 'vue' //创建vue实例
import App from './App.vue' //主入口
import '@unocss/reset/tailwind.css' //css样式
import 'uno.css' //css引擎
import router from '~/routes' //路由
import { createPinia } from 'pinia' //pinia状态管理
const pinia = createPinia()
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
app.use(router) //挂载路由
app.use(pinia)
app.mount('#app') //绑定
