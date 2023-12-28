import { Theme } from '@mui/material';

const Card = (theme: Theme) => {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    // boxShadow: theme.customShadows.z16,
                    borderRadius: theme.shape.borderRadius,
                    position: 'relative',
                    zIndex: 0 // Fix Safari overflow: hidden with border radius
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2' }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
};

export default Card;
