<template>
  <div>
    <VCard :elevation="0">
      <VImg :src="product.image" height="300px" cover></VImg>
      <VCardTitle>{{ product.title }}</VCardTitle>
      <VCardSubtitle>{{ product.description }}</VCardSubtitle>
      <VCardActions>
        <VBtn color="info" size="small" :to="`/products/${product.id}`" nuxt variant="text">
          View Details
        </VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from "~~/types";
import type { PropType } from "vue";

const { product } = defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true,
  },
});
</script>
