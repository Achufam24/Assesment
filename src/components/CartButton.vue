<template>
    <router-link to="/cart" class="button text-white bg-blue-500 py-1 px-2 rounded-md">
     Cart
    ({{count}})
  </router-link>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            count:'getCartLength'
        })
  },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>

