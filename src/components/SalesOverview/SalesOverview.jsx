import React from 'react';

import './style.scss'


import Paper from '@material-ui/core/Paper';
import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
	{ day: 'Mon', population: 2.525 },
	{ day: 'Tue', population: 3.018 },
	{ day: 'Wed', population: 3.682 },
	{ day: 'Thu', population: 4.440 },
	{ day: 'Fri', population: 5.310 },
	{ day: 'Sat', population: 6.127 },
	{ day: 'Sun', population: 6.930 },
];

class SalesOverview extends React.PureComponent {
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
					<ArgumentAxis />
					<ValueAxis max={7} />

					<BarSeries
						valueField="population"
						argumentField="day"
						color={'#5B6ACD'}
						barWidth={1}
						maxBarWidth={48}
					/>
					<Title text="Sales Overview" color={'colorPrimary'}/>
					<Title text="Graph sales for all days"/>
					<Animation />
				</Chart>
			</Paper>
		);
	}
}

// const SalesOverview = () => {
// 	return (
// 		<div className="sales_overview">
// 			sales_overview
// 		</div>
// 	);
// };

export default SalesOverview;