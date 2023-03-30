import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { fileURLToPath } from 'url'
const baseSrc = fileURLToPath(new URL('./src', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': baseSrc,
      '~@': baseSrc
    }
  },
  plugins: [
    vue({
      // 响应式语法糖
      reactivityTransform: true
    }),
    AutoImport({
      // 配置自动导入的库
      imports: [
        'vue',
        'vue/macros', // 响应式语法糖库
        'vue-router', // 路由
        'vue-i18n', // 多语言
        'pinia', // 状态管理库
        '@vueuse/core', // 工具库
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
      // 生成到的地址
      dts: 'types/auto-imports.d.ts',
      // 配置本地需要自动导入的库
      dirs: [
        // pinia状态管理目录
        'src/stores',
        // 自定义组合式api目录
        'src/composables'
      ]
    }),
    // 组件自动导入
    Components({
      // 导入naiveui的配置项目
      resolvers: [NaiveUiResolver()],
      // 生成类型的地址
      dts: 'types/components.d.ts',
      dirs: ['src/components']
    }),
    Unocss()
  ]
})
