import api from "../api";


class  UsersService {
    static async getUser(email) {
        return api.post('/user', {email})
    }
}
export default UsersService