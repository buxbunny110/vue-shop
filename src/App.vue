<template>
  <div id="app">
    <div class="container">
      <Cart />
      <Shop />
    </div>
  </div>
</template>

<script>
import Cart from './components/cart/Cart';
import Shop from './components/shop/Shop';

export default {
  name: "App",
  components: {
    Cart,
    Shop
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
  background-color: #f2f6fa;
  justify-content: center;
  align-items: center;
  display: flex;
}

.container {
  display: flex;
  margin: auto auto;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
