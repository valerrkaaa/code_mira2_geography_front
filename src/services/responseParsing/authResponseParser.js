import { authApi } from "../apiRequests/AuthAPI";

export const getDataFromLoginRequest = async (model) => {
    let isSuccess = false;
    let content = "";
    await authApi(model)
        .then((response) => {
            isSuccess = true;
            content = response.data.body.authorization.token;
        })
        .catch((error) => {
            let errorStatus = error.response.data.status;
            if (errorStatus === "validator error") {
                let errors = Object.entries(error.response.data.errors); // массив ошибок
                content = errors[0][1][0];
            } else if (errorStatus === "error") {
                content = error.response.data.message;
            }
        });
    return [isSuccess, content];
};
