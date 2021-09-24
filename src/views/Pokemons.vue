<template>
  <div class="pokemons">
    <section>
      <div class="container">
        <h2 style="display: flex; justify-content: space-between;">Pokemons</h2>
        <pagination />
        <div class="row">
          <div class="col s6 m3 l2 xl2" v-for="pokemon in pokemons" :key="pokemon.id">
            <node-card :node="pokemon" />
          </div>
        </div>
        <pagination />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import NodeCard from '@/components/NodeCard.vue'
import Pagination from '@/components/Pagination.vue'

import {
  FETCH_API_DATA,
  GET_DATA
} from '@/store/modules/constants'

export default {
  name: 'PokemonsView',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchPokeData({limit: 24, offset: 0})
    })
  },
  methods: {
    ...mapActions({
      fetchPokeData: `pokemons/${FETCH_API_DATA}`,
    })
  },
  computed: {
   ...mapGetters({
     pokemons: `pokemons/${GET_DATA}`,
   })
  },
  components: {
    NodeCard,
    Pagination
  }
}
</script>