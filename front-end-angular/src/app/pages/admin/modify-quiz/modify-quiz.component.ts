import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modify-quiz',
  templateUrl: './modify-quiz.component.html',
  styleUrls: ['./modify-quiz.component.css']
})
export class ModifyQuizComponent implements OnInit{

  constructor(private route : ActivatedRoute, private quizService : QuizService,
              private categoryService : CategoryService, private router : Router) {}

  private quizId = 0;
  quiz : any;
  categories : any;

  ngOnInit(): void {

    this.quizId = this.route.snapshot.params['quizId'];

    this.categoryService.categories().subscribe(
      {
        next : (data : any) => {
          this.categories = data,
          console.log(this.categories);
        },
        error : (error) => {
          console.log(error);
        }
      }
    );

    this.quizService.viewQuiz(this.quizId).subscribe(
      {
        next : (data : any) => {
          this.quiz = data;
          console.log(this.quiz);
          
        },
        error : (error) => {
          Swal.fire("Error !! ", "Error while getting param from url", "error")
        }
      }
    );

  }

  public modifyQuiz() {
    this.quizService.modifyQuiz(this.quiz).subscribe(
      {
        next : (data : any) => {
          this.quiz = data;
          Swal.fire("Success !!", "Updated successfully", "success").then((r) => {
            this.router.navigate(["/admin/quizzes"]);
          });
        },
        error : (error) => {
          Swal.fire("Error !!", "Error while updating quiz", "error")
        }
      }
    );;
  }
}
