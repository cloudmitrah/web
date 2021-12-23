<template>
  <v-container fluid>
    <v-form v-on:submit.prevent="updateProduct" ref="form" v-model="valid">
      <v-card>
        <v-row>
          <v-col cols="12" md="3">
            <v-card-title primary-title>
              <div class="title text--primary">Product Details</div>
            </v-card-title>
          </v-col>
          <v-col cols="12" md="9">
            <v-card-title primary-title class="justify-center">
              <v-btn
                type="submit"
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="getpdf('Original for Reciever')"
              >
                Original
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
              <v-btn
                type="submit"
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="getpdf('Duplicate for Transporter')"
              >
                Duplicate
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
              <v-btn
                type="submit"
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="getpdf(item, 'Triplicate for Supplier')"
              >
                Triplicate
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </v-card-title>
          </v-col>
        </v-row>

        <v-card-text>
          <v-card ref="form">
            <v-card-title primary-title>Invoice Details</v-card-title>
            <v-card-text>
              <v-simple-table dense height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Description</th>
                      <th class="text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Invoice No.</td>
<!--                      <td>{{ form.invoice_no }}</td>-->
                      <td>{{ id }}</td>
                    </tr>
                    <tr>
                      <td>Invoice Date</td>
                      <td>{{ form.invoice_date }}</td>
                    </tr>
                    <tr>
                      <td>Eway Bill No.</td>
                      <td>{{ form.eway_bill_no }}</td>
                    </tr>
                    <tr>
                      <td>Dispatch From</td>
                      <td>{{ form.dispatch_from }}</td>
                    </tr>
                    <tr>
                      <td>Place Of Supply</td>
                      <td>{{ form.place_of_supply }}</td>
                    </tr>
                    <tr>
                      <td>Vehicle No.</td>
                      <td>{{ form.vehicle_no }}</td>
                    </tr>
                    <tr>
                      <td>Transport Name</td>
                      <td>{{ form.transport_name }}</td>
                    </tr>
                    <tr>
                      <td>Reverse Charge Applicable</td>
                      <td>{{ form.reverse_charge_applicable }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <!-- <v-divider class="mt-12"></v-divider> -->
          </v-card>
          <v-divider class="mt-6"></v-divider>
          <v-card ref="form">
            <v-card-title primary-title>Receiver Details</v-card-title>
            <v-card-text>
              <v-simple-table dense height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th colspan="2">Details of Receiver | Bill To</th>
                      <th colspan="2">Details of Consignee | Ship To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="10%">Name</td>
                      <td width="40%">{{ form.bill_to_name }}</td>
                      <td width="10%">Name</td>
                      <td width="40%">{{ form.ship_to_name }}</td>
                    </tr>
                    <tr>
                      <td colspan="2" width="50%">
                        Address:
                        <br />
                        {{ form.bill_to_adress_line1 }}
                        <br />
                        {{ form.bill_to_adress_line2 }}
                        <br />
                        {{ form.bill_to_city }}-{{ form.bill_to_pincode }}
                      </td>

                      <td colspan="2" width="50%">
                        Address:
                        <br />
                        {{ form.ship_to_adress_line1 }}
                        <br />
                        {{ form.ship_to_adress_line2 }}
                        <br />
                        {{ form.ship_to_city }}-{{ form.ship_to_pincode }}
                      </td>
                    </tr>
                    <tr>
                      <td>GSTIN</td>
                      <td>{{ form.bill_to_gstin }}</td>
                      <td>GSTIN</td>
                      <td>{{ form.ship_to_gstin }}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{{ form.bill_to_state }}</td>
                      <td>State</td>
                      <td>{{ form.ship_to_state }}</td>
                    </tr>
                    <tr>
                      <td>State Code</td>
                      <td>{{ form.bill_to_code }}</td>
                      <td>State Code</td>
                      <td>{{ form.ship_to_code }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>

          <v-divider class="mt-6"></v-divider>

          <v-card ref="form">
            <v-card-title primary-title>Product Details</v-card-title>
            <v-card-text>
              <table class="table1" >
                <thead class="th1">
                  <tr>
                    <th class="th1" rowspan="2">SN</th>
                    <th class="th1" colspan="2" rowspan="2">Description</th>
                    <th class="th1" rowspan="2">HSN/ SAC</th>
                    <th class="th1" rowspan="2">Qty</th>
                    <th class="th1" rowspan="2">Unit</th>
                    <th class="th1" rowspan="2">Rate</th>
                    <th class="th1" rowspan="2">Amount</th>
                    <th class="th1" style="text-align: center" colspan="2">
                      CGST
                    </th>
                    <th class="th1" style="text-align: center" colspan="2">
                      SGST
                    </th>
                    <th class="th1" style="text-align: center" colspan="2">
                      IGST
                    </th>
                    <th class="th1" style="text-align: center" rowspan="2">
                      Tax Amt
                    </th>
                    <th class="th1" style="text-align: center" rowspan="2">
                      Total
                    </th>
                  </tr>
                  <tr>
                    <th class="th1">Rate</th>
                    <th class="th1">Amt</th>
                    <th class="th1">Rate</th>
                    <th class="th1">Amt</th>
                    <th class="th1">Rate</th>
                    <th class="th1">Amt</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="(productList, k) in form.productList" :key="k">
                    <td class="td1">{{ k + 1 }}</td>
                    <td class="td1" colspan="2">
                      {{ productList.description }}
                    </td>
                    <td class="td1">{{ productList.hsn_sac }}</td>
                    <td class="td1">{{ productList.quantity }}</td>
                    <td class="td1">{{ productList.unit }}</td>
                    <td class="td1">{{ productList.rate }}</td>
                    <td class="td1">{{ productList.amount }}</td>
                    <td class="td1">{{ productList.cgst_rate }}</td>
                    <td class="td1">{{ productList.cgst_amount }}</td>
                    <td class="td1">{{ productList.sgst_rate }}</td>

                    <td class="td1">{{ productList.sgst_amount }}</td>
                    <td class="td1">{{ productList.igst_rate }}</td>
                    <td class="td1">{{ productList.igst_amount }}</td>
                    <td class="td1">{{ productList.tax_amount }}</td>
                    <td class="td1">{{ productList.total_amount }}</td>
                  </tr>
                </tbody>
              </table>
            </v-card-text>

            <!-- <v-divider class="mt-12"></v-divider> -->
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
          <!-- <div>
              <v-btn @click="addNewRow" small color="primary">Add</v-btn>
            </div>-->
          <v-divider class="mt-6"></v-divider>

          <v-card>
            <v-card-title primary-title>Product Calculation</v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile
                    >Amount Without Tax(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.amount_without_tax
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile>CGST Amount(Rs.)</v-card>
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_cgst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile>SGST Amount(Rs.)</v-card>
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_sgst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile>IGST Amount(Rs.)</v-card>
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_igst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile
                    >Total Tax Amount(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_tax
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile
                    >Total Amount With Tax(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_amount_with_tax
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2" outlined tile
                    >Amount in Words(INR)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    AmountinWords
                  }}</v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
        
        <!-- <v-divider class="mt-12"></v-divider> -->
        <v-card-actions class="justify-center">
          <router-link to="/">
            <v-btn color="primary" class="mr-4">Back</v-btn>
          </router-link>
          <v-btn
            type="submit"
            :disabled="!valid"
            color="warning"
            class="mr-4"
            @click="editItem()"
            >Edit</v-btn
          >
           <v-btn
            type="submit"
            :disabled="!valid"
            color="error"
            class="mr-4"
           @click="passData()"
            >Delete</v-btn
          >
        </v-card-actions>
        
      </v-card>
    </v-form>
  </v-container>
  
</template>
<script>
import download from "downloadjs";
import moment from "moment";
import ProductService from "../service/ProductService";
export default {
  data: () => ({
    invoice_date: new Date().toISOString().substr(0, 10),
    menu: true,
    modal: true,
    confirmVisibilty: false,
    props: ['id'],
    // reverse_charge_applicable: ["No", "Yes"],
    pdftype: [
      { title: "Original" },
      { title: "Duplicate" },
      { title: "Triplicate" },
    ],

    form: {
      id: 0,
      invoice_no: "",
      invoice_date: "",
      eway_bill_no: "",
      dispatch_from: "",
      place_of_supply: "",
      vehicle_no: "",
      transport_name: "",
      reverse_charge_applicable: "No",
      bill_to_name: "",
      bill_to_adress_line1: "",
      bill_to_adress_line2: "",
      bill_to_gstin: "",
      bill_to_city: "",
      bill_to_pincode: "",
      bill_to_state: "",
      bill_to_code: "",
      ship_to_name: "",
      ship_to_adress_line1: "",
      ship_to_adress_line2: "",
      ship_to_city: "",
      ship_to_pincode: "",
      ship_to_gstin: "",
      ship_to_state: "",
      ship_to_code: "",
      amount_without_tax: 0,
      total_cgst: 0,
      total_sgst: 0,
      total_igst: 0,
      total_tax: 0,
      total_amount_with_tax: 0,
      reports_description: "",
      productList: [
        {
          product_id: 0,
          id: 0,
          description: "",
          hsn_sac: "",
          quantity: "",
          unit: "",
          rate: "",
          amount: "",
          cgst_rate: 0,
          cgst_amount: "",
          sgst_rate: 0,
          sgst_amount: "",
          igst_rate: 0,
          igst_amount: "",
          tax_amount: "",
          total_amount: "",
        },
      ],
    },
  }),
  created: function() {
    this.getItem();
    this.disabledata = true;
  },

  methods: {
    getItem() {
      // let uri =
      //   "http://localhost:8013/productById/" +
      //   this.$route.params.id;
      ProductService.getProductbyId(this.$route.params.id).then((response) => {
        this.form = response.data;
        this.AmountinWords = this.convertToWords(
          this.form.total_amount_with_tax
        );
        this.form.invoice_date = this.format_date(this.form.invoice_date);
      });
    },
     passData() {
      this.confirmVisibilty = true;
    },
    deleteItem() {
      
      let id = this.$route.params.id;
      //  alert(id)
      this.confirmVisibilty = false;
      // this.products.splice(id, 1);
      ProductService.delete(id).then(() => {
      
      });
      this.$router.push({ name: "Home"});
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },
    convertToWords(total_withtax) {
      //convert Amount to Words
      var amount = total_withtax;
      var words = new Array();
      words[0] = "";
      words[1] = "One";
      words[2] = "Two";
      words[3] = "Three";
      words[4] = "Four";
      words[5] = "Five";
      words[6] = "Six";
      words[7] = "Seven";
      words[8] = "Eight";
      words[9] = "Nine";
      words[10] = "Ten";
      words[11] = "Eleven";
      words[12] = "Twelve";
      words[13] = "Thirteen";
      words[14] = "Fourteen";
      words[15] = "Fifteen";
      words[16] = "Sixteen";
      words[17] = "Seventeen";
      words[18] = "Eighteen";
      words[19] = "Nineteen";
      words[20] = "Twenty";
      words[30] = "Thirty";
      words[40] = "Forty";
      words[50] = "Fifty";
      words[60] = "Sixty";
      words[70] = "Seventy";
      words[80] = "Eighty";
      words[90] = "Ninety";
      amount = amount.toString();
      var atemp = amount.split(".");
      var number = atemp[0].split(",").join("");
      var n_length = number.length;
      var words_string = "";
      if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
          received_n_array[i] = number.substr(i, 1);
        }
        var j = 0;
        for (i = 9 - n_length, j = 0; i < 9; i++, j++) {
          n_array[i] = received_n_array[j];
        }
        for (i = 0, j = 1; i < 9; i++, j++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            if (n_array[i] == 1) {
              n_array[j] = 10 + parseInt(n_array[j]);
              n_array[i] = 0;
            }
          }
        }
        var value = "";
        for (i = 0; i < 9; i++) {
          if (i == 0 || i == 2 || i == 4 || i == 7) {
            value = n_array[i] * 10;
          } else {
            value = n_array[i];
          }
          if (value != 0) {
            words_string += words[value] + " ";
          }
          if (
            (i == 1 && value != 0) ||
            (i == 0 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += "Crores ";
          }
          if (
            (i == 3 && value != 0) ||
            (i == 2 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += "Lakhs ";
          }
          if (
            (i == 5 && value != 0) ||
            (i == 4 && value != 0 && n_array[i + 1] == 0)
          ) {
            words_string += "Thousand ";
          }
          if (
            i == 6 &&
            value != 0 &&
            n_array[i + 1] != 0 &&
            n_array[i + 2] != 0
          ) {
            words_string += "Hundred ";
          } else if (i == 6 && value != 0) {
            words_string += "Hundred ";
          }
        }
        words_string += "Only";
        words_string = words_string.split("  ").join(" ");
      }

      return words_string;
    },
    getpdf(pdfType) {
      let pdfid = this.form.id;
      let billTo = this.form.bill_to_name;
      var filename =
        "Tax_Invoice_No." +
        this.form.invoice_no +
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
    editItem() {
      this.$router.push({ name: "Edit", params: { id: this.form.id } });
    },
  },
};
</script>

<style lang="css">
.table1 {
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  table-layout: auto !important;
  white-space: normal;
  font-size: 14px;
  word-wrap: break-word;
}
.td1 {
  border: 1px solid #808080;
  word-wrap: break-word;
  text-align: center;

}

.th1 {
  text-align: center;
  border: 1px solid #808080;
  word-wrap: break-word;
}
</style>
