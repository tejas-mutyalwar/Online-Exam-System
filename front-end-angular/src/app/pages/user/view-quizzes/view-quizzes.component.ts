import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-view-quizzes',
	templateUrl: './view-quizzes.component.html',
	styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

	quizzes : any
	categoryId = -1

	constructor(private quizService: QuizService, private route: ActivatedRoute) { }

	ngOnInit(): void {

		this.route.params.subscribe((params) => {

			this.categoryId = params['categoryId'];

			if (this.categoryId == -1) { // load all quizzes
				this.quizService.activeQuizzes().subscribe(
					{
						next: (data: any) => {
							this.quizzes = data;
						},
						error: (error) => {
							Swal.fire("Error !!", "Error in loading quizzes for user !!", "error");
						}
					}
				);
			}
			else { // load category specific quizzes
				this.quizService.viewActiveQuizzesOfCategory(this.categoryId).subscribe(
					{
						next: (data: any) => {
							this.quizzes = data;
						},
						error: (error) => {
							Swal.fire("Error !!", "Error loading category specific quizzes", "error")
						}
					}
				);
			}
		});
	}
}
