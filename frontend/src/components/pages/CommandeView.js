import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/CommanderPage.css";
import Loading from "../Loading";
import {
  detailsCommande,
  payCommander,
} from "../../JS/actions/commanderActions";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { COMMANDER_PAY_RESET } from "../../JS/constants/commanderConstants";

const CommandeView = (props) => {
  const commandeId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const commandeDetails = useSelector((state) => state.commandeDetails);
  const { commander, loading, error } = commandeDetails;

  const commanderPay = useSelector((state) => state.commanderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = commanderPay;

  const dispatch = useDispatch();

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (
      !commander ||
      successPay ||
      (commander && commander._id !== commandeId)
    ) {
      dispatch({ type: COMMANDER_PAY_RESET });
      dispatch(detailsCommande(commandeId));
    } else {
      if (!commander.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, commander, commandeId, sdkReady, successPay]);

  const successPaymentHnadler = (paiementResult) => {
    dispatch(payCommander(commander, paiementResult));
  };

  return loading ? (
    <Loading />
  ) : error ? (
    <p style={{ color: "red" }}>Error</p>
  ) : (
    <div>
      <h3>ID de votre commande {commander._id}</h3>
      <div className="produit top">
        <div className="col-3">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Nom:</strong> {commander.shippingAddress.nomPrenom}
                  <br />
                  <strong>Adresse: </strong> {commander.shippingAddress.address}
                  ,{commander.shippingAddress.ville},
                  {commander.shippingAddress.postalCode},
                  {commander.shippingAddress.pays}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Paiement</h2>
                <p>
                  <strong>Méthode de paiement:</strong> {commander.paiement}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Vos Produits:</h2>
                <ul>
                  {commander.commanderProduits.map((produit) => (
                    <li key={produit.produit}>
                      <div className="produit">
                        <div>
                          <img
                            src={produit.image}
                            alt={produit.nom}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/produit/${produit.produit}`}>
                            {produit.nom}
                          </Link>
                        </div>

                        <div>
                          {produit.quantite} x {produit.prix}Dt ={" "}
                          {produit.quantite * produit.prix}Dt
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Récapitulatif de la commande</h2>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>Prix</strong>
                  </div>
                  <div>{commander.produitsPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>Livraison</strong>
                  </div>
                  <div>{commander.shippingPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>Tax</strong>
                  </div>
                  <div>{commander.taxPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong> Totale </strong>
                  </div>
                  <div>{commander.totalPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              {!commander.isPaid && (
                <li>
                  {!sdkReady ? (
                    <Loading />
                  ) : (
                    <>
                      {errorPay && <p>Error {errorPay}</p>}
                      {loadingPay && <Loading />}
                      <PayPalButton
                        amount={commander.totalPrix}
                        onSuccess={successPaymentHnadler}
                      ></PayPalButton>
                    </>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandeView;
