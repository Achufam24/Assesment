import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'



const store = createStore({
    state: {
        single: null,
        cart:[],
        products:[
            
        ]
    },

    mutations:{
        SET_PRODUCT(state, products){
            state.products = products;
        },
        SET_SINGLE_PRODUCT(state, product){
            state.single = product
        },
        addItem(state, item) {
            state.cart.push(item);
          },  
        removeItem(state,item) {
            state.cart.splice(item, 1)
        }    
    },


    actions:{
        async fetchProduct(context){
            try {
                const response = await axios.get('products');
                context.commit("SET_PRODUCT", await response.data)
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        addItem(context, item) {
            const existingproduct = this.state.cart.find(p => p.id === item.id)
            if (existingproduct) {
                alert('product already exists in cart!')
            }
            else{
                context.commit('addItem', item);
                alert('Prouct added to cart successfully!')
            }
          },
        removeItem(context, item) {
            context.commit('removeItem',item)
            alert('Product removed from cart!')
        }      
    },
    getters: {
        getProduct(state){
            return state.products
        },
        getSingle(state){
            return state.single
        },
        getCart(state){
            return state.cart
        },
        getCartLength(state){
            return state.cart.length
        }
    },
    plugins: [createPersistedState()]

})


export default store;