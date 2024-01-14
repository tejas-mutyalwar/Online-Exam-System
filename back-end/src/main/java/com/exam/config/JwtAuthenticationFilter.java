package com.exam.config;

import com.exam.service.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String requestJwt = request.getHeader("Authorization");
        String userName = null;
        String jwt = null;

        if (requestJwt != null && requestJwt.startsWith("Bearer ")) {
            jwt = requestJwt.substring(7);
            try {
                userName = this.jwtUtils.extractUsername(jwt);
            } catch (ExpiredJwtException expiredJwtException) {
                expiredJwtException.printStackTrace();
                System.out.println("JWT has expired :(");

            } catch (Exception exception) {
                exception.printStackTrace();
                System.out.println("Error :(");

            }
        } else if ( requestJwt == null) {
            System.out.println("\n\t===>>> requestJwt is NULL :(");

        } else {
            System.out.println("\n\t===>>> JWT not start with Bearer :(");
        }

        //validated
        if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            final UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);
            if (this.jwtUtils.validateToken(jwt, userDetails)) {
                //JWT is valid
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
            else {
                System.out.println("\n\t===>>> Invalid JWT :(");
            }
        }

        filterChain.doFilter(request, response);
    }
}
