<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-container>
        <v-toolbar flat>
          <v-toolbar-title>
            <router-link :to="{ name: 'Home' }">
              <v-img alt="PCLINK" :src="require('@/assets/images/Logo.png')" />
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <Notifications
            :content="wishlistCount"
            :value="wishlistCount"
            :route="{ name: 'wishlist' }"
            icon="mdi-heart"
          />
          <Notifications
            :content="addtocartCount"
            :value="addtocartCount"
            :route="{ name: 'cart' }"
            icon="mdi-cart"
          />
        </v-toolbar>
      </v-container>
      <template v-slot:extension>
        <div style="width: 100%; background-color: #FCA311;">
          <v-container class="py-1">
            <PopoverMenu />
          </v-container>
        </div>
      </template>
    </v-app-bar>
    <v-main>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        fixed
        bottom
        right
        color="#fca311"
        @click="toTop"
      >
        <v-icon x-large>mdi-chevron-up</v-icon>
      </v-btn>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

const Notifications = () => import("@/components/Notifications");
const PopoverMenu = () => import("@/components/menu");
const Footer = () => import("@/components/Footer");

export default {
  name: "App",

  components: {
    Notifications,
    PopoverMenu,
    Footer
  },

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },

  computed: {
    ...mapGetters({
      wishlistCount: "wishlistCount",
      addtocartCount: "addtocartCount"
    })
  }
};
</script>
