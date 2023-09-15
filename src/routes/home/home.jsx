import categoriesArray from "../../Component/Data/CategoriesArray";
import CategoryItem from "../../Component/category-item/category-item";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="categories-container">
      {categoriesArray.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    <Outlet/>
    </div>
  );
};

export default Home;
