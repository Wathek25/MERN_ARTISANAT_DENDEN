import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Produit = (props) => {
  console.log(props);
  const { produit } = props;
  return (
    <div>
      <div className="card" key={produit._id} style={{ textAlign: "center" }}>
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
          <div>
            {/* <div className="prix">{produit.prix} Dt</div> */}
            <div>
              <span>Vendu par</span>
              <br />
              <Link
                to={`/artisan/${produit.artisan._id}`}
                style={{
                  textDecoration: "none",
                  color: "#e5890a",
                  textAlign: "center",
                }}
              >
                {produit.artisan.artisan.prenom}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
