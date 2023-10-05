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

export const getLecturePageApi = async (token, model) => {
    return baseApi.get(`lecture_page?id=${model}`, secure(token));
};

export const sendLecturePageApi = async (token, model) => {
    return baseApi.post(`lecture_page`, model, secure(token));
};
