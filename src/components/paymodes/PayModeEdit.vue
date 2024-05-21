<template>
    <div class="container mt-4">
      <h1>Editar Modo de Pago</h1>
      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="paymode.name" required>
          <div class="invalid-feedback">
            Por favor, ingrese el nombre del modo de pago.
          </div>
        </div>
        <div class="mb-3">
          <label for="observation" class="form-label">Observación</label>
          <input type="text" class="form-control" id="observation" v-model="paymode.observation" required>
          <div class="invalid-feedback">
            Por favor, ingrese la observación del modo de pago.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar</button>
        <router-link to="/paymodes" class="btn btn-warning">Cancelar</router-link>
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
      const paymode = reactive({
        name: '',
        observation: '',
      });
  
      const fetchPayMode = () => {
        apiClient.get(`/paymodes/${route.params.id}`)
          .then(response => {
            Object.assign(paymode, response.data);
          })
          .catch(error => {
            console.error('Error fetching pay mode:', error);
          });
      };
  
      const handleSubmit = () => {
        apiClient.put(`/paymodes/${route.params.id}`, paymode)
          .then(() => {
            router.push('/paymodes');
          })
          .catch(error => {
            console.error('Error updating pay mode:', error);
          });
      };
  
      onMounted(fetchPayMode);
  
      return {
        paymode,
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
  