<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <h1 class="font-weight-black" style="fontSize: 2.5rem">Wishlist</h1>
      </v-col>
    </v-row>
    <div v-if="wishlistProducts.length">
      <v-card
        v-for="(product, index) in wishlistProducts"
        :key="product.id"
        class="d-flex mb-8"
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
          <div class="mx-10 font-weight-medium wishlist-price">
            <!-- ₱{{ product.price }} -->
            {{ productPrice(product.price) }}
          </div>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            @click="addtocart(product)"
            large
            class="mx-7 font-weight-bold"
            color="#fca311"
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
    </div>
    <div v-else>
      <v-row no-gutters style="height: 400px" align="center" justify="center">
        <div class="text-center">
          <h1 class="font-weight-black" style="fontSize: 2.5rem">
            Wishlist is empty
          </h1>
          <p>
            Click the button to start wiewing product and add it to wishlist
          </p>
          <v-btn
            @click="continueShop"
            x-large
            rounded
            color="#fca311"
            class="font-weight-black"
            style="border: 4px solid black"
            >Add Product Now!</v-btn
          >
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      wishlistProducts: "wishlistProducts"
    })
  },

  methods: {
    productPrice(price) {
      const convertPrice = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2
      }).format(price);

      return convertPrice;
    },

    close(index) {
      this.$store.commit("DELETE_WISHLIST", index);
    },

    addtocart(item) {
      this.$store.dispatch("addToCartProduct", {
        ...item,
        quantity: 1
      });
    },

    continueShop() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
