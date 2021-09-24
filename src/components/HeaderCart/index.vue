<template>
  <div class="header-cart">
    <span class="material-icons" style="line-height: 2.75;">shopping_cart</span>
    <span>{{cartCount}}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {
  GET_COUNT,
} from '@/store/modules/constants'

export default {
  name: 'HeaderCart',
  computed: {
    ...mapGetters({
      cartCount: `cart/${GET_COUNT}`
    })
  }
}
</script>