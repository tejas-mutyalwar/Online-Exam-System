package com.exam.controller;

import com.exam.model.exam.Quiz;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping(path = "/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @PostMapping(path = "/new")
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz) {
        return new ResponseEntity<>(this.quizService.createQuiz(quiz), HttpStatus.CREATED);
    }

    @GetMapping(path = "/view/{quizId}")
    public ResponseEntity<Quiz> viewQuiz(@PathVariable String quizId) {
        return new ResponseEntity<>(this.quizService.getQuiz(quizId), HttpStatus.OK);
    }

//    @GetMapping(path = "/view/all")
//    public ResponseEntity<?> viewQuizzes() {
//        return new ResponseEntity<>(this.quizService.getQuizzes(), HttpStatus.OK);
//    }

//    @GetMapping(path = "/category/{categoryId}")
//    public ResponseEntity<?> viewQuizzesOfCategory(@PathVariable Long categoryId) {
//        return new ResponseEntity<>(this.quizService.getQuizzesOfCategory(categoryId), HttpStatus.OK);
//    }

    @GetMapping(path = "/view/all/active")
    public ResponseEntity<?> viewActiveQuizzes() {
        return new ResponseEntity<>(this.quizService.getActiveQuizzes(true), HttpStatus.OK);
    }

//    @GetMapping(path = "/category/{categoryId}/active")
//    public ResponseEntity<?> viewActiveQuizzesOfCategory(@PathVariable Long categoryId) {
//        return new ResponseEntity<>(this.quizService.getActiveQuizzesOfCategory(categoryId, true), HttpStatus.OK);
//    }

    @PutMapping(path = "/modify")
    public ResponseEntity<Quiz> modifyQuiz(@RequestBody Quiz quiz) {
        return new ResponseEntity<>(this.quizService.modifyQuiz(quiz), HttpStatus.OK);
    }

    @DeleteMapping(path = "/remove/{quizId}")
    public void removeQuiz(@PathVariable String quizId) {
        this.quizService.removeQuiz(quizId);
    }

}
