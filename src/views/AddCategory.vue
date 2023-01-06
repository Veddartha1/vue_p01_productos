<script>
import { store } from '../store/productos.js'

export default {
    data(){
        return {
            categoria: {
                id: '',
                nombre: '',
                descripcion: ''
            },
            categorias: store.state.categorias,
        }
    },
    mounted() {
        this.fillForm()
    },
    methods: {
        handleSubmit(){
            if (this.categoria.nombre && this.categoria.descripcion) {
                if (this.$route.query.id) {
                    store.editCategoria(this.categoria)
                } else {
                    store.addCategoria(this.categoria)
                }
                this.$router.push('/categorias')
            }
        },
        fillForm() {
            if (this.$route.query.id) {
                const categoriaInicial = this.categorias.find(categoria => categoria.id == this.$route.query.id)
                this.categoria = JSON.parse(JSON.stringify(categoriaInicial))
            } else {
                this.categoria.id = ''
                this.categoria.nombre = ''
                this.categoria.descripcion = ''
            }
        }
    },
}
</script>
<template>
    <form @submit.prevent="handleSubmit" class="row m-2">
        <div class="col-3">
            <h2>{{ this.$route.query.id ? 'Editar ' : 'Nueva ' }}Categor&iacute;a</h2>
            <div class="form-group">
                <label>ID:</label>
                <input type="number" class="form-control" v-model.trim="categoria.id" disabled>
            </div>
            <div class="form-group">
                <label>Nombre:</label>
                <input type="text" class="form-control" v-model.trim="categoria.nombre" minlength="5" maxlength="50" required>
            </div>
            <div class="form-group">
                <label>Descripcion:</label>
                <input type="textarea" class="form-control" v-model.trim="categoria.descripcion" minlength="10" maxlength="250" required>
            </div>
            <button type="submit" class="btn btn-primary">{{ this.$route.query.id ? 'Editar' : 'Añadir' }}</button>
            <button type="reset" class="btn btn-danger" @click.prevent="fillForm">Reset</button>
        </div>
    </form> 
</template>