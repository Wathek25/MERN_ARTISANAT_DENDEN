import React, { useEffect, useState } from "react";
import Produit from "../Produit";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { listProduits } from "../../JS/actions/produitActions";
import Loading from "../Loading";
import Error from "../Error";
import { useHistory, NavLink } from "react-router-dom";

const Acceuil = () => {
  const history = useHistory();
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const produitList = useSelector((state) => state.produitList);
  const { loading, error, produits } = produitList;

  useEffect(() => {
    dispatch(listProduits({}));
    (async () => {
      try {
        const { data } = await axios.get("/api/blogs");
        setBlogs(data.rslt);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Derniers
          <span style={{ color: "rgb(229, 137, 10)" }}> produits</span>
        </h1>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <div className="produit center">
            {produits
              .reverse()
              .slice(0, 4)
              .map((produit) => (
                <Produit key={produit._id} produit={produit} />
              ))}
          </div>
        )}
      </div>
      <div>
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Derniers
          <span style={{ color: "rgb(229, 137, 10)" }}> blogs</span>
        </h1>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <div className="produit center">
            {typeof blogs === "object" && blogs.length > 0 ? (
              blogs.slice(0, 3).map((blog) => (
                <div className="col-md-3">
                  <div className="card" style={{ width: "22rem" }}>
                    <img
                      className="card-img-top"
                      src={blog.imageURL}
                      alt="thumb"
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {blog.titre.slice(0, 45)}...
                      </h5>
                      <NavLink
                        to={`/blog/${blog._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        Détail du blog
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="container">
                <h1>{blogs}</h1>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="block-home-description">
        <div className="home-description-content">
          <h3>
            VillageArtDenden
            <p>
              VillageArtDenden est une plateforme numérique destinée à la
              promotion du métier d’artisan et des produits du village artisanal
              denden.
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
