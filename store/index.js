import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import axios from 'axios';

Vue.use(Vuex);

Vue.config.devtools = process.env.NODE_ENV === 'development'

axios.defaults.baseURL = 'http://localhost:8090';

export default new Vuex.Store({
  modules: {
    product,
    cart
  }
});