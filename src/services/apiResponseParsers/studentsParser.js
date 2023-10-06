import { getClassListApi, getStudentListApi } from "../apiRequests/studentsAPI";


export const getClassList = async (token) => {
    let isSuccess = false;
    let content = "";
    await getClassListApi(token)
        .then((response) => {
            isSuccess = true;
            content = response.data.data
        })
        .catch((errors) => {
            console.log(errors.response);
        });
    return [isSuccess, content];
};
