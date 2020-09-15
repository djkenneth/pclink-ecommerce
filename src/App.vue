<template>
  <v-app>
    <v-app-bar app flat color="white">
      <v-container>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img alt="PCLINK" :src="require('./assets/images/Logo.png')" />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- Badge Component
          :content="messages"
          :value="messages" -->
          <v-badge :content="0" :value="0" color="error" overlap class="mr-7">
            <v-icon>mdi-heart</v-icon>
          </v-badge>

          <v-badge :content="0" :value="0" color="error" overlap>
            <v-icon>mdi-cart</v-icon>
          </v-badge>
        </v-toolbar>
      </v-container>
      <template v-slot:extension>
        <div style="width: 100%; background-color: #FCA311;">
          <v-container>
            <div class="d-flex">
              <v-menu
                v-for="banner in banners"
                :key="banner.id"
                left
                bottom
                open-on-hover
                :close-on-content-click="false"
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    {{ banner.btnName }}
                  </v-btn>
                </template>
                <v-card>
                  <v-img max-height="100" :src="banner.img" />
                  <v-divider></v-divider>
                  <v-container>
                    <v-row class="text-center">
                      <v-col
                        v-for="(list, i) in banner.lists"
                        :key="i"
                        cols="3"
                        >{{ list }}</v-col
                      >
                    </v-row>
                  </v-container>
                </v-card>
              </v-menu>
            </div>
          </v-container>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <!-- Carousels -->
      <router-view></router-view>
      <!-- Group Slide groups -->
    </v-main>
    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
const Footer = () => import("@/components/Footer");

export default {
  name: "App",

  components: {
    // HelloWorld
    Footer
  },

  data: () => ({
    banners: [
      {
        id: 1,
        btnName: "Computer",
        img: require("./assets/images/menus/ComputerMenuBanner.jpg"),
        lists: ["Desktop PC", "Notebooks", "Mini PC", "Diskless PC", "Software"]
      },
      {
        id: 2,
        btnName: "Components",
        img: require("./assets/images/menus/ComponentMenuBanner.jpg"),
        lists: [
          "Processor",
          "Motherboard",
          "Graphics Card",
          "Memory",
          "Power Supply",
          "Hard Drive",
          "Computer case",
          "Sound Card",
          "Lan Card",
          "Optical Drive"
        ]
      },
      {
        id: 3,
        btnName: "Peripherals",
        img: require("./assets/images/menus/PeripheralsMenuBanner.jpg"),
        lists: [
          "Displays",
          "Audio",
          "Keyboard/Mouse",
          "Office Furniture",
          "Printer/Scanner/Inks",
          "Surveillance/CCTV",
          "UPS/AVP",
          "Webcam"
        ]
      },
      {
        id: 4,
        btnName: "Net Devices",
        img: require("./assets/images/menus/NetDevicesMenuBanner.jpg"),
        lists: [
          "Access Point/Range Extender",
          "Adaptop",
          "Router",
          "Switch",
          "UTP Cable",
          "Network Attached Storage"
        ]
      },
      {
        id: 5,
        btnName: "Accessories",
        img: require("./assets/images/menus/AccessoriesMenuBanner.jpg"),
        lists: [
          "Batteries and Chargers",
          "Cables",
          "Cooling Solutions",
          "Cleaning Solutions",
          "HDD Dock / Enclosure / Caddy",
          "Lightings",
          "Memory Devices",
          "Sleeves / Bags",
          "USB Hub / Card Reader"
        ]
      },
      {
        id: 6,
        btnName: "Gadgets",
        img: require("./assets/images/menus/GadgetsMenuBanner.jpg"),
        lists: [
          "Digital Camera",
          "Media Player",
          "Mobile",
          "Mobile Accessories",
          "Mining",
          "Wellness"
        ]
      }
    ]
  })
};
</script>
