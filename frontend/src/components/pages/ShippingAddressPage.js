import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import { saveShippingAddress } from "../../JS/actions/panierActions";
import "./css/ShippingAddressPage.css";

const ShippingAddressPage = (props) => {
  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;

  const panier = useSelector((state) => state.panier);
  const { shippingAddress } = panier;
  if (!clientInfo) {
    props.history.push("/connecter");
  }

  const [nomPrenom, setNomPrenom] = useState(shippingAddress.nomPrenom);
  const [address, setAddress] = useState(shippingAddress.address);
  const [ville, setVille] = useState(shippingAddress.ville);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [pays, setPays] = useState(shippingAddress.pays);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ nomPrenom, address, ville, postalCode, pays })
    );
    props.history.push("/paiement");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Adresse de livraison</h1>
        </div>
        <div>
          <label htmlFor="nomPrenom">Nom Complet</label>
          <input
            type="text"
            id="nomPrenom"
            placeholder="Votre Nom et Prenom"
            value={nomPrenom}
            onChange={(e) => setNomPrenom(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Votre adresse</label>
          <input
            type="text"
            id="address"
            placeholder="Votre adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="ville">Votre ville</label>
          <input
            type="text"
            id="ville"
            placeholder="Enter ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Code postale</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="pays">Votre Pays</label>
          <input
            type="text"
            id="pays"
            placeholder="Enter pays"
            value={pays}
            onChange={(e) => setPays(e.target.value)}
            required
          ></input>
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

export default ShippingAddressPage;
