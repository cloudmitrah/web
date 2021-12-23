<template>
  <div class="create">
    <Header />
    <Create />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Create from "@/components/CreateProduct.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "create",
  components: {
    Create,
    Header,
    Footer,
  },
};
</script>
