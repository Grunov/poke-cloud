import $api from "@/http";

export default class AuthService {
    static async signup(email, password) {
        return $api.post('auth/registration', {
            email: email,
            password: password
        });
    }

    static async signin(email, password) {
        return $api.post('auth/login', {
            email: email,
            password: password
        });
    }

    static async signout() {
        return $api.post('auth/logout');
    }
}