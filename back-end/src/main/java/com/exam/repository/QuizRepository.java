package com.exam.repository;

import com.exam.model.exam.Category;
import com.exam.model.exam.Quiz;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Set;

public interface QuizRepository extends MongoRepository<Quiz, String> {

//    Set<Quiz> findByCategory(Category category);

    Set<Quiz> findByActive(Boolean active);

//    Set<Quiz> findByCategoryAndActive(Category category, Boolean active);
}
