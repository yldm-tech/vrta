import React from 'react';
import { Box } from '@mui/material';

interface Props {
    src: string;
    color: string;
    sx?;
}

const SvgIconStyle = (props: Props): JSX.Element => {
    const { src, color = 'inherit', sx } = props;
    return (
        <Box
            component="span"
            sx={{
                width: 24,
                height: 24,
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
                bgcolor: `${color}.main`,
                ...(color === 'inherit' && { bgcolor: 'currentColor' }),
                ...(color === 'action' && { bgcolor: 'action.active' }),
                ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
                ...(color === 'paper' && { bgcolor: 'background.paper' }),
                ...sx
            }}
        />
    );
};

export default SvgIconStyle;
