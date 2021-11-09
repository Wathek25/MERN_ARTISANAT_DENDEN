import React, { useEffect, useState } from "react";
import Produit from "../Produit";
import axios from "axios";

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
      <div className="block-home-description">
        <div className="home-description-content">
          <h3>
            VillageArtDenden
            <p>
              VillageArtDenden est une plateforme numérique destinée à la
              promotion du métier d’artisan et des produits du terroir Tunisien.
              C’est un lieu de rencontre des créateurs qui a pour ambition de
              devenir le marketplace incontournable de promotion des artisans de
              tous horizons et des «Petits Métiers» en voie de déperdition.
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
