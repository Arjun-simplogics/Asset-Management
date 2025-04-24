import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,vue}"',
			},
			overlay: {
				initialIsOpen: true,
			},
		}),
  ],
  
})
