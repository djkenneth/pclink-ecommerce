<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="font-weight-black" style="fontSize: 2.5rem">Wishlist</h1>
      </v-col>
    </v-row>
    <!-- <v-row no-gutters style="height: 400px" align="center" justify="center">
      <div class="text-center">
        <h1 class="font-weight-black" style="fontSize: 2.5rem">
          Wishlist is empty
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
    </v-row> -->
    <v-card class="d-flex mb-8">
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
        <div class="mx-10 font-weight-bold wishlist-price">₱11,250.00</div>
      </v-card-actions>
      <v-card-actions>
        <v-btn large class="mx-7 font-weight-bold" color="#fca311"
          >Add to cart</v-btn
        >
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
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
