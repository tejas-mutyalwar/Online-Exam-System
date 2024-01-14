import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

	public category = {
		"title": "",
		"description": ""
	};

	constructor(private categoryService: CategoryService, private snack: MatSnackBar,
				private router : Router) { }

	ngOnInit(): void {
	}

	formSubmit() {

		if (this.category.title == null || this.category.title == "") {
			this.snack.open("Title cannot be empty", "", {
				duration: 2000
			});
			return;
		}

		if (this.category.description == null || this.category.description == "") {
			this.snack.open("Description cannot be empty", "", {
				duration: 2000
			});
			return;	
		}

		this.categoryService.createCategory(this.category).subscribe(
			{
				next: (data: any) => {
					Swal.fire("Success !!", "CategoryId : " + data.categoryId, 'success');
					this.router.navigate(["/admin/categories"]);
				},
				error: (error) => this.snack.open(error, "", {
					duration: 2000
				}),
				complete: () => console.log("complete")
			}
		);
	}

}
