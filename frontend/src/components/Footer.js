import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 py-3">
              <h3>
                <strong>VillageArt</strong>
                <strong style={{ color: "#e5890a", fontWeight: "bold" }}>
                  Denden.
                </strong>
              </h3>
            </div>
            <div className="col-lg-3 py-3 page-footer">
              <h3>
                <strong style={{ fontWeight: "bold" }}>
                  Information du contact
                </strong>
              </h3>
              <p>
                La maison de l'artisanat du denden est sous la tutelle de
                l'Office National de l'Artisanat.
              </p>
              <p>Email: villageartdenden@contact.com </p>
              <p>Tél: (+216)71.610.919</p>
            </div>
            <div className="col-lg-3 py-3">
              <h3>
                <strong style={{ fontWeight: "bold" }}>
                  Village artisanale denden
                </strong>
              </h3>
              <ul className="footer-menu">
                <li style={{ textDecoration: "none", color: "#e5890a" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#e5890a" }}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    style={{ textDecoration: "none", color: "#e5890a" }}
                  >
                    Evenement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    style={{ textDecoration: "none", color: "#e5890a" }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 py-3">
              <h3>
                <strong style={{ fontWeight: "bold" }}>Newsletter</strong>
              </h3>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer votre Email"
                />
                <button
                  type="submit"
                  className="btn  btn-sm mt-2"
                  style={{ backgroundColor: "#e5890a" }}
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          <hr />

          <div>
            <div>
              <p style={{ textAlign: "center" }}>@Copyright 2021.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
