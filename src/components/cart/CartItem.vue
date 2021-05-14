<template>
  <main>
    <div class="title-options">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="arrows">
        <i @click="addCartItem(item)" class="fa fa-arrow-circle-up" aria-hidden="true"></i>
        <i @click="removeCartItem(item)" class="fa fa-arrow-circle-down" aria-hidden="true"></i>
      </div>
    </div>
    <div class="price-quantity">
      <div class="price">
        <span>{{ item.price }} $ each</span>
      </div>
      <div class="quantity">
        Quantity: {{ item.quantity }}
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "CartItem",
  props: ['item'],
  methods: {
    ...mapActions([
      'removeCartItem',
      'addCartItem'
    ])
  }
};
</script>

<style scoped>
.cart main .title-options {
  display: flex;
  padding: 1em;
  justify-content: space-between;
}

.title-options .arrows i {
  margin-left: 0.5em;
  cursor: pointer;
}

.cart main .price-quantity {
  display: flex;
  padding: 1em;
  justify-content: space-between;
  padding-top: 0;
}

.cart main .price-quantity .price {
  color: #00d2b2;
  font-weight: 800;
}

.cart main .price-quantity .quantity {
  color: gray;
}
</style>
