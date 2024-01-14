package com.exam;

import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repository.QuestionRepository;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses
								 = {
		QuestionRepository.class
})
public class ExamserverApplication implements CommandLineRunner {

//	Logger logger = Logger.getLogger(ExamserverApplication.class.getName());

//	@Autowired
//	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
