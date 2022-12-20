import { reactive } from 'vue';
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const store = {
    debug: true,
    state: reactive({
        productos: [],
        errores: []
    }),
    async loadProductos() {
        try {
            const response = await axios.get(SERVER + '/productos')
            response.data.forEach((producto) => this.state.productos.push(producto));
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
    async addProducto(nombre, unidades, precio){
        if (nombre && unidades && precio) {
            try {
                const response = await axios.post(SERVER + '/productos', {
                    nombre: nombre,
                    uds: unidades,
                    precio: precio
                })
                this.state.productos.push(response.data)
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
    setErrorMsg(message) {
        this.state.errores.push(message)
        setTimeout(()=>this.state.errores.splice(0,1), 5000)
    }
}