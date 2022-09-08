import { useContext } from "react";
import { MainContext } from "../../contexts/main.context";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { CartContext } = useContext(MainContext);
  const { decrementCartItem, addItemToCart, removeProduct } = CartContext;

  const decrementHandler = () => decrementCartItem(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const removeHandler = () => removeProduct(cartItem);

  return (
    <div className="checkout-table-item" key={name}>
      <img src={imageUrl} alt={name} className="table-img" />
      <h2>{name}</h2>
      <div className="checkout-table-quantity">
        <span onClick={decrementHandler} className="lt-arrow">
          &#10094;
        </span>
        <span>{quantity}</span>
        <span onClick={incrementHandler} className="gt-arrow">
          &#10095;
        </span>
      </div>
      <h2>{price}</h2>
      <div className="remove-item" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
