import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit{

    // public Editor = ClassicEditor;
    // public editorConfig: any = {
    //   allowedContent: true, // Allow all content
    //   disallowedContent: 'p script; *[on*]',
    //   // Advanced Content Filter configuration
    //   // Define what elements and attributes are allowed
    //   // This example allows only basic text formatting elements: bold, italic, underline, strikethrough
    //   // Adjust according to your requirements
    //   // extraAllowedContent: 'b i u s',
  
    //   // Other CKEditor configurations...
    // };

    question = {
      "questionType": "multiple-choice-question",
      "questionContent" : "",
      "options" : ["", "", "", ""],
      "answer" : "",
      "questionMarks": 0,
      "questionDifficulty" : "",
      "questionCategory" : ""
    };

    constructor (private questionService : QuestionService, private categoryService : CategoryService,
                 private route : ActivatedRoute, private router : Router) { }

    categories : any;
    
    ngOnInit(): void {
        this.categoryService.categories().subscribe(
          {
            next : (data : any) => {
              this.categories = data;
              console.log(this.categories);  
            },
            error : (error : any) => {
                Swal.fire("Error", "", "error");
                console.log(error);
            },
            complete : () => console.log("complete")
          }
        );
    }

    formSubmit() {
    
      if (this.question.questionContent.trim() == "" || this.question.questionContent.trim() == null) {
        return
      }
    
      if (this.question.options[0].trim() == "" || this.question.options[0].trim() == null) {
        return
      }
    
      if (this.question.options[1].trim() == "" || this.question.options[1].trim() == null) {
        return
      }
    
      if (this.question.options[2].trim() == "" || this.question.options[2].trim() == null) {
        return
      }
    
      if (this.question.options[3].trim() == "" || this.question.options[3].trim() == null) {
        return
      }
    
      if (this.question.answer.trim() == "" || this.question.answer.trim() == null) {
        return
      }

      if (this.question.questionMarks <= 0 || this.question.questionMarks == null) {
        return
      }

      if (this.question.questionDifficulty.trim() == "" || this.question.questionDifficulty.trim() == null) {
        return
      }

      if (this.question.questionCategory.trim() == "" || this.question.questionCategory.trim() == null) {
        return
      }
    
      this.questionService.createQuestion(this.question).subscribe(
        {
          next : (data : any) => {
            Swal.fire("Success", "Question added", "success");
            this.question = {
              "questionType": "multiple-choice-question",
              "questionContent" : "",
              "options" : ["", "", "", ""],
              "answer" : "",
              "questionMarks" : 0,
              "questionDifficulty" : "",
              "questionCategory" : ""
            };
            this.router.navigate(["/teacher/question/"]);
            
          },
          error : (error: any) => {
            console.log(error);
            
          } 
        }
      );
    }
}
