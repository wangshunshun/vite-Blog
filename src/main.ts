import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss' // global css


const app = createApp(App)

import svgIcon from './icons/SvgIcon.vue'

import ElSvgIcon from "./lib/el-svg-icon"
app.use(ElSvgIcon)

//router
app.use(router)

//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.component('SvgIcon', svgIcon)

app.use(ElementPlus)

app.mount('#app')
