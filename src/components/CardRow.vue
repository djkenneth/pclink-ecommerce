<template>
  <v-card
    v-if="product"
    elevation="8"
    max-width="100%"
    :ripple="false"
    class="d-flex mx-1 mb-5"
  >
    <v-img class="mx-auto" max-width="150" :src="product.image"> </v-img>

    <v-card-text class="text--primary">
      <div class="float-right">
        <v-btn outlined small class="mr-2" @click="addtocart(product)">
          <v-icon>mdi-cart</v-icon>
          Add to cart
        </v-btn>

        <v-btn
          outlined
          small
          class="mr-2"
          color="black"
          @click="wishlistbtn(product)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn
          outlined
          small
          class="mr-2"
          color="black"
          @click="overview(product)"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </div>
      <h1 class="slide-item-card-title2 font-weight-bold mb-3">
        {{ product.name }}
      </h1>
      <div class="title font-weight-medium mb-3">{{ productPrice }}</div>
      <div class="slide-item-card-title">
        {{ product.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "card-row",
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
