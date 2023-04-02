<template>
  
<nav class="bg-white px-2 sm:px-4 py-2.5 mb-10 sticky w-full z-20 top-0 left-0 border-b border-gray-200">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo">
      <span class="self-center text-xl font-semibold whitespace-nowrap">BendSelect</span>
  </a>
  <div class="flex md:order-2">
      <CartButtonVue/>
  </div>
  </div>
</nav>



</template>

<script>
import { ref } from 'vue';
import CartButtonVue from './CartButton.vue';
export default {
    components:{
        CartButtonVue,
    },
    setup () {
      const cart = ref(false)
        async function toggleCart() {
          cart.value = !cart.value
          console.log('sidebar opened');
        }

        return {
          toggleCart, cart
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
