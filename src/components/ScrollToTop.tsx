import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (): JSX.Element => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <Fragment />;
};
export default ScrollToTop;
