<template>
  <v-img
    max-height="200"
    :src="require('@/assets/images/Banners/banners.jpg')"
    dark
  >
    <v-row justify="center" align="center" style="height: 100%">
      <h1 class="banner-title">{{ title }}</h1>
    </v-row>
  </v-img>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
