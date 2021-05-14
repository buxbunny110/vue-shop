<template>
  <main class="shop">
    <header>
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
    </header>
    <div v-for="product in getInitialProducts" :key="product.id">
      <Product :productItem="product" />
    </div>
    <footer># of products: 4</footer>
  </main>
</template>

<script>
import Product from "./Product";

export default {
  name: "Shop",
  components: {
    Product,
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  computed: {
    getInitialProducts() {
      return this.$store.getters.productItems;
    },
  },
};
</script>

<style scoped>
.shop {
  flex: 1;
  background: white;
  margin-left: 1em;
  border-radius: 5px;
  font-family: "Roboto";
  margin-top: 1em;
}

.shop header {
  border-bottom: 1px solid grey;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shop header i {
  font-size: 2em;
}

.shop footer {
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  padding: 1em;
}
</style>
