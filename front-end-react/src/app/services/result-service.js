import { myAxios } from "./helper";
import { setupAxiosInterceptors } from "./auth-interceptor";
import { getToken } from "./login-service";

//get all active quizzes from server
export const getResultsOfUser = (userName) => {
    setupAxiosInterceptors(getToken());
    return myAxios
    .get(`/result/view/all/${userName}`)
    .then((response) => response.data);
}

