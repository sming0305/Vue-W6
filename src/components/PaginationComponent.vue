<template>
  <nav aria-label="Page navigation ">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link bg-dark rounded-0 border-0"
          href="#"
          aria-label="Previous"
          :class="{ disabled: pagination.current_page === 1 }"
          @click.prevent="getProduct(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="i in pagination.total_pages" :key="i">
        <a
          class="page-link bg-dark border-0"
          href="#"
          @click.prevent="getProduct(i)"
          :class="{ disabled: i === pagination.current_page }"
          >{{ i }}</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link bg-dark rounded-0 border-0"
          href="#"
          aria-label="Next"
          :class="{
            disabled: pagination.current_page === pagination.total_pages,
          }"
          @click.prevent="getProduct(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapActions, mapState } from "pinia";
import productsStore from "../stores/productsStore.js";

export default {
  methods: {
    ...mapActions(productsStore, ["getProduct"]),
  },
  computed: {
    ...mapState(productsStore, ["pagination"]),
  },
};
</script>
