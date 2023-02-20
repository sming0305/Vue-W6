<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6 offset-lg-3">
        <VForm
          class="fs--9"
          ref="form"
          v-slot="{ errors }"
          @submit="
            sendOrder(order);
            order.data.message = '';
          "
        >
          <h2 class="fw-bold text-white text-center">填寫訂單</h2>
          <div class="mb-3">
            <label for="email" class="form-label text-white">Email</label>
            <VField
              type="email"
              name="email"
              class="form-control bg-secondary text-white border-dark"
              :class="{ 'is-invalid': errors.email }"
              id="email"
              aria-describedby="emailHelp"
              rules="required|email"
              placeholder="請輸入您的Email"
              v-model="order.data.user.email"
            />
            <VError name="email" class="invalid-feedback"></VError>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label text-white">收件人姓名</label>
            <VField
              type="text"
              name="name"
              class="form-control bg-secondary text-white border-dark"
              :class="{ 'is-invalid': errors.name }"
              id="name"
              rules="required"
              placeholder="請輸入您的姓名"
              v-model="order.data.user.name"
            />
            <VError name="name" class="invalid-feedback"></VError>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label text-white">收件人電話</label>
            <VField
              type="tel"
              name="tel"
              class="form-control bg-secondary text-white border-dark"
              :class="{ 'is-invalid': errors.tel }"
              id="phone"
              :rules="phoneValidate"
              placeholder="請輸入您的聯絡電話"
              v-model="order.data.user.tel"
            />
            <VError name="tel" class="invalid-feedback"></VError>
          </div>
          <div class="mb-4">
            <label for="address" class="form-label text-white"
              >收件人地址</label
            >
            <VField
              type="text"
              name="address"
              class="form-control bg-secondary text-white border-dark"
              :class="{ 'is-invalid': errors.address }"
              id="address"
              rules="required"
              placeholder="請輸入您的地址"
              v-model="order.data.user.address"
            />
            <VError name="address" class="invalid-feedback"></VError>
          </div>
          <label class="form-label text-white" for="floatingTextarea"
            >留言</label
          >
          <div class="form-floating">
            <textarea
              class="form-control bg-secondary text-white border-dark mb-3"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style="height: 200px"
              v-model="order.data.message"
            ></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-outline-danger btn-sm fs--7">
              <i class="me-1"></i>送出訂單
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import orderStore from "@/stores/orderStore.js";
import cartsStore from "@/stores/cartsStore";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
defineRule("required", required);
defineRule("email", email);

configure({
  validateOnInput: true,
  generateMessage: localize("zh_TW", {
    fields: {
      email: {
        required: "Email為必填項目",
        email: "email格式有誤，請輸入有效的email",
      },
      name: {
        required: "姓名為必填項目",
      },
      tel: {
        required: "手機號碼為必填項目",
      },
      address: {
        required: "地址為必填項目",
      },
    },
  }),
});

export default {
  components: {
    VField: Field,
    VForm: Form,
    VError: ErrorMessage,
  },
  data() {
    return {
      order: {
        data: {
          user: {
            name: "",
            email: "",
            tel: "",
            address: "",
          },
          message: "",
        },
      },
    };
  },
  methods: {
    ...mapActions(orderStore, ["phoneValidate", "sendOrder", "getTargetForm"]),
    ...mapActions(cartsStore, ["getCarts"]),
  },
  mounted() {
    this.getTargetForm(this.$refs.form);
  },
};
</script>
