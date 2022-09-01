import { useContext } from 'react';
import { MainContext } from '../../contexts/main.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { ProductContext } = useContext(MainContext);
    const { products } = ProductContext;
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Shop;
