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
                VillageArt<span style={{ color: "#e5890a" }}>Denden.</span>
              </h3>
            </div>
            <div className="col-lg-3 py-3 page-footer">
              <h5>Information du contact</h5>
              <p>
                La maison de l'artisanat du denden est sous la tutelle de
                l'Office National de l'Artisanat.
              </p>
              <p>Email: villageartdenden@contact.com</p>
              <p>Phone: (+216)71.610.919</p>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Village d'artisanat denden</h5>
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
              <h5>Newsletter</h5>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer votre Email"
                />
                <button type="submit" className="btn btn-primary btn-sm mt-2">
                  Envoyer
                </button>
              </form>
            </div>
          </div>

          <hr />

          <div className="row mt-4">
            <div className="col-md-6">
              <p>@Copyright 2021.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
