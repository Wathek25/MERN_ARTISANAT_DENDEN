import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajoutAuPanier, supprimerPanier } from "../../JS/actions/panierActions";
import { Link } from "react-router-dom";

const PanierPage = (props) => {
  const produitId = props.match.params.id;
  const quantite = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const panier = useSelector((state) => state.panier);
  const { panierProduits } = panier;
  const dispatch = useDispatch();
  useEffect(() => {
    if (produitId) {
      dispatch(ajoutAuPanier(produitId, quantite));
    }
  }, [dispatch, produitId, quantite]);

  const supprimerProduitHandler = (id) => {
    dispatch(supprimerPanier(id));
  };

  const checkoutHandler = () => {
    props.history.push("/connecter?redirect=shipping");
  };

  return (
    <div className="panier">
      <div className="col-6">
        <h2>Votre Panier</h2>
        {panierProduits.length === 0 ? (
          <h3>
            Panier est vide !
            <Link
              className="border"
              to="/"
              style={{ textDecoration: "underline", color: "#e5890a" }}
            >
              <h4>Acceuil</h4>
            </Link>
          </h3>
        ) : (
          <ul>
            {panierProduits.map((produit) => (
              <li key={produit.produit}>
                <div className="panier">
                  <div>
                    <img
                      src={produit.image}
                      alt={produit.nom}
                      className="small"
                    ></img>
                  </div>
                  <div>
                    <strong>
                      <Link
                        to={`/produit/${produit.produit}`}
                        style={{
                          textDecoration: "none",
                          color: "rgb(229, 137, 10)",
                        }}
                      >
                        {produit.nom}
                      </Link>
                    </strong>
                  </div>
                  <div>
                    <select
                      value={produit.quantite}
                      onChange={(e) =>
                        dispatch(
                          ajoutAuPanier(produit.produit, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(produit.stock).keys()].map((el) => (
                        <option key={el + 1} value={el + 1}>
                          {el + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>{produit.prix} Dt</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => supprimerProduitHandler(produit.produit)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="produit">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Le Totale de vos produits (
                {panierProduits.reduce((a, c) => a + c.quantite, 0)} ) :
                {panierProduits.reduce((a, c) => a + c.prix * c.quantite, 0)} Dt
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                style={{ backgroundColor: "#e5890a" }}
                disabled={panierProduits.length === 0}
              >
                Finaliser Votre Commande
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanierPage;
