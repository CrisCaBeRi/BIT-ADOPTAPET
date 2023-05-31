import dataProducts from "../Data/data.json";
import ItemCard from "../ItemList/ItemCard.jsx";

export default function ItemList() {
  console.log(dataProducts);

  return (
    <>
      <div className="item">
        {dataProducts.map((product) => {
          return <ItemCard key={product.id} {...product} />;
        })}
      </div>
    </>
  );
}
