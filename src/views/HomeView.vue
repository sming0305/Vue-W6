<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main class="pt-8">
    <IndexPage v-if="this.$route.fullPath === '/'"></IndexPage>
    <router-view v-else></router-view>
  </main>
</template>

<script>
import IndexPage from "../components/IndexComponent.vue";
import NavBar from "../components/NavBarComponent.vue";

export default {
  components: {
    NavBar,
    IndexPage,
  },
};
</script>
