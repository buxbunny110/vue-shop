<template>
  <article>
    <div class="title-add-to-cart">
      <span>{{ productItem.title }}</span>
      <button @click="addCartItem(productItem)">Add to Cart</button>
    </div>
    <p class="description">
      {{ productItem.description }}
    </p>
    <span class="price">{{ productItem.price }} $</span>
  </article>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Product",
  props: ['productItem'],
  methods: {
    ...mapActions([
      'addCartItem'
    ])
  }
};
</script>

<style scoped>
.shop article {
  padding: 1em;
}

.shop article .title-add-to-cart {
  display: flex;
  justify-content: space-between;
}

.shop .title-add-to-cart button {
  background: #00d2b2;
  border: none;
  color: white;
  padding: 0.3em;
  border-radius: 2px;
  cursor: pointer;
}

.shop .price {
  color: #00d2b2;
  font-weight: 800;
}

.shop article .description {
  color: grey;
}

.title-add-to-cart {
  font-weight: bolder;
}
</style>
