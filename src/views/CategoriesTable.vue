<script>
    import { store } from '../store/productos.js'
    import CategoryItem from '../components/CategoryItem.vue'

export default {
    components: {
        CategoryItem
    },
    data () {
        return {
            categorias : store.state.categorias,
        }
    },
    computed: {
        numItems() {
            return this.categorias.length
        }
    },
}
</script>

<template>
    <div class="row m-2">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripci&oacute;n</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <category-item
                v-for="item in categorias"
                :key="item.id"
                v-bind:item="item"
                >
                </category-item>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row">Categor&iacute;as:</th>
                    <th>{{ numItems }}</th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>