<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <v-carousel hide-delimiters cycle height="410">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    items: [
      { src: require("../assets/images/Banners/Banner1.jpg") },
      { src: require("../assets/images/Banners/Banner2.jpg") },
      { src: require("../assets/images/Banners/Banner3.jpg") },
      { src: require("../assets/images/Banners/Banner4.jpg") },
      { src: require("../assets/images/Banners/Banner5.jpg") },
      { src: require("../assets/images/Banners/Banner6.jpg") }
    ]
  })
};
</script>
