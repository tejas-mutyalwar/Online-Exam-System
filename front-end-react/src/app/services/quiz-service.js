import { myAxios } from "./helper";
import { setupAxiosInterceptors } from "./auth-interceptor";
import { getToken } from "./login-service";

//get all active quizzes from server
export const getActiveQuizzes = () => {
    setupAxiosInterceptors(getToken());
    return myAxios
    .get(`/quiz/view/all/active`)
    .then((response) => response.data);
}

export const getQuiz =(quizId) => {
    setupAxiosInterceptors(getToken());
    return myAxios
    .get(`/quiz/view/${quizId}`)
    .then((response) => response.data);
}

export const evaluateQuiz = (quizAttemptData) => {
    setupAxiosInterceptors(getToken());
    return myAxios
    .post(`/question/evaluate-quiz`, quizAttemptData)
    .then((response) => response.data);
}
