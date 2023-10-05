import { createLessonApi } from "../apiRequests/homeworkRequests";

export const createLesson = async (token, model) => {
    let isSuccess = false;
    let content = "";
    await createLessonApi(token, model)
        .then((response) => {
            isSuccess = true;
            console.log("createLesson", response.data);
        })
        .catch((errors) => {console.log(errors.response);});
    return [isSuccess, content]
};
