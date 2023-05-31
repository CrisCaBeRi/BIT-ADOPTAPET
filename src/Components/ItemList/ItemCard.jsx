import "./itemCard.css";

export default function ItemCard({ name, price, id, imgUrl }) {
  return (
    <article className="card" key={id}>
      <h1>{name}</h1>
      <img src={imgUrl} alt="" />
      <p>{price}</p>

      <button className="addItembtn" onClick={() => addToCart()}>
        Añadir al carro
      </button>
    </article>
  );
}
