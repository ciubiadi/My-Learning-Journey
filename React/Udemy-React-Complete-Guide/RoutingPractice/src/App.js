import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import ProductsPage from './pages/Products.js';
import RootLayout from './pages/Root.js';
import ErrorPage from './pages/Error.js';
import ProductDetailPage from './pages/ProductDetail.js';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [ 
      // Below I have absolute paths
      // { path: '/', element: <HomePage /> },
      // { path: '/products', element: <ProductsPage />},
      // { path: '/products/:productId', element: <ProductDetailPage />}
      
      // Below I have relative paths
      // { path: '', element: <HomePage /> },

      // Index Route allow me to define a default route that should be loaded if the parent rounte's path is active
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage />},
      { path: 'products/:productId', element: <ProductDetailPage />}
    ]
  }
]); 



function App() {
  return <RouterProvider router={router} />;
}

export default App;
