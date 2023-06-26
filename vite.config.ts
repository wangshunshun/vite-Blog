import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'

const pathSrc = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/icons/common')],
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
        logger: true,
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            'pinia/dist/pinia': ['storeToRefs']
          }
        ],
        //配置后会自动扫描目录下的文件
        dirs: ['src/hooks/**', 'src/utils/**', 'src/store/**', 'src/directives/**'],
        dts: './typings/auto-imports.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@/': `${pathSrc}/`,
      }
    },
    base: './', // 将根路径换成相对路径
  }
})
