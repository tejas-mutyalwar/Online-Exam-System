import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  //load all categories
  public categories() {
    return this.http.get(`${baseUrl}/category/view/all`);
  }

  //create a category
  public createCategory(category : any) {
    return this.http.post(`${baseUrl}/category/new`, category);
  }
}
