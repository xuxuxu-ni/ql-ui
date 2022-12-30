/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/28
 * Description: 文件描述
 */
import { defineConfig, DefaultTheme } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins';

const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/basic-component1' },
]
const sidebar: DefaultTheme.Sidebar = {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '组件库介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/quickstart' },
            ]
        }
    ],
    '/components': [
        {
            text: '通用基础组件',
            items: [
                { text: '基础组件 1', link: '/components/basic-component1' },
                { text: '基础组件 2', link: '/components/basic-component2' }
            ]
        },
        {
            text: '通用业务组件',
            items: [
                { text: '通用组件 1', link: '/components/common-component1' },
                { text: '通用组件 2', link: '/components/common-component2' }
            ]
        },
        {
            text: '高级业务组件',
            items: [
                { text: '高级组件 1', link: '/components/pro-component1' },
                { text: '高级组件 2', link: '/components/pro-component2' }
            ]
        }
    ]
}


export default defineConfig({
    title: '浏览器标题',
    description: '浏览器描述',
    lang: 'cn-ZH',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        siteTitle: '组件库标题',
        outline: 3,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        nav,
        sidebar
    },
    markdown: {
        config: (md) => {
            applyPlugins(md);
        },
        theme: {
            light: 'one-dark-pro',
            dark: 'material-darker',
        },
    }
})
