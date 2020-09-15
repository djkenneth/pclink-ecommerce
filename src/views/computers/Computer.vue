<template>
  <div>
    <v-img
      max-height="200"
      :src="require('@/assets/images/Banners/banners.jpg')"
      dark
    >
      <v-row justify="center" align="center" style="height: 100%">
        <h1 class="banner-title">Component/Motherboard</h1>
      </v-row>
    </v-img>

    <v-container>
      <v-row justify="space-between" no-gutters>
        <v-col cols="5">
          <v-row no-gutters style="height: 100%" align="center">
            <span class="mr-5">show:</span>
            <v-select
              class="mt-5"
              :items="showLimit"
              label="Select..."
              outlined
              dense
            ></v-select>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row no-gutters style="height: 100%" justify="end" align="center">
            <span>view:</span>
            <v-btn @click="grid = true" :class="{ 'orange darken-1': grid }">
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
            <v-btn @click="grid = false" :class="{ 'orange darken-1': !grid }">
              <v-icon>mdi-view-list</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <CardItem
            :grid="grid"
            :src="
              require('../../assets/images/cards/asrock-a320m-hdv-amd-a320-micro-atx-motherboard.jpg')
            "
            title="ASRock A320M-HDV AMD A320 Micro ATX Motherboard"
            price="11,250.00"
          ></CardItem>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-pagination v-model="page" :length="3" color="#fca311"></v-pagination>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const CardItem = () => import("@/components/CardItem");

export default {
  components: {
    CardItem
  },
  data: () => ({
    showLimit: [24, 48, 120],
    grid: true,
    page: 1
  })
};
</script>

<style lang="scss" scoped>
.iconColor1 {
  background-color: #fca311;
}
</style>
