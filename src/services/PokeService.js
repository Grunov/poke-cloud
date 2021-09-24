import $api from "@/http";

export default class PokeService {

  static async getAll(limit = 20, offset = 0) {
      return $api.get(`/pokemon/?limit=${limit}&offset=${offset}`);
  } 

  static async getByName(name) {
    return $api.get(`/pokemon/${name}`);
  }
}