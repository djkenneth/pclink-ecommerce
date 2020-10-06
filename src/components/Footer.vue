<template>
  <v-footer dark padless style="background-color: #14213D">
    <v-container>
      <v-card
        flat
        tile
        class="lighten-1 white--text mx-auto"
        style="background-color: #14213D"
        width="100%"
      >
        <v-card-text class="white--text pb-0">
          <v-row>
            <v-col md="7">
              <h1 class="mb-3 orange-text">Sign up for newsletter</h1>
              <p>
                Get news about latest tech out in market and more just to be
                updated in tech world!
              </p>
            </v-col>
            <v-col md="5"
              ><v-text-field
                light
                rounded
                label="Enter your email address here"
                solo
              >
                <template v-slot:append>
                  <v-btn
                    rounded
                    style="background-color: #fca311; color: #14213d;"
                    >Submit</v-btn
                  >
                </template>
              </v-text-field></v-col
            >
          </v-row>
        </v-card-text>

        <v-card-text class="white--text py-0">
          <v-row>
            <v-col md="42">
              <h3 class="mb-3">Store Information</h3>
              <p>
                <v-icon color="#fca311" class="mr-3">mdi-navigation</v-icon>
                776 2nd street Balibago Angeles City, Pampanga Philippines
              </p>
              <p>
                <v-icon color="#fca311" class="mr-3">mdi-phone</v-icon> 331-1754
              </p>
              <p>
                <v-icon color="#fca311" class="mr-3">mdi-cellphone</v-icon>
                09993884869
              </p>
              <p>
                <v-icon color="#fca311" class="mr-3">mdi-clock-outline</v-icon>
                <span>Mon - Sat: 9AM to 7PM</span> <br />
                <span class="ml-9">Sun: 9AM to 5PM</span>
              </p>
            </v-col>
            <v-col md="2">
              <h3 class="mb-2">Navigation</h3>
              <p>Computers</p>
              <p>Component</p>
              <p>Peripherals</p>
              <p>Net Devices</p>
              <p>Accessories</p>
              <p>Gadgets</p>
            </v-col>
            <v-col md="2">
              <h3 class="mb-2">Customers</h3>
              <p>Buyer</p>
              <p>Supplier</p>
            </v-col>
            <v-col md="2">
              <h3 class="mb-2">Company</h3>
              <p>About Us</p>
              <p>Contact Us</p>
            </v-col>
            <v-col md="2">
              <h3 class="mb-2">Further Information</h3>
              <p>Terms and Condition</p>
              <p>Privacy Policy</p>
              <p>Laws</p>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          Copyright &copy;
          <strong class="orange-text">PCLINK</strong> all right reserved
          {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>
