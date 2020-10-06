<template>
  <v-sheet class="mx-auto" max-width="100%">
    <h1 class="ml-15">{{ slideItemName }}</h1>
    <v-slide-group v-model="model" show-arrows center-active>
      <v-slide-item
        v-for="card in groupCardSlide"
        :key="card.id"
        class="ma-4"
        v-slot:default="{ toggle }"
      >
        <v-card
          v-if="card"
          elevation="8"
          max-height="500"
          max-width="300"
          @click="toggle"
          :ripple="false"
        >
          <v-img
            contain
            class="white--text align-end"
            max-height="200"
            :src="card.image"
          >
          </v-img>
          <v-card-title class="text--primary py-0 slide-item-card-title">{{
            card.name
          }}</v-card-title>

          <v-card-text class="text--primary pt-4 pb-2 slide-item-card-price">
            ₱{{ card.price }}
          </v-card-text>

          <v-card-actions>
            <v-btn outlined small @click="addtocart(card)">
              <v-icon>mdi-cart</v-icon>
              Add to cart
            </v-btn>

            <v-btn icon color="black" @click="wishlistbtn(card)">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="black" @click="overview(card)">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: {
    slideItemName: String,
    groupCardSlide: Array
  },
  data: () => ({
    model: null
  }),

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
