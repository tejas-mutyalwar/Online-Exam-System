package com.exam.controller;

import com.exam.config.JwtUtils;
import com.exam.model.JwtRequest;
import com.exam.model.JwtResponse;
import com.exam.model.User;
import com.exam.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    //authenticate user
    private void authenticate(String userName, String password) throws Exception {

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, password));
        }
        catch (DisabledException disabledException) {
            throw new Exception("User Disabled :(" + disabledException.getMessage());
        }
        catch (BadCredentialsException badCredentialsException) {
            throw new Exception("Invalid Credentials " + badCredentialsException.getMessage());
        }

    }

    //generate token
    @PostMapping(path = "/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

        //authenticating user
        try {
            authenticate(jwtRequest.getUserName(), jwtRequest.getPassword());
        }
        catch (UsernameNotFoundException usernameNotFoundException) {
            usernameNotFoundException.printStackTrace();
            throw new Exception("User not Found :(");
        }

        //user authenticated
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUserName());
        String jwt = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(jwt));

    }

    //returns the details of currently login in user
    @GetMapping(path = "/current-user")
    public User getCurrentUser(Principal principal) {
        return ((User) this.userDetailsService.loadUserByUsername(principal.getName()));
    }

}
