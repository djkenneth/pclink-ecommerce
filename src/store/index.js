import Vue from "vue";
import Vuex from "vuex";

import products from "@/data/products.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    products,
    wishlistProducts: [],
    addToCartProducts: []
  },

  mutations: {
    WISHLIST_PRODUCT_ITEM(state, payload) {
      const wishlist = state.wishlistProducts.find(product => {
        return product.id === payload.id;
      });

      if (!wishlist) {
        state.wishlistProducts.push(payload);
      }
    },

    ADDTOCART_PRODUCT_ITEM(state, payload) {
      const addMoreProduct = state.addToCartProducts.find(product => {
        return product.id === payload.id;
      });

      if (addMoreProduct) {
        // addMoreProduct.quantity++;
        addMoreProduct.quantity += payload.quantity;
      } else {
        state.addToCartProducts.push(payload);
      }
    },

    QUANTITY_DECREMENT(state, payload) {
      state.addToCartProducts.find(product => {
        if (product.id == payload && product.quantity > 1) {
          product.quantity--;
        }
      });
    },

    QUANTITY_INCREMENT(state, payload) {
      // state.addToCartProducts.quantity += payload;
      state.addToCartProducts.find(product => {
        if (product.id == payload) {
          product.quantity++;
        }
      });
    },

    DELETE_WISHLIST(state, payload) {
      state.wishlistProducts.splice(payload, 1);
      // console.log(payload);
    },

    DELETE_ADDTOCART(state, payload) {
      state.addToCartProducts.splice(payload, 1);
    }
  },

  actions: {
    wishlistProduct({ commit }, wishlistProduct) {
      commit("WISHLIST_PRODUCT_ITEM", wishlistProduct);
    },
    addToCartProduct({ commit }, cartProduct) {
      commit("ADDTOCART_PRODUCT_ITEM", cartProduct);
    }
  },

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
    },

    wishlistCount: state => {
      return state.wishlistProducts.length;
    },

    addtocartCount: state => {
      return state.addToCartProducts.length;
    }
  }
});
