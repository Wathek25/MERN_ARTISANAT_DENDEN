import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProduits } from "../../JS/actions/produitActions";
import Loading from "../Loading";
import Produit from "../Produit";

const SearchPage = (props) => {
  const { nom = "all" } = useParams();
  const dispatch = useDispatch();
  const produitList = useSelector((state) => state.produitList);
  const { loading, error, produits } = produitList;
  useEffect(() => {
    dispatch(listProduits({ nom: nom !== "all" ? nom : "" }));
  }, [dispatch, nom]);
  return (
    <div>
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <div>{produits.length} Résultat</div>
        )}
      </div>
      <div className="row top">
        <div className="col-1">
          <h3>Department</h3>
          <ul>
            <li>Catégorie</li>
          </ul>
        </div>
        <div className="col-3">
          {loading ? (
            <Loading />
          ) : error ? (
            <span>{error}</span>
          ) : (
            <>
              {produits.length === 0 && <span>Aucun produit trouvé</span>}
              <div className="row center">
                {produits.map((produit) => (
                  <Produit key={produit._id} produit={produit}></Produit>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
