<template>
  <div>
    <ProductBanner title="Accessories"></ProductBanner>
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
            <span class="mr-2">view:</span>
            <v-btn
              @click="grid = true"
              class="mr-2"
              :class="{ 'orange darken-1': grid }"
            >
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
            <v-btn @click="grid = false" :class="{ 'orange darken-1': !grid }">
              <v-icon>mdi-view-list</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in accessoryItems"
          :key="item.id"
          :md="grid ? '3' : '12'"
        >
          <CardItem :grid="grid" :item="item"></CardItem>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const CardItem = () => import("@/components/CardItem");
const ProductBanner = () => import("@/components/ProductBanner");
export default {
  components: {
    CardItem,
    ProductBanner
  },
  data: () => ({
    showLimit: [24, 48, 120],
    grid: true
  }),

  computed: {
    ...mapGetters({
      accessoryItems: "accessoryItems"
    })
  }
};
</script>

<style lang="scss" scoped></style>
