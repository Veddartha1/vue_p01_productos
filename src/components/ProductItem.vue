<script>
import { store } from '../store/productos.js'
import AddProduct from './AddProduct.vue'

export default {
    props: {
        item: Object,
        AddProduct
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
    }
}
</script>
<template>
    <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>{{ item.uds }}</td>
        <td>{{ item.precio }}</td>
        <td>{{ parseFloat(item.precio * item.uds).toFixed(2) }} €</td>
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