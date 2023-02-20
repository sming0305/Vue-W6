<template>
  <Product-Info :productId="productId"></Product-Info>
</template>

<script>
import ProductInfo from "../components/ProdcutInfoComponent.vue";

export default {
  props: ["productId"],
  components: {
    ProductInfo,
  },
  mounted() {},
};
</script>
