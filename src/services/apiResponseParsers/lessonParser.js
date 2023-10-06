import { createLessonApi, deleteLessonApi, getOwnLessonApi, getTeacherLessonsApi, updateLessonApi } from "../apiRequests/lessonRequests";


export const createLesson = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await createLessonApi(token, model)
        .then((response) => {
            isSuccess = true;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const updateLesson = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await updateLessonApi(token, model)
        .then((response) => {
            isSuccess = true;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const deleteLesson = async (token, lessonId) => {
    let isSuccess = false;
    let content = "";
    await deleteLessonApi(token, lessonId)
        .then((response) => {
            isSuccess = true;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const getTeacherLessons = async (token) => {
    let isSuccess = false;
    let content = "";
    await getTeacherLessonsApi(token)
        .then((response) => {
            isSuccess = true;
            content = response.data.lessons;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const getOwnLesson = async (token, lessonId) => {
    let isSuccess = false;
    let content = "";
    await getOwnLessonApi(token, lessonId)
        .then((response) => {
            isSuccess = true;
            content = response.data.content;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};