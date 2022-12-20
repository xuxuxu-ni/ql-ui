/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/2
 * Description: 文件描述
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'modules',
        minify: false,
        outDir: 'core',
        rollupOptions: {
            external: ['vue'],
            input: ['./components/index.ts'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir: 'core/es',
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    dir: 'core/lib',
                }
            ]
        },
        lib: {
            entry: './components/index.ts',
            formats: ['es', 'cjs']
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
        })
    ]
})
