import Vue from 'vue'
import Vuex from 'vuex'
import PokemonsModule from './modules/pokemons'
import CartModule from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemons: PokemonsModule,
    cart: CartModule
  }
})
