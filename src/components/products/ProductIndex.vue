<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Productos</h1>
      <router-link to="/products/new" class="btn btn-success mb-3">Agregar Producto</router-link>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category.name }}</td>
            <td>
              <router-link :to="{ name: 'editProduct', params: { id: product.id } }" class="btn btn-info btn-sm">Editar</router-link>
              <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import apiClient from '@/axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        apiClient.get('/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
      deleteProduct(id) {
        apiClient.delete(`/products/${id}`)
          .then(() => {
            this.fetchProducts();
          })
          .catch(error => {
            console.error('Error deleting product:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .table {
    margin-top: 20px;
  }
  </style>
  