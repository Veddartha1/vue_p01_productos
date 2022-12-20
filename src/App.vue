<script>
import { store } from './store/productos.js'
import AppTitle from './components/AppTitle.vue'
import ProductsTable from './components/ProductsTable.vue'
import AddProduct from './components/AddProduct.vue'
import AppError from './components/AppError.vue'
import AppMenu from './components/AppMenu.vue'

export default ({
  components: { 
    AppTitle,
    ProductsTable,
    AppError,
    AddProduct,
    AppMenu
  },
  mounted() {
    store.loadProductos()
  }
})
</script>

<template>
  <div>
    <app-menu></app-menu>
    <app-title title="Almac&eacute;n de productos - ACME SL"></app-title>
    <ProductsTable></ProductsTable>
    <app-error></app-error>
    <add-product></add-product>
  </div>
</template>

<style>
</style>
