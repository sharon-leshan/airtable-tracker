import React from 'react';
import { CellCategoryStyled } from '../styled/styled';

const CellCategory = ({ bgColor, children }) => {
	return <CellCategoryStyled bgColor={bgColor}>{children}</CellCategoryStyled>;
};

export default CellCategory;
