import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit{

  quizId : any;
  quizTitle : any;
  questions : any;

  constructor(private route : ActivatedRoute, private questionService : QuestionService,
              private router : Router) {}

  ngOnInit(): void {

    this.quizId = this.route.snapshot.params['quizId'];
    this.quizTitle = this.route.snapshot.params['title'];
    this.questionService.viewQuestionsOfQuizAdmin(this.quizId).subscribe(
      {
        next : (data : any) => {
          this.questions = data;
          console.log(this.questions);
          
        },
        error : (error) => {
          console.log("error =>" + error);
          
        }
      }
    );
  }

  public removeQuestion(questionId: any) {
    Swal.fire({
      title : "Are you sure ?",
      icon : 'info',
      showCancelButton : true,
      confirmButtonText : "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.removeQuestion(questionId).subscribe(
          {
            next : (data : any) => {
              Swal.fire("Deleted", "Question Deleted", "success")
              this.router.navigate(['/admin/view-quiz-questions', this.quizId, this.quizTitle]);
              this.questions = this.questions.filter((question : any) => question.questionId != questionId)
            },
            error : (error) => {
              Swal.fire("Error", "Error while deleting question", "error");
              console.log("Error while Deleting Question", error);
              
            }
          }
        );
      }
    })
  }

}
