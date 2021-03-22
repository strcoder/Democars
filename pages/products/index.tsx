import Promotion from "../../components/Promotion";
import AllProducts from "../../containers/AllProducts";
import Categories from "../../containers/Categories"

const Products = () => {
  return (
    <main>
      <Categories />
      <AllProducts />
      <Promotion />
    </main>
  );
};

export default Products;
