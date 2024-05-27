import { createApp } from 'vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
//svg需要配置代码
import 'virtual:svg-icons-register'

//引入全局样式
import '@/styles/index.scss'

const app = createApp(App)

//注册svg组件为全局组件
import SvgIcon from '@/components/SvgIcon/index.vue';
app.component('SvgIcon', SvgIcon)

app.use(ElementPlus, {
   locale: zhCn,
})
app.mount('#app')
