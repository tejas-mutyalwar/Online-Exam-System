package com.exam.controller;

import com.exam.model.exam.Category;
import com.exam.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //add category
    @PostMapping(path = "/new")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
         Category category1 = this.categoryService.createCategory(category);
         return new ResponseEntity<>(category1, HttpStatus.CREATED);
    }

    //get category
    @GetMapping(path = "/view/{categoryId}")
    public Category viewCategory(@PathVariable("categoryId") Long categoryId) {
        return this.categoryService.getCategory(categoryId);
    }

    //get all categories
    @GetMapping(path = "/view/all")
    public ResponseEntity<?> viewCategories() {
        return new ResponseEntity<>(this.categoryService.getCategories(), HttpStatus.OK);
    }

    //update category
    @PutMapping(path = "/modify")
    public Category modifyCategory(@RequestBody Category category) {
        return this.categoryService.modifyCategory(category);

    }

    @DeleteMapping(path = "/remove/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId) {
        this.categoryService.removeCategory(categoryId);
    }

}
