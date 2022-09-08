import "./checkout.styles.scss";
import { useContext } from "react";
import { MainContext } from "../../contexts/main.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function Checkout() {
  const { CartContext } = useContext(MainContext);
  const { cartItems, cartTotalPrice } = CartContext;

  return (
    <div className="checkout-container">
      <div className="checkout-table-header">
        <div className="table-block">
          <h2>Product</h2>
        </div>
        <div className="table-block">
          <h2>Description</h2>
        </div>
        <div className="table-block">
          <h2>Quantity</h2>
        </div>
        <div className="table-block">
          <h2>Price</h2>
        </div>
        <div className="table-block">
          <h2>Remove</h2>
        </div>
      </div>
      <div className="checkout-table-content">
        {cartItems.map((item) => (
          <CheckoutItem cartItem={item} />
        ))}
      </div>
      <div className="checkout-total">
        <h2>Total: ${cartTotalPrice}</h2>
      </div>
    </div>
  );
}

export default Checkout;
