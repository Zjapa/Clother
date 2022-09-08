import "./cart-item.styles.scss";

function CartItem({ itemInfo }) {
  const { name, quantity, imageUrl, price } = itemInfo;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} className="cart-item-image" />
      <div className="cart-item-desc">
        <h3>{name}</h3>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
