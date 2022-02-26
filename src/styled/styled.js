import styled from 'styled-components';

export const RowContainer = styled.tr`
	height: 88px;
	max-height: 88px !important;
	overflow: hidden;
	padding: 0;
	margin: 0;
`;

export const CellContainer = styled.td`
	height: 88px;
	position: relative;

	&:nth-child(1) {
		position: sticky;
		background-color: white;
		z-index: 20;
	}
`;
export const After = styled.div`
	width: 10px;
	height: 90%;
	border-radius: 100px;
	position: sticky;
	top: 0;
	left: 10px;
	z-index: 20;
	display:inline-block;
	background-color: ${props => props.bgColor ?? props.bgColor};
`;
export const CellCategoryStyled = styled.div`
	background-color: ${props => props.bgColor ?? props.bgColor};
	color: #fff;
	border-radius: 100px;
	min-width: 40px;
	text-align: center;
	display: inline-block;
	padding: 2px 5px;
	font-size: 13px;
`;

export const Input = styled.span`
	border: 1px solid rgb(235, 235, 235);
	outline: none;

	input[type='checkbox']:focus {
		outline: none;
		outline-offset: none;
	}

	input {
		padding: 0;
		height: initial;
		width: initial;
		margin-bottom: 0;
		display: none;
		border: none;
		width: 15px;
		height: 15px;
	}

	label {
		position: relative;
		cursor: pointer;
		height: 15px;
		width: 15px;
		display: inline-block;
	}

	input:checked + label:after {
		content: '';
		display: block;
		position: absolute;
		top: 0px;
		left: 4px;
		width: 6px;
		height: 14px;
		border: solid #0079bf;
		border-width: 0 2px 2px 0;
		transform: rotate(30deg);
	}
`;
