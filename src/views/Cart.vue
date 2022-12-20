<template>
    <div>

        <div v-if="carts.length > 0" class="container mx-auto" v-for="cart in carts" :key="cart._id">
    <div class="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-200 mr-4">
          <img :src="`${cart.image}`" alt="Product image">
        </div>
        <div class="text-gray-700">
          <p class="font-semibold text-lg">{{ cart.title }}</p>
          <p class="text-sm text-gray-500">${{ cart.price }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <button @click="removeFromCart({product})" class="text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline-blue active:text-gray-800 font-bold py-2 px-4 rounded-full">
          -
        </button>
        <input class="text-center w-8 text-gray-700 font-bold py-2 px-4 rounded-full" type="text" value="1">
        <button class="text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline-blue active:text-gray-800 font-bold py-2 px-4 rounded-full">
          +
        </button>
      </div>
    </div>
        </div>
        <div>
        </div>
        <!--Empty cart -->
        <div v-if="carts.length < 1" class="container mx-auto" >
    <div class="flex flex-col space-y-8 items-center justify-between p-4 bg-white shadow-md rounded-md">
      <h2 class="text-center">Your cart is empty!</h2>
      <h3 class="text-center">Browse our categories and discover our best deals!</h3>
    </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore();

const carts = computed(() => {
   return store.state.cart
})

 async function removeFromCart() {
    return store.dispatch('removeItem', ...arguments);
}

</script>

<style scoped>

</style>