import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomNavbar.css'
import { doLogout, getUser, isLoggedIn } from "../services/login-service"

function CustomNavbar(args) {

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(undefined); // Assuming user is stored after login
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(isLoggedIn());
    setUser(getUser());
  }, [isLogin])

  const handleLogout = () => {
    // Handle logout logic here
    doLogout(()=> {});
    setIsLogin(false);
    setUser(undefined);
    navigate("/login");
  };

  const handleProfile = () => {
    // Handle logout logic here
    navigate("/user/profile");
  };

  return (
    <div >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <nav className="navbar">
          <div >
            <Link to="/">
              <button className="navbar-logo"> Examfront </button>
            </Link> 
          </div>

          <div className="navbar-buttons">
            {isLogin ? (
              <button className="login-btn" onClick={handleProfile}>
                {user.username} 
              </button>
            ) : (
              <Link to="/login">
                <button className="login-btn">Login</button> 
              </Link>
            )}
            {isLogin ? (
              <button className="register-btn" onClick={handleLogout}>
                Logout 
              </button>
            ) : (
              <Link to="/signup">
                <button className="register-btn">Register</button> 
              </Link>
            )}
          </div>

      </nav>
    </div>
  );
}

export default CustomNavbar;