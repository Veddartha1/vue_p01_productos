<script>
import { store } from '../store/productos.js'

export default {
    data(){
        return {
            producto: {
                id: '',
                nombre: '',
                uds: '',
                precio: '',
                categoria: '',
            },
            categorias: store.state.categorias,
            productos: store.state.productos,
        }
    },
    mounted() {
        this.fillForm()
    },
    methods: {
        handleSubmit(){
            if (this.producto.nombre && this.producto.uds && this.producto.precio && this.producto.categoria) {
                if (this.$route.query.id) {
                    store.editProducto(this.producto)
                } else {
                    store.addProducto(this.producto)
                }
                this.$router.push('/')
            }
        },
        fillForm() {
            if (this.$route.query.id) {
                const productoInicial = this.productos.find(producto => producto.id == this.$route.query.id)
                this.producto = JSON.parse(JSON.stringify(productoInicial))
            } else {
                this.producto.id = ''
                this.producto.nombre = ''
                this.producto.uds = ''
                this.producto.precio = ''
                this.producto.categoria = ''
            }
        }
    },
}
</script>
<template>
    <form @submit.prevent="handleSubmit" class="row m-2">
        <div class="col-3">
            <h2>{{ this.$route.query.id ? 'Editar ' : 'Nuevo ' }}Producto</h2>
            <div class="form-group">
                <label>ID:</label>
                <input type="number" class="form-control" v-model="producto.id" disabled>
            </div>
            <div class="form-group">
                <label>Nombre:</label>
                <input type="text" class="form-control" v-model.trim="producto.nombre" minlength="5" maxlength="50" required>
              </div>
            <div class="form-group">
                <label>Unidades:</label>
                <input type="number" class="form-control" v-model.trim="producto.uds" min="1" required>
            </div>
            <div class="form-group">
                <label>Precio/u:</label>
                <input type="number" step="0.01" class="form-control" v-model.trim="producto.precio" min="1" required>
            </div>
            <div class="form-group">
                <label>Categoría:</label>
                <select class="form-control" v-model.trim="producto.categoria" required>
                    <option value="">--- Selecciona categoría ---</option>
                    <option v-for="categoria in categorias"
                    :key="categoria.id"
                    :value="categoria.id"
                    >{{categoria.nombre}}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">{{ this.$route.query.id ? 'Editar' : 'Añadir' }}</button>
            <button type="reset" class="btn btn-danger" @click.prevent="fillForm">Reset</button>
        </div>
    </form> 
</template>