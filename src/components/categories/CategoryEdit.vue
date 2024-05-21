<template>
    <div class="container mt-4">
      <h1>Editar Categoría</h1>
      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="category.name" required>
          <div class="invalid-feedback">
            Por favor, ingrese el nombre de la categoría.
          </div>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Descripción</label>
          <input type="text" class="form-control" id="description" v-model="category.description" required>
          <div class="invalid-feedback">
            Por favor, ingrese la descripción de la categoría.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
        <router-link to="/categories" class="btn btn-warning">Cancelar</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import apiClient from '@/axios';
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const category = reactive({
        name: '',
        description: '',
      });
  
      const fetchCategory = () => {
        apiClient.get(`/categories/${route.params.id}`)
          .then(response => {
            Object.assign(category, response.data);
          })
          .catch(error => {
            console.error('Error fetching category:', error);
          });
      };
  
      const handleSubmit = () => {
        apiClient.put(`/categories/${route.params.id}`, category)
          .then(() => {
            router.push('/categories');
          })
          .catch(error => {
            console.error('Error updating category:', error);
          });
      };
  
      onMounted(fetchCategory);
  
      return {
        category,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .mb-3 {
    margin-bottom: 1rem;
  }
  </style>
  