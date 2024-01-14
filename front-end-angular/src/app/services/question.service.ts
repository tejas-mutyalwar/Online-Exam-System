import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  public createQuestion(question : any) {
    return this.http.post(`${baseUrl}/question/new`, question);
  }

  public viewQuestion(questionId : number) {
    return this.http.get(`${baseUrl}/question/view/${questionId}`);
  }

  public viewAllQuestions() {
    return this.http.get(`${baseUrl}/question/view/all`);
  }

  public viewQuestionsOfQuizNonAdmin(quizId : number) {
    return this.http.get(`${baseUrl}/question/view/quiz/${quizId}`);
  }

  public viewQuestionsOfQuizForTest(quizId : number) {
    return this.http.get(`${baseUrl}/question/view/quiz/${quizId}`);
  }

  public viewQuestionsOfQuizAdmin(quizId : number) {
    return this.http.get(`${baseUrl}/question/view/quiz/all/${quizId}`);
  }

  public modifyQuestion(question : any) {
    return this.http.put(`${baseUrl}/question/modify`, question);
  }

  public removeQuestion(questionId: any) {
    return this.http.delete(`${baseUrl}/question/delete/${questionId}`);
  }

  public evaluateQuiz(quizQuestions : any) {
    return this.http.post(`${baseUrl}/question/evaluate-quiz`, quizQuestions);
  }

}
