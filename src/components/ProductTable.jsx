import { useState } from "react";
import Product from "./Product";

const products = [
  {
    Id: crypto.randomUUID(),
    Name: "Yogurt",
    Pic: "yogurt.webp",
    Qty: 12,
    OrderQty: 0,
  },
  {
    Id: crypto.randomUUID(),
    Name: "Beef",
    Pic: "beef.jpg",
    Qty: 10,
    OrderQty: 0,
  },
  {
    Id: crypto.randomUUID(),
    Name: "Pizza",
    Pic: "pizza.webp",
    Qty: 2,
    OrderQty: 0,
  },
  {
    Id: crypto.randomUUID(),
    Name: "Cola",
    Pic: "cola.webp",
    Qty: 9,
    OrderQty: 0,
  },
  {
    Id: crypto.randomUUID(),
    Name: "Tea",
    Pic: "tea.webp",
    Qty: 11,
    OrderQty: 0,
  },
];

export default function ProductTable() {
  const [productList, updateProducts] = useState(() => {
    return products;
  });

  function increaseOrderQty(Id) {
    updateProducts((prevState) => {
      return prevState.map((product) => {
        if (product.Id === Id) {
          return {
            ...product,
            OrderQty: product.OrderQty + 1,
          };
        }
        return product;
      });
    });
  }

  function decreaseOrderQty(Id) {
    updateProducts((prevState) => {
      return prevState.map((product) => {
        if (product.Id === Id) {
          return {
            ...product,
            OrderQty: (product.OrderQty <= 0) ? product.OrderQty = 0 : product.OrderQty - 1
          };
        }
        return product;
      });
    });
  }

  return (
    <table>
      <tbody>
        <tr>
          {productList.map((product) => {
            return (
              <Product
                {...product}
                key={product.Id}
                increaseOrderQty={increaseOrderQty}
                decreaseOrderQty={decreaseOrderQty}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
