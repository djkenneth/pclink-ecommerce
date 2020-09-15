<template>
  <v-sheet class="mx-auto" max-width="100%">
    <h1 class="ml-15">Components</h1>
    <v-slide-group v-model="model" show-arrows center-active>
      <!-- v-slot:default="{ active, toggle }" -->
      <v-slide-item
        v-for="motherboard in motherboards"
        :key="motherboard.id"
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
            class="white--text align-end"
            height="200px"
            :src="motherboard.src"
          >
          </v-img>
          <v-card-text class="text--primary subtitle-1 pb-0">{{
            motherboard.title
          }}</v-card-text>

          <v-card-text class="text--primary">
            ₱11,250.00
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
  data: () => ({
    model: null,
    motherboards: [
      {
        id: 1,
        src: require("../assets/images/cards/asrock-a320m-hdv-amd-a320-micro-atx-motherboard.jpg"),
        title: "ASRock A320M-HDV AMD A320 Micro ATX Motherboard"
      },
      {
        id: 2,
        src: require("../assets/images/cards/ASUS-H110M-EM.2-MOTHERBOARD.jpg"),
        title: "ASUS H110M-E/M.2 MOTHERBOARD"
      },
      {
        id: 3,
        src: require("../assets/images/cards/ASUS-A68HM-K-A68H-FM2+-mATX-MOTHERBOARD.jpg"),
        title: "ASUS A68HM-K A68H FM2+ mATX MOTHERBOARD"
      },
      {
        id: 4,
        src: require("../assets/images/cards/ASUS-STRIX-Z390H-GAMING.jpg"),
        title: "ASUS STRIX Z390H GAMING"
      },
      {
        id: 5,
        src: require("../assets/images/cards/asus-striz-z370-f-gaming-motherboard1.jpg"),
        title: "ASUS STRIX Z370-F GAMING Motherboard"
      },
      {
        id: 6,
        src: require("../assets/images/cards/ASUS-TUF-X570-PLUS-GAMING-WI-FI-Motherboard.jpg"),
        title: "ASUS TUF X570-PLUS GAMING WI-FI Motherboard"
      },
      {
        id: 7,
        src: require("../assets/images/cards/Gigabyte-B450-AORUS-M-(rev. 1.0)-AMD-B450-AORUS-Motherboard-with-Hybrid-Digital-PWM.jpg"),
        title: "Gigabyte B450 AORUS M AMD B450 AORUS Motherboard"
      },
      {
        id: 8,
        src: require("../assets/images/cards/MSI-Z390-A-PRO-Motherboard.jpg"),
        title: "MSI Z390-A PRO Motherboard"
      },
      {
        id: 9,
        src: require("../assets/images/cards/MSI-MEG-Z390-GODLIKE-WIFI-Motherboard.jpg"),
        title: "MSI MEG Z390 GODLIKE WIFI Motherboard"
      },
      {
        id: 10,
        src: require("../assets/images/cards/MSI-B360M-Bazooka-Intel-B360-Motherboard.jpg"),
        title: "MSI B360M Bazooka Intel B360 Motherboard"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
