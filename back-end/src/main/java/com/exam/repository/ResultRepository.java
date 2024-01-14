package com.exam.repository;

import com.exam.model.User;
import com.exam.model.exam.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Long> {

    List<Result> findByUserOrderByAttemptTimeDesc(User user);
}
