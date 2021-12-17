import React from 'react';

import Header from "../components/Header/Header";
import SalesTable from "../components/SalesTable/SalesTable";
import Sidebar from "../components/Sidebar/Sidebar";

const Sales = (props) => {
	return (
		<>
			<Sidebar />
			<div className="content-container">
				<Header
					title={'My sales'}
					subtitle={'Sales table'}
				/>
				<div className="content">
					<SalesTable />
				</div>
			</div>
		</>
	);
};

export default Sales;