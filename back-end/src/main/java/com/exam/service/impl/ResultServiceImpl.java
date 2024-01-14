package com.exam.service.impl;

import com.exam.model.User;
import com.exam.model.exam.Result;
import com.exam.repository.ResultRepository;
import com.exam.service.ResultService;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;

    @Autowired
    private UserService userService;

    @Override
    public Result createResult(Result result) {
        User user = this.userService.getUser(result.getUserName());
        result.setUser(user);
        result.setAttemptTime(LocalDateTime.now());
        return this.resultRepository.save(result);
    }

    @Override
    public List<Result> getResultsOfUser(User user) {
        return this.resultRepository.findByUserOrderByAttemptTimeDesc(user);
    }
}
