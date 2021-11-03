import React, { useEffect, useState } from "react";
import Produit from "../Produit";

import { useDispatch, useSelector } from "react-redux";
import { listProduits } from "../../JS/actions/produitActions";
import Loading from "../Loading";
import Error from "../Error";

const Acceuil = () => {
  const dispatch = useDispatch();
  const produitList = useSelector((state) => state.produitList);
  const { loading, error, produits } = produitList;

  useEffect(() => {
    dispatch(listProduits({}));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="produit center">
          {produits.map((produit) => (
            <Produit key={produit._id} produit={produit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Acceuil;
