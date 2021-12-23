import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import moment from "moment";
import VueExcelXlsx from "vue-excel-xlsx";

Vue.config.productionTip = false;
Vue.use(VueExcelXlsx);
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
