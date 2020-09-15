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
    <SlideItem />
    <SlideItem />
    <SlideItem />
    <SlideItem />
  </div>
</template>

<script>
const SlideItem = () => import("@/components/SlideItem");

export default {
  name: "Home",
  components: {
    SlideItem
  },
  data: () => ({
    items: [
      { src: require("../assets/images/Banners/Banner1.jpg") },
      { src: require("../assets/images/Banners/Banner2.jpg") },
      { src: require("../assets/images/Banners/Banner3.jpg") },
      { src: require("../assets/images/Banners/Banner4.jpg") },
      { src: require("../assets/images/Banners/Banner5.jpg") },
      { src: require("../assets/images/Banners/Banner6.jpg") }
    ]
  }),
  methods: {}
};
</script>
