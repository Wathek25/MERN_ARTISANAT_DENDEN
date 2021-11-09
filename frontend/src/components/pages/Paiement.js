import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaiement } from "../../JS/actions/panierActions";
import CheckoutSteps from "./CheckoutSteps";

const Paiement = (props) => {
  const panier = useSelector((state) => state.panier);
  const { shippingAddress } = panier;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [paiement, setPaiement] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaiement(paiement));
    props.history.push("/commander");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Méthode de paiement</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paiement"
              required
              checked
              onChange={(e) => setPaiement(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        <div>
          <label />
          <button style={{ backgroundColor: "#e5890a" }} type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Paiement;
