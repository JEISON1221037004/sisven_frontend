<template>
    <div class="container mt-4">
      <h1>Agregar Nuevo Producto</h1>
      <form @submit.prevent="handleSubmit" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" v-model="product.name" required>
          <div class="invalid-feedback">
            Por favor, ingrese el nombre del producto.
          </div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Precio</label>
          <input type="number" class="form-control" id="price" v-model="product.price" required>
          <div class="invalid-feedback">
            Por favor, ingrese el precio del producto.
          </div>
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input type="number" class="form-control" id="stock" v-model="product.stock" required>
          <div class="invalid-feedback">
            Por favor, ingrese el stock del producto.
          </div>
        </div>
        <div class="mb-3">
          <label for="category_id" class="form-label">Categoría</label>
          <select class="form-select" id="category_id" v-model="product.category_id" required>
            <option disabled value="">Seleccione una categoría</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
          <div class="invalid-feedback">
            Por favor, seleccione una categoría.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Crear</button>
        <router-link to="/products" class="btn btn-warning">Cancelar</router-link>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import apiClient from '@/axios';
  
  export default {
    setup() {
      const router = useRouter();
      const product = reactive({
        name: '',
        price: '',
        stock: '',
        category_id: '',
      });
  
      const categories = reactive([]);
  
      const fetchCategories = () => {
        apiClient.get('/categories')
          .then(response => {
            Object.assign(categories, response.data);
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      };
  
      const handleSubmit = () => {
        apiClient.post('/products', product)
          .then(() => {
            router.push('/products');
          })
          .catch(error => {
            console.error('Error creating product:', error);
          });
      };
  
      onMounted(fetchCategories);
  
      return {
        product,
        categories,
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
  