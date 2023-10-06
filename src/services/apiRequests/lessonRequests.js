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

export const updateLessonApi = async (token, model) => {
    return baseApi.post(`update_lesson`, model, secure(token));
};

export const deleteLessonApi = async (token, lessonId) => {
    return baseApi.delete(`lesson?id=${lessonId}`, secure(token));
};

export const getTeacherLessonsApi = async (token) => {
    return baseApi.get(`teacher_lessons`, secure(token));
};

export const getOwnLessonApi = async (token, lessonId) => {
    return baseApi.get(`get_own_lesson?id=${lessonId}`, secure(token));
};

