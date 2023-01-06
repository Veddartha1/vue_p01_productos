<script>
export default {}
</script>

<template>
    <nav class="navbar navbar-dark bg-dark text-white row p-2 m-1">
        <p class="col-4">ALMACÉN ACME</p>
        <router-link to="/" class="nav-link offset-2 col-1">Productos</router-link>
        <router-link to="/categorias" class="nav-link col-1">Categor&iacute;as</router-link>
        <router-link to="/add-producto" class="nav-link col-1">Añadir producto</router-link>
        <router-link to="/add-categoria" class="nav-link col-1">Añadir categor&iacute;a</router-link>
        <router-link to="/about" class="nav-link col-1">Sobre nosotros</router-link>
    </nav>
</template>