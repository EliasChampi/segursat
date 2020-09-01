import cache from "../helpers/cache";
import request from "./request";

class AuthService {
    // login
    login(payload) {
        // yupp
    }

    // logout
    logout() {
        cache.cleanAll();
    }
    // getCurrentUser
    getCurrentUser() {
        return cache.getItem("user");
    }
}

export default new AuthService();
