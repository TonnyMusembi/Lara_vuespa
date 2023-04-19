// require('./bootstrap');
// import "../css/app.css";

// import { createApp } from "vue";
// // import { createPinia } from "pinia";
// // import router from "./router";
// import Welcome from "./components/Welcome";
// // import App from "./Welcome.vue";
// import { store } from "./store";
// import router from "./router";


// const app = createApp({});
// // const pinia = createPinia();

// app.component("welcome", Welcome);
// app.use(store);
// app.use(router);

// app.mount("#app");

import { createApp } from 'vue'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import router from "./router.js";

import App from './components/App.vue'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).mount("#app");