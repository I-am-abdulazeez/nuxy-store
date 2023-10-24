<template>
  <div>
    <Head>
      <Title>Nuxi Store | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>
    <h5 class="text-h5">Product Details for {{ product?.id }}</h5>
    <VDivider class="my-4" />
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'product',
});

import { uri } from '~/data';
import type { ProductType } from '~/types';

const route = useRoute();
const { id } = route.params;

const { data: product } = await useFetch<ProductType>(`${uri}/${id}`);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  });
}
</script>
