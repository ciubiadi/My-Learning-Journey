import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(cartItem => (
          <CartItem
            item={{
              id: cartItem.id,
              price: cartItem.price,
              title: cartItem.name,
              quantity: cartItem.quantity,
              total: cartItem.totalPrice
            }}
            key={cartItem.id}
          />
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
