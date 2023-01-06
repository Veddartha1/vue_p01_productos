<script>
import { store } from '../store/productos.js'
import AddProduct from '../views/AddProduct.vue'

export default {
    props: {
        item: Object,
        AddProduct
    },
    data () {
        return {
            categorias : store.state.categorias,
        }
    },
    methods: {
        removeProduct(){
            store.removeProduct(this.item)
        },
        increaseUd() {
            store.increaseUd(this.item)
        },
        decreaseUd() {
            store.decreaseUd(this.item)
        },
        updateProduct() {
            this.$router.push({ path: '/add-producto', query: { id: this.item.id }})
        }
    },
}
</script>
<template>
    <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>{{ item.uds }}</td>
        <td>{{ item.precio }}</td>
        <td>{{ parseFloat(item.precio * item.uds).toFixed(2) }} €</td>
        <td>{{ this.categorias.find(categoria => categoria.id == item.categoria).nombre }}</td>
        <td>
            <button type="button" class="btn btn-secondary" @click="increaseUd">
                <i class="bi bi-arrow-up"></i>   
            </button>     
            <button type="button" class="btn btn-secondary" @click="decreaseUd" :disabled="item.uds < 1">
                <i class="bi bi-arrow-down"></i>
            </button>
            <button type="button" class="btn btn-secondary" @click="updateProduct">
                <i class="bi bi-pen"></i>
            </button>
            <button type="button" class="btn btn-secondary" @click="removeProduct">
                <i class="bi bi-trash3"></i>
            </button>
        </td>
    </tr>
</template>