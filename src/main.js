import Vue from 'vue'
import App from './App'
import store from './store'
import VueRouter from "vue-router";
import LoginForm from "./components/LoginForm";
import MainPage from "./components/MainPage";
import WelcomePage from "./components/WelcomePage";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: WelcomePage },
        { path: '/login', component: LoginForm },
        { path: '/mainPage', component: MainPage },
        { path: '/upload', component: UploadForm }
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
