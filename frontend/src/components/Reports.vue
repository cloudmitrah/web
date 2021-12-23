<template>
  <div>
    <v-card>
      <v-card-title primary-title class="justify-center">
        <div class="display-1 text--primary">Generate Report</div>
      </v-card-title>
      <v-card-text>
        <v-form
          v-on:submit.prevent
          ref="form"
          autocomplete="off"
          v-model="valid"
        >
          <v-card>
            <v-card-title primary-title>Select Dates</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="invoice_date1"
                        label="Invoice Date1"
                        prepend-icon="event"
                        readonly
                        :rules="RequiredRule"
                        required
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      @input="menu2 = false"
                      v-model="invoice_date1"
                      :max="currentDate"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="6">
                  <v-menu
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="invoice_date2"
                        label="Invoice Date2"
                        prepend-icon="event"
                        readonly
                        :rules="RequiredRule"
                        required
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="invoice_date2"
                      :max="currentDate"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="justify-center">
              <!-- <v-btn type="submit"  color="primary">Login</v-btn> -->
              <v-btn
                type="submit"
                :loading="buttonLoading"
                :disabled="!valid"
                @click="getReports()"
                color="primary"
                class="mr-4"
                >Get Report</v-btn
              >
            </v-card-actions>
            <!-- <v-divider class="mt-12"></v-divider> -->
          </v-card>
        </v-form>
        <v-divider class="mt-4"></v-divider>
        <v-data-table
          :headers="headers"
          sort-by="invoice_no"
          :items-per-page="5"
          :items="products"
          class="elevation-1"
          :loading="tableLoading"
        >
          <!-- <template v-slot:item.invoice_date="{ item }">
            <p>{{ item.invoice_date | formatDate}}</p>
          </template>-->
        </v-data-table>
      </v-card-text>

      <v-card-actions class="justify-center">
        <vue-excel-xlsx
          :disabled="!showExportButton"
          :data="products"
          :columns="columns"
          :filename="'Sale_Report_on_' + currentDate"
          :sheetname="'Sale_Report_on_' + currentDate"
        >
          <template v-slot:item.invoice_date="{ item }">{{
            item.invoice_date | formatDate
          }}</template>
          <v-btn :disabled="!showExportButton" color="primary" class="mr-4"
            >Export to Excel</v-btn
          >
          <!-- Download -->
        </vue-excel-xlsx>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import ProductService from "../service/ProductService";
export default {
  data() {
    return {
      products: [],
      date1: "",
      buttonLoading: false,
      tableLoading: false,
      menu2: false,
      showExportButton: false,
      columns: [
        {
          label: "Invoice No.",
          field: "invoice_no",
        },
        { label: "Invoice Date", field: "invoice_date" },
        { label: "Vendor Name", field: "bill_to_name" },
        { label: "GSTIN", field: "bill_to_gstin" },

        { label: "State", field: "bill_to_state" },
        {
          label: "Description of Product/Services",
          field: "reports_description",
        },
        { label: "Amount Without Tax", field: "amount_without_tax" },

        { label: "CGST Amount", field: "total_cgst" },
        { label: "SGST Amount", field: "total_sgst" },
        { label: "IGST Amount", field: "total_igst" },

        { label: "Total Tax", field: "total_tax" },
        { label: "Amount With Tax", field: "total_amount_with_tax" },
      ],

      valid: true,
      dialog: false,
      RequiredRule: [(v) => !!v || "This is required"],
      invoice_date1: "",
      invoice_date2: new Date().toISOString().substr(0, 10),
      currentDate: new Date().toISOString().substr(0, 10),
      headers: [
        {
          text: "Invoice No.",
          align: "start",
          sortable: true,
          value: "invoice_no",
        },
        { text: "Invoice Date", value: "invoice_date" },
        { text: "Vendor Name", value: "bill_to_name" },
        { text: "GSTIN", value: "bill_to_gstin" },

        { text: "State", value: "bill_to_state" },
        {
          text: "Description of Product/Services",
          value: "reports_description",
        },
        { text: "Amount Without Tax", value: "amount_without_tax" },

        { text: "CGST Amount", value: "total_cgst" },
        { text: "SGST Amount", value: "total_sgst" },
        { text: "IGST Amount", value: "total_igst" },

        { text: "Total Tax", value: "total_tax" },
        { text: "Amount With Tax", value: "total_amount_with_tax" },
      ],
    };
  },

  created: function() {
    // this.fetchItems();
    this.$store.state.show = true;
  },
  updated: function() {
    for (let i = 0; i < this.products.length; i++) {
      let date2 = this.products[i].invoice_date;
      this.products[i].invoice_date = moment(String(date2)).format(
        "DD/MM/YYYY"
      );
    }
    console.log();
  },
  methods: {
    getReports() {
      this.buttonLoading = true;
      this.tableLoading = true;
      ProductService.getReport(this.invoice_date1, this.invoice_date2).then(
        (response) => {
          this.products = response.data;
          this.showExportButton = true;
          this.buttonLoading = false;
          this.tableLoading = false;
        }
      );
    },
  },
};
</script>
