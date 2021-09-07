import React from 'react';
// routes
import Router from './routes.jsx';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop.jsx';

// ----------------------------------------------------------------------

export default function App() {
	return (
		<ThemeConfig>
			<ScrollToTop />
			<Router />
		</ThemeConfig>
	);
}
