import React from 'react';
import CabinetForm from "../components/CabinetForm/CabinetForm";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Cabinet = (props) => {
	return (
		<>
			<Sidebar />
			<div className="content-container">
				<Header
					title={'Personal Cabinet'}
					subtitle={'Information about your account'}
				/>
				<div className="content">
					<CabinetForm />
				</div>
			</div>
		</>
	);
};

export default Cabinet;