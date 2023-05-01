import PropTypes from "prop-types"

export default function Product({ Id, Name, Pic, Qty, OrderQty, increaseOrderQty, decreaseOrderQty }) {
  return (
    <td>
      <img src={`/src/assets/pic/${Pic}`} className="product-img" />
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

Product.propTypes = {
  Id: PropTypes.string,
  Name: PropTypes.string,
  Pic: PropTypes.string,
  Qty: PropTypes.number,
  OrderQty: PropTypes.number,
  increaseOrderQty: PropTypes.func.isRequired,
  decreaseOrderQty: PropTypes.func.isRequired
}
