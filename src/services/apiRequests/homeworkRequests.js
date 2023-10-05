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

export const createLessonApi = async (token, model) => {
    return baseApi.post(`create_lesson`, model, secure(token));
};

export const getLessonsApi = async (token) => {
    return baseApi.get(`lessons`, secure(token));
};
