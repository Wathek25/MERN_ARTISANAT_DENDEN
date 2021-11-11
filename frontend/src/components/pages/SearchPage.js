import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProduits } from "../../JS/actions/produitActions";
import Loading from "../Loading";
import Produit from "../Produit";

const SearchPage = (props) => {
  const { nom = "all", categorie = "all" } = useParams();
  const dispatch = useDispatch();
  const produitList = useSelector((state) => state.produitList);
  const { loading, error, produits } = produitList;
  const produitCategorieList = useSelector(
    (state) => state.produitCategorieList
  );
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = produitCategorieList;

  useEffect(() => {
    dispatch(
      listProduits({
        nom: nom !== "all" ? nom : "",
        categorie: categorie !== "all" ? categorie : "",
      })
    );
  }, [categorie, dispatch, nom]);

  const getFilterUrl = (filter) => {
    const filterCategorie = filter.categorie || categorie;
    const filterNom = filter.nom || nom;
    return `/search/categorie/${filterCategorie}/nom/${filterNom}`;
  };
  return (
    <div>
      <div className="">
        {loading ? (
          <Loading />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <div>{produits.length} Résultat</div>
        )}
      </div>
      <div className="">
        <div className="">
          {loading ? (
            <Loading />
          ) : error ? (
            <span>{error}</span>
          ) : (
            <>
              {produits.length === 0 && <span>Aucun produit trouvé</span>}
              <div className="produit">
                {produits.map((produit) => (
                  <div className="mycol3">
                    <Produit key={produit._id} produit={produit}></Produit>
                  </div>
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
