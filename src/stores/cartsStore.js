const { VITE_URL, VITE_API_PATH } = import.meta.env;
import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("cartsStore", {
  state: () => ({
    VITE_URL,
    VITE_API_PATH,
    carts: [],
    isLoading: false,
  }),
  actions: {
    getCarts() {
      axios
        .get(`${this.VITE_URL}/api/${this.VITE_API_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    editProduct(id, productId, e) {
      let qty = e.target.value * 1;
      if (qty < 1) {
        qty = 1;
      }

      this.isLoading = true;

      axios
        .put(`${this.VITE_URL}/api/${this.VITE_API_PATH}/cart/${id}`, {
          data: {
            product_id: productId,
            qty,
          },
        })
        .then((res) => {
          alert(res.data.message);
          this.getCarts();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.data.message);
          this.isLoading = false;
        });
    },
    delProduct(productId, e) {
      e.target.children[0].className = "me-1 fa-solid fa-circle-notch fa-spin";
      this.isLoading = true;
      axios
        .delete(`${this.VITE_URL}/api/${this.VITE_API_PATH}/cart/${productId}`)
        .then((res) => {
          this.getCarts();
          e.target.children[0].className = "";
          this.isLoading = false;
          alert(res.data.message);
        })
        .catch((err) => {
          alert(err.data.message);
          this.isLoading = false;
          e.target.children[0].className = "";
        });
    },
  },
});
