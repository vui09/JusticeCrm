import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
	{ country: 'Auto goods', area: 12 },
	{ country: 'Auto goods', area: 12 },
	{ country: 'Auto goods', area: 26 },
	{ country: 'Auto goods', area: 50 },
];

class SalesSchedule extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			data,
		};
	}

	render() {
		const { data: chartData } = this.state;

		return (
			<Paper>
				<Chart
					data={chartData}
				>
					<PieSeries
						valueField="area"
						argumentField="country"
					/>
					<Title
						text="Sales schedule by day"
					/>
					<Animation />
				</Chart>
			</Paper>
		);
	}
}



// const SalesSchedule = () => {
// 	return (
// 		<div>
//
// 		</div>
// 	);
// };

export default SalesSchedule;