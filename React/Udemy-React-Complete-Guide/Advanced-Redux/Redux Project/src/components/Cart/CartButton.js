import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/toggleCart-slice';

const CartButton = (props) => {
  const badgeCartQty = useSelector(state => state.cart.totalCartQuantity)
  const dispatch = useDispatch()

  return (
    <button className={classes.button} onClick={() => dispatch(toggleCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeCartQty}</span>
    </button>
  );
};

export default CartButton;
