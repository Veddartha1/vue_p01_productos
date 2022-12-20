<script>
    import { store } from '../store/productos.js'
    import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem
    },
    computed: {
        numItems() {
            return this.productos.length
        },
        totalPrice() {
            return parseFloat(this.productos.reduce((total, producto) => total +  producto.precio * producto.uds, 0 )).toFixed(2)
        }
    },
    data () {
        return {
            productos : store.state.productos,
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
                    <th scope="col">Uds.</th>
                    <th scope="col">Precio/u</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <product-item
                v-for="item in productos"
                :key="item.id"
                v-bind:item="item"
                >
                </product-item>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row">Productos:</th>
                    <th>{{ numItems }}</th>
                    <th></th>
                    <th>Importe total del almac&eacute;n:</th>
                    <th>{{ totalPrice }} €</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>