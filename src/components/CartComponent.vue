<template>
  <div class="container">
    <h2 class="fw-bold text-white">購物車</h2>
    <table class="table table-dark text-end mb-5 fs--9">
      <thead>
        <tr>
          <th width="200"></th>
          <th width="280" class="text-center">品名</th>
          <th width="160">數量</th>
          <th width="150">單價</th>
          <th width="90">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="carts?.carts?.length === 0">
          <th colspan="5" class="fw-bold text-white fs--14 text-center">
            購物車目無商品了，快去選購吧~
          </th>
        </tr>
        <tr v-for="product in carts.carts" :key="product.product.title">
          <th class="text-center">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm fs--7"
              @click="
                (e) => {
                  delProduct(product.id, e);
                }
              "
              :class="{ disabled: isLoading }"
            >
              <i class="me-1"></i>移除
            </button>
          </th>
          <th class="text-center">{{ product.product.title }}</th>
          <th>
            <div class="d-flex justify-content-end">
              <input
                type="number"
                class="bg-secondary border-none rounded-start text-center"
                v-model="product.qty"
                style="max-width: 45px"
                @change="
                  (e) => {
                    editProduct(product.id, product.product.id, e);
                  }
                "
                :disabled="isLoading"
                :class="{ 'text-gray': isLoading }"
                oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
              /><span
                class="input-group-text rounded-end-1 bg-secondary border-none"
                :class="{ 'text-gray': isLoading }"
                >{{ product.product.unit }}</span
              >
            </div>
          </th>
          <th>$ {{ product.product.price }}</th>
          <th>$ {{ product.product.price * product.qty }}</th>
        </tr>
        <tr>
          <th colspan="4">總計</th>
          <th>${{ carts.final_total }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import productsStore from "@/stores/productsStore";
import { mapState, mapActions } from "pinia";
import cartsStore from "../stores/cartsStore.js";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(cartsStore, ["getCarts", "editProduct", "delProduct"]),
  },
  computed: {
    ...mapState(cartsStore, ["carts", "isLoading"]),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
