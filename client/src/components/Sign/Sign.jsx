import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import './style.scss'

const Sign = () => {

	const navigate = useNavigate();

	const [email2, setEmail2] = useState('');
	const [email2Error, setEmail2Error] = useState(false);
	const [password2, setPassword2] = useState('');
	const [password2Error, setPassword2Error] = useState(false);

	const user = JSON.parse(localStorage.getItem('User')) || {
		email: '',
		password: ''
	};
	// console.log(console.log('===>user', user));

	const mail = user.email
	console.log('mail ',mail);
	const pass = user.password
	console.log('pass ',pass);

	function validateEmail2(){
		if(mail===email2){
			setEmail2Error(false)
			return true
		} else {
			setEmail2Error(true)
		}
	}

	function validatePassword2(){
		if(pass===password2){
			setPassword2Error(false)
			return true
		} else {
			setPassword2Error(true)
			return false
		}
	}

	const login = () => {
		// код валидации и проверки по обьекту с локалстораджа
		validateEmail2();
		validatePassword2();

		if( mail===email2 && pass===password2){
			console.log('Успешно')
			localStorage.setItem('isAuth', true)
			navigate('/')
		} else{
			console.error('Ошибка')
		}



		// navigate на главную страницу
	}
	return (
		<div className="wrapper">
			<div className="l-content">
				<div className="form">
					<h1>Sign in</h1>
					<div className="row">
						<label>Email</label>
						<input className={email2Error ? 'red' : ''} type="text" placeholder="Email" onChange={(e) => setEmail2(e.target.value)} />
					</div>
					<div className="row">
						<label>Password</label>
						<input className={password2Error ? 'red' : ''} type="password" placeholder="Enter password" onChange={(e)=> setPassword2(e.target.value)} />
					</div>
					<input type="submit" value="Log in" className="btn" onClick={login}/>
					<Link to="/" className="link">Forgot password?</Link>
				</div>
			</div>
			<div className="r-content">
			</div>
		</div>
	);
};

export default Sign;