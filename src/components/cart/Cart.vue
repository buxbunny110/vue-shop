<template>
  <section class="cart">
    <header>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    </header>
    <div v-for="cartItem in cartItems" :key="cartItem.id">
      <CartItem :item="cartItem" />
    </div>
    <div v-if="!cartItems.length" class="store-empty">Add some items</div>

    <div class="controls" v-if="cartItems.length">
      <div class="total-quantity">
        Total Quantity: <span>{{ itemsQuantity }}</span>
      </div>
      <div class="remove" @click="removeAllCartItems()">
        <i class="fa fa-trash" aria-hidden="true"></i>
        Remove All
      </div>
    </div>
    <div class="checkout">
      <a href="#" class="button"
        >Checkout (<span>${{ cartTotal }}</span
        >)</a
      >
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    itemsQuantity() {
      return this.$store.getters.cartQuantity;
    },
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  },
};
</script>

<style scoped>
.cart {
  width: 275px;
  font-family: "Roboto";
}

.cart header {
  height: 50px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart header i {
  font-size: 1.5em;
}

.checkout {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00d2b2;
  border-radius: 2px;
  margin-top: 0.5em;
  cursor: pointer;
}

.checkout .button {
  text-decoration: none;
  color: white;
}

.checkout .button span {
  font-weight: 800;
}

.controls {
  display: flex;
  justify-content: space-evenly;
  font-size: 0.8em;
}

.controls .remove {
  cursor: pointer;
}

.store-empty {
  padding: 0.5em;
}
</style>
