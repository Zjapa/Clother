import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { MainContext } from "../../contexts/main.context";
import "./category.styles.scss";

function Category() {
  const { category } = useParams();
  const { CategoriesContext } = useContext(MainContext);
  const { categoriesMap } = CategoriesContext;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-wrapper'>
      <h2 className="title">{category}</h2>
      <div className="category-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
