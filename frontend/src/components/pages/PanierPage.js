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
    <div className="produit">
      <div className="col-3">
        <h1>Votre Panier</h1>
        {panierProduits.length === 0 ? (
          <p>
            Panier est vide. <Link to="/">Accueil</Link>
          </p>
        ) : (
          <ul className="produit">
            {panierProduits.map((produit) => (
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
      <div className="col-3">
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
                style={{ backgroundColor: "green" }}
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
