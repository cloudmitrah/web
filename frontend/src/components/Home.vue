<template>
  <v-container fluid>
    <div>
      <div>
        <v-row>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="success">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="primary">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="indigo">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="warning">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="blue-grey">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">Calls</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">Calls</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">Calls</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">Calls</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="error">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <!-- <div class="white fill-height">&nbsp;</div> -->
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Sales</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card color="green">
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="white fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 white--text">
                  <h5 class="text-truncate text-uppercase">Growth</h5>
                  <h1>23%</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
          <v-col lg="2" cols="md" class="pb-2">
            <v-card>
              <v-row class="no-gutters">
                <div class="col-auto">
                  <div class="success fill-height">&nbsp;</div>
                </div>
                <div class="col pa-3 py-4 success--text">
                  <h5 class="text-truncate text-uppercase">Calls</h5>
                  <h1>213</h1>
                </div>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-snackbar v-model="snackbar" :color="color" :timeout="timeout">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
      <v-divider class="mt-6"></v-divider>
      <v-card>
        <v-card-title>
          Product List
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="primary"
            v-for="item in menuItems"
            :key="item.titles"
            :to="item.path"
            class="mx-1"
            inset
            vertical
          >
            <v-icon left dark>{{ item.icon }}</v-icon>

            {{ item.title }}
          </v-btn>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-detail
          ></v-text-field>
        </v-card-title>

        <v-data-table
          :headers="headers"
          sort-by="invoice_no"
          :items-per-page="5"
          :search="search"
          :items="products"
          :loading="tableLoading"
          loading-text="Loading... Please wait"
          class="elevation-2 clickableRow"
        >
          <template v-slot:item.invoice_date="{ item }">
            {{ item.invoice_date | formatDate }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="blue darken-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="editItem(item)"
                  >mdi-pencil</v-icon
                >
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="blue darken-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="detailpage(item)"
                  >mdi-alert-circle</v-icon
                >
              </template>
              <span>detail</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="red"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="passData(item)"
                  >mdi-delete</v-icon
                >
              </template>
              <span>Delete</span>
            </v-tooltip>
          </template>
          <template v-slot:item.invoicepdf="{ item }">
            <v-btn
              x-small
              class="mx-auto"
              color="primary"
              label="Original"
              value="Original"
              @click="getpdf(item, 'Original for Reciever')"
              >Original</v-btn
            >&nbsp;
            <v-btn
              x-small
              class="mx-auto"
              color="primary"
              label="Duplicate"
              value="Duplicate"
              @click="getpdf(item, 'Duplicate for Transporter')"
              >Duplicate</v-btn
            >&nbsp;
            <v-btn
              x-small
              class="mx-auto"
              color="primary"
              label="Triplicate"
              value="Triplicate"
              @click="getpdf(item, 'Triplicate for Supplier')"
              >Triplicate</v-btn
            >
          </template>
        </v-data-table>
      </v-card>
      <v-layout row justify-center>
        <v-dialog v-model="confirmVisibilty" persistent max-width="290">
          <v-card>
            <v-card-title
              class="error headline"
              style="font-wight:bold; color:white;"
              >Confirm Delete</v-card-title
            >
            <v-card-text
              >Are you sure you want to delete this product?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="confirmVisibilty = false">Cancel</v-btn>
              <v-btn color="error" text @click="deleteItem()">Confirm</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>

      <div></div>
    </div>
    <v-snackbar
      v-model="deleteSnackbar"
      :timeout="deletetimeout"
      :color="color"
    >
      {{ textDelete }}
    </v-snackbar>
  </v-container>
</template>
<script>
import download from "downloadjs";
import ProductService from "../service/ProductService";
export default {
  name: "home",
  data() {
    return {
      search: "",
      products: [],
      color: "success",
      snackbar: this.$route.params.id,
      text: "Product Created Successfully",
      timeout: 3000,
      y: "top",
      loading: true,
      tableLoading: true,
      confirmVisibilty: false,
      deleteId: 0,
      deleteSnackbar: false,
      textDelete: "Product deleted sucessfully",
      deletetimeout: 2000,
      menuItems: [
        { title: "Create", path: "/create", icon: "mdi-message-text" },
      ],

      headers: [
        {
          text: "Invoice No.",
          align: "start",
          sortable: true,
          value: "invoice_no",
        },
        { text: "Invoice Date", value: "invoice_date" },
        { text: "Receiver Name", value: "bill_to_name" },
        { text: "Invoice Total", value: "total_amount_with_tax" },
        { text: "Actions", value: "actions", sortable: false },
        { text: "PDF", value: "invoicepdf", sortable: false },
      ],
    };
  },
  created: function() {
    this.fetchItems();
    this.CalculateTotal();
    this.$store.state.show = true;
  },
  computed: {
    // a computed getter
    fetchData: function () {
      return this.fetchItems();
    }
  },
  methods: {
    fetchItems() {
      // let uri = "http://localhost:8013/products/";
      // let uri = "http://localhost:8013/products";

      // let token=authHeader();
      // console.log(token)
      // let auths='Bearer '+token;
      // alert(auths)
      ProductService.getAll().then((response) => {
        // console.log(response.data)
        this.products = response.data;
        this.tableLoading = false;
      });
      // this.axios.get(uri)

      //  this.axios.get(uri,{headers: {authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTk1Njk3OTgzLCJpYXQiOjE1OTU2Nzk5ODN9.cDBDfN33NxVOH1AbVHlJ8S7lAdWZKjZsUxI2DoE6sP1ee-uyI8GnxgyNRZb47qB930Bd4akepm0z5_gwd6QAng'},  crossdomain: true }).then(response => {
      //        this.products = response.data;
      //                 console.log(response.data)
      //       });
    },

    passData(item) {
      this.confirmVisibilty = true;
      this.deleteId = item.id;
    },

    deleteItem() {
      let id = this.deleteId;
      this.confirmVisibilty = false;
      this.products.splice(id, 1);
      ProductService.delete(id).then(() => {
        this.deleteSnackbar = true;
        this.fetchItems();
      });
    },

    editItem(item) {
      this.$router.push({ name: "Edit", params: { id: item.id } });
    },
    detailpage(item) {
      this.$router.push({ name: "Details", params: { id: item.id } });
    },
    CalculateTotal() {
      var totalWithoutTax;
      var totalWithTax;
      var totalInvoice;
      for (var i = 0; i < this.products.length; i++) {
        totalWithoutTax = totalWithoutTax + this.products[i].amount_without_tax;
        totalWithTax = totalWithTax + this.products[i].total_amount_with_tax;
        totalInvoice = totalInvoice + (i + 1);
      }
    },
    getpdf(item, pdfType) {
      let pdfid = item.id;
      let billTo = item.bill_to_name;
      var filename =
        "Tax_Invoice_No." +
        item.invoice_no +
        "(" +
        pdfType +
        ")(" +
        billTo +
        ")" +
        ".pdf";
      ProductService.getPDFbyId(pdfid, pdfType)
        .then((response) => {
          const content = response.headers["content-type"];
          download(response.data, filename, content);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.clickableRow {
  cursor: pointer;
}
</style>
