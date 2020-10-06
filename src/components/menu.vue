<template>
  <div>
    <v-menu
      v-for="(menu, index) in menus"
      :key="index"
      left
      bottom
      open-on-hover
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn exact text v-bind="attrs" v-on="on" :to="menu.link" large>
          {{ menu.name }}
        </v-btn>
      </template>
      <v-card>
        <v-img max-height="100" :src="menu.img" />
        <v-divider></v-divider>
        <v-container>
          <v-row class="text-center">
            <v-col cols="3" v-for="(list, index) in menu.lists" :key="index">
              <v-btn exact text :to="list.subLinks">{{ list.name }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      {
        name: "Computer",
        img: require("@/assets/images/menus/ComputerMenuBanner.jpg"),
        link: { path: "products", query: { category: "Computers" } },
        lists: [
          {
            name: "Desktop PC",
            subLinks: {
              path: "products",
              query: { category: "Computers", subCategory: "Desktop pc" }
            }
          },
          {
            name: "Notebooks",
            subLinks: {
              path: "products",
              query: { category: "Computers", subCategory: "Notebooks" }
            }
          },
          {
            name: "Mini PC",
            subLinks: {
              path: "products",
              query: { category: "Computers", subCategory: "Mini pc" }
            }
          },
          {
            name: "Diskless PC",
            subLinks: {
              path: "products",
              query: { category: "Computers", subCategory: "Diskless pc" }
            }
          },
          {
            name: "Software",
            subLinks: {
              path: "products",
              query: { category: "Computers", subCategory: "Software" }
            }
          }
        ]
      },
      {
        name: "Components",
        img: require("@/assets/images/menus/ComponentMenuBanner.jpg"),
        link: { path: "products", query: { category: "Components" } },
        lists: [
          {
            name: "Processor",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Processor" }
            }
          },
          {
            name: "Motherboard",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Motherboard" }
            }
          },
          {
            name: "Graphics Card",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Graphics card" }
            }
          },
          {
            name: "Memory",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Memory" }
            }
          },
          {
            name: "Power Supply",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Power supply" }
            }
          },
          {
            name: "Hard Drive",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Hard drive" }
            }
          },
          {
            name: "Computer case",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Casing" }
            }
          },
          {
            name: "Sound Card",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Sound card" }
            }
          },
          {
            name: "Lan Card",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "Lan card" }
            }
          },
          {
            name: "Optical Drive",
            subLinks: {
              path: "products",
              query: { category: "Components", subCategory: "optical card" }
            }
          }
        ]
      },
      {
        name: "Peripherals",
        img: require("@/assets/images/menus/PeripheralsMenuBanner.jpg"),
        link: { path: "products", query: { category: "Peripherals" } },
        lists: [
          {
            name: "Displays",
            subLinks: {
              path: "products",
              query: { category: "Peripherals", subCategory: "Displays" }
            }
          },
          {
            name: "Audio",
            subLinks: {
              path: "products",
              query: { category: "Peripherals", subCategory: "Audio" }
            }
          },
          {
            name: "Keyboard/Mouse",
            subLinks: {
              path: "products",
              query: { category: "Peripherals", subCategory: "Keyboard/Mouse" }
            }
          },
          {
            name: "Office Furniture",
            subLinks: {
              path: "products",
              query: {
                category: "Peripherals",
                subCategory: "Office Furniture"
              }
            }
          },
          {
            name: "Printer/Scanner/Inks",
            subLinks: {
              path: "products",
              query: {
                category: "Peripherals",
                subCategory: "Printer/Scanner/Inks"
              }
            }
          },
          {
            name: "Surveillance/CCTV",
            subLinks: {
              path: "products",
              query: {
                category: "Peripherals",
                subCategory: "Surveillance/CCTV"
              }
            }
          },
          {
            name: "UPS/AVP",
            subLinks: {
              path: "products",
              query: { category: "Peripherals", subCategory: "UPS/AVR" }
            }
          },
          {
            name: "Webcam",
            subLinks: {
              path: "products",
              query: { category: "Peripherals", subCategory: "Webcam" }
            }
          }
        ]
      },
      {
        name: "Net Devices",
        img: require("@/assets/images/menus/NetDevicesMenuBanner.jpg"),
        link: { path: "products", query: { category: "Net devices" } },
        lists: [
          {
            name: "Access Point/Range Extender",
            subLinks: {
              path: "products",
              query: {
                category: "Net devices",
                subCategory: "Access point/Range Extender"
              }
            }
          },
          {
            name: "Adaptop",
            subLinks: {
              path: "products",
              query: { category: "Net devices", subCategory: "Adaptor" }
            }
          },
          {
            name: "Router",
            subLinks: {
              path: "products",
              query: { category: "Net devices", subCategory: "Router" }
            }
          },
          {
            name: "Switch",
            subLinks: {
              path: "products",
              query: { category: "Net devices", subCategory: "Switch" }
            }
          },
          {
            name: "UTP Cable",
            subLinks: {
              path: "products",
              query: { category: "Net devices", subCategory: "UTP Cable" }
            }
          },
          {
            name: "Network Attached Storage",
            subLinks: {
              path: "products",
              query: {
                category: "Net devices",
                subCategory: "Network Attached Storage"
              }
            }
          }
        ]
      },
      {
        name: "Accessories",
        img: require("@/assets/images/menus/AccessoriesMenuBanner.jpg"),
        link: { path: "products", query: { category: "Accessories" } },
        lists: [
          {
            name: "Batteries and Chargers",
            subLinks: {
              path: "products",
              query: {
                category: "Accessories",
                subCategory: "Batteries and Chargers"
              }
            }
          },
          {
            name: "Cables",
            subLinks: {
              path: "products",
              query: { category: "Accessories", subCategory: "Cables" }
            }
          },
          {
            name: "Cooling Solutions",
            subLinks: {
              path: "products",
              query: {
                category: "Accessories",
                subCategory: "cooling solutions"
              }
            }
          },
          {
            name: "Cleaning Solutions",
            subLinks: {
              path: "products",
              query: {
                category: "Accessories",
                subCategory: "Cleaning Solutions"
              }
            }
          },
          {
            name: "HDD Dock / Enclosure / Caddy",
            subLinks: {
              path: "products",
              query: {
                category: "Accessories",
                subCategory: "HDD Dock / Enclosure / Caddy"
              }
            }
          },
          {
            name: "Lightings",
            subLinks: {
              path: "products",
              query: { category: "Accessories", subCategory: "Lightings" }
            }
          },
          {
            name: "Memory Devices",
            subLinks: {
              path: "products",
              query: { category: "Accessories", subCategory: "Memory Devices" }
            }
          },
          {
            name: "Sleeves / Bags",
            subLinks: {
              path: "products",
              query: { category: "Accessories", subCategory: "Sleeves / Bags" }
            }
          },
          {
            name: "USB Hub / Card Reader",
            subLinks: {
              path: "products",
              query: {
                category: "Accessories",
                subCategory: "USB Hub / Card Reader"
              }
            }
          }
        ]
      },
      {
        name: "Gadgets",
        img: require("@/assets/images/menus/GadgetsMenuBanner.jpg"),
        link: { path: "products", query: { category: "Gadgets" } },
        lists: [
          {
            name: "Digital Camera",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Digital Camera" }
            }
          },
          {
            name: "Media Player",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Media Player" }
            }
          },
          {
            name: "Mobile",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Mobile" }
            }
          },
          {
            name: "Mobile Accessories",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Mobile Accessories" }
            }
          },
          {
            name: "Mining",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Mining" }
            }
          },
          {
            name: "Wellness",
            subLinks: {
              path: "products",
              query: { category: "Gadgets", subCategory: "Wellness" }
            }
          }
        ]
      }
    ]
  })
};
</script>
