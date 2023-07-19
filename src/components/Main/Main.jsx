/** @format */

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { colors } from '../../constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';

const Main = () => {
	const [selectedCategory, setSelectedCategory] = useState('New');
	return (
		<Stack>
			<Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
			<Box p={2} sx={{ height: '90vh' }}>
				<Container maxWidth={'90%'}>
					<Typography variant={'h4'} fontWeight={'bold'} mb={2}>
						{selectedCategory} <span style={{ color: colors.secondary }}>videos</span>
					</Typography>
				</Container>
			</Box>
		</Stack>
	);
};

export default Main;
