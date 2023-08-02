import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const showCart = useSelector((state) => state.toggleCart.showCart)
  const cart = useSelector(state => state.cart);

  /* watch for changes in the cart state*, because useEffect run side effects 
    so it will help me to run an effect whenever soome dependency changes */  

    /* PUT vs POST => PUT request will also store data to Firebase, but the new data will not be added in a list of data,
    it will OVERRIDE the EXISTING data. */
  useEffect(() => {
    fetch('https://react-http-8fe27-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart) 
    });
  }, [cart]);


  return (
    <Layout>
     { showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
