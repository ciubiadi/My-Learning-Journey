import { addItem, replaceCart } from '../../store/cart-slice';
// import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = (props) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    const newTotalQty = cart.newTotalQty + 1;

    const updatedItems = cart.itmes.slice(); // create a copy via slice tp avoid mutating state
    const existingItem = updatedItems.find((item) => item.id === id);
    if(existingItem){
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.price = updatedItem.price + price;
      const existingItemIndex = updatedItems.findIndex((item) => item.id === id)
      updatedItems[existingItemIndex] = updatedItem; 
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }

    const newCart = {
      totalQuantity: newTotalQty,
      items: updatedItems,
    };

    dispatch(replaceCart(newCart));

    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    // dispatch(
    //   addItem({
    //     id,
    //     title,
    //     price,
    //   })
    // );

  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
