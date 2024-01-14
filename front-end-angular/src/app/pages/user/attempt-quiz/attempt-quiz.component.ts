import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-attempt-quiz',
	templateUrl: './attempt-quiz.component.html',
	styleUrls: ['./attempt-quiz.component.css']
})
export class AttemptQuizComponent implements OnInit {

	quizId = -1;
	quizQuestions: any

	//result variables
	score = 0;
	correctAnswers = 0;
	attemptedQuestions = 0;

	//quiz status variable
	isSubmitted = false;

	//quiz timer variable
	timer: any

	constructor(private locationStrategy: LocationStrategy, private route: ActivatedRoute,
		private questionService: QuestionService, private router: Router) { }

	ngOnInit(): void {
		this.preventBackNavigation();
		this.quizId = this.route.snapshot.params['quizId'];
		this.loadQuestionsForTest();

	}

	loadQuestionsForTest() {
		this.questionService.viewQuestionsOfQuizForTest(this.quizId).subscribe(
			{
				next: (data: any) => {
					this.quizQuestions = data;
					this.timer = this.quizQuestions.length * 1 * 60;
					// this.quizQuestions.forEach((quizQuestion: any) => {
					// 	quizQuestion['answerGiven'] = '';
					// });
					//console.log(this.quizQuestions);
					this.startTimer();

				},
				error: (error) => {
					Swal.fire("Error while loading quiz question in the Test")
				}
			}
		);
	}

	preventBackNavigation() {
		history.pushState(null, "", location.href);
		this.locationStrategy.onPopState(() => {
			history.pushState(null, "", location.href);
		})
	}

	submitQuiz() {
		Swal.fire({
			title: 'Do you want to submit the quiz?',
			showCancelButton: true,
			confirmButtonText: 'Submit',
			icon: 'question'
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				this.evaluateQuiz();
			}
		})
	}

	evaluateQuiz() {

		this.isSubmitted = true;

		//call to server to check quiz result
		this.questionService.evaluateQuiz(this.quizQuestions).subscribe(
			{
				next: (data: any) => {
					console.log("result : ", data);
					this.score = parseFloat(Number(data['score']).toFixed(2));
					this.correctAnswers = data['correctAnswers'];
					this.attemptedQuestions = data['attemptedQuestions']

				},
				error: (error) => {
					console.log("result error : ", error);

				}
			}
		);

		// Swal.fire('Submitted !', '', 'success');
		// this.isSubmitted = true;
		// // calculation
		// this.quizQuestions.forEach((quizQuestion: any) => {

		// 	if (quizQuestion.answerGiven.trim() != '') {
		// 		if (quizQuestion.answerGiven == quizQuestion.answer) {
		// 			this.correctAnswers++;
		// 			this.score += (this.quizQuestions[0].quiz.maxMarks / this.quizQuestions.length);
		// 			this.attemptedQuestions++;
		// 		}
		// 		else {
		// 			this.attemptedQuestions++;
		// 		}
		// 	}
		// });
		// this.score = parseFloat(this.score.toFixed(2));
		// console.log(" => attempted : ", this.attemptedQuestions);
		// console.log(" => correct ans : ", this.correctAnswers);
		// console.log(" => score : ", this.score);
	}

	startTimer() {
		let t = window.setInterval(() => {
			if (this.timer <= 0) {
				this.evaluateQuiz();
				clearInterval(t);
			}
			else {
				this.timer--;
			}
		}, 1000)
	}

	getFormattedTime() {
		let mm = Math.floor(this.timer / 60);
		let ss = this.timer - mm * 60;
		return `${mm} min : ${ss} sec`
	}

	printPage() {
		window.print();
	}

}
