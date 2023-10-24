<template>
  <div class="mt-10">
    <VRow>
      <VCol cols="12" md="5">
        <VImg :src="product?.image" height="500px" cover></VImg>
      </VCol>
      <VCol cols="12" md="7" class="px-md-5">
        <p class="text-primary-darken-2 text-h5">
          Price - ${{ product?.price }}
        </p>
        <h6 class="text-h3 my-4">{{ product?.title }}</h6>
        <VChip class="mb-5 text-capitalize" color="primary">{{
          product?.category
        }}</VChip>
        <h6 class="text-h6">Description</h6>
        <VDivider class="my-4" />
        <h6 class="text-subtitle-1">{{ product?.description }}</h6>
      </VCol>
    </VRow>
  </div>
</template>

<script setup lang="ts">
import type { ProductType } from '~/types';

const { product } = defineProps({
  product: {
    type: Object as PropType<ProductType | null>,
    required: true,
  },
});
</script>

<style></style>
