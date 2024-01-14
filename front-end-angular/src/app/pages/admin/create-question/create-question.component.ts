import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})

export class CreateQuestionComponent implements OnInit {

	public Editor = ClassicEditor;

    question = {
		"questionType": "",
		"questionContent" : "",
		"options" : ["", "", "", ""],
		"answer" : "",
		"questionMarks" : 1,
		"questionDifficulty" : "",
		"questionCategory" : ""
	};

  constructor (private questionService : QuestionService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    // this.question.quiz.quizId = this.route.snapshot.params['quizId'];
    // this.question.quiz.title = this.route.snapshot.params['quizTitle'];
  }

  formSubmit() {
	
	if (this.question.questionContent.trim() == "" || this.question.questionContent.trim() == null) {
		return
	}

	// if (this.question.options.trim() == "" || this.question.optionOne.trim() == null) {
	// 	return
	// }

	// if (this.question.optionTwo.trim() == "" || this.question.optionTwo.trim() == null) {
	// 	return
	// }

	// if (this.question.optionThree.trim() == "" || this.question.optionThree.trim() == null) {
	// 	return
	// }

	// if (this.question.optionFour.trim() == "" || this.question.optionFour.trim() == null) {
	// 	return
	// }

	if (this.question.answer.trim() == "" || this.question.answer.trim() == null) {
		return
	}

	// this.questionService.createQuestion(this.question).subscribe(
	// 	{
	// 		next : (data : any) => {
	// 			Swal.fire("Success", "Question added", "success");
	// 			this.router.navigate(["/teacher/question/", this.question.quiz.quizId, this.question.quiz.title]);
				
	// 		},
	// 		error : (error: any) => {
	// 			console.log(error);
				
	// 		}
			
			
	// 	}
	// );
  }
}
