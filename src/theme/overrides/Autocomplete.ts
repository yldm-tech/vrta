import { Theme } from '@mui/material';

const Autocomplete = (theme: Theme) => {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    // boxShadow: theme.customShadows.z20
                }
            }
        }
    };
};

export default Autocomplete;
