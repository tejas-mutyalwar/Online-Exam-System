import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit{

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    
  }

  public viewQuiz(qId : number) {
    return this.http.get(`${baseUrl}/quiz/view/${qId}`);
  }

  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/view/all`);
  }

  public viewQuizzesOfCategory(categoryId : number) {
    return this.http.get(`${baseUrl}/quiz/category/${categoryId}`)
  }

  public activeQuizzes() {
    return this.http.get(`${baseUrl}/quiz/view/all/active`);
  }

  public viewActiveQuizzesOfCategory(categoryId : number) {
    return this.http.get(`${baseUrl}/quiz/category/${categoryId}/active`);
  }

  public createQuiz(quiz : any) {
    return this.http.post(`${baseUrl}/quiz/new`, quiz);
  }

  public modifyQuiz(quiz : any) {
    return this.http.put(`${baseUrl}/quiz/modify`, quiz);
  }

  public removeQuiz(qId : number) {
    return this.http.delete(`${baseUrl}/quiz/remove/${qId}`);
  }

}
