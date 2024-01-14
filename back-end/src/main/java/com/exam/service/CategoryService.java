package com.exam.service;

import com.exam.model.exam.Category;

import java.util.Set;

public interface CategoryService {

    public Category createCategory(Category category);

    public Category modifyCategory(Category category);

    public Set<Category> getCategories();

    public Category getCategory(Long categoryId);

    public void removeCategory(Long categoryId);
}
