import React from 'react';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

const Modal = ({ open, image, onClose }) => {
	console.log(image);
	return (
		<ModalWrapper open={open ? 'flex' : 'none'}>
			<div className="modal-header">
				<span className="modal-icon" onClick={() => onClose?.()}>
					<Close className="close-icon" />
				</span>

				<p>{image?.filename}</p>
			</div>
			<div className="modal-content">
				<span className="arrow arrow-left" />

				<div className="modal-image">
					<img src={image?.thumbnails?.large?.url} alt="" />
				</div>

				<span className="arrow arrow-right" />
			</div>
			<div className="modal-footer">
				<Button variant="contained" color="primary" className="modal-button">
					Attach Image
				</Button>
			</div>
		</ModalWrapper>
	);
};

export default Modal;

const ModalWrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	height: 100vh;
	width: 100vw;
	z-index: 100000;
	position: fixed;
	top: 0;
	left: 0;
	display: ${props => props.open ?? 'none'};
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	.modal-header {
		width: 100%;
		height: 2rem;
		padding: 3px 5px;
		display: flex;
		align-items: center;
		justify-content: flex-start;

		p {
			color: #fff;
			text-align: center;
			flex: 1;
		}
	}

	.modal-icon {
		cursor: pointer;
	}
	.close-icon {
		color: #fff;
	}

	.modal-content {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		width: 100%;

		.arrow {
			margin: 1rem 4rem;
			width: 30px;
			height: 30px;
			border-top: 2px solid #fff;
			border-right: 2px solid #fff;
			cursor: pointer;
		}

		.arrow.arrow-left {
			transform: rotate(225deg);
		}

		.arrow.arrow-right {
			transform: rotate(50deg);
		}

		.modal-image {
			flex: 1;
			margin: 1rem;
			height: 333px;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				height: 333px;
			}
		}
	}

	.modal-footer {
		width: 100%;

		.modal-button {
			margin-left: 85%;
		}
	}
`;
