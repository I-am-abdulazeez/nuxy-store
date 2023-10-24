<template>
  <div class="mt-6">
    <VRow>
      <VCol cols="5" sm="12">
        <VImg
          :src="product?.image"
          height="300px"
          :width="300"
          aspect-ratio="16/9"
          cover
        ></VImg>
      </VCol>
      <VCol cols="6" sm="12">
        <VChip class="my-2 text-capitalize" color="primary">{{
          product?.category
        }}</VChip>
        <h6 class="text-h6 mb-4">{{ product?.title }}</h6>
        <h6 class="text-subtitle-1">{{ product?.description }}</h6>

        <p class="text-primary-darken-2 text-h5 mt-5">
          Price: ${{ product?.price }}
        </p>
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '~/types';

const { product } = defineProps({
  product: {
    type: Object as PropType<ProductType>,
    required: true,
  },
});
</script>

<style></style>
