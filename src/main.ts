import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./common.scss";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(createPinia());
