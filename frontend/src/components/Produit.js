import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Produit = (props) => {
  const { produit } = props;
  return (
    <div>
      <div className="card" key={produit._id}>
        <Link
          to={`/produit/${produit._id}`}
          style={{
            textDecoration: "none",
            color: "rgba(0,0,0,.55)",
          }}
        >
          <img className="medium" src={produit.image} alt={produit.nom} />
        </Link>
        <div className="card-body">
          <Link
            to={`/produit/${produit._id}`}
            style={{
              textDecoration: "none",
              color: "rgba(0,0,0,.55)",
            }}
          >
            <h2>{produit.nom}</h2>
          </Link>
          <Rating rating={produit.rating} numReviews={produit.numReviews} />

          <div className="prix">{produit.prix} Dt</div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
