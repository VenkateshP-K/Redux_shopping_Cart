import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.products);
  const quantities = useSelector((state) => state.quantity);

  const totalPrice = Object.keys(quantities).reduce((total, productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    const qty = quantities[productId];
    const price = product.price;
    return total + price * qty;
  }, 0);

  const cartCount = Object.values(quantities).reduce((count, value) => {
    return count + value;
  }, 0);

  return (
    <div className="container">
      <div className="row">
        <div className="  col-md-12 d-flex justify-content-between align-items-center text-center bg-white mt-3 mb-3 ms-2 rounded">
          <h1 className="cart pt-2 ps-2 pb-2">Shopping Cart</h1>

          <span className="d-flex flex-column pe-2">
            <span className="count bg-dark text-white rounded-circle ">
              {cartCount}
            </span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
      </div>

      <div className="row justify-content-around">
        <div className="col-lg-8 col-md-7  col-sm-12 ms-2 bg-white flex-wrap">
          <div
            className="table-container"
          >
            <table className="table table-sm mt-3 text-center  align-middle pt-3">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const qty = quantities[product.id];
                  return (
                    <CartItem key={product.id} product={product} qty={qty} />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-md-3 col-sm-12 ms-1  bg-white  pt-3 justify-content-center flex-wrap"
          style={{ height: 230 }}
        >
          <div className="d-flex justify-content-between">
            <h6>Subtotal</h6>
            <h6>${totalPrice}.00</h6>
          </div>

          <div className="d-flex justify-content-between">
            <h6>Shipping Fee (std.)</h6>
            <h6>$40.00</h6>
          </div>

          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <h4>Total Amount </h4>
              {totalPrice === 0 ? (
                <h4>$0.00</h4>
              ) : (
                <h4>${totalPrice + 40}.00</h4>
              )}
            </div>
            <button className="btn btn-secondary mt-2 opacity-80">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;