import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Films from '../views/Films';
import Cartoons from "../views/Cartoons";
import Serials from "../views/Serials";
import Shows from "../views/Shows";
import Blogers from '../views/Blogers';
import Cybersport from '../views/Cybersport';
import PathNotFound from '../components/PathNotFound'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/films',
        name: 'Films',
        component: Films
    },
    {
        path: '/cartoons',
        name: 'Cartoons',
        component: Cartoons
    },
    {
        path: '/serials',
        name: 'Serials',
        component: Serials
    },
    {
        path: '/shows',
        name: 'Shows',
        component: Shows
    },
    {
        path: '/blogers',
        name: 'Blogers',
        component: Blogers
    },
    {
        path: '/cybersport',
        name: 'Cybersport',
        component: Cybersport
    },
    {
        path: '/:pathMatch(.*)*', component: PathNotFound
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
