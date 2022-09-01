import "./cart-item.styles.scss";

function CartItem({ itemInfo }) {
  const { name, quantity } = itemInfo;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}

export default CartItem;
