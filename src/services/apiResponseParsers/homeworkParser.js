import {
    getHomeworkApi,
    getHomeworkListApi,
    sendHomeworkAnswerApi,
} from "../apiRequests/homeworkRequests";

export const getHomeworkList = async (token) => {
    let isSuccess = false;
    let content = "";
    await getHomeworkListApi(token)
        .then((response) => {
            isSuccess = true;
            content = response.data.lessons;
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

export const getHomework = async (token, lessonId) => {
    let isSuccess = false;
    let content = "";
    await getHomeworkApi(token, lessonId)
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
            content = response.data.answer
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};

