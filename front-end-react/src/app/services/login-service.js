import { myAxios } from "./helper";
import { setupAxiosInterceptors } from "./auth-interceptor";

//make login request to server
export const login = (loginDetails) => {
    return myAxios
    .post('/generate-token', loginDetails)
    .then((response) => response.data);
}

//isLoggedIn
export const isLoggedIn = () => {
    let jwt = localStorage.getItem("jwt");
    if (jwt === undefined || jwt === "" || jwt === null) {
        return false;
    }
    return true;
}

export const getToken = () => {
    if (isLoggedIn())
        return localStorage.getItem("jwt");
}

//doLogin => data => set to localStorage
export const doLogin = (jwt, next) => {
    localStorage.setItem("jwt", jwt);
    next()
}

//doLogout => removefrom localStorage
export const doLogout = (next) => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user")
    next()
}

//get currenttly logged in user from server
export const getCurrentUser = () => {
    setupAxiosInterceptors(getToken());
    return myAxios
        .get('/current-user')
        .then((response) => response.data);
}

export const getUser = () => {
    if (isLoggedIn()) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        doLogout(()=>{
            console.log("user logged out");
        });
        return undefined;
    }
}

export const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}
