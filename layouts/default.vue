<template>
  <div>
    <VApp>
      <VAppBar fixed app :elevation="0">
        <VContainer>
          <VRow>
            <VToolbarTitle class="font-weight-semibold">Nuxy Store</VToolbarTitle>
            <VSpacer></VSpacer>
            <VBtn size="small" to="/" nuxt variant="text">Home</VBtn>
            <VBtn size="small" class="mx-2" to="/about" nuxt variant="text">About</VBtn>
            <VBtn size="small" to="/products" nuxt variant="text">Products</VBtn>
          </VRow>
        </VContainer>
      </VAppBar>
      <VMain class="bg-grey-lighten-5">
        <VContainer>
          <slot />
        </VContainer>
      </VMain>
      <VFooter :absolute="fixed" app class="px-10">
        <VContainer>
          <VRow>
            <span>&copy; {{ new Date().getFullYear() }}</span></VRow
          >
        </VContainer>
      </VFooter>
    </VApp>
  </div>
</template>

<script setup>
const fixed = ref(false);
</script>

<style scoped>
.v-btn--active {
  background-color: rgba(67, 56, 202, 1);
  color: beige;
}
</style>
