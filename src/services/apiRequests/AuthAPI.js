import axios from "axios";

const baseApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/`,
});

const secure = (token) => {
    return {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
};

export const authApi = async (model) => {
    return baseApi.post(`login`, model);
};

export const registerApi = async (model) => {
    return baseApi.post(`register`, model);
};

export const checkUser = async (token) => {
    return baseApi.post(`me`,{},  secure(token));
};

export const getUserRoles = async () => {
    return baseApi.get(`user_roles`);
};

export const getUserInfo = async (token) => {
    return baseApi.get(`user`, secure(token));
};