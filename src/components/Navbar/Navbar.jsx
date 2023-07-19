/** @format */

import { Box, Stack } from '@mui/material';
import React from 'react';
import { logo } from '../../constants';
import { colors } from '../../constants';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={2}
      sx={{ position: 'sticky', top: 0, zIndex: '9', background: colors.primary, height: '10vh' }}
    >
      <Link to={'/'}>
        <img
          width={100}
          src={logo}
          alt=''
        />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
