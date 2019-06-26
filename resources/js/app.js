/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// import LearnVue from "./components/LearnVue";
// import ExampleComponent from "./components/ExampleComponent.vue";

require('./bootstrap');
import Vue from 'vue'

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


import Layout from './components/Layout.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from "./routes";
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    components : {Layout},
    router: router
});
