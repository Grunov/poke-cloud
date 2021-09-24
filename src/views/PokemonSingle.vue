<template>
  <div class="pokemon-single">
    <div v-if="pokemon" class="container">
      <h1 class="pokemon-single__title">{{pokemon.name}}</h1>
      <div class="row">
        <div 
          class="col s6 m2" 
          v-for="(sprite, i) in sprites" 
          :key="i"
        >
          <div class="card">
            <div class="card-image">
              <img :src="sprite" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import {
  FETCH_API_SINGLE,
  GET_SINGLE
} from '@/store/modules/constants'

export default {
  name: 'PokemonSingle',
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      await vm.fetchPokeData(to.params.name)
    }) 
  },
  methods: {
    ...mapActions({
      fetchPokeData: `pokemons/${FETCH_API_SINGLE}`
    })
  },
  computed: {
    ...mapGetters({
      pokemon: `pokemons/${GET_SINGLE}`
    }),
    sprites() {
      const objEntitries = Object.entries(this.pokemon.sprites).filter(item => typeof item[1] === 'string').reverse();
      return Object.fromEntries(objEntitries);
    }
  }
}
</script>

<style lang="scss" scoped>
  .pokemon-single {

    &__title {
      text-transform: capitalize;
    }
  }
</style>