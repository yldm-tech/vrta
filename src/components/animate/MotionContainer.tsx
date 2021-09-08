import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
// material
import { Box } from '@material-ui/core';
//
import { varWrapEnter } from '@/components/animate/variants';

// ----------------------------------------------------------------------

MotionContainer.propTypes = {
	open: PropTypes.bool.isRequired,
	children: PropTypes.node
};

export default function MotionContainer({ open, children, ...other }) {
	return (
		<Box
			component={motion.div}
			initial={false}
			animate={open ? 'animate' : 'exit'}
			variants={varWrapEnter}
			{...other}
		>
			{children}
		</Box>
	);
}
