import { Theme } from '@material-ui/core';

const Typography = (theme: Theme) => {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
};

export default Typography;
