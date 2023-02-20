const { VITE_URL, VITE_API_PATH } = import.meta.env;
import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("productsStore", {
  state: () => ({
    VITE_URL,
    VITE_API_PATH,
    productList: [],
    productId: "",
    productTemp: {},
    pagination: {},
    targetDom: {},
    isLoading: false,
  }),
  actions: {
    getProduct(page) {
      axios
        .get(`${this.VITE_URL}/api/${this.VITE_API_PATH}/products?page=${page}`)
        .then((res) => {
          this.productList = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          alert(err.data.message);
          this.isLoading = false;
        });
    },
    getTargetProduct(routeInfo) {
      this.productTemp = {};
      this.productId = routeInfo;
      this.isLoading = true;
      axios
        .get(
          `${this.VITE_URL}/api/${this.VITE_API_PATH}/product/${this.productId}`
        )
        .then((res) => {
          this.isLoading = false;
          this.productTemp = res.data.product;
          this.productId = "";
        })
        .catch((err) => {
          this.isLoading = false;
          alert(err.data.message);
          this.productId = "";
        });
    },
    addProduct(productInfo, e) {
      let qty = 0;
      let productId = productInfo;

      e.target.children[0].className = "me-1 fa-solid fa-circle-notch fa-spin";
      this.isLoading = true;
      if (productInfo.name === "商品資訊") {
        productId = productInfo.params.id;
        if (this.targetDom.value < 1) {
          qty = 1;
        } else {
          qty = this.targetDom.value * 1;
        }
      } else {
        qty = 1;
      }

      axios
        .post(`${this.VITE_URL}/api/${this.VITE_API_PATH}/cart`, {
          data: {
            product_id: productId,
            qty,
          },
        })
        .then((res) => {
          alert(res.data.message);
          this.targetDom.value = "";
          this.isLoading = false;
          e.target.children[0].className = "";
        })
        .catch((err) => {
          alert(err.data.message);
          this.targetDom.value = "";
          this.isLoading = false;
          e.target.children[0].className = "";
        });
    },
    getDom(target) {
      this.targetDom = target;
    },
  },
});
