import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
import { Box } from '@mui/material';

interface Props {
    children?;
    title?;
    other?;
}

const Page = forwardRef(function Page(props: Props, ref) {
    const { children, title = '', ...other } = props;
    return (
        <Box ref={ref} {...other}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </Box>
    );
});

export default Page;
