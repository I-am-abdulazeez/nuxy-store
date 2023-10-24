<template>
  <div>
    <Head>
      <Title>Nuxi Store | About</Title>
      <Meta name="description" content="About Nuxi Store" />
    </Head>
    <h4 class="text-h4">Our Vision</h4>
    <VDivider class="my-4" />
    <p class="text-body-1">
      At Nuxy-Store, we believe in the power of self-expression and
      individuality. Our vision is to provide you with a carefully chosen
      assortment of products that not only meet your functional needs but also
      reflect your personal style. We are committed to helping you embrace your
      unique identity through our handpicked collection of items that stand out
      from the crowd.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/store');
</script>
