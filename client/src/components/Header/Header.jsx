import React, {useState} from 'react';

import Title from "../Title/Title";

import './style.scss'

import add from '../../assets/images/icons/add.svg';
import Modal from "../Modal/Modal";
import {useNavigate} from "react-router-dom";

const Header = ({title, subtitle, flag, setFlag}) => {

	const navigate = useNavigate()

	const [modal, setModal] = useState(false);

	const [store, setStore] = useState('');
	const [storeError, setStoreError] = useState(false);
	const [price, setPrice] = useState('');
	const [priceError, setPriceError] = useState(false)
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false)
	const [category, setCategory] = useState('');
	const [categoryError, setCategoryError] = useState(false);
	const [quantity, setQuantity] = useState('');
	const [quantityError, setQuantityError] = useState(false);
	const [weight, setWeight] = useState('');
	const [weightError, setWeightError] = useState(false);

	function validateStore() {
		if (store === "") {
			setStoreError(true)
			return false
		} else {
			setStoreError(false)
			return true
		}
	}

	function validatePrice() {
		if (price === "") {
			setPriceError(true)
			return false
		} else {
			setPriceError(false)
			return true
		}
	}

	function validateName() {
		if (name === "") {
			setNameError(true)
			return false
		} else {
			setNameError(false)
			return true
		}
	}

	function validateCategory() {
		if (category === "") {
			setCategoryError(true)
			return false
		} else {
			setCategoryError(false)
			return true
		}
	}

	function validateQuantity() {
		if (quantity === "") {
			setQuantityError(true)
			return false
		} else {
			setQuantityError(false)
			return true
		}
	}

	function validateWeight() {
		if (weight === "") {
			setWeightError(true)
			return false
		} else {
			setWeightError(false)
			return true
		}
	}

	const product = {
		store,
		price,
		name,
		category,
		quantity,
		weight
	}

	const saveProduct = async () => {
		validateStore();
		validatePrice();
		validateName();
		validateCategory();
		validateQuantity();
		validateWeight();



		// для обновления страницы
		setFlag(!flag)

		if (validateStore() && validatePrice() && validateName() && validateCategory() && validateQuantity() && validateWeight()){

			const products = JSON.parse(localStorage.getItem('products')) || []

			let currentDate = new Date()
			let day = currentDate.getDate()
			let month = currentDate.getMonth() + 1
			let year = currentDate.getFullYear()
			let dateValue = day + "." + month + "." + year

			product.date = dateValue

			console.log(products);
			//добавляем продукт в массив продуктов
			products.push(product);
			localStorage.setItem('products', JSON.stringify(products))

			setStore('')
			setPrice('')
			setName('')
			setCategory('')
			setQuantity('')
			setWeight('')

			setModal(false)
		} else{
			setModal(true)
		}

	}

	const handleStoreChange = (e) => {
		setStoreError(false)
		setStore(e.target.value)
	}

	const handlePriceChange = (e) => {
		setPriceError(false)
		setPrice(e.target.value)
	}

	const handleNameChange = (e) => {
		setNameError(false)
		setName(e.target.value)
	}

	const handleCategoryChange = (e) => {
		setCategoryError(false)
		setCategory(e.target.value)
	}

	const handleQuantityChange = (e) => {
		setQuantityError(false)
		setQuantity(e.target.value)
	}

	const handleWeightChange = (e) => {
		setWeightError(false)
		setWeight(e.target.value)
	}
	return (
		<div className="header">
			<Title
				title={title}
				subtitle={subtitle}
			/>
			<div className="btn" onClick={() => {
				navigate('/products')
				setModal(true)
			}}>
				<img src={add} alt="Create a product"/>
				Create a product
			</div>

			{
				modal
				? <Modal setModal={setModal}>
						<h2>Creating a product</h2>
						<input
							className={storeError ? 'red' : '' }
							type="text"
							placeholder="Store"
							maxlength="5"
							onChange={handleStoreChange}
						/>
						<input
							className={priceError ? 'red' : '' }
							type="text"
							placeholder="Price"
							maxlength="5"
							onChange={handlePriceChange}
						/>
						<input
							className={nameError ? 'red' : '' }
							type="text"
							placeholder="Product name"
							maxlength="25"
							onChange={handleNameChange}
						/>
						<input
							className={categoryError ? 'red' : '' }
							type="text"
							placeholder="Product Category"
							maxlength="5"
							onChange={handleCategoryChange}
						/>
						<input
							className={quantityError ? 'red' : '' }
							type="text"
							placeholder="Quantity of goods"
							maxlength="5"
							onChange={handleQuantityChange}
						/>
						<input
							className={weightError ? 'red' : '' }
							type="text"
							placeholder="Weight / Volume of one item"
							maxlength="5"
							onChange={handleWeightChange}
						/>
						<input type="submit" value='Add Product' className="btn addBtn" onClick={saveProduct}/>
					</Modal>
				:null
			}


		</div>
	);
};

export default Header;