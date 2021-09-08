import React from 'react';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from '@/components/ScrollToTop';

// ----------------------------------------------------------------------

export default function App():JSX.Element {
	return (
		<ThemeConfig>
			<ScrollToTop />
			<Router />
		</ThemeConfig>
	);
}
