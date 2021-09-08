import { Theme } from '@material-ui/core';

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
