<template>
  <v-sheet class="mx-auto" max-width="100%">
    <h1 class="ml-15">{{ slideItemName }}</h1>
    <v-slide-group v-model="model" show-arrows center-active>
      <!-- v-slot:default="{ active, toggle }" -->
      <v-slide-item
        v-for="card in groupCardSlide"
        :key="card.id"
        class="ma-4"
        v-slot:default="{ toggle }"
      >
        <v-card
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
            <v-btn outlined small>
              <v-icon>mdi-cart</v-icon>
              Add to cart
            </v-btn>

            <v-btn icon color="black">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="black">
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
  })
};
</script>

<style lang="scss" scoped></style>
