<template>
  <div class="create">
    <Header />
    <Details />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Details from "@/components/Details.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "create",
  components: {
    Details,
    Header,
    Footer,
  },
};
</script>
