<template>
  <v-card elevation="8" max-width="300" :ripple="false" class="ma-1">
    <v-img
      class="mx-auto"
      contain
      max-height="200"
      min-height="200"
      :src="product.image"
    >
    </v-img>
    <v-card-title class="px-2">
      <div class="slide-item-card-title" style="min-height: 64px">
        {{ product.name }}
      </div>
    </v-card-title>

    <v-card-text class="text--primary">
      <div class="font-weight-medium" style="fontSize: 1.2rem">
        <!-- <span class="font-weight-medium">₱</span> -->
        <!-- {{ product.price }} -->
        {{ productPrice }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn outlined small @click="addtocart(product)">
        <v-icon>mdi-cart</v-icon>
        Add to cart
      </v-btn>
      <v-btn icon color="black" @click="wishlistbtn(product)">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon color="black" @click="overview(product)">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "card-col",
  props: {
    product: Object
  },

  computed: {
    productPrice() {
      const convertPrice = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        minimumFractionDigits: 2
      }).format(this.product.price);

      return convertPrice;
    }
  },

  methods: {
    wishlistbtn(item) {
      this.$store.dispatch("wishlistProduct", item);
    },

    addtocart(item) {
      this.$store.dispatch("addToCartProduct", {
        ...item,
        quantity: 1
      });
    },

    overview(item) {
      this.$router.push({
        name: "overview",
        params: { id: item.id }
      });
    }
  }
};
</script>
