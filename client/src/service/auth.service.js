import api from "../api";


class  AuthService {
    static async login(email , password){
        return api.post('/login',{email, password})
    }
    static async registration(name, email , password, birthday, sex, photo) {
        return api.post('/registration',{name, email , password, birthday, sex, photo})
    }
    static async logout() {
        return api.post('/logout')
    }
}

export default AuthService