import Vue from "vue";
import Vuex from "vuex";

import products from "@/data/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    products
  },
  mutations: {},
  actions: {},
  getters: {
    computerItems: state => {
      return state.products.filter(
        product => product.category[0] == "Computers"
      );
    },

    componentItems: state => {
      return state.products.filter(
        product => product.category[0] == "Components"
      );
    },

    peripheralItems: state => {
      return state.products.filter(
        product => product.category[0] == "Peripherals"
      );
    },

    netDeviceItems: state => {
      return state.products.filter(
        product => product.category[0] == "Net devices"
      );
    },

    accessoryItems: state => {
      return state.products.filter(
        product => product.category[0] == "Accessories"
      );
    },

    gadgetItems: state => {
      return state.products.filter(product => product.category[0] == "Gadgets");
    },

    componentGroupSlide: state => {
      const components = state.products.filter(
        product => product.category[0] == "Components"
      );

      return components.slice(0, 10);
    },

    peripheralGroupSlide: state => {
      const peripherals = state.products.filter(
        product => product.category[0] == "Peripherals"
      );

      return peripherals.slice(0, 10);
    },

    netDeviceGroupSlide: state => {
      const netDevice = state.products.filter(
        product => product.category[0] == "Net devices"
      );

      return netDevice.slice(0, 10);
    }
  }
});
