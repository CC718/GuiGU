import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig((command: any) => {
   return {
      plugins: [
         vue(),
         createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
         }),
         viteMockServe({
            localEnabled: command === 'serve',
         }),
      ],
      resolve: {
         // 设置路径别名
         alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
         }
      },
      //scss全局变量的配置
      css: {
         preprocessorOptions: {
            scss: {
               javascriptEnabled: true,
               additionalData: '@import "./src/styles/variable.scss";',
            },
         },
      },
   }
})

