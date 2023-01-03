/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/28
 * Description: 文件描述
 */
import { defineConfig, DefaultTheme } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins';
import sidebar from './sidebar'
const nav: DefaultTheme.NavItem[] = [
    { text: '文档', link: '/components/install' },
]

export default defineConfig({
    lang: 'zh-CN',
    lastUpdated: true,
    base: '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'ql-ui',
            description: '',
        },
        '/en/': {
            lang: 'en-US',
            title: 'ql-ui',
            description: '',
        },
    },
    themeConfig: {
        logo: '/logo.svg',
        localeLinks: {
            text: '',
            items: [
                { text: '简体中文', link: '/' },
                { text: 'English', link: '/en/' },
            ],
        },
        nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com//ruabick-project' },
        ],
    },

    vue: {},
    markdown: {
        config: (md) => {
            applyPlugins(md);
        },
        theme: {
            light: 'one-dark-pro',
            dark: 'material-darker',
        },
    },
    vite: {
        server: {
            port: 3100
        }
    },
})
