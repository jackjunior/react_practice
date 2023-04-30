import { useState } from "react";
import Product from "./Product";

export default function ProductTable() {
  const products = [
    {
      Id: crypto.randomUUID(),
      Name: "Yogurt",
      Qty: 12,
      OrderQty: 0,
    },
    {
      Id: crypto.randomUUID(),
      Name: "Beef",
      Qty: 10,
      OrderQty: 0,
    },
    {
      Id: crypto.randomUUID(),
      Name: "Pizza",
      Qty: 2,
      OrderQty: 0,
    },
    {
      Id: crypto.randomUUID(),
      Name: "Cola",
      Qty: 9,
      OrderQty: 0,
    },
    {
      Id: crypto.randomUUID(),
      Name: "Tea",
      Qty: 11,
      OrderQty: 0,
    },
  ];

  const [productList, setProductList] = useState(products);

  function increaseOrderQty(Id) {
    setProductList(() => {
      return productList.map((product) => {
        if (product.Id === Id) 
          console.log(product)
          product.OrderQty += 1;
      });
    });
  }
  function decreaseOrderQty(Id) {
    setProductList(() => {
      return productList.map((product) => {
        if (product.Id === Id) 
          console.log(product)
          product.OrderQty -= 1;
      });
    });
  }

  return (
    <table>
      <tbody>
        <tr>
          {productList.map((product) => {
            return <Product {...product} key={product.Id}
            increaseOrderQty={increaseOrderQty}
            decreaseOrderQty={decreaseOrderQty}/>;
          })}
        </tr>
      </tbody>
    </table>
  );
}
