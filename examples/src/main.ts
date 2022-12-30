import { createApp } from 'vue'
import qlUi from "@ql-ui/components";
import "@ql-ui/core/theme-chalk/src/index.scss";
import App from './App.vue'

createApp(App).use(qlUi).mount('#app')
