import { Auth } from "../interface/Auth.interface";
import api from "../services/api";

class AuthAPI
{
    login = async (auth: Auth) => await api.post('/auth', auth);
}

export default new AuthAPI();