import React from 'react';
import ProductTable from "../components/ProductTable/ProductTable";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Products = (props) => {
	return (
		<>
			<Sidebar />
			<div className="content-container">
				<Header
					title={'My product'}
					subtitle={'Product table'}
					flag={props.flag}
					setFlag={props.setFlag}
				/>
				<div className="content">
					<ProductTable flag={props.flag} setFlag={props.setFlag} />
				</div>
			</div>
		</>
	);
};

export default Products;