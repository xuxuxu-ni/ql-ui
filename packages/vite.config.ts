/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/2
 * Description: 文件描述
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// @ts-expect-error
import DefineOptions from 'unplugin-vue-macros'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'modules',
        minify: false,
        outDir: 'core',
        rollupOptions: {
            external: ['vue'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir: 'core/es'
                },
                {
                    format: 'umd',
                    entryFileNames: '[name].js',
                    name: 'QlUi',
                    dir: 'core/lib',
                    globals: {
                        vue: 'Vue'
                    }
                }
            ]
        },
        lib: {
            entry: './components/index.ts',
        }
    },
    plugins: [
        vue(),
        dts({
            outputDir:'core/es',
            tsConfigFilePath: '../tsconfig.json'
        }),
        dts({
            outputDir:'core/lib',
            tsConfigFilePath: '../tsconfig.json'
        }),
        DefineOptions()
    ]
})
