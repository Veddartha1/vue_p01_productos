<script>
import { store } from '../store/productos.js'
import AddCategory from '../views/AddCategory.vue'

export default {
    props: {
        item: Object,
        AddCategory
    },
    methods: {
        removeCategory(){
            store.removeCategory(this.item)
        },
        updateCategory() {
            this.$router.push({ path: '/add-categoria', query: { id: this.item.id }})
        }
    }
}
</script>
<template>
    <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>{{ item.descripcion }}</td>
        <td>
            <button type="button" class="btn btn-secondary" @click="updateCategory">
                <i class="bi bi-pen"></i>
            </button>
            <button type="button" class="btn btn-secondary" @click="removeCategory">
                <i class="bi bi-trash3"></i>
            </button>
        </td>
    </tr>
</template>