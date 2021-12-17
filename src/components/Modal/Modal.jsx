import React from 'react';
import './style.scss'

const Modal = ({children, setModal}) => {
	const handleClose = () => setModal(false)
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="close" onClick={handleClose}/>
				{children}
			</div>
		</div>
	);
};

export default Modal;