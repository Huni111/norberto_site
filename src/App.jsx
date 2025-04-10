import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './styles/global.css'; // Fixed import path


// components:
import RootFile from './Root';
import { lazy } from 'react';

const Home = lazy(() => import('./components/Home'))
const Despre = lazy(() => import('./components/Despre'))
const Produse = lazy(() => import('./components/Produse'))
const Servicii = lazy(() => import('./components/Servicii'))
const Cont = lazy(() => import('./components/Cont'))
const Contact = lazy(() => import('./components/Contact'))


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootFile />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <Despre /> },
            { path: 'products', element: <Produse /> },
            { path: 'services', element: <Servicii /> },
            { path: 'acount', element: <Cont /> },
            { path: 'contact', element: <Contact /> },

        ]
    }
])







const App = () => {
    return (
        <>
   
                <RouterProvider router={router}>
                    {router}
                </RouterProvider>
            
        </>
    )
}

export default App;
