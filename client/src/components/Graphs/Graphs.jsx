import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import SalesSchedule from "../SalesSchedule/SalesSchedule";
import Total from "../Total/Total";
import SalesOverview from "../SalesOverview/SalesOverview";

import './style.scss'

const Graphs = () => {
	return (
		<>
			<Sidebar />
			<div className="content-container">
				<Header
					title={'Sales statistics'}
					subtitle={'Welcome to CRM dashboard'}
				/>
				<div className="content">
					<div className="main_content">
						<div className="left_content">
							<SalesSchedule />
							<Total />
						</div>
						<div className="right_content">
							<SalesOverview />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Graphs;