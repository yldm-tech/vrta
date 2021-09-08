const Paper = () => {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },

            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                }
            }
        }
    };
};
export default Paper;
