import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduits } from "../../JS/actions/produitActions";
import { detailsClient } from "../../JS/actions/clientActions";
import Loading from "../Loading";
import Produit from "../Produit";
import Rating from "../Rating";
import { useParams } from "react-router-dom";
const ArtisanPage = (props) => {
  const artisanId = props.match.params.id;
  const clientDetails = useSelector((state) => state.clientDetails);
  const { loading, error, client } = clientDetails;
  const produitList = useSelector((state) => state.produitList);
  const {
    loading: loadingProduits,
    error: errorProduits,
    produits,
  } = produitList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsClient(artisanId));
    dispatch(listProduits({ artisan: artisanId }));
  }, [dispatch, artisanId]);
  return (
    <div className="">
      <div className="col-3" style={{ marginLeft: "35%" }}>
        {loading ? (
          <Loading />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <ul className="">
            <li>
              <div className="produit start">
                <div className="p-1">
                  <h1>
                    {client.artisan.nom}
                    <span> {client.artisan.prenom}</span>
                  </h1>
                </div>
              </div>
            </li>

            <li>
              <strong>Description :</strong>
              {client.artisan.description}
            </li>
          </ul>
        )}
      </div>
      <div className="">
        {loadingProduits ? (
          <Loading />
        ) : errorProduits ? (
          <span>{errorProduits}</span>
        ) : (
          <>
            {produits.length === 0 && <span>Aucun produit trouvé</span>}
            <div className="row">
              {produits.map((produit) => (
                <div className="col-3">
                  <Produit key={produit._id} produit={produit}></Produit>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArtisanPage;