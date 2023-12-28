import { ThemeOptions } from '@mui/material';

const Input = (theme: ThemeOptions): any => {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        '& svg': { color: theme.palette?.text?.disabled }
                    }
                },
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: theme.palette?.text?.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette?.grey?.['500']
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette?.grey?.['500'],
                    '&:hover': {
                        backgroundColor: theme.palette?.grey?.['500']
                    },
                    '&.Mui-focused': {
                        backgroundColor: theme.palette?.action?.focus
                    },
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette?.action?.disabledBackground
                    }
                },
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette?.grey?.['500']
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette?.grey?.['500']
                    },
                    '&.Mui-disabled': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette?.action?.disabledBackground
                        }
                    }
                }
            }
        }
    };
};

export default Input;
