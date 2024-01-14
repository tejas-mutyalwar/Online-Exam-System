import React, { useState } from 'react'
import Base from '../components/Base'
import './Signup.css'
import { signUp } from '../services/user-service';

import username_icon from '../../assets/username.png';
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import phone_icon from '../../assets/phone.png';

const Signup = () => {

	const [formData, setFormData] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
		roles: ["STUDENT"]
	});

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
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			password: '',
			roles: ["STUDENT"]
		});
	}

	const handleSignup = async (e) => {
		// console.log("formData=>",formData);
		if (formData.userName !== "" && formData.password !== "" && formData.email !== "" && formData.phone !== "") {
				e.preventDefault();
				try {
					console.log("formData->",formData);
					signUp(formData).then((response) => {
							console.log(response);
							console.log("signup success");
							setFormData({
								userName: '',
								firstName: '',
								lastName: '',
								email: '',
								phone: '',
								password: '',
								roles: ["STUDENT"]
							});
					}).catch((error) => {
							//console.log(error);
							console.log("signup error");
					})

					// const response = await fetch('http://localhost:8080/user/register', {
					// 		method: 'POST',
					// 		headers: {
					// 		'Content-Type': 'application/json',
					// 		},
					// 		body: JSON.stringify(formData),
					// });

					// if (response.ok) {
					// 		// Handle successful sign-up, maybe redirect or show a success message
					// 		console.log('Sign-up successful !');	
					// 		setFormData({
					// 				userName: '',
					// 				firstName: '',
					// 				lastName: '',
					// 				email: '',
					// 				phone: '',
					// 				password: ''
					// 		})
					// } else {
					// 		// Handle errors, maybe show an error message
					// 		console.error('Sign-up failed');
							
					// }
				} catch (error) {
					// Handle network errors or other exceptions
					console.error('Error during sign-up:', error);
				}
		} else {
			console.log('Please fill all the required details...');
		}
	};

  	return (
		<>
			<Base>
				<div className='container'>
					<div className='header'>
						<div className='text'>Signup</div>
						<div className='underline'></div>
					</div>
					<div className='inputs'>

						<div className='input'>
							<img src={username_icon} alt="" />
							<input required type="text" placeholder='*User Name' name='userName' value={formData.userName} onChange={(e)=>handleInputChange(e)}/>
						</div>
						
						<div className='input'>
							<img src={user_icon} alt="" />
							<input required type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={(e)=>handleInputChange(e)}/>
						</div>
						
						<div className='input'>
							<img src={user_icon} alt="" />
							<input required type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={(e)=>handleInputChange(e)}/>
						</div>
						
						<div className='input'>
							<img src={email_icon} alt="" />
							<input required type="email" placeholder='*Email Id' name='email' value={formData.email} onChange={(e)=>handleInputChange(e)}/>
						</div>

						<div className='input'>
							<img src={phone_icon} alt="" />
							<input required type="number" placeholder='*Phone' name='phone' value={formData.phone} onChange={(e)=>handleInputChange(e)}/>
						</div>

						<div className='input'>
							<img src={password_icon} alt="" />
							<input required type="password" placeholder='*Password' name='password' value={formData.password} onChange={(e)=>handleInputChange(e)}/>
						</div>

					</div>
					
					<div className='submit-container'>
						<div className='submit' onClick={handleSignup}>Sign Up</div>
						<div type="reset" className='submit' onClick={handleResetFormData}>Reset</div>
					</div>
				</div>
			</Base>
		</>
  )
}

export default Signup