package com.exam.model.exam;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "questions")
public class Question {

    @Id
    private String questionId;

    private String questionType;

    private String questionContent;

    private String image;

    private Set<String> options = new HashSet<>();

    private String answer;

    private Integer questionMarks;

    private String questionDifficulty;

    private String questionCategory;

    @Transient
    private String answerGiven;

    public Question() {
    }

    public Question(String questionId, String questionType, String questionContent, String image, Set<String> options, String answer, Integer questionMarks, String questionDifficulty, String questionCategory, String answerGiven) {
        this.questionId = questionId;
        this.questionType = questionType;
        this.questionContent = questionContent;
        this.image = image;
        this.options = options;
        this.answer = answer;
        this.questionMarks = questionMarks;
        this.questionDifficulty = questionDifficulty;
        this.questionCategory = questionCategory;
        this.answerGiven = answerGiven;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public String getQuestionType() {
        return questionType;
    }

    public void setQuestionType(String questionType) {
        this.questionType = questionType;
    }

    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<String> getOptions() {
        return options;
    }

    public void setOptions(Set<String> options) {
        this.options = options;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Integer getQuestionMarks() {
        return questionMarks;
    }

    public void setQuestionMarks(Integer questionMarks) {
        this.questionMarks = questionMarks;
    }

    public String getQuestionDifficulty() {
        return questionDifficulty;
    }

    public void setQuestionDifficulty(String questionDifficulty) {
        this.questionDifficulty = questionDifficulty;
    }

    public String getQuestionCategory() {
        return questionCategory;
    }

    public void setQuestionCategory(String questionCategory) {
        this.questionCategory = questionCategory;
    }

    public String getAnswerGiven() {
        return answerGiven;
    }

    public void setAnswerGiven(String answerGiven) {
        this.answerGiven = answerGiven;
    }

}
