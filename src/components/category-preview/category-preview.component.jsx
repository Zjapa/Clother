import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

function CategoryPreview({ title, products }) {
  const navigate = useNavigate();
  const goToCategory = () => {
    navigate(title);
  };
  return (
    <div className="category-preview-container">
      <h2 className="category-title">
        <span onClick={goToCategory}>{title}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
