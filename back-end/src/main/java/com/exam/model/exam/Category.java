package com.exam.model.exam;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    private String title;

    @Column(length = 5000)
    private String description;

//    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
//    @JsonIgnore
//    private Set<Quiz> quizzes = new LinkedHashSet<>();

    public Category() {
    }

    public Category(Long categoryId, String title, String description) {
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
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

//    public Set<Quiz> getQuizzes() {
//        return quizzes;
//    }
//
//    public void setQuizzes(Set<Quiz> quizzes) {
//        this.quizzes = quizzes;
//    }
}
