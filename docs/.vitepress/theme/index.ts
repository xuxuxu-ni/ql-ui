/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/28
 * Description: 文件描述
 */
import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';
import qlUi from "@ql-ui/cor";
import "@ql-ui/cor/theme-chalk/style/index.css";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.use(qlUi)
        app.component('demo', DemoBlock);
    },
};
