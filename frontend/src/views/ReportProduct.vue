<template>
  <div class="create">
    <Header />
    <Reports />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Reports from "@/components/Reports.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "create",
  components: {
    Reports,
    Header,
    Footer,
  },
};
</script>
