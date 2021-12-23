<template>
  <div class="create">
    <Header />
    <Edit />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Edit from "@/components/Edit.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "create",
  components: {
    Edit,
    Header,
    Footer,
  },
};
</script>
