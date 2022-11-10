import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// 必须引入样式，否则不生效
import 'element-plus/dist/index.css'
import './styles/index.css'

// 图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 阿里图标库
import * as IconParkVue from '@icon-park/vue-next'
import '@icon-park/vue-next/styles/index.css'

//全局 js
import operate from '@/utils/operate'

// @ts-ignore
import videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

const app = createApp(App)

app.config.globalProperties.$operate = operate

app.use(router).use(ElementPlus).use(videoPlay)

// 注册全局字节图标
for (const [key, component] of Object.entries(IconParkVue)) {
  app.component(key, component)
}

// 注册全局图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
