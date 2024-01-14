import React, { useState } from 'react'
import Base from '../components/Base';
import './Login.css'
import { login, doLogin, getCurrentUser, setUser } from '../services/login-service';
import username_icon from '../../assets/username.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {

	const [formData, setFormData] = useState({
		userName: '',
		password: ''
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleResetFormData = () => {
		setFormData({
			userName: '',
			password: ''
		});
	}

	const handleLogin = async (e) => {
		console.log("formData=>",formData);
		if (formData.userName !== "" && formData.password !== "") {
				e.preventDefault();
				try {

					login(formData).then((data) => {
						console.log("login success");
						// console.log("jwt received->", data.jwt);

						//save data to localStorage
						doLogin(data.jwt, ()=>{
							console.log("jwt saved to localStorage");
						})
						
						//get currently logged in user from server
						getCurrentUser().then((data) => {
							//console.log("user->", data);
							//save user to local storage
							setUser(data);			
							console.log("user saved to localStorage");		
							//redirect to dashboard page
							navigate("/user/dashboard");
						}).catch((error) => {
							console.log("error in getcurrentuser");
						})
						
					}).catch((error) => {
						console.log("login error");
					})
					// const response = await fetch('http://localhost:8080/user/login', {
					// 		method: 'POST',
					// 		headers: {
					// 		'Content-Type': 'application/json',
					// 		},
					// 		body: JSON.stringify(formData),
					// });

					// if (response.ok) {
					// 		// Handle successful sign-up, maybe redirect or show a success message
					// 		console.log('Login successful!');
					// } else {
					// 		// Handle errors, maybe show an error message
					// 		console.error('Login failed');
					// }
				} catch (error) {
				// Handle network errors or other exceptions
				console.error('Error during login:', error);
				}
		} else {
			console.log("Please enter both credentials...");
		}
	};


  return (
    <Base>
			  <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>

                <div className='input'>
                    <img src={username_icon} alt="" />
                    <input required type="text" placeholder='*User Name' name='userName' value={formData.userName} onChange={handleInputChange}/>
                </div>

                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input required type="password" placeholder='*Password' name='password' value={formData.password} onChange={handleInputChange}/>
                </div>

            </div>
            <div className='forgot-password'>Forgot Password ? <span>Click here !</span></div>
            
            <div className='submit-container'>
                <div className='submit' onClick={handleLogin}>Login</div>
				<div type="reset" className='submit' onClick={handleResetFormData}>Reset</div>
            </div>
        </div>
		</Base>
  )
}

export default Login