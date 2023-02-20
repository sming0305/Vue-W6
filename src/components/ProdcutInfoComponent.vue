<template>
  <div class="bg-dark h-100" style="min-height: 100vh">
    <div class="container h-100" style="min-height: 100vh">
      <div
        class="d-flex flex-column justify-content-center h-100"
        style="min-height: 100vh"
      >
        <div class="flex-grow-0">
          <h2 class="mb-5 text-center text-white fw-bold">商品詳細資訊:</h2>
          <div
            class="card mb-3 justify-content-center border-0 text-white bg-dark"
          >
            <div class="row g-0">
              <div class="col-md-6">
                <img
                  :src="productTemp.imageUrl"
                  class="img-fluid rounded-start m0-auto d-block"
                  :alt="productTemp.title"
                />
              </div>
              <div class="col-md-6 d-flex flex-column justify-content-center">
                <div class="card-body flex-grow-0 text-center p-1">
                  <h5 class="card-title">{{ productTemp.title }}</h5>
                  <p class="card-text">
                    {{ productTemp.content }}
                  </p>
                  <p class="card-text mb-5">
                    {{ productTemp.description }}
                  </p>
                  <div>
                    <div
                      class="d-sm-flex justify-content-center align-items-center mb-4"
                    >
                      <div class="d-flex justify-content-center mb-4 mb-sm-0">
                        <input
                          type="number"
                          class="bg-secondary text-white border-none rounded-start text-center"
                          style="max-width: 100px"
                          oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
                          ref="input"
                          placeholder="預設數量 1"
                        /><span
                          class="input-group-text rounded-end-1 bg-secondary text-white border-none me-2"
                          >{{ productTemp.unit }}</span
                        >
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-outline-light btn-sm fs--6 me-2"
                          :class="{ disabled: isLoading }"
                          @click="
                            (e) => {
                              addProduct(this.$route, e);
                            }
                          "
                        >
                          <i
                            class="me-1"
                            :class="{
                              'fa-solid': isLoading,
                              'fa-circle-notch': isLoading,
                              'fa-spin': isLoading,
                            }"
                          ></i>
                          加入購物車
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-light btn-sm me-2 fs--6"
                          @click="pageBack"
                        >
                          返回商品列表
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
import { mapActions, mapState } from "pinia";
import productsStore from "../stores/productsStore.js";

export default {
  props: ["productId"],
  methods: {
    ...mapActions(productsStore, ["getTargetProduct", "addProduct", "getDom"]),
    pageBack() {
      this.$router.back();
    },
  },
  computed: {
    ...mapState(productsStore, ["productTemp", "isLoading"]),
  },
  mounted() {
    this.getDom(this.$refs.input);
    this.getTargetProduct(this.$route.params.id);
  },
};
</script>
