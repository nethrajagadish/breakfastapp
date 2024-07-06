// FormPage.js
import React, { useContext, useState } from "react";
import styles from "../Order/OrderForm.module.css";
import Checkout from "../Cart/Checkout";
import CartContext from "../../store/cart-context";
import Header from "../Layout/Header";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Loader from "../UI/Loader";
import orderplaced from "../../assets/orderplaced.png";

const OrderForm = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://myfoodapp-7c513-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const isSubmittingModalContent = (
    <div>
      <h2 className="text-center">Sending order data...</h2>
      <Loader />
    </div>
  );

  const orderformContent = (
    <Card>
      <h2>
        Almost there! But wait, your cart might be missing the breakfast party.
        Pop in a morning favorite before you complete your order!
      </h2>
      <div className={styles.addtocartorder}>
        <div>
          <Link to="/">Add to cart</Link>
        </div>
      </div>
    </Card>
  );
  const orderPlaced = (
    <Card>
      <div className={styles.orderplacement}>
        <div className={styles.imgsection}>
          <img src={orderplaced} width="400" alt="thanks"></img>
        </div>
        <div className={styles.textsection}>
          <h2>Your order has been placed</h2>
          <p>Thanks for ordering</p>
          <div className={styles.addtocartorder}>
            <div>
              <Link to="/">Done</Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
  return (
    <>
      <Header />
      <main>
        {items.length === 0 ? (
          <div className={styles["addbtn"]}>
            {!isSubmitting && didSubmit ? "" : orderformContent}
          </div>
        ) : (
          <Checkout onConfirm={submitOrderHandler} />
        )}

        {!isSubmitting && didSubmit && (
          <div className={styles.orderplaced}>{orderPlaced}</div>
        )}
        {isSubmitting && <Modal>{isSubmittingModalContent}</Modal>}
      </main>
    </>
  );
};

export default OrderForm;
