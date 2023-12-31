/** @format */
import { Paper, IconButton } from '@mui/material';
import React from 'react';
import { colors } from '../../constants';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
	return (
		<Paper component={'form'} sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none' }}>
			<input className='search-bar' type='text' placeholder='Search...' />
			<IconButton>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
