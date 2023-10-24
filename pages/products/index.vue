<template>
  <div>
    <VContainer>
      <h4 class="text-h4">Products Page</h4>
      <VDivider class="my-4" />
      <VRow>
        <VCol
          cols="12"
          md="3"
          sm="12"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'product',
});
import type { ProductType } from '~~/types';
import { uri } from '~~/data';

// Fetch Products
const { data: products } = await useFetch<ProductType[]>(uri);
</script>
