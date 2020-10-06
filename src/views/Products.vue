<template>
  <div>
    <ProductBanner title="Computer"></ProductBanner>
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
      <v-row no-gutters v-if="grid">
        <v-col
          sm="6"
          md="4"
          lg="3"
          v-for="product in allProducts"
          :key="product.id"
        >
          <Cards v-if="product" :product="product" />
        </v-col>
      </v-row>
      <v-row no-gutters v-else>
        <v-col cols="12" v-for="product in allProducts" :key="product.id">
          <CardRow :product="product" />
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center">
      <v-pagination v-model="page" :length="3" color="#fca311"></v-pagination>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

const ProductBanner = () => import("@/components/ProductBanner");
const CardRow = () => import("@/components/CardRow");
import CardCol from "@/components/CardCol";
import LoadingComponent from "@/components/Loading";

const Cards = () => ({
  component: new Promise(resolve => {
    setTimeout(() => {
      resolve(CardCol);
    }, 1000);
  }),
  loading: LoadingComponent,
  delay: 0,
  timeout: 3000
});

export default {
  components: {
    ProductBanner,
    Cards,
    CardRow
  },

  data: () => ({
    showLimit: [24, 48, 120],
    page: 1,
    grid: true
  }),

  computed: {
    ...mapState({
      products: "products"
    }),

    allProducts() {
      const product = this.products.filter(product => {
        if (this.$route.query.category && this.$route.query.subCategory) {
          return (
            product.category[0] == this.$route.query.category &&
            product.category[1] == this.$route.query.subCategory
          );
        }

        return product.category[0] == this.$route.query.category;
      });

      return product;
    }
  }
};
</script>
