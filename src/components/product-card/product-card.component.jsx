import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, id } = product;

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
};

export default ProductCard;
