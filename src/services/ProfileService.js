import $api from "@/http";

export default class ProfileService {
    static async create(fields) {
        return $api.post('/profile/create', {...fields});
    } 

    static async getAll() {
        return $api.get('/profile');
    } 
}