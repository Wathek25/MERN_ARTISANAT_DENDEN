import React from "react";
import "./css/CheckoutSteps.css";

const CheckoutSteps = (props) => {
  return (
    <div className="produit checkout-steps">
      <div className={props.step1 ? "active" : ""}>S'identifier</div>
      <div className={props.step2 ? "active" : ""}>Livraison</div>
      <div className={props.step3 ? "active" : ""}>Paiement</div>
      <div className={props.step4 ? "active" : ""}>Passer la commande</div>
    </div>
  );
};

export default CheckoutSteps;
