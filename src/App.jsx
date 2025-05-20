import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './styles/global.css'


// components:
import RootFile from './Root';
import { lazy } from 'react';

const Home = lazy(() => import('./components/Home'))
const Despre = lazy(() => import('./components/Despre'))
const Products = lazy(() => import('./components/Produse'))
const Servicii = lazy(() => import('./components/Servicii'))
const Cont = lazy(() => import('./components/Cont'))
const Contact = lazy(() => import('./components/Contact'))
const CompanyRegistrationForm = lazy(() => import('./components/CompanyRegistrationForm'))
const Terms = lazy(() => import('./components/Terms'))
const Privacy = lazy(() => import('./components/Privacy'))
const Cart =lazy (() => import('./components/Cart') )
const ProductDetail =lazy (() => import('./components/ProductDetail') )


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootFile />,
        children: [
            { path: '/', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                </Suspense> 
            },
            { path: 'about', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Despre />
                </Suspense> 
            },
            { path: 'products', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Products />
                </Suspense> 
            },
            { path: 'services', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Servicii />
                </Suspense> 
            },
            { path: 'acount', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Cont />
                </Suspense> 
            },
            { path: 'contact', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                </Suspense> 
            },
            { path: '/register-company', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <CompanyRegistrationForm />
                </Suspense> 
            },
            { path: '/terms', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Terms />
                </Suspense> 
            },
            { path: '/privacypolicy', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Privacy />
                </Suspense> 
            },
            { path: '/cart', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <Cart />
                </Suspense> 
            },
            { path: '/produs', element: 
                <Suspense fallback={<div>Loading...</div>}>
                    <ProductDetail />
                </Suspense> 
            },
            { 
                path: '*', 
                element: <div className="not-found">Pagina nu a fost găsită</div> 
            }
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