import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import create from "../views/createProduct.vue";
import Edit from "../views/EditProduct.vue";
import Details from "../views/DetailsProduct.vue";
import Reports from "../views/ReportProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    props: true,
    component: Details,
  },
  {
    path: "/reports",
    name: "Reports",
    props: true,
    component: Reports,
  },

  {
    path: "/create",
    name: "create",
    props: true,
    component: create,
  },
  {
    name: "Edit",
    path: "/edit",
    component: Edit,
    props: true,
    meta: {
      // requiresAuth: true
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
