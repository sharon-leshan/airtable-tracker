import React from 'react';
import { CellContainer } from '../styled/styled';

const Cell = ({ className, children }) => {
	return <CellContainer className={className}>{children}</CellContainer>;
};

export default Cell;
