import $api from "@/http";

export default class AbilitiesService {

  static async getAll(limit = 20, offset = 0) {
      return $api.get(`/ability/?limit=${limit}&offset=${offset}`);
  } 

  static async getById(id) {
    return $api.get(`/ability/${id}`);
  }
}