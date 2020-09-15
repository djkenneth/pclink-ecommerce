<template>
  <div>
    <v-card
      v-if="grid"
      elevation="8"
      max-height="500"
      max-width="300"
      :ripple="false"
    >
      <v-img class="white--text align-end" height="200px" :src="src"> </v-img>
      <v-card-text class="text--primary subtitle-1 pb-0">{{
        title
      }}</v-card-text>

      <v-card-text class="text--primary"> ₱{{ price }} </v-card-text>

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
    <v-card
      v-else
      elevation="8"
      max-height="500"
      max-width="100%"
      :ripple="false"
      class="d-flex"
    >
      <div style="width: 400px; max-height: 100%;" class="mr-2">
        <v-img
          class="white--text align-end"
          height="100%"
          width="200"
          :src="src"
        >
        </v-img>
      </div>
      <div class="d-flex flex-column">
        <v-row no-gutters>
          <v-col cols="9">
            <h2>{{ title }}</h2>
          </v-col>
          <v-col align-self="center">
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
          </v-col>
        </v-row>
        <p class="subtitle-1 mt-2">₱{{ price }}</p>
        <p>
          ASRock Super Alloy Supports AMD Socket AM4 A-Series APUs (Bristol
          Ridge) and Ryzen Series CPUs (Summit Ridge & Raven Ridge) Supports
          DDR4 3200+ (OC) (Ryzen CPU) / 2400 (A-series APU) 1 PCIe 3.0 x16, 1
          PCIe 2.0 x1 Graphics Output:HDMI, DVI-D, D-Sub 7.1 CH HD Audio
          (Realtek ALC887 Audio Codec), ELNA …
        </p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    grid: Boolean,
    src: String,
    title: String,
    price: String
  }
};
</script>

<style lang="scss" scoped></style>
