<template>
  <v-container fluid>
    <v-form
      v-on:submit.prevent="CreateProduct"
      ref="form"
      autocomplete="off"
      v-model="valid"
    >
      <v-card>
        <v-card-title primary-title class="justify-center">
          <div class="display-1 text--primary">Create Product</div>
        </v-card-title>
        <v-card-text>
          <v-card ref="form">
            <v-card-title primary-title>Invoice Details</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model.number="form.invoice_no"
                    label="Invoice No."
                    inputmode="numeric"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxlength="4"
                    :rules="IntegerNumberRule"
                    v-on:keypress="isNumber($event)"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.invoice_date"
                        label="Invoice Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.invoice_date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    v-model.number="form.eway_bill_no"
                    label="Eway Bill No."
                    inputmode="numeric"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="form.dispatch_from"
                    label="Dispatch From"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="form.place_of_supply"
                    label="Place Of Supply"
                    :rules="RequiredRule"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="form.vehicle_no"
                    label="Vehicle No."
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row> </v-row>

              <v-row>
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="form.transport_name"
                    label="Transport Name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-select
                    :items="reverse_charge_applicable"
                    label="Reverse Charge Applicable"
                    v-model="form.reverse_charge_applicable"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-divider class="mt-6"></v-divider>
          <v-row>
            <v-col cols="12" md="6">
              <v-card ref="form">
                <v-card-title primary-title
                  >Details of Receiver | Bill To
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_name"
                        label="Name"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_gstin"
                        label="GSTIN"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_adress_line1"
                        label="Adress Line 1"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_adress_line2"
                        label="Adress Line 2"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_city"
                        label="City"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model.number="form.bill_to_pincode"
                        label="Pin Code"
                        inputmode="numeric"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        maxlength="6"
                        v-on:keypress="isNumber($event)"
                        :rules="IntegerNumberRule"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-select
                        item-text="name"
                        item-value="name"
                        label="Bill To State"
                        v-model="form.bill_to_state"
                        :items="stateListCode"
                        return-object
                        :rules="RequiredRule"
                        required
                        @change="getcode()"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.bill_to_code"
                        label="Bill To State Code"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card ref="form">
                <v-card-title primary-title
                  >Details of Consignee | Ship To
                </v-card-title>

                <v-card-text>
                  <v-checkbox
                    v-model="checkbox1"
                    label="same as Bill To"
                    @change="check($event)"
                  ></v-checkbox>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_name"
                        label="Name"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_gstin"
                        label="GSTIN"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_adress_line1"
                        label="Adress Line 1"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_adress_line2"
                        label="Adress Line 2"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_city"
                        label="City"
                        :rules="RequiredRule"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_pincode"
                        label="Pin Code"
                        inputmode="numeric"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        maxlength="6"
                        :rules="IntegerNumberRule"
                        v-on:keypress="isNumber($event)"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="4">
                      <v-select
                        item-text="name"
                        item-value="name"
                        label="Ship To State"
                        v-model="form.ship_to_state"
                        :items="stateListCode"
                        return-object
                        :rules="RequiredRule"
                        required
                        @change="getShipToCode()"
                      ></v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="form.ship_to_code"
                        label="Ship To State Code"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-divider class="mt-6"></v-divider>

          <v-card elevation="6" outlined>
            <v-card-title primary-title>Product Details</v-card-title>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th rowspan="2">SN</th>
                    <th colspan="2" rowspan="2">Description</th>
                    <th rowspan="2" width="6%">HSN/ SAC</th>
                    <th rowspan="2" width="8%">Qty</th>
                    <th rowspan="2" width="6%">Unit</th>
                    <th rowspan="2">Rate</th>
                    <th rowspan="2">Amount</th>
                    <th style="text-align: center" colspan="2">CGST</th>
                    <th style="text-align: center" colspan="2">SGST</th>
                    <th style="text-align: center" colspan="2">IGST</th>
                    <th style="text-align: center" rowspan="2">Tax Amt</th>
                    <th style="text-align: center" rowspan="2">Total</th>
                    <th style="text-align: center" rowspan="2">Action</th>
                  </tr>
                  <tr>
                    <th>Rate</th>
                    <th>Amt</th>
                    <th>Rate</th>
                    <th>Amt</th>
                    <th>Rate</th>
                    <th>Amt</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(productList, k) in form.productList" :key="k">
                    <td>{{ k + 1 }}</td>
                    <td colspan="2">
                      <v-text-field
                        :rules="RequiredRule"
                        v-model="productList.description"
                        required
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        inputmode="numeric"
                        :rules="IntegerNumberRule"
                        v-model.number="productList.hsn_sac"
                        v-on:keypress="isNumber($event)"
                        required
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        v-on:keypress="isNumber($event)"
                        v-model.number="productList.quantity"
                        :rules="RequiredRule"
                        inputmode="numeric"
                        v-on:keyup="calculateLineTotal(productList)"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        :rules="RequiredRule"
                        v-model.number="productList.unit"
                        required
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        v-model.number="productList.rate"
                        v-on:keypress="isNumber($event)"
                        :rules="RequiredRule"
                        inputmode="numeric"
                        required
                        v-on:keyup="calculateLineTotal(productList)"
                      ></v-text-field>
                    </td>
                    <td style="text-align: left;">
                      {{ productList.amount }}
                    </td>
                    <td>
                      <v-select
                        :items="SGSTCGSTRate"
                        v-model="productList.cgst_rate"
                        :readonly="form.bill_to_code != 27"
                        @change="calculateLineTotal(productList)"
                      ></v-select>
                    </td>
                    <td style="text-align: left;">
                      {{ productList.cgst_amount }}
                    </td>
                    <td>
                      <v-select
                        :items="SGSTCGSTRate"
                        v-model="productList.sgst_rate"
                        :readonly="form.bill_to_code != 27"
                        @change="calculateLineTotal(productList)"
                      ></v-select>
                    </td>
                    <td style="text-align: left;">
                      {{ productList.sgst_amount }}
                    </td>
                    <td>
                      <v-select
                        :items="IGSTRate"
                        v-model="productList.igst_rate"
                        :readonly="form.bill_to_code == 27"
                        @change="calculateLineTotal(productList)"
                      ></v-select>
                    </td>
                    <td style="text-align: left;">
                      {{ productList.igst_amount }}
                    </td>
                    <td style="text-align: left">
                      {{ productList.tax_amount }}
                    </td>
                    <td style="text-align: left">
                      {{ productList.total_amount }}
                    </td>
                    <td>
                      <v-btn
                        v-if="!k == 0"
                        @click="deleteRow(k, productList)"
                        class="mx-2"
                        fab
                        dark
                        small
                        color="error"
                      >
                        <v-icon dark>mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-right">
              <v-btn
                @click="addNewRow"
                class="mx-2"
                fab
                dark
                small
                color="success"
              >
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
          </v-card>
          <v-divider class="mt-6"></v-divider>
          <v-card>
            <v-card-title primary-title>Product Calculation</v-card-title>
            <v-card-text>
              <v-row no-gutters>
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
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
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
                    >CGST Amount(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_cgst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
                    >SGST Amount(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_sgst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
                    >IGST Amount(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>{{
                    form.total_igst
                  }}</v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
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
                <v-col :cols="8">
                  <v-card class="pa-2 text-right" outlined tile
                    >Total Amount With Tax(Rs.)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile>
                    <b>{{ form.total_amount_with_tax }}/-</b></v-card
                  >
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col :cols="5">
                  <v-card class="pa-2 text-right" outlined tile
                    >Amount in Words(INR)</v-card
                  >
                </v-col>
                <v-col>
                  <v-card class="pa-2" outlined tile
                    ><b>{{ AmountinWords }}</b></v-card
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            :loading="buttonLoading"
            type="submit"
            :disabled="!valid"
            color="success"
            class="mr-4"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import ProductService from "../service/ProductService";
export default {
  data: () => ({
    invoice_date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    buttonLoading: false,
    reverse_charge_applicable: [{ text: "No", value: "No" }, "Yes"],
    // reverse_charge_applicable: ["No", "Yes"],
    defaultSelected: "No",
    checkbox1: false,
    AmountinWords: "0",
    SGSTCGSTRate: [
      { text: "2.5%", value: 2.5 },
      { text: "6%", value: 6 },
      { text: "9%", value: 9 },
      { text: "14%", value: 14 },
    ],
    IGSTRate: [5, 12, 18, 28],

    form: {
      invoice_no: "",
      invoice_date: new Date().toISOString().substr(0, 10),
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
    valid: true,
    RequiredRule: [(v) => !!v || "This is required"],
    IntegerNumberRule: [
      (v) => !!v || "This is required",
      (v) => Number.isInteger(Number(v)) || "The value must be a integer",
    ],
    stateListCode: [
      {
        name: "ANDAMAN AND NICOBAR",
        id: 35,
      },
      {
        name: "ANDHRA PRADESH",
        id: 37,
      },
      {
        name: "ARUNACHAL PRADESH",
        id: 12,
      },
      {
        name: "ASSAM",
        id: 18,
      },
      {
        name: "BIHAR",
        id: 10,
      },
      {
        name: "CHANDIGARH",
        id: 4,
      },
      {
        name: "CHHATTISGARH",
        id: 22,
      },
      {
        name: "DADRA AND NAGAR HAVELI",
        id: 26,
      },
      {
        name: "DAMAN AND DIU",
        id: 25,
      },
      {
        name: "DELHI",
        id: 7,
      },
      {
        name: "GOA",
        id: 30,
      },
      {
        name: "GUJARAT",
        id: 24,
      },
      {
        name: "HARYANA",
        id: 6,
      },
      {
        name: "HIMACHAL PRADESH",
        id: 2,
      },
      {
        name: "JAMMU AND KASHMIR",
        id: 1,
      },
      {
        name: "JHARKHAND",
        id: 20,
      },
      {
        name: "KARNATAKA",
        id: 29,
      },
      {
        name: "KERALA",
        id: 32,
      },
      {
        name: "LAKSHADWEEP",
        id: 31,
      },
      {
        name: "MADHYA PRADESH",
        id: 23,
      },
      {
        name: "MAHARASHTRA",
        id: 27,
      },
      {
        name: "MANIPUR",
        id: 14,
      },
      {
        name: "MEGHALAYA",
        id: 17,
      },
      {
        name: "MIZORAM",
        id: 15,
      },
      {
        name: "NAGALAND",
        id: 13,
      },
      {
        name: "ODISHA",
        id: 21,
      },
      {
        name: "PUDUCHERRY",
        id: 34,
      },
      {
        name: "PUNJAB",
        id: 3,
      },
      {
        name: "RAJASTHAN",
        id: 8,
      },
      {
        name: "SIKKIM",
        id: 11,
      },
      {
        name: "TAMIL NADU",
        id: 33,
      },
      {
        name: "TELANGANA",
        id: 36,
      },
      {
        name: "TRIPURA",
        id: 16,
      },
      {
        name: "UTTAR PRADESH",
        id: 9,
      },
      {
        name: "UTTARAKHAND",
        id: 5,
      },
      {
        name: "WEST BENGAL",
        id: 19,
      },
    ],
  }),
  created: function() {
    this.$store.state.show = true;
  },
  methods: {
    getcode: function() {
      this.form.bill_to_code = this.form.bill_to_state.id;
      if (this.form.bill_to_state) {
        this.form.bill_to_state = this.form.bill_to_state.name;
      }
    },

    getShipToCode: function() {
      this.form.ship_to_code = this.form.ship_to_state.id;
      if (this.form.ship_to_state) {
        this.form.ship_to_state = this.form.ship_to_state.name;
      }
    },

    saveInvoice() {
      console.log(JSON.stringify(this.productList));
    },
    calculateTotal() {
      this.form.amount_without_tax = this.form.productList.reduce(function(
        sum,
        product
      ) {
        var lineAmountWithoutTax = parseFloat(product.amount);
        if (!isNaN(lineAmountWithoutTax)) {
          return sum + lineAmountWithoutTax;
        }
      },
      0);
      this.form.amount_without_tax =
        Math.round((this.form.amount_without_tax + Number.EPSILON) * 100) / 100;

      this.form.total_cgst = this.form.productList.reduce(function(
        sum,
        product
      ) {
        var CGSTTotal = parseFloat(product.cgst_amount);
        if (!isNaN(CGSTTotal)) {
          return sum + CGSTTotal;
        }
      },
      0);
      this.form.total_cgst =
        Math.round((this.form.total_cgst + Number.EPSILON) * 100) / 100;

      this.form.total_sgst = this.form.productList.reduce(function(
        sum,
        product
      ) {
        var SGSTTotal = parseFloat(product.sgst_amount);
        if (!isNaN(SGSTTotal)) {
          return sum + SGSTTotal;
        }
      },
      0);
      this.form.total_sgst =
        Math.round((this.form.total_sgst + Number.EPSILON) * 100) / 100;

      this.form.total_igst = this.form.productList.reduce(function(
        sum,
        product
      ) {
        var IGSTTotal = parseFloat(product.igst_amount);
        if (!isNaN(IGSTTotal)) {
          return sum + IGSTTotal;
        }
      },
      0);
      this.form.total_igst =
        Math.round((this.form.total_igst + Number.EPSILON) * 100) / 100;

      this.form.total_tax =
        this.form.total_igst + this.form.total_sgst + this.form.total_cgst;

      this.form.total_amount_with_tax = this.form.productList.reduce(function(
        sum,
        product
      ) {
        var TotalAmountWithTax = parseFloat(product.total_amount);
        if (!isNaN(TotalAmountWithTax)) {
          return sum + TotalAmountWithTax;
        }
      },
      0);
      this.form.total_amount_with_tax = Math.round(
        this.form.total_amount_with_tax
      );

      this.AmountinWords = this.convertToWords(this.form.total_amount_with_tax);

      //   total = subtotal * (18 / 100) + subtotal;
      //   total = parseFloat(total);
      //   if (!isNaN(total)) {
      //     this.invoice_total = total.toFixed(2);
      //   } else {
      //     this.invoice_total = "0.00";
      //   }
    },
    calculateLineTotal(productList) {
      // alert(productList.quantity)
      var LineTotalWithoutTax =
        parseFloat(productList.rate) * parseFloat(productList.quantity);
      var tax1_amount =
        (parseFloat(LineTotalWithoutTax) * parseFloat(productList.cgst_rate)) /
        100;
      var tax2_amount =
        (parseFloat(LineTotalWithoutTax) * parseFloat(productList.sgst_rate)) /
        100;
      var tax3_amount =
        (parseFloat(LineTotalWithoutTax) * parseFloat(productList.igst_rate)) /
        100;
      if (!isNaN(LineTotalWithoutTax)) {
        productList.amount = LineTotalWithoutTax;
        productList.cgst_amount =
          Math.round((tax1_amount + Number.EPSILON) * 100) / 100;
        productList.sgst_amount =
          Math.round((tax2_amount + Number.EPSILON) * 100) / 100;
        productList.igst_amount =
          Math.round((tax3_amount + Number.EPSILON) * 100) / 100;
        var LineTotalWithTax =
          LineTotalWithoutTax + tax1_amount + tax2_amount + tax3_amount;
        var lineTax = tax1_amount + tax2_amount + tax3_amount;
        productList.tax_amount = lineTax;
        productList.total_amount = Math.round(LineTotalWithTax);
      }
      this.calculateTotal();
    },

    deleteRow(index, productList) {
      var idx = this.form.productList.indexOf(productList);
      console.log(idx, index);
      if (idx > -1) {
        this.form.productList.splice(idx, 1);
      }
      this.calculateTotal();
    },
    addNewRow() {
      this.form.productList.push({
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
      });
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

    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    check: function() {
      this.form.ship_to_name = this.form.bill_to_name;
      this.form.ship_to_adress_line1 = this.form.bill_to_adress_line1;
      this.form.ship_to_adress_line2 = this.form.bill_to_adress_line2;
      this.form.ship_to_city = this.form.bill_to_city;
      this.form.ship_to_pincode = this.form.bill_to_pincode;
      this.form.ship_to_gstin = this.form.bill_to_gstin;
      this.form.ship_to_state = this.form.bill_to_state;
      this.form.ship_to_code = this.form.bill_to_code;
    },
    CreateProduct() {
      this.CreateReportsDetails();
      this.buttonLoading = true;
      ProductService.create(this.form).then((response) => {
        this.$router.push({ name: "Home", params: { id: "true" } });
        console.log(response.data);
      });
    },
    CreateReportsDetails() {
      var i;
      this.form.reports_description = "";
      for (i = 0; i < this.form.productList.length; i++) {
        this.form.reports_description =
          this.form.reports_description +
          "," +
          this.form.productList[i].description;
      }
      this.form.reports_description = this.form.reports_description.substring(
        1
      );
    },
  },
};
</script>
<style scoped>
table th + th {
  border: 1px solid #ddd;
}
table td + td {
  border: 1px solid #ddd;
}

/* table tr + tr {  border: 1px solid #ddd; } */
</style>
