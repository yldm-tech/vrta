import React from 'react';
import { Paper, Typography } from '@mui/material';

interface SearchNotFoundProps {
    searchQuery: string;
    other?;
}

const SearchNotFound = (props: SearchNotFoundProps): JSX.Element => {
    const { searchQuery = '', ...other } = props;
    return (
        <Paper {...other}>
            <Typography gutterBottom align="center" variant="subtitle1">
                Not found
            </Typography>
            <Typography variant="body2" align="center">
                No results found for &nbsp;
                <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete
                words.
            </Typography>
        </Paper>
    );
};

export default SearchNotFound;
