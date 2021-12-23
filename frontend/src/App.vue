<template>
  <v-app  id="inspire">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Create", path: "/create", icon: "face" },
        { title: "Sign In", path: "/about", icon: "lock_open" },
      ],
    };
  },
};
</script>
<style></style>
