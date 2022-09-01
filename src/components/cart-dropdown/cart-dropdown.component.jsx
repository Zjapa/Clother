import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { MainContext } from "../../contexts/main.context";

function CartDropdown() {
  const { CartContext } = useContext(MainContext);
  const { cartItems } = CartContext;
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} itemInfo={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
