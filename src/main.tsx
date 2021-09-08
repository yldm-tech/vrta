// scroll bar
import 'simplebar';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from '@/App';

// ----------------------------------------------------------------------

ReactDOM.render(
	<HelmetProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</HelmetProvider>,
	document.getElementById('root')
);

