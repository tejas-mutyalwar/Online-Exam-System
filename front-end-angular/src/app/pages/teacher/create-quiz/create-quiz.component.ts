import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})

export class CreateQuizComponent implements OnInit {

  selectedQuestions: any[] = [];
  questions: any[] = [];
  categories : any;

	quiz = {
		"title": "",
		"description": "",
		"maxMarks": "",
		"numberOfQuestions": "",
		"active" : "",
		"category" : null,
    "questions": null
	};

	constructor(private quizService : QuizService, private categoryService : CategoryService,
        private questionService : QuestionService, 
				private snack : MatSnackBar, private router : Router) { }

	ngOnInit(): void {

		this.categoryService.categories().subscribe(
        {
            next: (data : any) => {
              this.categories = data;
              console.log(data);
            },
            error : (error) => {
              Swal.fire("Error !!", "Error loading categories","error");
            },
            complete : () => console.log("complete")
        }
		);	

    this.questionService.viewAllQuestions().subscribe(
        {
            next: (data : any) => {
                this.questions = data;
                console.log(data);
            },
            error : (error) => {
              Swal.fire("Error !!", "Error loading questions", "error");
            },
            complete : () => console.log("complete")
        }
    );
	}

    // Handle selection change
    onChange(event: Event): void {
      const target = event.target as HTMLSelectElement;
      this.selectedQuestions = Array.from(target.selectedOptions, option => option.value);
    }

	formSubmit() {

		if (this.quiz.title.trim() == "" || this.quiz.title == null) {
			this.snack.open("Title Required !!", "", {
				duration : 2000
			});
		}

		this.quizService.createQuiz(this.quiz).subscribe(
		{
			next : (data : any) => {
				Swal.fire("Success", "Quiz Created successfully : " + data.title, "success");
        this.quiz = {
          "title": "",
          "description": "",
          "maxMarks": "",
          "numberOfQuestions": "",
          "active" : "",
          "category" : null,
          "questions": null
        };
				this.router.navigate(['/teacher/create-quiz']);
			},
			error : (error) => {
				Swal.fire("Error !!", "Error while adding Quiz", "error")
				console.log(error);
				
			},
			complete : () => console.log("complete")
			
		});

	}

}
