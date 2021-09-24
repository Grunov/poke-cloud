import PokeService from '@/services/PokeService';

import {
  status,
  _request,
  _success,
  _success_single,
  _error,
  FETCH_API_DATA,
  FETCH_API_SINGLE,
  GET_DATA,
  GET_SINGLE
} from './constants'


export default {
  namespaced: true,
  state: () => ({
    status: status.listen,
    count: 0,
    next: null,
    previous: null,
    data: [],
    current: null,
  }),
  mutations: { 
    [_request](state) {
      state.status = status.request;
    },
    [_success](state, payload) {
      state.status = status.success;
      state.count = payload.count
      state.next = payload.next
      state.previous = payload.previous
      state.data = payload.results
    },
    [_success_single](state, payload) {
     state.current = payload
    },
    [_error](state) {
      state.status = status.error;
    }
  },
  actions: {
      async [FETCH_API_DATA]({commit}, params = {limit: 20, offset: 0}) {
        commit(_request)
        try {
          let {data} = await PokeService.getAll(params.limit, params.offset);
          let results = []
          data.results.forEach(async (item) => {
            const responseMoreInfo = await getPokeMoreInfo(item);
            results.push(responseMoreInfo)
          })
          data.results = results;
          commit(_success, data)
        }
        catch (error) {
          console.log(error);
        }
      },
      async [FETCH_API_SINGLE]({commit}, name) {
        commit(_request)
        try {
          let {data} = await PokeService.getByName(name);
          commit(_success_single, data)
        }
        catch (error) {
          console.log(error);
        }
      }
  },
  getters: {
    [GET_DATA]: (state) => state.data,
    [GET_SINGLE]: (state) => state.current
  }
}

async function getPokeMoreInfo(pokemon) {
  let {data} = await PokeService.getByName(pokemon.name);
  data = {
    ...data,
    price: Math.round((data.stats[0].base_stat + data.stats[1].base_stat) * 1.5)
  }
  return data;
}

 