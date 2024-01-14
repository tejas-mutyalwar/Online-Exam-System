package com.exam.service;

import com.exam.model.exam.Quiz;
import java.util.Set;

public interface QuizService {

    public Quiz createQuiz(Quiz quiz);

    public Quiz getQuiz(String quizId);

//    public Set<Quiz> getQuizzes();
//
//    public Set<Quiz> getQuizzesOfCategory(Long categoryId);

    public Set<Quiz> getActiveQuizzes(Boolean active);

//    public Set<Quiz> getActiveQuizzesOfCategory(Long categoryId, Boolean active);

    public Quiz modifyQuiz(Quiz quiz);

    public void removeQuiz(String quizId);
}
