<template>
  <div class="home">
    <Header />
    <Homes />
    <Footer />
  </div>
</template>

<script>
import Homes from "@/components/Home.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",

  components: {
    Homes,
    Header,
    Footer,
  },
};
</script>
