<script>
import { store } from './store/productos.js'
import AppTitle from './components/AppTitle.vue'
import AppError from './components/AppError.vue'
import AppMenu from './components/AppMenu.vue'

export default ({
  components: { 
    AppTitle,
    AppError,
    AppMenu
  },
  mounted() {
    store.loadData()
  }
})
</script>

<template>
  <div>
    <app-menu></app-menu>
    <app-title title="Almac&eacute;n de productos - ACME SL"></app-title>
    <app-error></app-error>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style>
</style>
