<template>
  <div>
    <v-card
      v-if="grid"
      elevation="8"
      max-height="500"
      max-width="300"
      :ripple="false"
    >
      <v-img contain height="200" :src="item.image"> </v-img>
      <v-card-text
        class="text--primary subtitle-1 font-weight-bold"
        style="height: 100px; line-height: 1.3rem"
        >{{ item.name }}
      </v-card-text>

      <v-card-text class="text--primary body-1 py-1">
        ₱{{ item.price }}
      </v-card-text>

      <v-card-actions>
        <v-btn outlined small>
          <v-icon>mdi-cart</v-icon>
          Add to cart
        </v-btn>

        <v-btn icon color="black" @click="$emit('wishlistbtn', item)">
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon color="black" @click="overview">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      v-else
      elevation="8"
      max-height="500"
      max-width="100%"
      :ripple="false"
      class="d-flex"
    >
      <v-img
        class="mr-2"
        contain
        max-height="200"
        max-width="200"
        :src="item.image"
      ></v-img>
      <v-row no-gutters>
        <v-col cols="9">
          <h2>{{ item.name }}</h2>
        </v-col>
        <v-col cols="3" align-self="center">
          <v-btn outlined small>
            <v-icon>mdi-cart</v-icon>
            Add to cart
          </v-btn>

          <v-btn icon color="black">
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon color="black" @click="overview">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p class="subtitle-1 mt-2">₱{{ item.price }}</p>
          <p>{{ item.description }}</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    grid: Boolean,
    item: Object
  },

  data: () => ({
    product: []
  }),

  methods: {
    overview() {
      this.$router.push({
        name: "overview",
        params: { id: this.item.id }
      });
    }

    // wishlist(item) {
    //   this.product.push(item);
    //   // this.$store.dispatch("wishlistProduct", data);
    // }
  }
};
</script>

<style lang="scss" scoped></style>
