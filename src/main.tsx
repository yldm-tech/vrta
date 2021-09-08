import 'simplebar';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeConfig from '@/theme';
import ScrollToTop from '@/components/ScrollToTop';
import Router from '@/routes';

const App = (): JSX.Element => {
    return (
        <ThemeConfig>
            <ScrollToTop />
            <Router />
        </ThemeConfig>
    );
};

ReactDOM.render(
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('root')
);
