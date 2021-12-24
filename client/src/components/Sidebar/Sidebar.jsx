import React, {useState} from 'react';

import {Link, NavLink, Navigate, useNavigate} from "react-router-dom";

import './style.scss';

import logo from '../../assets/images/Logo.png'
import home from '../../assets/images/icons/home.svg'
import doc from '../../assets/images/icons/doc.svg'
import percent from '../../assets/images/icons/percent.svg'
import user from '../../assets/images/icons/user.svg'
import log from '../../assets/images/icons/log.svg'

const Sidebar = ({setisAuth}) => {

	const navigate = useNavigate();

	const [active, setActive] = useState(false);

	function toggleMobile(){
		setActive(!active)
	}
	function clearToken(){
		localStorage.removeItem('token')
		navigate('/signin')
		setisAuth(null)
	}
	return (
		<div className={active ? 'sidebar active' : 'sidebar'}>
			<div className="btn-mobile" onClick={toggleMobile}>
				<span></span><span></span><span></span>
			</div>
			<div className="logo">
				<img src={logo} alt=""/>
			</div>
			<div className="navigation">
				<NavLink activeclassname="active" to="/">
					<img src={home} alt="Main page"/>
					<span>Main page</span>
				</NavLink>
				<NavLink activeclassname="active" to="/products">
					<img src={doc} alt="My products"/>
					<span>My products</span>
				</NavLink>
				<NavLink activeclassname="active" to="/sales">
					<img src={percent} alt="My sales"/>
					<span>My sales</span>
				</NavLink>
				<NavLink activeclassname="active" to="/cabinet">
					<img src={user} alt="Personal Cabinet"/>
					<span>Personal Cabinet</span>
				</NavLink>
			</div>
			<div className="navigation navigation-bottom">
				<Link to="/signin" onClick={clearToken}>
					<img src={log} alt="log out"/>
					<span>Log out</span>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;