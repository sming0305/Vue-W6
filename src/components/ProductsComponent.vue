<template>
  <div class="bg-dark h-100" style="min-height: 100vh">
    <div class="container h-100">
      <div class="py-8" style="min-height: 100vh">
        <div>
          <div class="d-flex justify-content-between">
            <h2 class="fw-bold text-white">產品列表</h2>
            <PaginationComponent></PaginationComponent>
          </div>
          <div class="row">
            <div
              class="col-12 col-lg-6 col-xxl-4 mb-3"
              v-for="product in productList"
              :key="product.title"
            >
              <div
                class="card justify-content-center border-0 text-white bg-dark"
                style="height: 215px"
              >
                <div class="row g-0">
                  <div class="col-6 d-flex flex-column justify-content-center">
                    <img
                      :src="product.imageUrl"
                      class="img-fluid rounded-start"
                      :alt="product.title"
                      style="max-height: 162px"
                    />
                  </div>
                  <div class="col-6">
                    <div class="card-body p-2">
                      <h5 class="card-title fs--10">{{ product.title }}</h5>
                      <p class="card-text fs--8">
                        {{ product.content }}
                      </p>
                      <p class="card-text text-danger">
                        售價:{{ product.price }}
                      </p>
                      <div class="d-flex justify-content-end">
                        <router-link
                          :to="`/product/${product.id}`"
                          class="btn btn-outline-light btn-sm me-2 fs--6"
                          >詳細資訊</router-link
                        >
                        <button
                          type="button"
                          class="btn btn-outline-light btn-sm fs--6"
                          :class="{ disabled: isLoading }"
                          @click="
                            (e) => {
                              addProduct(product.id, e);
                            }
                          "
                        >
                          <i class="me-1"></i>
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import productsStore from "../stores/productsStore.js";
import PaginationComponent from "./PaginationComponent.vue";

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(productsStore, ["addProduct"]),
  },
  computed: {
    ...mapState(productsStore, ["productList", "isLoading"]),
  },
  mounted() {},
};
</script>
