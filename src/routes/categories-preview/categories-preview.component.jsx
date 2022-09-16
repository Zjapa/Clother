import { useContext } from "react";
import { MainContext } from "../../contexts/main.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {
  const { CategoriesContext } = useContext(MainContext);
  const { categoriesMap } = CategoriesContext;
  const categoriesArray = Object.keys(categoriesMap);

  return (
    <div>
      {categoriesArray.map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
}

export default CategoriesPreview;
