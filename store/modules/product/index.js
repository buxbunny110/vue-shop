import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8090';

const state = {
  productItems: []
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload){
    state.productItems = payload;
  }
};

const actions = {
  getProductItems({ commit }){
    axios.get('/products')
      .then((response) => {
        commit('UPDATE_PRODUCT_ITEMS', response.data);
        console.log('GET products OK');
      })
      .catch((error) => {
        console.log('GET product failed :(', error);
      })
  }
};

const getters = {
  productItems: state => state.productItems
};

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;