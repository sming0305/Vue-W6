<script>
import productsStore from "./stores/productsStore.js";
import { mapActions } from "pinia";

export default {
  methods: {
    ...mapActions(productsStore, ["getProduct"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <router-view></router-view>
</template>
