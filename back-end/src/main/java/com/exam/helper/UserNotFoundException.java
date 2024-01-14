package com.exam.helper;

public class UserNotFoundException extends Exception {

    public UserNotFoundException() {
        super("No Such User with UserName Exists !!");
    }

    public UserNotFoundException(String msg) {
        super(msg);
    }
}
