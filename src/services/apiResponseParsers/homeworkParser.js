import {
    createLessonApi,
    deleteLessonApi,
    getLessonApi,
    getLessonsApi,
    getOwnLessonApi,
    getTeacherLessonsApi,
    sendHomeworkAnswerApi,
    updateLessonApi,
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

export const updateLesson = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await updateLessonApi(token, model)
        .then((response) => {
            isSuccess = true;
            console.log("updateLesson", response.data);
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
            console.log("deleteLesson", response.data);
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

export const getLesson = async (token, lessonId) => {
    let isSuccess = false;
    let content = "";
    await getLessonApi(token, lessonId)
        .then((response) => {
            isSuccess = true;
            content = response.data.content;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const sendHomeworkAnswer = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await sendHomeworkAnswerApi(token, model)
        .then((response) => {
            isSuccess = true;
            console.log(response);
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
            console.log("response.data", response.data.content);
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};
