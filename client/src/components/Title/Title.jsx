import React from 'react';

const Title = (props) => {
	return (
		<div>
			<div className="header-title">
				<h1>{props.title}</h1>
				<div className="subtitle">{props.subtitle}</div>
			</div>
		</div>
	);
};

export default Title;