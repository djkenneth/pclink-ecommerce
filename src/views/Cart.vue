<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="font-weight-black" style="fontSize: 2.5rem">Shoping Cart</h1>
      </v-col>
    </v-row>
    <v-row no-gutters align="center">
      <v-col cols="8">
        <div v-if="addToCartProducts.length">
          <v-card
            v-for="(product, index) in addToCartProducts"
            :key="product.id"
            class="d-flex mb-8 mr-2"
          >
            <v-btn
              dark
              fab
              x-small
              color="error"
              absolute
              right
              top
              @click="close(index)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-img width="100" :src="product.image"></v-img>
            <v-card-text>
              <div class="text--primary font-weight-bold wishlist-title">
                {{ product.name }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                x-small
                text
                tile
                style="font-size: 2em"
                @click="quantityDecrement(product.id)"
                >-</v-btn
              >
              <v-btn small outlined tile style="font-size: 1.5em">
                {{ product.quantity }}
              </v-btn>
              <v-btn
                x-small
                text
                tile
                style="font-size: 2em"
                @click="quantityIncrement(product.id)"
                >+</v-btn
              >
            </v-card-actions>
            <v-card-actions style="width: 30%">
              <div class="font-weight-bold wishlist-price mx-auto">
                ₱{{ product.price }}
              </div>
            </v-card-actions>
          </v-card>
          <div class="mt-5">
            <router-link
              :to="{ name: 'Home' }"
              class="font-weight-bold"
              style="fontSize: 23px; text-decoration: none;"
              >Continue Shopping</router-link
            >
          </div>
        </div>
        <div v-else class="text-center">
          <h1 class="font-weight-black" style="fontSize: 2.5rem">
            Cart is empty
          </h1>
          <p>
            Click the button to start wiewing product and add it to wishlist
          </p>
          <v-btn
            x-large
            rounded
            color="#fca311"
            class="font-weight-black"
            style="border: 4px solid black"
            >Add Product Now!</v-btn
          >
        </div>
      </v-col>
      <v-col cols="4" align-self="start">
        <div class="cart-summary-box px-5 py-5 white--text mx-auto">
          <h1 class="font-weight-black" style="fontSize: 3rem">
            Summary
          </h1>
          <p class="mb-6">
            Total Quantity
            <span class="float-right summary-total"
              ><span class="sign">₱</span> 50.00</span
            >
          </p>
          <p class="mb-6">
            Total Amount
            <span class="float-right summary-total"
              ><span class="sign">₱</span> 50.00</span
            >
          </p>
          <p class="mb-10">
            Shipping total
            <span class="float-right summary-total"
              ><span class="sign">₱</span> 1000.00</span
            >
          </p>
          <p class="mb-12">
            Subtotal
            <span class="float-right summary-total"
              ><span class="sign">₱</span> 10000.00</span
            >
          </p>
          <div class="text-center">
            <v-btn large rounded color="#fca311" class="font-weight-bold"
              >Proceed Checkout</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    quantity: 1
  }),

  computed: {
    ...mapState({
      addToCartProducts: "addToCartProducts"
    })
  },

  // mounted() {
  //   console.log(this.addToCartProducts);
  // },

  methods: {
    quantityDecrement(id) {
      // this.quantity--;
      this.$store.commit("QUANTITY_DECREMENT", id);
    },

    quantityIncrement(id) {
      this.$store.commit("QUANTITY_INCREMENT", id);
    },

    close(index) {
      this.$store.commit("DELETE_ADDTOCART", index);
    }
  }
};
</script>

<style lang="scss" scoped></style>
