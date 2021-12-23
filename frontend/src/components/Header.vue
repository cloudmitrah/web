<template>
  <div>
    <div>
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <template>
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div>
      <v-app-bar
        dense
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            Brand
          </router-link></v-toolbar-title
        >
        <v-spacer></v-spacer>

        <v-btn
          flat
          color="indigo"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="mx-1"
          inset
          vertical
        >
          <v-icon left dark>{{ item.icon }}</v-icon>

          {{ item.title }}
        </v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <div class="my-2">
          <v-btn @click="logout()" color="error" fab small dark>
            <v-icon>exit_to_app</v-icon>
          </v-btn>
        </div>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: true,
    drawer: false,
    menuItems: [
      { title: "Create", path: "/create", icon: "mdi-message-text" },
      { title: "Reports", path: "/reports", icon: "mdi-receipt" },
    ],
  }),
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<!-- <div>
    <v-app-bar
      color="indigo"
      dense
      dark
      fixed
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Gulistan</v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn flat color="indigo">Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div> -->
