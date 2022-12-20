<template>
    <div>
        <div class="py-2 px-3 md:py-6 md:px-10" v-if="product">
    <h1 class="text-center uppercase text-2xl">{{product.title}}</h1>
    <div class="flex flex-col md:flex-row mt-2 md:mt-10">
        <img class="p-8 rounded-t-lg basis-1/2 w-80 h-96" :src="`${product.image}`" alt="product image" />
        <div class="flex flex-col space-y-6 basis-1/2">
        <p class="text-lg">
        <span class="text-1xl font-extrabold">Description: </span>{{product.description}}</p>
        <p>Category: <i class="text-slate-500">{{product.category}}</i></p>
        <h1 class="text-3xl font-extrabold">${{(product.price * 1.022).toFixed(2)}}</h1>
        <button class="py-2 px-6 mt-7 w-56 rounded-xl text-white bg-blue-500">Add to Cart</button>
        </div>
    </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center">
      <Loader/>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
import {useRouter, useRoute} from "vue-router";
import Loader from './Loader.vue'

export default {
    components:{
        Loader
    },
    mounted() {
         this.increment();
    },
    setup(){
        const router = useRouter();
        const route = useRoute();
        const id = route.params.id;
        const product = ref();

    async function increment() {
    await axios.get('products/' + id).then(response => (this.product = response.data))
    
    }

    return {
        router, 
        route, 
        id, 
        increment, 
        product
    }
    }
}

</script>

<style lang="scss" scoped>

</style>