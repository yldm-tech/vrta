import PropTypes from 'prop-types';
import React,{ useMemo } from 'react';
// material
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@material-ui/core/styles';
//
import shape from '@/theme/shape';
import palette from '@/theme/palette';
import typography from '@/theme/typography';
import GlobalStyles from '@/theme/globalStyles';
import componentsOverride from '@/theme/overrides';
import shadows, { customShadows } from '@/theme/shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
	children: PropTypes.node
};

export default function ThemeConfig({ children }) {
	const themeOptions = useMemo(
		() => ({
			palette,
			shape,
			typography,
			shadows,
			customShadows
		}),
		[]
	);

	const theme = createTheme({});
	// const theme = createTheme(themeOptions);
	theme.components = componentsOverride(theme);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
}
