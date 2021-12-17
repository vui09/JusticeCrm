import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './style.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const rows = [
];

const SalesTable = () => {
	return (
		<div className="product_table">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Product name</StyledTableCell>
							<StyledTableCell align="center">Store</StyledTableCell>
							<StyledTableCell align="center">address</StyledTableCell>
							<StyledTableCell align="center">Category</StyledTableCell>
							<StyledTableCell align="center">Creation date</StyledTableCell>
							<StyledTableCell align="center">Price</StyledTableCell>
							<StyledTableCell align="center">Sold items</StyledTableCell>
							<StyledTableCell align="center">Weight / Volume</StyledTableCell>
							<StyledTableCell align="center">Last sale</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell>{row.store}</StyledTableCell>
								<StyledTableCell align="center">{row.address}</StyledTableCell>
								<StyledTableCell align="center">{row.category}</StyledTableCell>
								<StyledTableCell align="center">{row.date}</StyledTableCell>
								<StyledTableCell align="center">{row.price}</StyledTableCell>
								<StyledTableCell align="center">{row.remains}</StyledTableCell>
								<StyledTableCell align="center">{row.weight}</StyledTableCell>
								<StyledTableCell align="center">{row.lastDate}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
export default SalesTable;