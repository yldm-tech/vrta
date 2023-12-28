import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { varWrapEnter } from '@/components/animate/variants';

interface Props {
    open: boolean;
    children?: JSX.Element;
    other?;
    initial?;
}

const MotionContainer = (props: Props): JSX.Element => {
    const { open, children, ...other } = props;
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
};

export default MotionContainer;
