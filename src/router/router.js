import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/Home.vue'
import Autores from '../components/autores/views/principal.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/usuarios',
        name: 'usuarios',
    },
    {
        path: '/autores',
        name: 'autores',
        component: Autores
    },
    {
        path: '/libros',
        name: 'libros',
    },
    {
        path: '/prestamos',
        name: 'prestamos',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;