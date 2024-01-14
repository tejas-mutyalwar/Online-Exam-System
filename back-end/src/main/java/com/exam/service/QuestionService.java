package com.exam.service;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;

import java.util.Set;

public interface QuestionService {

    public Question createQuestion(Question question);

    public Question modifyQuestion(Question question);

    public Set<Question> getQuestions();

    public Question getQuestion(String questionId);

    public void removeQuestion(String questionId);

//    public Set<Question> getQuestionByQuiz(Quiz quiz);

}
