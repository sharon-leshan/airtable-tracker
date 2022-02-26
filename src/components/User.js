import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export default function User({ icon, username }) {
	return (
		<Wrapper>
			<Avatar src={icon} className="avatar" />
			<span>{username}</span>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	opacity: 0.5;
	margin-bottom: 5px;

	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 10px;

	.avatar {
		width: 22px;
		height: 22px;
	}
`;
