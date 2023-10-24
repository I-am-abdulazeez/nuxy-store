<template>
  <div>
    <VContainer>
      <h4 class="text-h4">Products Page</h4>
      <VDivider class="my-4" />
      <VRow>
        <VCol cols="3" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from "~~/types";
import { uri } from "~~/data";

// Fetch Products
const { data: products } = await useFetch<ProductType[]>(uri);
</script>
