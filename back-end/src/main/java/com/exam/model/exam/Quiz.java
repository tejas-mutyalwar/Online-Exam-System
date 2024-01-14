package com.exam.model.exam;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Document(collection = "quizzes")
public class Quiz {

    @Id
    private String quizId;

    private String title;

    private String description;

    private Integer maxMarks;

    private Integer numberOfQuestions;

    private String quizDifficulty;

    private Set<Question> questions = new HashSet<>();

    private boolean active = false;

//    @OneToMany(mappedBy = "quiz", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private Set<Question> questions = new HashSet<>();

    public Quiz() {
    }

    public Quiz(String quizId, String title, String description, Integer maxMarks, Integer numberOfQuestions, String quizDifficulty, Set<Question> questions, boolean active) {
        this.quizId = quizId;
        this.title = title;
        this.description = description;
        this.maxMarks = maxMarks;
        this.numberOfQuestions = numberOfQuestions;
        this.quizDifficulty = quizDifficulty;
        this.questions = questions;
        this.active = active;
    }

    public String getQuizId() {
        return quizId;
    }

    public void setQuizId(String quizId) {
        this.quizId = quizId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(Integer maxMarks) {
        this.maxMarks = maxMarks;
    }

    public Integer getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(Integer numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getQuizDifficulty() {
        return quizDifficulty;
    }

    public void setQuizDifficulty(String quizDifficulty) {
        this.quizDifficulty = quizDifficulty;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }

    //    public Category getCategory() {
//        return category;
//    }
//
//    public void setCategory(Category category) {
//        this.category = category;
//    }

//    public Set<Question> getQuestions() {
//        return questions;
//    }
//
//    public void setQuestions(Set<Question> questions) {
//        this.questions = questions;
//    }
}
