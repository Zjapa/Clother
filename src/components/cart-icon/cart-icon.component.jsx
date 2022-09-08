import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { MainContext } from "../../contexts/main.context";

function CartIcon() {
  const { CartContext } = useContext(MainContext);
  const { setOpenCart, cartItemsNumber } = CartContext;

  const openCartHandler = () => {
    setOpenCart((prevOpen) => !prevOpen);
  };
  return (
    <div className="cart-icon-container" onClick={openCartHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsNumber}</span>
    </div>
  );
}

export default CartIcon;
