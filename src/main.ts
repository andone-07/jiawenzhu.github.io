import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import "./assets/fonts/fonts.css";
import "./assets/styles/theme.css";

const app = createApp(App);
app.use(ArcoVue);
app.mount("#app");
