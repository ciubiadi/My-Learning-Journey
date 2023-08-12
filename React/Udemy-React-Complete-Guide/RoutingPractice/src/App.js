import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import ProductsPage from './pages/Products.js';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage />}
]); 



function App() {
  return <RouterProvider router={router} />;
}

export default App;
