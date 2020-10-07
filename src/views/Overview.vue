<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col cols="6">
          <v-row no-gutters justify="center">
            <v-img contain max-width="400" :src="product.image"></v-img>
          </v-row>
          <v-row no-gutters justify="center">
            <v-col cols="3">
              <v-card class="mx-auto">
                <v-img :src="product.image"></v-img>
              </v-card>
            </v-col>
            <v-col cols="3" class="mx-10">
              <v-card class="mx-auto">
                <v-img :src="product.image"></v-img>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card class="mx-auto">
                <v-img :src="product.image"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <h1>
            {{ product.name }}
          </h1>
          <h1 class="font-weight-black orange-text">₱{{ product.price }}</h1>
          <p class="py-5">
            {{ product.description }}
          </p>
          <v-row no-gutters>
            <v-col cols="12">
              <v-btn
                outlined
                tile
                style="font-size: 2em"
                @click="quantityDecrement"
                >-</v-btn
              >
              <v-btn outlined tile style="font-size: 2em">{{ quantity }}</v-btn>
              <v-btn
                outlined
                tile
                style="font-size: 2em"
                @click="quantityIncrement"
                >+</v-btn
              >
            </v-col>
          </v-row>
          <br />
          <v-row no-gutters>
            <v-col cols="12">
              <v-btn
                depressed
                tile
                x-large
                color="#fca311"
                @click="addtocart(product)"
              >
                <v-icon left>mdi-cart</v-icon>
                <b>Add to Cart</b>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-5 divider-border" width="400"></v-divider>
          <v-btn tile outlined class="mr-5" @click="wishlistbtn(product)">
            <v-icon left>mdi-heart</v-icon>
            Add to Wishlist
          </v-btn>
          <v-btn tile outlined>
            <v-icon left>mdi-compare-horizontal</v-icon>
            Compare Product
          </v-btn>
          <div class="mt-5">
            <p><b>SKU:</b> VC-INNO3D RTX2080 SUPER OC X3 8GB DDR6 256BIT</p>
            <p>
              <b>Category:</b> {{ product.category[0] }},
              {{ product.category[1] }}
            </p>
            <p><b>Tags:</b> Components, Gigabyte, Motherboard</p>
            <p>
              <b class="mr-3">Share:</b>
              <v-icon class="mr-3" color="#4267B2">mdi-facebook</v-icon>
              <v-icon class="mr-3" color="#1DA1F2">mdi-twitter</v-icon>
              <v-icon>mdi-instagram</v-icon>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-tabs v-model="tab" color="#fca311">
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-title style="fontSize: 1.5rem">Description</v-card-title>
            <v-card-text class="text--primary">
              <v-row no-gutters>
                <v-col
                  cols="4"
                  class="font-weight-bold mb-5"
                  style="fontSize: 1rem"
                  >CUDA Cores</v-col
                >
                <v-col cols="8" class="mb-5">3072</v-col>
                <v-col
                  cols="4"
                  class="font-weight-bold mb-5"
                  style="fontSize: 1rem"
                  >CUDA Cores</v-col
                >
                <v-col cols="8" class="mb-5">3072</v-col>
                <v-col
                  cols="4"
                  class="font-weight-bold mb-5"
                  style="fontSize: 1rem"
                  >CUDA Cores</v-col
                >
                <v-col cols="8" class="mb-5">3072</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-title style="fontSize: 1.5rem"
              >FAQ & Disclamers</v-card-title
            >
            <v-card-text class="text--primary">
              <v-expansion-panels multiple flat>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="font-weight-bold"
                    style="border-bottom: 1px solid #fca311"
                    >How to Order</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="mt-3">
                    Before submitting your order, kindly read and understand our
                    Terms and Conditions. You will have to agree with it before
                    you could place an order on our website.
                  </v-expansion-panel-content>
                  <v-divider></v-divider>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="font-weight-bold"
                    style="border-bottom: 1px solid #fca311"
                    >How do I pay my orders?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="mt-3">
                    Accepts: credit, debit, and prepaid cards
                  </v-expansion-panel-content>
                  <v-divider></v-divider>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    class="font-weight-bold"
                    style="border-bottom: 1px solid #fca311"
                    >How do I track my Orders?</v-expansion-panel-header
                  >
                  <v-expansion-panel-content class="mt-3">
                    When logged in, go to My Account to access your dashboard.
                    Click on the orders and click on the "VIEW" button for the
                    order number that you need to check. You may see the status
                    of your shipment under the ORDER UPDATES sections
                  </v-expansion-panel-content>
                  <v-divider></v-divider>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
const SlideItem = () => import("@/components/SlideItem");

export default {
  components: {
    SlideItem
  },
  data: () => ({
    product: {},
    quantity: 1,
    tab: null,
    items: [{ tab: "Description" }, { tab: "FAQ & Disclamers" }]
  }),

  created() {
    this.product = this.products.find(
      product => product.id == this.$route.params.id
    );
  },

  computed: {
    ...mapState({
      products: "products"
    })
  },

  methods: {
    quantityDecrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    quantityIncrement() {
      this.quantity++;
    },

    addtocart(item) {
      const quantity = this.quantity;
      this.$store.dispatch("addToCartProduct", {
        ...item,
        quantity
      });
    },

    wishlistbtn(item) {
      this.$store.dispatch("wishlistProduct", item);
    }
  }
};
</script>
