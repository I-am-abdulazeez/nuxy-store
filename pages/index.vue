<template>
  <div>
    <h4 class="text-h4">Nuxy Store</h4>
    <VDivider class="my-4" />
    <p class="text-body-1">
      Nuxy-Store is your ultimate destination for all things fashionable, trendy, and unique. We are
      more than just a store; we are a lifestyle brand that offers a curated selection of products
      designed to elevate your style and enhance your everyday life. Whether you're a fashion
      enthusiast, a tech aficionado, a home decor connoisseur, or simply looking for the perfect
      gift, Nuxy-Store has something special for everyone.
    </p>
    <div class="my-6">
      <h4 class="text-h4">What we Offer</h4>
      <VDivider class="my-4" />
      <Vlist v-for="(offer, index) in Offers" :key="index">
        <VListItem :title="offer.title"></VListItem>
        <VListItem :subtitle="offer.subtitle"></VListItem>
      </Vlist>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Offers } from "~~/data";

const email = ref("");
const password = ref("");

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const submit = async () => {};
</script>
