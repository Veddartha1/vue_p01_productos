import { reactive } from 'vue';
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const store = {
    debug: true,
    state: reactive({
        productos: [],
        categorias: [],
        errores: []
    }),
    async loadData() {
        try {
            const responseCategorias = await axios.get(SERVER + '/categorias')
            responseCategorias.data.forEach((categoria) => this.state.categorias.push(categoria));
            const responseProducts = await axios.get(SERVER + '/productos')
            responseProducts.data.forEach((producto) => this.state.productos.push(producto));
        } catch (err){
            this.setErrorMsg("Error en la BBDD: " + err)
        }
    },
    async removeProduct(item){
        if (confirm('Se va a borrar ' + item.nombre)) {
            try {
                const response = await axios.delete(SERVER + '/productos/' + item.id)
                this.state.productos.splice((this.state.productos.findIndex(producto => producto.id == item.id)), 1)
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    async addProducto(item){
        if (item.nombre && item.uds && item.precio && item.categoria) {
            try {
                const response = await axios.post(SERVER + '/productos', {
                    nombre: item.nombre,
                    uds: item.uds,
                    precio: item.precio,
                    categoria: item.categoria
                })
                this.state.productos.push(response.data)
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    async editProducto(item){
        if (item.id && item.nombre && item.uds && item.precio && item.categoria) {
            try {
                const response = await axios.patch(SERVER + '/productos/' + item.id, {
                    nombre: item.nombre,
                    uds: item.uds,
                    precio: item.precio,
                    categoria: item.categoria
                })
                let elem = this.state.productos.find(producto => producto.id == item.id)
                elem.nombre = response.data.nombre
                elem.uds = response.data.uds
                elem.precio = response.data.precio
                elem.categoria = response.data.categoria
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    async increaseUd(item) {
        try {
            const response = await axios.patch(SERVER + '/productos/' + item.id, {
                uds: item.uds + 1
            })
            let elem = this.state.productos.find(producto => producto.id == item.id)
            elem.uds = response.data.uds
        } catch (err) {
            this.setErrorMsg("Error en la BBDD: ")
        }
    },
    async decreaseUd(item) {
        try {
            const response = await axios.patch(SERVER + '/productos/' + item.id, {
                uds: item.uds - 1
            })
            let elem = this.state.productos.find(producto => producto.id == item.id)
            elem.uds = response.data.uds
        } catch (err) {
            this.setErrorMsg("Error en la BBDD: " + err)
        }
    },
    async removeCategory(item){
        if (confirm('Se va a borrar ' + item.nombre)) {
            try {
                const response = await axios.delete(SERVER + '/categorias/' + item.id)
                this.state.categorias.splice((this.state.categorias.findIndex(categoria => categoria.id == item.id)), 1)
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    async addCategoria(item){
        if (item.nombre && item.descripcion) {
            try {
                const response = await axios.post(SERVER + '/categorias', {
                    nombre: item.nombre,
                    descripcion: item.descripcion
                })
                this.state.categorias.push(response.data)
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    async editCategoria(item){
        if (item.id && item.nombre && item.descripcion) {
            try {
                const response = await axios.patch(SERVER + '/categorias/' + item.id, {
                    nombre: item.nombre,
                    uds: item.descripcion,
                })
                let elem = this.state.categorias.find(categoria => categoria.id == item.id)
                elem.nombre = response.data.nombre
                elem.descripcion = response.data.descripcion
            } catch (err) {
                this.setErrorMsg("Error en la BBDD: " + err)
            }
        }
    },
    setErrorMsg(message) {
        this.state.errores.push(message)
        setTimeout(()=>this.state.errores.splice(0,1), 5000)
    }
}