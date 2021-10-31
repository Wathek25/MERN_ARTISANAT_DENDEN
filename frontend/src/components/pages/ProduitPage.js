import React, { useEffect, useState } from "react";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Error from "../Error";
import { detailsProduit } from "../../JS/actions/produitActions";

const ProduitPage = (props) => {
  const dispatch = useDispatch();
  const produitId = props.match.params.id;
  const produitDetails = useSelector((state) => state.produitDetails);
  const [quantite, setQuantite] = useState(1);
  const { loading, error, produit } = produitDetails;

  useEffect(() => {
    dispatch(detailsProduit(produitId));
  }, [dispatch, produitId]);

  const ajoutAuPanier = () => {
    props.history.push(`/panier/${produitId}?quantite=${quantite}`);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <h3>Page Produit</h3>
          <Link to="/">Acceuil</Link>
          <div className="produit top">
            <div className="col-2">
              <img
                className="large"
                src={produit.image}
                alt={produit.nom}
              ></img>
            </div>
            <div className="">
              <ul>
                <li>
                  <h1>{produit.nom}</h1>
                </li>
                <li>
                  <Rating
                    rating={produit.rating}
                    numReviews={produit.numReviews}
                  ></Rating>
                </li>
                <li>Pix : {produit.prix} Dt</li>
                <li>
                  Catégorie:
                  <span> {produit.categorie}</span>
                </li>
                <li>
                  Description:
                  <p>{produit.description}</p>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="">
                <ul>
                  <li>
                    <div className="">
                      <div>Prix</div>
                      <div className="price">{produit.prix} Dt</div>
                    </div>
                  </li>
                  <li>
                    <div className="">
                      <div>Status</div>
                      <div>
                        {produit.stock > 0 ? (
                          <span className="success">En stock</span>
                        ) : (
                          <span className="error">Indisponible</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {produit.stock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Quantité</div>
                          <div>
                            <select
                              value={quantite}
                              onChange={(e) => setQuantite(e.target.value)}
                            >
                              {[...Array(produit.stock).keys()].map((el) => (
                                <option key={el + 1} value={el + 1}>
                                  {el + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={ajoutAuPanier}
                          style={{ backgroundColor: "green" }}
                        >
                          Ajouter au panier
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitPage;
