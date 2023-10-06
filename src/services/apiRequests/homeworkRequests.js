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
    return baseApi.get(`homework_list`, secure(token));
};

export const getHomeworkApi = async (token, lessonId) => {
    return baseApi.get(`homework_item?id=${lessonId}`, secure(token));
};

export const sendHomeworkAnswerApi = async (token, model) => {
    return baseApi.post(`send_homework_answer`, model, secure(token));
};
