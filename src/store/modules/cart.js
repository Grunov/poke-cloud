import {
  GET_COUNT,
  GET_DATA,
} from './constants'

export default {
  namespaced: true,
  state: () => ({
    count: 0,
    data: []
  }),
  mutations: { 
    add_to_cart(state, pokemon) {
      const findedPokemon = state.data.find(item => item.id === pokemon.id);
      if(!findedPokemon) {
        pokemon.count = 1;
        state.data.push(pokemon);
        state.count = state.data.length
      }
      else {
        pokemon.count++;
      }
    }
  },
  actions: {
     
  },
  getters: {
    [GET_DATA]: (state) => state.data,
    [GET_COUNT]: (state) => state.count 
  }
}