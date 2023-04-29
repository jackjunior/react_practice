import productPic from "../assets/pic/fb.png";

export default function Product({ Id, Name, Qty, OrderQty, increaseOrderQty, decreaseOrderQty }) {
  return (
    <td>
      <img src={productPic} className="product-img" />
      <p className="product-detail">{Name}</p>
      <p className="product-detail">Available Qty: {Qty}</p>
      <div className="product-qty">
        <button onClick={() => increaseOrderQty(Id)}>+</button>
        <label>{OrderQty}</label>
        <button onClick={() => decreaseOrderQty(Id)}>-</button>
      </div>
    </td>
  );
}
