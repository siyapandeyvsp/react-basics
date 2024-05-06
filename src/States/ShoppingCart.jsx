import { useState } from "react";
import Button from "../components/Button";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      })
    );
  }
  function handleDecreaseClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1 };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p=> p.count > 0);
    setProducts(nextProducts);
  }

  return (
    <div className="m-5 p-5 border-2 rounded-lg shadow=lg ">
      <h1 className="font-bold text-center">Shopping Cart</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <Button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </Button>
            <Button
              onClick={() => {
                
                handleDecreaseClick(product.id);
              }}
            >
              -
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
