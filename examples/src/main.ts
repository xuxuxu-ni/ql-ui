import { createApp } from 'vue'
import qlUi from "@ql-ui/cor";
import "@ql-ui/cor/theme-chalk/style/index.css";
import App from './App.vue'

const app = createApp(App)
app.use(qlUi).mount('#app')
