package com.exam.helper;

public class UserFoundException extends Exception {

    public UserFoundException() {
        super("User with this UserName Already Exists !!");
    }

    public UserFoundException(String msg) {
        super(msg);
    }
}
