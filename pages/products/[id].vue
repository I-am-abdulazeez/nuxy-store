<template>
  <div>
    <VBtn
      icon="mdi-arrow-left"
      size="small"
      @click="goBack()"
      variant="tonal"
      color="primary"
      class="mb-4"
    />
    <h5 class="text-h5">Product Details for {{ product?.id }}</h5>
    <VDivider class="my-4" />

    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
import { uri } from "~/data";
import type { ProductType } from "~/types";

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const goBack = () => {
  router.back();
};

const { data: product } = await useFetch<ProductType>(`${uri}/${id}`);
</script>
