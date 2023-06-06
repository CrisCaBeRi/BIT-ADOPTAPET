import { useContext } from "react";
import { SHOPPINGCONTEXT } from "./ShoppingContext";
import "./CardProductStyles.css";

export const CardProduct = ({ name, price, id, imgUrl, description }) => {
  const [cart, setCart] = useContext(SHOPPINGCONTEXT);  
  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          { id, quantity: 1, price, name, imgUrl, description },
        ];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <article className="itemCard">      
      <picture>
        <img src={imgUrl} className="imgProduct" />
      </picture>

      <span className="dividerProduct">
        <h3 className="productName">{name}</h3>
        <p>{description}</p>
        <h3 className="itemPrice">Precio: {price}</h3>
        {quantityPerItem > 0 && (
        <span className="itemQuantity">
          Unidades en carro: {quantityPerItem}
        </span>
      )}

        {quantityPerItem === 0 ? (
          <button className="itemActionButton" onClick={() => addToCart()}>
            + Add to cart
          </button>
        ) : (
          <button className="itemActionButton" id="plusItem" onClick={() => addToCart()}>
            + Añadir Unidad
          </button>
        )}

        {quantityPerItem > 0 && (
          <button className="itemActionButton" id="resItem" onClick={() => removeItem(id)}>
            - Restar Unidad
          </button>
        )}
      </span>
    </article>
  );
};
