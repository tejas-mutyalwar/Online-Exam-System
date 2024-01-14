package com.exam.controller;

import com.exam.model.exam.Question;
import com.exam.model.exam.Result;
import com.exam.service.QuestionService;
import com.exam.service.QuizService;
import com.exam.service.ResultService;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping(path = "/question")
@CrossOrigin("*")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuizService quizService;

    @Autowired
    private ResultService resultService;

    @Autowired
    private UserService userService;

    @PostMapping(path = "/new")
    public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
        return new ResponseEntity<>(this.questionService.createQuestion(question), HttpStatus.CREATED);
    }

//    @GetMapping(path = "/view/{questionId}")
//    public ResponseEntity<Question> viewQuestion(@PathVariable String questionId) {
//        return new ResponseEntity<>(this.questionService.getQuestion(questionId), HttpStatus.OK);
//    }

    @GetMapping(path = "/view/all")
    public ResponseEntity<?> viewQuestions() {
        return new ResponseEntity<>(this.questionService.getQuestions(), HttpStatus.OK);
    }

    @PutMapping(path = "/modify")
    public ResponseEntity<Question> modifyQuestion(@RequestBody Question question) {
        return new ResponseEntity<>(this.questionService.modifyQuestion(question), HttpStatus.OK);
    }

//    @DeleteMapping(path = "/delete/{questionId}")
//    public void removeQuestion(@PathVariable Long questionId) {
//        this.questionService.removeQuestion(questionId);
//    }
//
//    @GetMapping(path = "/view/quiz/{quizId}")
//    public ResponseEntity<?> viewQuestionsOfQuizNonAdmin(@PathVariable Long quizId) {
//        Quiz quiz = this.quizService.getQuiz(quizId);
//        Set<Question> questions = quiz.getQuestions();
//        List<Question> questionsList = new ArrayList<>(questions);
//        if (questionsList.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
//            questionsList = questionsList.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()));
//        }
//        for (Question question : questionsList) {
//           question.setAnswer("");
//        }
//        Collections.shuffle(questionsList);
//        return new ResponseEntity<>(questionsList, HttpStatus.OK);
//    }
//
//    @GetMapping(path = "/view/quiz/all/{quizId}")
//    public ResponseEntity<?> viewAllQuestionsOfQuizAdmin(@PathVariable Long quizId) {
//        Quiz quiz = this.quizService.getQuiz(quizId);
//        Set<Question> questions = quiz.getQuestions();
//        return new ResponseEntity<>(questions, HttpStatus.OK);
//    }

    @PostMapping("/evaluate-quiz")
    public ResponseEntity<?> evaluateQuiz(@RequestBody Result result) {

        double score = 0.0;
        int correctAnswers = 0;
        Long questionsAttempted = 0L;

        if (!result.getQuizAttemptQuestions().isEmpty()) {

            for (Question quizQuestion : result.getQuizAttemptQuestions()) {

                Question questionFromDB = this.questionService.getQuestion(quizQuestion.getQuestionId());
                if ( quizQuestion.getAnswerGiven() != null && !quizQuestion.getAnswerGiven().equals("") ) {

                    questionsAttempted++ ;

                    if (questionFromDB.getAnswer().trim().equals(quizQuestion.getAnswerGiven().trim())) {
                        correctAnswers++;
//                        double marksPerQuestion = Double.parseDouble(quizQuestion.getQuestionMarks()) / Double.parseDouble(quizQuestion.getQuiz().getNumberOfQuestions());
                        score += quizQuestion.getQuestionMarks();
                    }
                }
            };
        }
        Map<String, Object> resultToUI = new HashMap<>();
        resultToUI.put("score", score);
        resultToUI.put("correctAnswers", correctAnswers);
        resultToUI.put("attemptedQuestions", questionsAttempted);

        Result resultToDB = new Result();
        resultToDB.setQuizTitle(result.getQuizTitle());
        resultToDB.setScore(score);
        resultToDB.setTotalMarks(result.getTotalMarks());
        resultToDB.setNumberOfQuestions(result.getNumberOfQuestions());
        resultToDB.setNumberOfAttemptedQuestions(questionsAttempted);
        resultToDB.setUserName(result.getUserName());
//        resultToDB.setUser(this.userService.getUser(result.getUserName()));
//        resultToDB.setAttemptTime(LocalDateTime.now());

        this.resultService.createResult(resultToDB);
        return new ResponseEntity<>(resultToUI, HttpStatus.OK);
    }

}
