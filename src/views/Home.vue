<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- cycle -->
    <v-carousel hide-delimiters cycle height="410">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <SlideItem
      slideItemName="Components"
      :groupCardSlide="componentGroupSlide"
    />
    <SlideItem
      slideItemName="Peripherals"
      :groupCardSlide="peripheralGroupSlide"
    />
    <SlideItem
      slideItemName="Net Devices"
      :groupCardSlide="netDeviceGroupSlide"
    />
    <!-- <SlideItem slideItemName="Graphics Card" /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const SlideItem = () => import("@/components/SlideItem");
export default {
  name: "Home",
  components: {
    SlideItem
  },
  data: () => ({
    items: [
      { src: require("@/assets/images/Banners/Banner1.jpg") },
      { src: require("@/assets/images/Banners/Banner2.jpg") },
      { src: require("@/assets/images/Banners/Banner3.jpg") },
      { src: require("@/assets/images/Banners/Banner4.jpg") },
      { src: require("@/assets/images/Banners/Banner5.jpg") },
      { src: require("@/assets/images/Banners/Banner6.jpg") }
    ]
  }),

  computed: {
    ...mapGetters({
      componentGroupSlide: "componentGroupSlide",
      peripheralGroupSlide: "peripheralGroupSlide",
      netDeviceGroupSlide: "netDeviceGroupSlide"
    })
  },

  mounted() {
    console.log(this.componentGroupSlide);
  }
};
</script>
