import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Produit from "../Produit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProduits } from "../../JS/actions/produitActions";
import Loading from "../Loading";
import Error from "../Error";
import { useHistory, NavLink } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";

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
      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        <strong>Nos</strong>
        <strong style={{ color: "rgb(229, 137, 10)" }}> Catégories</strong>
      </h1>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        currentSlide={0}
        totalSlides={5}
        visibleSlides={4}
      >
        <Slider>
          <Slide>
            <Link to={`/search/categorie/Bois`}>
              <img
                className="catImg"
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1651387504/Acceuil_Produits/Nos%20categroies%20slider/NBois_bydpko.jpg"
                alt="img"
              />
            </Link>
          </Slide>
          <Slide>
            <Link to={`/search/categorie/Céramique`}>
              <img
                className="catImg"
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1651387504/Acceuil_Produits/Nos%20categroies%20slider/NCeramique_z5weob.jpg"
                alt="img"
              />
            </Link>
          </Slide>
          <Slide>
            <Link to={`/search/categorie/Mosaique`}>
              <img
                className="catImg"
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1651387506/Acceuil_Produits/Nos%20categroies%20slider/NMosaique_icubai.jpg"
                alt="img"
              />
            </Link>
          </Slide>
          <Slide>
            <Link to={`/search/categorie/Tapis`}>
              <img
                className="catImg"
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1651387506/Acceuil_Produits/Nos%20categroies%20slider/NTapis_asdvt8.jpg"
                alt="img"
              />
            </Link>
          </Slide>
          <Slide>
            <Link to={`/search/categorie/Verre%20soufflé`}>
              <img
                className="catImg"
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1651387505/Acceuil_Produits/Nos%20categroies%20slider/NVerre_illlub.jpg"
                alt="img"
              />
            </Link>
          </Slide>
        </Slider>
        <div>
          <ButtonBack className="back">
            <i
              class="fa fa-chevron-left"
              style={{ fontSize: "40px", color: "#e5890a" }}
            ></i>
          </ButtonBack>
          <ButtonNext class="next">
            <i
              class="fa fa-chevron-right"
              style={{
                fontSize: "36px",
                color: "black",
              }}
            ></i>
          </ButtonNext>
        </div>
      </CarouselProvider>

      <div>
        <h1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <strong>Derniers</strong>
          <strong style={{ color: "rgb(229, 137, 10)" }}> produits</strong>
        </h1>

        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <div className="produit center">
            {/* <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              currentSlide={0}
              totalSlides={8}
              visibleSlides={4}
            > */}
            {/* <Slider> */}
            {produits

              .slice(0, 8)
              .reverse()
              .map((produit) => (
                // <Slide>
                <Produit key={produit._id} produit={produit} />
                // </Slide>
              ))}
            {/* </Slider> */}
            <div>
              {/* <ButtonBack className="back">
                  <i
                    class="fa fa-chevron-left"
                    style={{ fontSize: "40px", color: "#e5890a" }}
                  ></i>
                </ButtonBack>
                <ButtonNext class="next">
                  <i
                    class="fa fa-chevron-right"
                    style={{
                      fontSize: "36px",
                      color: "black",
                    }}
                  ></i>
                </ButtonNext> */}
            </div>
            {/* </CarouselProsvider> */}
          </div>
        )}
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          <strong>Derniers</strong>
          <strong style={{ color: "rgb(229, 137, 10)" }}> blogs</strong>
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
                        style={{ textDecoration: "none", color: "#e5890a" }}
                      >
                        Lire la suite...
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
      {/* <div className="block-home-description">
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
      </div> */}
      <div className="villagedesc">
        <img
          width="100%"
          margin="auto"
          height="350px"
          src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1637176118/villdesc/villagedesc_rsui0i.png"
          alt="villagedesc"
        />
      </div>
    </div>
  );
};

export default Acceuil;
