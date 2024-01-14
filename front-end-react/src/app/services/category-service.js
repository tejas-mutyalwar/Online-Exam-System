import { myAxios } from "./helper";
import { setupAxiosInterceptors } from "./auth-interceptor";
import { getToken } from "./login-service";

export const getCategories =() => {
    setupAxiosInterceptors(getToken());
    return myAxios
    .get(`/category/view/all`)
    .then((response) => response.data);
}