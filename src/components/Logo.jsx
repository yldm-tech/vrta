import PropTypes from 'prop-types';
import React from 'react';
// material
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
	sx: PropTypes.object
};

export default function Logo({ sx }) {
	return <Box component="img" src="/src/assets/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}
