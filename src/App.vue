<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-container>
        <v-toolbar flat>
          <v-toolbar-title>
            <router-link :to="{ name: 'Home' }">
              <v-img alt="PCLINK" :src="require('./assets/images/Logo.png')" />
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-badge
            :content="wishlistCount"
            :value="wishlistCount"
            color="error"
            overlap
            class="mr-7"
          >
            <v-btn @click="listOfWish" icon small depressed>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-badge>

          <v-badge
            :content="addtocartCount"
            :value="addtocartCount"
            color="error"
            overlap
          >
            <v-btn @click="listOfCart" icon small depressed>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </v-badge>
        </v-toolbar>
      </v-container>
      <template v-slot:extension>
        <div style="width: 100%; background-color: #FCA311;">
          <v-container>
            <PopoverMenu />
          </v-container>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

const PopoverMenu = () => import("@/components/menu");
const Footer = () => import("@/components/Footer");

export default {
  name: "App",

  components: {
    PopoverMenu,
    Footer
  },

  data: () => ({
    wishlist: 1,
    addtocart: 1
  }),

  computed: {
    ...mapGetters({
      wishlistCount: "wishlistCount",
      addtocartCount: "addtocartCount"
    })
  },

  methods: {
    listOfWish() {
      const activeRoute = this.$router.push({ name: "wishlist" });
    },

    listOfCart() {
      this.$router.push({ name: "cart" });
    }
  }
};
</script>

<style></style>
