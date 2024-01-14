import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-modify-question',
  templateUrl: './modify-question.component.html',
  styleUrls: ['./modify-question.component.css']
})
export class ModifyQuestionComponent implements OnInit{

  public Editor = ClassicEditor;

  private questionId = -1;
  question : any;
  quizzes : any

  constructor(private questionService : QuestionService, private route : ActivatedRoute,
              private quizService : QuizService, private router : Router) {}

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params["questionId"];
     
    this.quizService.quizzes().subscribe(
      {
        next : (data : any) => {
          this.quizzes = data;
          console.log(data);
          
        },
        error : (error) => {
          console.log(error);
          
        }
      }
    );

    this.questionService.viewQuestion(this.questionId).subscribe(
      {
        next : (data : any) => {
          this.question = data;
          console.log(this.question);
          
        },
        error : (error) => {
          console.log(error);
          
        }
      }
    );
  }

  public modifyQuestion() {
    this.questionService.modifyQuestion(this.question).subscribe(
      {
        next : (data : any) => {
          this.question = data;
          Swal.fire("Success", "Question Updated", "success").then((r) => {
            this.router.navigate(["/admin/view-quiz-questions/", this.question.quiz.quizId, this.question.quiz.title]);
          }
          );
        },
        error : (error) => Swal.fire("Error", "Error while Updating Question", "error")
      }
    );
  }

}
