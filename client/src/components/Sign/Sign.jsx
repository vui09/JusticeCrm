import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import './style.scss'
import {auth} from "../../api/api";

const Sign = ({setisAuth}) => {

	const navigate = useNavigate();

	const [email2, setEmail2] = useState('');
	const [email2Error, setEmail2Error] = useState(false);
	const [password2, setPassword2] = useState('');
	const [password2Error, setPassword2Error] = useState(false);





	const login = () => {
		const user = {
			email: email2,
			password: password2
		}
			auth.login(user).then((res) => {
				localStorage.setItem('token', res.data.token)
				setisAuth(res.data.token)
			})

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