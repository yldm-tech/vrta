import React from 'react';
import { Box } from '@mui/material';
import LogoImage from '@/assets/images/logo.svg';

interface Props {
    sx?;
}

const Logo = (props: Props): JSX.Element => {
    const { sx } = props;
    return <Box component="img" src={LogoImage} sx={{ width: 40, height: 40, ...sx }} />;
};

export default Logo;
