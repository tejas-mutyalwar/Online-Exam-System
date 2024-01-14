package com.exam.service.impl;

import com.exam.model.exam.Category;
import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.repository.QuizRepository;
import com.exam.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepository quizRepository;

    @Override
    public Quiz createQuiz(Quiz quiz) {
        quiz.setNumberOfQuestions(quiz.getQuestions().size());
        int totalMarks = 0;
        for (Question question : quiz.getQuestions()) {
            totalMarks += question.getQuestionMarks();
        }
        quiz.setMaxMarks(totalMarks);

        Quiz quizFromDb = this.quizRepository.insert(quiz);
        System.out.println(quizFromDb.getQuizId());
        return quizFromDb;
    }

    @Override
    public Quiz modifyQuiz(Quiz quiz) {
        return this.quizRepository.insert(quiz);
    }

//    @Override
//    public Set<Quiz> getQuizzes() {
//        return new HashSet<>(this.quizRepository.findAll());
//    }

//    @Override
//    public Set<Quiz> getQuizzesOfCategory(Long categoryId) {
//        Category category = new Category();
//        category.setCategoryId(categoryId);
//        return this.quizRepository.findByCategory(category);
//    }

    @Override
    public Set<Quiz> getActiveQuizzes(Boolean active) {
        return this.quizRepository.findByActive(true);
    }

//    @Override
//    public Set<Quiz> getActiveQuizzesOfCategory(Long categoryId, Boolean active) {
//        Category category = new Category();
//        category.setCategoryId(categoryId);
//        return this.quizRepository.findByCategoryAndActive(category, true);
//    }

    @Override
    public Quiz getQuiz(String quizId) {
        return this.quizRepository.findById(quizId).get();
    }

    @Override
    public void removeQuiz(String quizId) {
        this.quizRepository.deleteById(quizId);
    }
}
