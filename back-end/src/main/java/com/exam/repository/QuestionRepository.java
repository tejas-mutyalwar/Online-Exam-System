package com.exam.repository;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Set;

public interface QuestionRepository extends MongoRepository<Question, String> {

//    Set<Question> findByQuiz(Quiz quiz);
}
