<template>
  <div>
    <VApp>
      <VAppBar fixed app :elevation="0">
        <VContainer>
          <VRow>
            <VToolbarTitle
              @click="router.push('/')"
              class="font-weight-semibold pointer text-primary-darken-3"
              >Nuxy Store Merch</VToolbarTitle
            >
            <VSpacer></VSpacer>
            <VBtn
              size="small"
              to="/products"
              nuxt
              variant="text"
              class="btn-product"
              >Products</VBtn
            >
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
const router = useRouter();
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.btn-product {
  background-color: rgba(67, 56, 202, 1);
  color: beige;
}
</style>
