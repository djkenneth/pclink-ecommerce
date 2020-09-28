<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="font-weight-black" style="fontSize: 2.5rem">Shoping Cart</h1>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 400px" align="center">
      <v-col cols="8">
        <!-- <div class="text-center">
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
        </div> -->
        <v-card class="d-flex mb-8 mr-2">
          <v-btn dark fab x-small color="error" absolute right top>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-img
            width="100"
            :src="
              require('@/assets/images/cards/asrock-a320m-hdv-amd-a320-micro-atx-motherboard.jpg')
            "
          ></v-img>
          <v-card-text>
            <div class="text--primary font-weight-bold wishlist-title">
              ASUS STRIX Z370-F GAMING Motherboard.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              x-small
              text
              tile
              style="font-size: 2em"
              @click="quantityDecrement"
              >-</v-btn
            >
            <v-btn small outlined tile style="font-size: 1.5em">{{
              quantity
            }}</v-btn>
            <v-btn
              x-small
              text
              tile
              style="font-size: 2em"
              @click="quantityIncrement"
              >+</v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <div class="mx-5 font-weight-bold wishlist-price">₱11,250.00</div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
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
export default {
  data: () => ({
    quantity: 1
  }),

  methods: {
    quantityDecrement() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    quantityIncrement() {
      this.quantity++;
    }
  }
};
</script>

<style lang="scss" scoped></style>
