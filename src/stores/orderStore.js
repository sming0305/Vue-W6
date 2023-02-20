const { VITE_URL, VITE_API_PATH } = import.meta.env;
import { defineStore, mapActions } from "pinia";
import axios from "axios";
import cartsStore from "@/stores/cartsStore";

export default defineStore("orderStore", {
  state: () => ({
    VITE_URL,
    VITE_API_PATH,
    form: {},
  }),
  actions: {
    sendOrder(order) {
      axios
        .post(`${this.VITE_URL}/api/${this.VITE_API_PATH}/order`, order)
        .then((res) => {
          this.getCarts();
          this.form.resetForm(null);
          alert(res.data.message);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    phoneValidate(value) {
      const phoneRule1 = /^09[0-9]{8}$/;
      const PhoneRole2 = /^0\d{1,2}-\d{6,8}$/;

      if (!value || !value.length) {
        return "聯絡電話為必填項目";
      }

      if (!phoneRule1.test(value) && !PhoneRole2.test(value)) {
        return "請輸入手機號碼09開頭10碼號碼，或市話格式0X-XXXXXXXX";
      } else {
        return true;
      }
    },
    getTargetForm(target) {
      this.form = target;
    },
    ...mapActions(cartsStore, ["getCarts"]),
  },
});
