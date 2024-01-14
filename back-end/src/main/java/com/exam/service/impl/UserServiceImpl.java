package com.exam.service.impl;

import com.exam.helper.UserFoundException;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repository.RoleRepository;
import com.exam.repository.UserRepository;
import com.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService {

    Logger logger = Logger.getLogger(UserServiceImpl.class.getName());

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    // creating user
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {

        User local = this.userRepository.findByUserName(user.getUserName());
        //System.out.println("\n\n\t local: " + local);
        //logger.info("\n\n\t" + local.getEmail() + "\n");
        if (local != null) {
            throw new UserFoundException();
        }
        else {
           logger.info("\n\n\t==>> inserting new user\n");
           for (UserRole ur : userRoles) {
               //System.out.println("\n\n\t==>> role: " + ur.getRole().getRoleName() + "\n");
               this.roleRepository.save(ur.getRole());
           }
           user.getUserRoles().addAll(userRoles);
           local = this.userRepository.save(user);
        }

        return local;
    }

    @Override
    public User getUser(String userName) {
        return this.userRepository.findByUserName(userName);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

    @Override
    public User updateUser(User user) {

        User userToModify = userRepository.findByUserName(user.getUserName());

        userToModify.setFirstName(user.getFirstName());
        userToModify.setLastName(user.getLastName());
        userToModify.setEmail(user.getEmail());
        userToModify.setPhone(user.getPhone());
        userToModify.setProfile(user.getProfile());

        return this.userRepository.save(userToModify);
    }
}
