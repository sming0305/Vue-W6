<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top navbar-dark bg-dark border-bottom border-warning"
  >
    <div class="container-fluid">
      <h1>
        <router-link to="/" class="navbar-brand fw-bold fs--14 text-white">
          Sushi-酯</router-link
        >
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <router-link
              class="nav-link fw-bold me-lg-4"
              aria-current="page"
              to="/"
              >Home</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link
              to="/products"
              class="nav-link fw-bold me-lg-4"
              aria-current="page"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link fw-bold me-lg-4"
              aria-current="page"
              to="/cart"
              >購物車</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
