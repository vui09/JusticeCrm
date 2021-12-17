import React, {useEffect, useState} from 'react';
import {useNavigate, Link} from "react-router-dom";

import './style.scss'

const CreateAcc = () => {
	const navigate = useNavigate()

	const [firstName, setFirstName] = useState('');
	const [fnError, setFnError] = useState(false)
	const [lastName, setLastName] = useState('');
	const [lnError, setLnError] = useState(false)
	const [companyName, setCompanyName] = useState('');
	const [cnError, setCnError] = useState(false)
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false)
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);
	const [checkPassword, setCheckPassword] = useState('');
	const [checkPasswordError, setCheckPasswordError] = useState(false)

	useEffect(() => {
		if (!fnError && !lnError && !passwordError && !checkPasswordError && !cnError && !emailError && lastName !== '') {

			const user = {
				firstName,
				lastName,
				companyName,
				email,
				password,
				checkPassword
			}

			localStorage.setItem('User', JSON.stringify(user))
			navigate('/signin')
		} else {
			console.error('Ошибка валидации')
		}

	}, [fnError, passwordError, cnError, lnError, emailError, checkPasswordError])

	// useEffect(() => {
	// 	console.log('RENDER')
	// })
	//
	// useEffect(() => {
	// 	console.log('Mounting или ОТРИСОВКА В ДОМ')
	// }, [])
	//
	// useEffect(() => {
	// 	console.log('companyName изменился')
	// }, [companyName])
	//
	// useEffect(() => {
	// 	return () => {
	// 		console.log('FORM IS DELETED')
	// 	}
	// }, [])


	function validateFirstName() {
		if (firstName.length < 3) {
			setFnError(true)
			return false
		} else {
			setFnError(false)
			return true
		}
	}

	function validateLastName() {
		if (lastName.length < 3) {
			setLnError(true)
			return false
		} else {
			setLnError(false)
			return true
		}
	}

	function validateCompanyName() {
		if (companyName.length < 3) {
			setCnError(true)
			return false
		} else {
			setCnError(false)
			return true
		}
	}

	function validateEmail() {
		let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regex.test(email) && email != "") {
			setEmailError(false)
			return true
		} else {
			setEmailError(true)
			return false
		}
	}

	function validatePassword() {
		let regex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
		if (regex.test(password) && password != "") {
			setPasswordError(false)
			return true
		} else {
			setPasswordError(true)
			return false
		}
	}


	function validateCheckPassword() {
		if (password === checkPassword && password !== '') {
			setCheckPasswordError(false)
			return true
		} else {
			setCheckPasswordError(true)
			return false
		}
	}

	const saveUser = async () => {
		validateFirstName();
		validateLastName();
		validateCompanyName();
		validateEmail();
		validatePassword();
		validateCheckPassword();
	}

	const handleFNameChange = (e) => {
		setFnError(false)
		setFirstName(e.target.value)
	}

	const handleLNameChange = (e) => {
		setLnError(false)
		setLastName(e.target.value)
	}

	const handleCNameChange = (e) => {
		setCnError(false)
		setCompanyName(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmailError(false)
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPasswordError(false)
		setPassword(e.target.value)
	}

	// const handleCheckPasswordChange = (e) => {
	// 	setCheckPasswordError(false)
	// 	setCheckPassword(e.target.value)
	// }

	return (
		<div className="wrapper">
			<div className="l-content">
				<div className="form">
					<h1>Create an account</h1>
					<div className="first">
						<div className="row">
							<label>First name</label>
							<input className={fnError ? 'red' : ''} type="text" placeholder="First name" id="firstName"
							       onChange={handleFNameChange}/>
						</div>
						<div className="row">
							<label>Last name</label>
							<input className={lnError ? 'red' : ''} type="text" placeholder="Last name" id="lastName"
							       onChange={handleLNameChange}/>
						</div>
					</div>
					<div className="row">
						<label>Company name</label>
						<input className={cnError ? 'red' : ''} type="text" placeholder="Company name" id="companyName"
						       onChange={handleCNameChange}/>
					</div>
					<div className="row">
						<label>Email</label>
						<input className={emailError ? 'red' : ''} type="text" placeholder="Email" id="email"
						       onChange={handleEmailChange}/>
					</div>
					<div className="row">
						<label>Password</label>
						<input className={passwordError ? 'red' : ''} type="password" placeholder="Enter password" id="password"
						       onChange={handlePasswordChange}/>
					</div>
					<div className="row">
						<label>Repeat password</label>
						<input className={checkPasswordError ? 'red' : ''} type="password" placeholder="Repeat password"
						       id="checkPassword" onChange={(e) => setCheckPassword(e.target.value)}/>
					</div>
					<input type="submit" value="Create account" className="btn" onClick={saveUser}/>
					<div className="text">Already have an account? <Link to="/signin" className="link">Log in</Link></div>
				</div>
			</div>
			<div className="r-content">
			</div>
		</div>
	);
};

export default CreateAcc;