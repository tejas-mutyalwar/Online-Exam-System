import { myAxios } from "./helper";

export const signUp = (signupDetails) => {
    return myAxios
    .post('/user/new', signupDetails)
    .then((response) => response.data);
}