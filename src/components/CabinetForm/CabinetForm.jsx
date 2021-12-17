import React, {useState} from 'react';

import './style.scss'

const CabinetForm = () => {

	const [fName, setFName] = useState(JSON.parse(localStorage.getItem('User')).firstName);
	const [lName, setLName] = useState(JSON.parse(localStorage.getItem('User')).lastName);
	const [cName, setCName] = useState(JSON.parse(localStorage.getItem('User')).companyName);
	const [email, setEmail] = useState(JSON.parse(localStorage.getItem('User')).email);
	const [address, setAddress] = useState(JSON.parse(localStorage.getItem('Person')).address);
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	//const oldPassword = useState(JSON.parse(localStorage.getItem('User')).password)

	const savePerson = () =>{
		const person = {
			fName,
			lName,
			cName,
			email,
			address,
			newPassword
		}

		localStorage.setItem('Person', JSON.stringify(person));
	}



	return (
		<div className="cabinet_form">
				<div className="row">
					<div className="wrap">
						<label>First name</label>
						<input type="text" value={fName} onChange={(e) => {setFName(e.target.value)}}/>
					</div>
					<div className="wrap">
						<label>Last name</label>
						<input type="text" value={lName} onChange={(e) => {setLName(e.target.value)}} />
					</div>
				</div>
				<div className="row">
					<div className="wrap">
						<label>Company name</label>
						<input type="text" value={cName} onChange={(e) => {setCName(e.target.value)}} />
					</div>
					<div className="wrap">
						<label>Email</label>
						<input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
					</div>
				</div>
				<div className="row">
					<div className="wrap">
						<label>Address</label>
						<input type="text" value={address} onChange={(e) => {setAddress(e.target.value)}} />
					</div>
				</div>
				<div className="row">
					<div className="wrap">
						<label>Enter old password</label>
						<input type="text" value={password} onChange={(e) => {setPassword(e.target.value)}} />
					</div>
					<div className="wrap">
						<label>Enter a new password</label>
						<input type="text" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} />
					</div>
				</div>
				<div className="row">
					<div className="wrap">
						<input type="submit" className="btn" value="Save changes" onClick={savePerson} />
					</div>
				</div>
			</div>
	);
};

export default CabinetForm;