import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{

  categories : any;

  constructor(private categoryService : CategoryService) {}

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

}
