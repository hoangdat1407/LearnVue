import LearnVue from './components/LearnVue.vue';
import Page2 from './components/PageVue_2.vue';

export const routes = [
    {
        path: '/',
        name: 'LearnVue',
        redirect : '/learn-vue',
    },
    {
        path: '/learn-vue',
        name: 'LearnVue',
        component: LearnVue
    },
    {
        path: '/page-vue',
        name: 'Page_Vue_2',
        component: Page2
    }
];
