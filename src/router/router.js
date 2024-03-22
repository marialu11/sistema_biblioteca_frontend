import {createWebHistory, createRouter} from 'vue-router';
import Home from '../components/autores/views/Home.vue'
import Autores from '../components/autores/views/principal.vue'

const routes = [
    {
        path: '/',
        name: 'autores',
        component: Home
    },
    {
        path: '/usuarios',
        name: 'usuarios',
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