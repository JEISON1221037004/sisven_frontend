<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Modos de Pago</h1>
      <router-link to="/paymodes/new" class="btn btn-success mb-3">Agregar Modo de Pago</router-link>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Observación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paymode in paymodes" :key="paymode.id">
            <td>{{ paymode.id }}</td>
            <td>{{ paymode.name }}</td>
            <td>{{ paymode.observation }}</td>
            <td>
              <router-link :to="{ name: 'editPayMode', params: { id: paymode.id } }" class="btn btn-info btn-sm">Editar</router-link>
              <button @click="deletePayMode(paymode.id)" class="btn btn-danger btn-sm">Eliminar</button>
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
        paymodes: [],
      };
    },
    created() {
      this.fetchPayModes();
    },
    methods: {
      fetchPayModes() {
        apiClient.get('/paymodes')
          .then(response => {
            this.paymodes = response.data;
          })
          .catch(error => {
            console.error('Error fetching pay modes:', error);
          });
      },
      deletePayMode(id) {
        apiClient.delete(`/paymodes/${id}`)
          .then(() => {
            this.fetchPayModes();
          })
          .catch(error => {
            console.error('Error deleting pay mode:', error);
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
  