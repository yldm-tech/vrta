import React from 'react';
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        top: -7,
        zIndex: 1,
        width: 12,
        right: 20,
        height: 12,
        position: 'absolute',
        borderRadius: '0 0 4px 0',
        transform: 'rotate(-135deg)',
        background: theme.palette.background.paper,
        borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`
    }
}));

interface Props {
    children?;
    sx?;
    open?;
    onClose?;
    anchorEl?;
}

const MenuPopover = (props: Props): JSX.Element => {
    const { open, children, ...other } = props;
    return (
        <Popover
            open={open}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: 'inherit',
                    // boxShadow: (theme) => theme.customShadows.z20,
                    border: (theme) => `solid 1px ${theme.palette.grey[5008]}`,
                    width: 200
                }
            }}
            {...other}
        >
            <ArrowStyle className="arrow" />

            {children}
        </Popover>
    );
};

export default MenuPopover;
