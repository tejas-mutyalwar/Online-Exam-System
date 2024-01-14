package com.exam.service.impl;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import com.exam.repository.QuestionRepository;
import com.exam.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Question createQuestion(Question question) {
        return this.questionRepository.insert(question);
    }

    @Override
    public Question modifyQuestion(Question question) {
        return this.questionRepository.insert(question);
    }

    @Override
    public Set<Question> getQuestions() {
        return new HashSet<>(this.questionRepository.findAll());
    }

    @Override
    public Question getQuestion(String questionId) {
        return this.questionRepository.findById(questionId).get();
    }

    @Override
    public void removeQuestion(String questionId) {
        this.questionRepository.deleteById(questionId);
    }

//    @Override
//    public Set<Question> getQuestionByQuiz(Quiz quiz) {
//        return this.questionRepository.findByQuiz(quiz);
//    }
}
