import { Layout } from "../Components/Layout/Layout";
import { ItemList } from "../Components/ShoppingCart/ItemList";
import { ShoppingNav } from "../Components/ShoppingNav/ShoppingNav";

export const Products = () => {
  return (
    <Layout>
      <ItemList/>
      <ShoppingNav/>
    </Layout>
  );
};
