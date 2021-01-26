<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app color="#fca311">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>PC Link Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn large dark>Submit</v-btn>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <v-row>
          <v-col md="9">
            <v-card>
              <v-card-title>Product Details</v-card-title>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12" class="pb-0">
                    <v-text-field
                      label="Product Name"
                      outlined
                      v-model="name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    <v-textarea
                      label="Product Description"
                      outlined
                      auto-grow
                      rows="3"
                      v-model="description"
                    >
                    </v-textarea>
                  </v-col>
                  <v-col cols="4" class="pb-0">
                    <v-text-field
                      label="Product Price"
                      outlined
                      prefix="₱"
                      v-model.number="price"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="4" class="pb-0">
                    <v-select
                      @change="subCategoryList"
                      :items="categoryItems"
                      v-model="mainCategory"
                      label="Category"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="4" class="pb-0">
                    <v-select
                      :items="subCategoryItems"
                      v-model="subCategory"
                      label="Sub Category"
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col cols="12" class="pb-0">
                    <v-combobox
                      v-model="tags"
                      label="Tags"
                      outlined
                      multiple
                      chips
                    ></v-combobox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <br />
            <v-card>
              <v-card-title>
                Description
              </v-card-title>
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="12" class="pb-3">
                    <v-textarea
                      label="Title"
                      outlined
                      auto-grow
                      dense
                      rows="1"
                      hide-details
                      v-model="specTitle"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" class="pb-3">
                    <v-textarea
                      label="Description"
                      outlined
                      auto-grow
                      dense
                      rows="3"
                      hide-details
                      v-model="specDescription"
                    >
                    </v-textarea>
                  </v-col>
                  <v-col cols="1" class="pb-0">
                    <v-btn class="success pa-4" @click="specList">Add</v-btn>
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-data-table
                      fixed-header
                      height="300"
                      hide-default-footer
                      :headers="headers"
                      :items="productDescription"
                    >
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card>
              <v-img
                :src="url"
                contain
                style="width: 100%; height: 250px"
              ></v-img>
              <v-file-input
                class="mx-2"
                label="Choose File"
                dense
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                @change="preview_image"
                v-model="image"
              ></v-file-input>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    categoryItems: [
      "Computers",
      "Components",
      "Peripherals",
      "Net devices",
      "Accessories",
      "Gadgets"
    ],
    subCategoryItems: [],
    productID: "",
    name: "",
    description: "",
    price: null,
    mainCategory: "",
    subCategory: "",
    tags: [],
    specTitle: "",
    specDescription: "",
    headers: [
      {
        text: "Title",
        value: "name",
        sortable: false
      },
      { text: "Description", value: "calories", sortable: false }
    ],
    productDescription: [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
    ],
    url: require("@/assets/backend/no-image.jpg"),
    image: null
  }),

  methods: {
    subCategoryList() {
      if (this.mainCategory == "Computers") {
        this.subCategoryItems = [
          "Desktop PC",
          "Notebooks",
          "Mini pc",
          "Diskless pc",
          "Software"
        ];
      } else if (this.mainCategory == "Components") {
        this.subCategoryItems = [
          "Processor",
          "Motherboard",
          "Graphics card",
          "Memory",
          "Power Supply",
          "Hard drive",
          "Casing",
          "Sound card",
          "Lan card",
          "Optical drive"
        ];
      } else if (this.mainCategory == "Peripherals") {
        this.subCategoryItems = [
          "Displays",
          "Audio",
          "Keyboard/Mouse",
          "Office furniture",
          "Printer/scanner/inks",
          "Surveillance/cctv",
          "Ups/avr",
          "Webcam"
        ];
      } else if (this.mainCategory == "Net devices") {
        this.subCategoryItems = [
          "Access point/range extender",
          "Adaptor",
          "Router",
          "Switch",
          "UTP cable",
          "Network attached storage"
        ];
      } else if (this.mainCategory == "Accessories") {
        this.subCategoryItems = [
          "Batteries and charger",
          "Cables",
          "Cooling Solutions",
          "Cleaning Solutions",
          "HDD dock/enclosure/caddy",
          "Lightings",
          "Memory devices",
          "Sleeves/bags",
          "USB hub/Card reader"
        ];
      } else if (this.mainCategory == "Gadgets") {
        this.subCategoryItems = [
          "Digital camera",
          "Media player",
          "Mobile",
          "Mobile accessories",
          "Mining",
          "Wellness"
        ];
      }
    },

    specList() {
      if (this.specTitle && this.specDescription) {
        this.specification.push({
          title: this.specTitle,
          description: this.specDescription
        });
        this.specTitle = "";
        this.specDescription = "";
      }
    },

    preview_image() {
      if (this.image) {
        this.url = URL.createObjectURL(this.image);
      }
    }
  }
};
</script>
