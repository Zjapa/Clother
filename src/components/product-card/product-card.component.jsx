import "./product-card.styles.scss";
import { useContext } from "react";
import Button from "../button/button.component";
import { MainContext } from "../../contexts/main.context";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;

  const { CartContext } = useContext(MainContext);
  const { addItemToCart } = CartContext;

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
