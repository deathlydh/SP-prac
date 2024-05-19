import {$authHost, $host} from "./index";
import { jwtDecode } from "jwt-decode"; // Используем экспорт jwtDecode из модуля jwt-decode

export const registration = async (email, password, role) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: "CLIENT" });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token); // Используем jwtDecode вместо jwt_decode
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token); // Используем jwtDecode вместо jwt_decode
}
export const logout = async (id) => {
    const {data} = await $host.post('api/user/logout', {id})
    localStorage.removeItem('token')
    return true
}

export const getAllUsers = async () => {
    const {data} = await $authHost.get('api/user/getAllUsers' )
    return data
}
export const uvolit = async (id) => {
    const {data} = await $authHost.post('api/user/uvolit', {id} )
    return data
}
export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token); // Используем jwtDecode вместо jwt_decode
}