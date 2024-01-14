import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-view-quizzes',
	templateUrl: './view-quizzes.component.html',
	styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

	quizzes: any;

	constructor(private quizService: QuizService) { }

	ngOnInit(): void {
		this.quizService.quizzes().subscribe(
			{
				next: (data: any) => {
					this.quizzes = data;
					console.log(this.quizzes);
				},
				error: (error) => {
					console.log(error);
					Swal.fire("Error !!", "Error in loading data !", "error");
				}
			}
		);
	}

	public deleteQuiz(qId: number) {

		Swal.fire({
			icon : "info",
			title : "Are you sure ?",
			confirmButtonText : "Delete",
			showCancelButton : true
		}).then((result => {

			if (result.isConfirmed) {

				this.quizService.removeQuiz(qId).subscribe(
					{
						next : (data : any) => {
							Swal.fire("Success !!", "Quiz deleted", "success");
							this.quizzes = this.quizzes.filter((quiz: { quizId: number; }) => quiz.quizId != qId);       
						},
						error : (error) => {
							Swal.fire("Error !!", "Error while deleting quiz", "error")
						}
					}
				);
			}
		}));
	}
}

