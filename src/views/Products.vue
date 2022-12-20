<template>
    <div class="mt-4">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-4 py-2.5" v-if="products.length > 1">
    <div v-for="product in products" :key="product.id" class="flex flex-col cart  bg-white rounded-lg shadow-md hover:bg-slate-50">
    <div>
        <a href="#">
        <img class="p-8 rounded-t-lg" :src="`${product.image}`" alt="product image" />
    </a>
    </div>
    <div class="py-8 px-5">
        <router-link   v-bind:to="'/product/' + product.id">
            <h5 class="font-semibold text-md tracking-tight text-gray-900 h-32">{{product.title}}</h5>
        </router-link>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">${{ (product.price * 1.022).toFixed(2) }}</span>
            <button @click="addProduct(product)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
        </div>
    </div>
    </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center">
     <Loader/>
    </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { mapActions, mapMutations, mapGetters } from 'vuex'
const store = useStore();
import Loader from "../components/Loader.vue";


export default {
    methods: {
        ...mapMutations({
            add: "increment",
            addToCart: "addProducToCart"
        }),
        ...mapActions(["fetchProduct"]),
        ...mapActions(["addItem"]),
        addProduct(){
            this.$store.dispatch('addItem', ...arguments);
        },
  },
    created() {
        this.fetchProduct();
    },
    computed: {
        ...mapGetters({
            products: "getProduct",
            cart: "getCart"
        }),
    },
    setup() {
        return {};
    },
    components: { Loader }
}
</script>

<style scoped>
.cart{
    height: auto;
}
.cart img{
    height: 230px;
}

</style>