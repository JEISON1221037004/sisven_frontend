<template>
    <div class="container mt-4">
      <h1>Agregar Nuevo Cliente</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="document_number" class="form-label">Número de Documento</label>
          <input type="text" class="form-control" id="document_number" v-model="customer.document_number" required>
        </div>
        <div class="mb-3">
          <label for="first_name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="first_name" v-model="customer.first_name" required>
        </div>
        <div class="mb-3">
          <label for="last_name" class="form-label">Apellido</label>
          <input type="text" class="form-control" id="last_name" v-model="customer.last_name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="customer.email" required>
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
        <router-link to="/customers" class="btn btn-warning">Cancelar</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import apiClient from '@/axios';
  
  export default {
    setup() {
      const router = useRouter();
      const customer = reactive({
        document_number: '',
        first_name: '',
        last_name: '',
        email: '',
      });
  
      const handleSubmit = () => {
        apiClient.post('/customers', customer)
          .then(() => {
            router.push('/customers');
          })
          .catch(error => {
            console.error('Error creating customer:', error);
          });
      };
  
      return {
        customer,
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
  