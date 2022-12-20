<script>
    import { store } from '../store/productos.js'

    export default {
        data () {
            return {
                errores: store.state.errores
            }
        },
    }
</script>
<template>
    <div>
        <div class="alert alert-danger alert-dismissible" v-for="(error, index) in errores" :key="index">{{error}}</div>
    </div>
</template>