<template>
  <div class="bg-dark h-100 py-8" style="min-height: 100vh">
    <CartScrtion></CartScrtion>
    <OrderSction></OrderSction>
  </div>
</template>
<script>
import CartScrtion from "../components/CartComponent.vue";
import OrderSction from "../components/OrderComponent.vue";
export default {
  components: {
    CartScrtion,
    OrderSction,
  },
};
</script>
