<template>
    <div class="container mt-4">
      <h1 class="mb-4">Lista de Clientes</h1>
      <router-link to="/customers/new" class="btn btn-success mb-3">Agregar Cliente</router-link>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td>{{ customer.first_name }}</td>
            <td>{{ customer.last_name }}</td>
            <td>{{ customer.email }}</td>
            <td>
              <router-link :to="{ name: 'editCustomer', params: { id: customer.id } }" class="btn btn-info">Editar</router-link>
              <button @click="deleteCustomer(customer.id)" class="btn btn-danger">Eliminar</button>
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
        customers: [],
      };
    },
    created() {
      this.fetchCustomers();
    },
    methods: {
      fetchCustomers() {
        apiClient.get('/customers')
          .then(response => {
            this.customers = response.data;
          })
          .catch(error => {
            console.error('Error fetching customers:', error);
          });
      },
      deleteCustomer(id) {
        apiClient.delete(`/customers/${id}`)
          .then(() => {
            this.fetchCustomers();
          })
          .catch(error => {
            console.error('Error deleting customer:', error);
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
  