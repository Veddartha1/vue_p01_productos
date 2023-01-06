import { createRouter, createWebHistory } from 'vue-router'

import AddProduct from '../views/AddProduct.vue'
import AddCategory from '../views/AddCategory.vue'
import ProductsTable from '../views/ProductsTable.vue'
import CategoriesTable from '../views/CategoriesTable.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ProductsTable
    },
    {
        path: '/categorias',
        name: 'categorias',
        component: CategoriesTable
    },
    {
        path: '/add-producto',
        name: 'add-producto',
        component: AddProduct
    },
    {
        path: '/add-categoria',
        name: 'add-categoria',
        component: AddCategory
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
  
export default router