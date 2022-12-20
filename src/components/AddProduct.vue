<script>
import { store } from '../store/productos.js'

export default {
    data(){
        return {
            id: '',
            nombre: '',
            unidades: '',
            precio: '',
        }
    },
    methods: {
        addProducto(){
            if (this.nombre && this.unidades && this.precio) {
                store.addProducto(this.nombre, this.unidades, this.precio)
                this.nombre = ''
                this.unidades = ''
                this.precio = ''
            }
        },
    },
}
</script>
<template>
    <form @submit.prevent="addProducto" class="row m-2">
        <div class="col-3">
            <h2>Nuevo producto</h2>
            <div class="form-group">
              <label>ID:</label>
              <input type="number" class="form-control" v-model.trim="id" disabled>
            </div>
            <div class="form-group">
                <label>Nombre:</label>
                <input type="text" class="form-control" v-model.trim="nombre" minlength="5" maxlength="50" required>
              </div>
            <div class="form-group">
                <label>Unidades:</label>
                <input type="number" class="form-control" v-model.trim="unidades" min="1" required>
              </div>
              <div class="form-group">
                <label>Precio/u:</label>
                <input type="number" step="0.01" class="form-control" v-model.trim="precio" min="1" required>
              </div>
            <button type="submit" class="btn btn-primary">Añadir</button>
            <button type="reset" class="btn btn-danger">Reset</button>
        </div>
    </form> 
</template>