import React, { useEffect } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/CommanderPage.css";
import { createCommande } from "../../JS/actions/commanderActions";
import { COMMANDER_RESET } from "../../JS/constants/commanderConstants";
import Loading from "../Loading";

const CommanderPage = (props) => {
  const panier = useSelector((state) => state.panier);
  if (!panier.paiement) {
    props.history.push("/paiement");
  }

  const commandeCreate = useSelector((state) => state.commandeCreate);
  const { loading, success, error, commander } = commandeCreate;
  console.log(commandeCreate);

  const toPrice = (num) => Number(num.toFixed(2));
  panier.produitsPrix = toPrice(
    panier.panierProduits.reduce((a, c) => a + c.quantite * c.prix, 0)
  );
  panier.shippingPrix = panier.produitsPrix > 100 ? toPrice(0) : toPrice(10);
  panier.taxPrix = toPrice(0.15 * panier.produitsPrix);
  panier.totalPrix = panier.produitsPrix + panier.shippingPrix + panier.taxPrix;

  const dispatch = useDispatch();
  const commanderHandler = () => {
    dispatch(
      createCommande({ ...panier, commanderProduits: panier.panierProduits })
    );
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/commander/${commander._id}`);
      dispatch({ type: COMMANDER_RESET });
    }
  }, [dispatch, commander, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="produit top">
        <div className="mycol3">
          <ul>
            <li>
              <div className="card2 card-body">
                <h2>
                  <strong style={{ fontWeight: "bold", color: "#e5890a" }}>
                    Livraison
                  </strong>
                </h2>
                <p>
                  <strong>Nom:</strong> {panier.shippingAddress.nomPrenom}{" "}
                  <br />
                  <strong>Adresse: </strong> {panier.shippingAddress.address},
                  {panier.shippingAddress.ville},
                  {panier.shippingAddress.postalCode},
                  {panier.shippingAddress.pays}
                </p>
              </div>
            </li>
            <li>
              <div className="card2 card-body">
                <h2>
                  <strong style={{ fontWeight: "bold", color: "#e5890a" }}>
                    Paiement
                  </strong>
                </h2>
                <p>
                  <strong>Méthode de paiement:</strong> {panier.paiement}
                </p>
              </div>
            </li>
            <li>
              <div className="card2 card-body">
                <h2>
                  <strong style={{ fontWeight: "bold", color: "#e5890a" }}>
                    Vos Produits:
                  </strong>
                </h2>
                <ul>
                  {panier.panierProduits.map((produit) => (
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
                          <Link
                            to={`/produit/${produit.produit}`}
                            style={{
                              color: "#e5890a",
                              textDecoration: "none",
                            }}
                          >
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
        <div className="mycol3">
          <div className="card2 card-body">
            <ul>
              <li>
                <h2>
                  <strong style={{ fontWeight: "bold", color: "#e5890a" }}>
                    Récapitulatif de la commande
                  </strong>
                </h2>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>Produits</strong>
                  </div>
                  <div>{panier.produitsPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>livraison</strong>
                  </div>
                  <div>{panier.shippingPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong>Tax</strong>
                  </div>
                  <div>{panier.taxPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <div className="produit">
                  <div>
                    <strong> Totale </strong>
                  </div>
                  <div>{panier.totalPrix.toFixed(2)} Dt</div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={commanderHandler}
                  style={{ backgroundColor: "#e5890a" }}
                  disabled={panier.panierProduits.length === 0}
                >
                  Commander
                </button>
              </li>
              {loading && <Loading />}
              {error && <span style={{ color: "red" }}>erreur</span>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommanderPage;
