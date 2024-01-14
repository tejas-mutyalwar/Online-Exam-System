package com.exam.helper;

public class TeacherFoundException extends Exception{

    public TeacherFoundException() { super("Teacher with this email already exists !!"); }

    public TeacherFoundException(String msg) { super(msg); }
}
