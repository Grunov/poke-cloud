<template>
  <div class="home">
    <section class="home__preview">
      <div class="home__preview-inner container">
        <h1 class="home__preview-title white-text"><span class="yellow-text text-darken-2">Poke</span> cloud</h1>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 style="display: flex; justify-content: space-between;">Pokemons <router-link to="/pokemons">all > </router-link> </h2>
        <div class="row" v-if="pokemons.length > 0">
          <div 
            v-for="pokemon in pokemons" 
            :key="pokemon.id"
            class="col s6 m3 l2 xl2">
            <node-card :node="pokemon" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'
import NodeCard from '@/components/NodeCard.vue'

import {
  FETCH_API_DATA,
  GET_DATA
} from '@/store/modules/constants'

export default {
  name: 'Home',
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      await vm.fetchPokeData({limit: 6, offset: 0})
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
    NodeCard
  }
}
</script>

<style lang="scss">
  .home {

    &__preview {
      height: 40vh;
      background-image: url(../assets/poke.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      align-items: center;
    }

    &__preview-inner {
          text-align: right;
    }

    &__preview-title {
      margin: 0;
  
    }
  }

  
</style>
