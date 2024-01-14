package com.exam.controller;

import com.exam.model.User;
import com.exam.model.exam.Result;
import com.exam.service.ResultService;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/result")
@CrossOrigin("*")
public class ResultController {

    @Autowired
    private ResultService resultService;

    @Autowired
    private UserService userService;

    @PostMapping(path = "/new")
    public ResponseEntity<?> createResult(@RequestBody Result result) {
        return new ResponseEntity<>(this.resultService.createResult(result), HttpStatus.CREATED);
    }

    @GetMapping(path = "/view/all/{userName}")
    public ResponseEntity<?> viewResultsOfUser(@PathVariable String userName) {
        User user = this.userService.getUser(userName);
        return new ResponseEntity<>(this.resultService.getResultsOfUser(user), HttpStatus.OK);
    }

}
