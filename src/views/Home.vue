<template>
  <div class="home">
    <v-carousel hide-delimiters cycle height="410">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <SlideItem
      class="mt-10"
      slideItemName="Components"
      :groupCardSlide="componentGroupSlide"
    />
    <SlideItem
      class="mt-10"
      slideItemName="Peripherals"
      :groupCardSlide="peripheralGroupSlide"
    />
    <SlideItem
      class="mt-10"
      slideItemName="Net Devices"
      :groupCardSlide="netDeviceGroupSlide"
    />
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
  }
};
</script>
