<template>
  <div class="d-flex flex-column align-center justify-center h-screen">
    <h2 class="text-h2 text-center">{{ error?.statusCode }}</h2>
    <h5 class="text-subtitle-1 text-center">Oops something went wrong</h5>
    <h4 class="text-h4 my-4 text-center">{{ error?.message }}</h4>
    <div>
      <VBtn
        block
        color="primary"
        size="x-small"
        variant="tonal"
        @click="handleError"
        >Go home</VBtn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ErrorObject } from '~~/types';

const { error } = defineProps({
  error: Object as PropType<ErrorObject>,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped></style>
