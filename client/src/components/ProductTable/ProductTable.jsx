import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import vector from '../../assets/images/icons/Vector.svg';
import close from '../../assets/images/icons/Delete.svg';

import './style.scss'
import Modal from "../Modal/Modal";
import log from "d3-scale/src/log";

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

// const rows = [
// 	{
// 		name: 'Sneakers1',
// 		store:'Adidas',
// 		address: 'Krylatskaya st...',
// 		category:'Sportswear',
// 		date:'05.07.2021',
// 		price:'$1 000',
// 		remains:40,
// 		weight:'5kg',
// 		lastDate:'04.07.2021'
// 	},
//
// ];

const ProductTable = (props) => {

	const [modal, setModal] = useState(false);
	const [number, setNumber] = useState('');
	const [numberError, setNumberError] = useState(false);
	const [date, setDate] = useState('');
	const [dateError, setDateError] = useState(false);

	const [modalProduct, setModalProduct] = useState(false);
	const [store, setStore] = useState('');
	const [price, setPrice] = useState('');
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState('');
	const [weight, setWeight] = useState('');

	function validateNumber() {
		if(number === ''){
			setNumberError(true)
			return false
		} else{
			setNumberError(false)
			return true
		}
	}

	function validateDate() {
		if(date === ''){
			setDateError(true)
			return false
		} else{
			setDateError(false)
			return true
		}
	}

	const handleNumberChange = (e) => {
		setNumberError(false)
		setNumber(e.target.value)
	}

	const handleDateChange = (e) => {
		setDateError(false)
		setDate(e.target.value)
	}

	// const product = JSON.parse(localStorage.getItem('Product')) || {
	// 	store: '',
	// 	pirce: '',
	// 	name: '',
	// 	category: '',
	// 	quantity: '',
	// 	weight: ''
	// };

	const products = JSON.parse(localStorage.getItem('products')) || []
	console.log(products)

	// const rows= []

	const sellProduct = [
		number,
		date
	]

	const sell = () => {
		validateNumber()
		validateDate()

		const sellProducts = JSON.parse(localStorage.getItem('sellProducts')) || []

		sellProducts.push(sellProduct);

		console.log(sellProducts);


		localStorage.setItem('sellProducts', JSON.stringify(sellProducts))


		if(validateNumber() && validateDate()){
			setModal(false)
		}
	}

	// const removeProduct = (product) => {
	// 	console.log('===>', products.name );
	// 	products.filter(p => p.name !== product.name )
	// }

	const sellOneProduct = (products, id) => {
		setModal(true)
		// const newProducts = products
		// const product = products.filter(product => product.name === id)
		// console.log('===>product', product);
	}

	return (
		<div className="product_table">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Product name</StyledTableCell>
							<StyledTableCell align="center">Store</StyledTableCell>
							<StyledTableCell align="center">Address</StyledTableCell>
							<StyledTableCell align="center">Category</StyledTableCell>
							<StyledTableCell align="center">Creation date</StyledTableCell>
							<StyledTableCell align="center">Price</StyledTableCell>
							<StyledTableCell align="center">Remains</StyledTableCell>
							<StyledTableCell align="center">Weight / Volume</StyledTableCell>
							<StyledTableCell align="center">Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
								{products.map((row) => (
									<StyledTableRow key={Math.random().toString(36).substr(2, 9)}>
										<StyledTableCell component="th" scope="row">
											{row.name}
										</StyledTableCell>
										<StyledTableCell>{row.store}</StyledTableCell>
										<StyledTableCell align="center">{JSON.parse(localStorage.getItem('Person')).address}</StyledTableCell>
										<StyledTableCell align="center">{row.category}</StyledTableCell>
										<StyledTableCell align="center">{row?.date}</StyledTableCell>
										<StyledTableCell align="center">{row.price}</StyledTableCell>
										<StyledTableCell align="center">{row.quantity}</StyledTableCell>
										<StyledTableCell align="center">{row.weight}</StyledTableCell>
										<StyledTableCell align="center">
											<div className="btn-wrapper">
												<div className="btn" onClick={() => sellOneProduct(products, row.name)}>
													Sell
												</div>
												<div className="btn" onClick={() => setModalProduct(true)}>
													<img src={vector} alt="Edit"/>
												</div>
												<div className="close">
													<img src={close} alt="Close"/>
												</div>
											</div>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
				</Table>
			</TableContainer>
			{
				modal
					? <Modal setModal={setModal}>
						<h2>Sell the product</h2>
						<input className={numberError ? 'red' : ''} type="text" placeholder="Number of products" onChange={handleNumberChange}/>
						<input className={dateError ? 'red' : ''} type="date" placeholder="Date of sale" onChange={handleDateChange} />
						<input type="submit" value="Sell Product" className="btn" onClick={sell}/>
					</Modal>
					:null
			}

			{
				modalProduct
					? <Modal setModal={setModalProduct}>
						<h2>Editing a product</h2>
						<input type="text" onChange={(e) => setStore(e.target.value)} />
						<input type="text" onChange={(e) => setPrice(e.target.value)} />
						<input type="text" onChange={(e) => setName(e.target.value)} />
						<input type="text" onChange={(e) => setCategory(e.target.value)} />
						<input type="text" onChange={(e) => setQuantity(e.target.value)} />
						<input type="text" onChange={(e) => setWeight(e.target.value)} />
						<input type="submit" value="Save changes" className="btn" />
					</Modal>
					:null
			}
		</div>
	);
}
export default ProductTable;