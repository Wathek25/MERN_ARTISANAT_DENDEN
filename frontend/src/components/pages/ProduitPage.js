import React, { useEffect, useState } from "react";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Error from "../Error";
import {
  createReview,
  detailsProduit,
  deleteReview,
} from "../../JS/actions/produitActions";
import {
  PRODUIT_REVIEW_CREATE_RESET,
  PRODUIT_REVIEW_DELETE_RESET,
} from "../../JS/constants/produitConstants";

const ProduitPage = (props) => {
  const dispatch = useDispatch();
  const produitId = props.match.params.id;
  const produitDetails = useSelector((state) => state.produitDetails);
  const [quantite, setQuantite] = useState(1);
  const { loading, error, produit } = produitDetails;

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;

  const produitReviewCreate = useSelector((state) => state.produitReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = produitReviewCreate;

  const produitReviewDelete = useSelector((state) => state.produitReviewDelete);
  const {
    loading: loadingReviewDelete,
    error: errorReviewDelete,
    success: successReviewDelete,
  } = produitReviewDelete;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  let nom = null;
  if (localStorage.getItem("clientInfo")) {
    nom = JSON.parse(localStorage.getItem("clientInfo")).nom;
  }

  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Succès");
      setRating("");
      setComment("");
      dispatch({ type: PRODUIT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduit(produitId));
  }, [dispatch, produitId, successReviewCreate]);

  useEffect(() => {
    if (successReviewDelete) {
      window.alert("Supprimer avec succès");
      setRating("");
      setComment("");
      dispatch({ type: PRODUIT_REVIEW_DELETE_RESET });
    }
    dispatch(detailsProduit(produitId));
  }, [dispatch, produitId, successReviewDelete]);

  const ajoutAuPanier = () => {
    props.history.push(`/panier/${produitId}?quantite=${quantite}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(produitId, { rating, comment, nom: clientInfo.nom })
      );
    } else {
      alert("Veuillez entrer un commentaire et une note");
    }
  };

  const deleteHandler = (prodId, reviewId) => {
    if (window.confirm("Supprimer avis?")) {
      dispatch(deleteReview(prodId, reviewId));
      window.location.reload();
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <Link
            to="/"
            style={{ textDecoration: "underline", color: "#e5890a" }}
          >
            <h4>Acceuil</h4>
          </Link>
          <h1>Vos Produit</h1>

          <div className="produit top">
            <div className="mycol3">
              <img
                className="large"
                src={produit.image}
                alt={produit.nom}
              ></img>
            </div>
            <div className="mycol3">
              <ul>
                <li>
                  <h3>{produit.nom}</h3>
                </li>
                <li>
                  <Rating
                    rating={produit.rating}
                    numReviews={produit.numReviews}
                  ></Rating>
                </li>
                <li>
                  <strong>Prix : {produit.prix} Dt</strong>
                </li>
                <li>
                  <strong>Catégorie:</strong>
                  <span> {produit.categorie}</span>
                </li>
                <li>
                  <strong>Description:</strong>
                  <p>{produit.description}</p>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <ul>
                  <li>
                    <div className="mycol">
                      <strong>Prix</strong>
                    </div>
                    <div className="price">{produit.prix} Dt</div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <strong>Status</strong>
                      </div>
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
                          <div>
                            <strong>Quantité</strong>
                          </div>
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
                          style={{ backgroundColor: "#e5890a" }}
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
          <div>
            <h2 id="reviews">Avis</h2>
            {produit.reviews.length === 0 && <span>Aucun Avis</span>}
            <ul>
              {produit.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.nom}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                  {nom && nom === review.nom && (
                    <button
                      className="btn btn-warning"
                      onClick={() => deleteHandler(produit._id, review._id)}
                    >
                      Supprimer
                    </button>
                  )}
                </li>
              ))}
              <li>
                {clientInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Donnez votre avis</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Mauvais</option>
                        <option value="2">2- Acceptable</option>
                        <option value="3">3- Bon</option>
                        <option value="4">4- Très bon</option>
                        <option value="5">5- Excellent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button
                        style={{ backgroundColor: "#e5890a" }}
                        type="submit"
                      >
                        Envoyer
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <Loading />}
                      {errorReviewCreate && <span>{errorReviewCreate}</span>}
                    </div>
                  </form>
                ) : (
                  <span>
                    Svp <Link to="/connecter">se connecetr</Link> pour donner
                    votre avis
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitPage;
