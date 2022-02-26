import React from 'react';
import { Input } from '../styled/styled';

const Checkbox = ({ value, index, onChange }) => {
	return (
		<Input>
			<input
				type="checkbox"
				id={`checkbox-${index}`}
				name="checkbox"
				onChange={onChange}
				value={value}
				checked={value}
			/>
			<label htmlFor={`checkbox-${index}`} className="checkbox"></label>
		</Input>
	);
};

export default Checkbox;
