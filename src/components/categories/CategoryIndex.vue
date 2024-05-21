<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Categorías</h1>
      <router-link to="/categories/new" class="btn btn-success mb-3">Agregar Categoría</router-link>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.description }}</td>
            <td>
              <router-link :to="{ name: 'editCategory', params: { id: category.id } }" class="btn btn-info btn-sm">Editar</router-link>
              <button @click="deleteCategory(category.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
        categories: [],
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      fetchCategories() {
        apiClient.get('/categories')
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      },
      deleteCategory(id) {
        apiClient.delete(`/categories/${id}`)
          .then(() => {
            this.fetchCategories();
          })
          .catch(error => {
            console.error('Error deleting category:', error);
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
  