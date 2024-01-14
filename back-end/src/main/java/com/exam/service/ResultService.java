package com.exam.service;

import com.exam.model.User;
import com.exam.model.exam.Result;

import java.util.List;

public interface ResultService {

    Result createResult(Result result);

    List<Result> getResultsOfUser(User user);
}
