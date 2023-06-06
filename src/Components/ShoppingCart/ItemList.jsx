import data from "../../Data/productsData.json";
import { CardProduct } from "./CardProduct";
import "./ItemListStyles.css"

export const ItemList = () => {
  return (
    <>
      <h2>Productos</h2>
      <section className="products">
        {data.map((item) => {
          console.log(item);
          return <CardProduct key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};
