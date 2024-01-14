package com.exam.model.exam;

import com.exam.model.User;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long resultId;

    @Column(nullable = false)
    private String quizTitle;

    @Column(nullable = false)
    private Double score;

    @Column(nullable = false)
    private Double totalMarks;

    @Column(nullable = false)
    private Long numberOfQuestions;

    @Column(nullable = false)
    private Long numberOfAttemptedQuestions;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(nullable = false)
    private LocalDateTime attemptTime;

    @Transient
    private String userName;

    @Transient
    private Set<Question> quizAttemptQuestions = new HashSet<>();

    public Result() {
    }

    public Result(Long resultId, String quizTitle, Double score, Double totalMarks, Long numberOfQuestions, Long numberOfAttemptedQuestions, User user, LocalDateTime attemptTime, String userName, Set<Question> quizAttemptQuestions) {
        this.resultId = resultId;
        this.quizTitle = quizTitle;
        this.score = score;
        this.totalMarks = totalMarks;
        this.numberOfQuestions = numberOfQuestions;
        this.numberOfAttemptedQuestions = numberOfAttemptedQuestions;
        this.user = user;
        this.attemptTime = attemptTime;
        this.userName = userName;
        this.quizAttemptQuestions = quizAttemptQuestions;
    }

    public Long getResultId() {
        return resultId;
    }

    public void setResultId(Long resultId) {
        this.resultId = resultId;
    }

    public String getQuizTitle() {
        return quizTitle;
    }

    public void setQuizTitle(String quizTitle) {
        this.quizTitle = quizTitle;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Double getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(Double totalMarks) {
        this.totalMarks = totalMarks;
    }

    public Long getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(Long numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public Long getNumberOfAttemptedQuestions() {
        return numberOfAttemptedQuestions;
    }

    public void setNumberOfAttemptedQuestions(Long numberOfAttemptedQuestions) {
        this.numberOfAttemptedQuestions = numberOfAttemptedQuestions;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getAttemptTime() {
        return attemptTime;
    }

    public void setAttemptTime(LocalDateTime attemptTime) {
        this.attemptTime = attemptTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Set<Question> getQuizAttemptQuestions() {
        return quizAttemptQuestions;
    }

    public void setQuizAttemptQuestions(Set<Question> quizAttemptQuestions) {
        this.quizAttemptQuestions = quizAttemptQuestions;
    }

    @Override
    public String toString() {
        return "Result{" +
                       "resultId=" + resultId +
                       ", quizTitle='" + quizTitle + '\'' +
                       ", score=" + score +
                       ", totalMarks=" + totalMarks +
                       ", numberOfQuestions=" + numberOfQuestions +
                       ", numberOfAttemptedQuestions=" + numberOfAttemptedQuestions +
                       ", user=" + user +
                       ", attemptTime=" + attemptTime +
                       ", userName='" + userName + '\'' +
                       ", quizQuestions=" + quizAttemptQuestions +
                       '}';
    }
}
