/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// import LearnVue from "./components/LearnVue";
// import ExampleComponent from "./components/ExampleComponent.vue";

require('./bootstrap');
// window.Vue = require('vue');
import Vue from 'vue'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import Layout from './components/Layout.vue';
Vue.component('learn-vue', require('./components/LearnVue.vue'));
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// const routes = [
//     {path:'example', component: ExampleComponent},
//     {path:'learnVue', component: LearnVue}
// ];
//
// const router = new VueRouter({
//     routes
// });

const app = new Vue({
    // router: router,
    components : {Layout},
    el: '#app',
});