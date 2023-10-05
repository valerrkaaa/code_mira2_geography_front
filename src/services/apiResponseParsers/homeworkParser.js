import {
    createLessonApi,
    getLessonsApi,
} from "../apiRequests/homeworkRequests";

export const createLesson = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await createLessonApi(token, model)
        .then((response) => {
            isSuccess = true;
            console.log("createLesson", response.data);
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const getLessons = async (token) => {
    let isSuccess = false;
    let content = "";
    await getLessonsApi(token)
        .then((response) => {
            isSuccess = true;
            content = response.data.lessons;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};
