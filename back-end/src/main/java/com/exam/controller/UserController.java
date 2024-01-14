package com.exam.controller;

import com.exam.ExamserverApplication;
import com.exam.model.Authority;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repository.RoleRepository;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/user")
@CrossOrigin("*")
public class UserController {

    Logger logger = Logger.getLogger(ExamserverApplication.class.getName());

    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleRepository roleRepository;

    @PostMapping(path = "/new")
    public User createUser(@RequestBody User user) throws Exception {

        String profile = user.getUserName().toLowerCase();
        user.setProfile(profile + ".png");
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        System.out.println("==> Roles => " + user.getRoles());
        Set<UserRole> userRoles = new HashSet<>();

        user.getRoles().forEach( roleName -> {
            Role role = this.roleRepository.findByRoleName(roleName);

            if (role != null) {

            } else {
                role = this.roleRepository.save(new Role(roleName));
            }
            UserRole userRole1 = new UserRole();
            userRole1.setUser(user);
            userRole1.setRole(role);
            userRoles.add(userRole1);
        });

        return this.userService.createUser(user, userRoles);

    }

    @GetMapping(path = "/view/{userName}")
    public User getUser(@PathVariable("userName") String userName) {
        return this.userService.getUser(userName);
    }

    @PutMapping(path = "/modify")
    public User updateUser(@RequestBody User user) {
        return this.userService.updateUser(user);
    }

    @DeleteMapping(path = "/remove/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        this.userService.deleteUser(userId);
    }

}
