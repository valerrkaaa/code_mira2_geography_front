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

export const getHomeworkListApi = async (token) => {
    return baseApi.get(`lessons`, secure(token));
};

export const getHomeworkApi = async (token, lessonId) => {
    return baseApi.get(`lesson?id=${lessonId}`, secure(token));
};

export const sendHomeworkAnswerApi = async (token, model) => {
    return baseApi.post(`send_homework_answer`, model, secure(token));
};
