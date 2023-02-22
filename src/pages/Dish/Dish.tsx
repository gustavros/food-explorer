import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IPratos } from "../../interfaces/interface";
import { db } from "../../utils/db";

import style from "./styles.module.scss";

export const Dish = () => {
  const { id, category } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<IPratos[]>([]);

  if (
    !id ||
    (category !== "drinks" && category !== "desserts" && category !== "meals")
  ) {
    return <h1>Página não encontrada</h1>;
  }

  const dish = db[category].find((dish: IPratos) => dish.id === Number(id));

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  function handleAddToCart(dish: IPratos) {
    setCart([...cart, dish]);

    alert(`${dish.name} adicionado ao carrinho!`);
  }

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={dish?.image} alt={dish?.description} />
      </div>

      <div className={style.content}>
        <h1>{dish?.name}</h1>
        <p>{dish?.description}</p>

        <p className={style.tags}>
          {dish?.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>

        <div className={style.options}>
          <span>
            <Minus onClick={handleRemove} />
            {quantity}
            <Plus onClick={handleAdd} />
          </span>

          <button onClick={() => handleAddToCart(dish!)}>
            Incluir -{" "}
            {(dish?.price! * quantity).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </button>
        </div>
      </div>
    </div>
  );
};
