import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout.jsx';
//
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DashboardApp from './pages/DashboardApp.jsx';
import Products from './pages/Products.jsx';
import Blog from './pages/Blog.jsx';
import User from './pages/User.jsx';
import NotFound from './pages/Page404.jsx';

// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: '/dashboard',
			element: <DashboardLayout />,
			children: [
				{ path: '/', element: <Navigate to="/dashboard/app" replace /> },
				{ path: 'app', element: <DashboardApp /> },
				{ path: 'user', element: <User /> },
				{ path: 'products', element: <Products /> },
				{ path: 'blog', element: <Blog /> }
			]
		},
		{
			path: '/',
			element: <LogoOnlyLayout />,
			children: [
				{ path: 'login', element: <Login /> },
				{ path: 'register', element: <Register /> },
				{ path: '404', element: <NotFound /> },
				{ path: '/', element: <Navigate to="/dashboard" /> },
				{ path: '*', element: <Navigate to="/404" /> }
			]
		},

		// { path: '*', element: <Navigate to="/404" replace /> }
	]);
}
