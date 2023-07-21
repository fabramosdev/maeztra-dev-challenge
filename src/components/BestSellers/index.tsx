import { useEffect, useState, useCallback } from "react";

import "./styles.css";

import { products } from "./products";

interface Products {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

const BestSellers = () => {
  const [items, setItems] = useState<Products[]>();

  const getProducts = useCallback(async () => {
    try {
      const data = await products.map((product) => ({
        id: String(product.id),
        image: product.image,
        title: product.title,
        description: product.description,
        price: product.price,
      }));

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  console.log(items);

  return (
    <>
      <div className="best-sellers">
        <div className="title">
          <h2>As Mais Pedidas</h2>
        </div>
        <div className="item-list">
          {items?.map((item) => (
            <>
              <div className="item-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <strong>
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                  <button className="add-to-cart">Adicionar</button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export { BestSellers };
