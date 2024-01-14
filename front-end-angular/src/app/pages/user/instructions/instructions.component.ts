import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-instructions',
	templateUrl: './instructions.component.html',
	styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

	quizId: any
	quizTitle: any
	quiz : any
	quizTimeHr = 0
	quizTimeMins = 0
	marksPerQuestion = 0

	constructor(private route: ActivatedRoute, private quizService : QuizService, private router : Router) {
		this.quizId = this.route.snapshot.params['quizId'];
		this.quizTitle = this.route.snapshot.params['title'];
	}

	ngOnInit(): void {
		
		this.quizService.viewQuiz(this.quizId).subscribe(
			{
				next : (data : any) => {
					//console.log("data", data);
					this.quiz = data;
					this.marksPerQuestion = parseFloat((this.quiz.maxMarks/this.quiz.numberOfQuestions).toFixed(2));
					this.quizTimeHr = Math.trunc( (this.quiz.numberOfQuestions*this.marksPerQuestion)/60 );
					this.quizTimeMins = Math.trunc( (this.quiz.numberOfQuestions*this.marksPerQuestion)%60 );
				},
				error : (error) => {
					Swal.fire("Error", "Error showing quiz instructions", 'error')
				}
			}
		);
	}

	startQuiz() {
		Swal.fire({
			title: 'Do you want to start the quiz ?',
			showCancelButton: true,
			confirmButtonText: 'Start',
			icon : 'info'
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
			  this.router.navigate(['/attempt-quiz/',this.quizId]);
			}
		})
	}

}
