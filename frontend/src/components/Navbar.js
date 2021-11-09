import React, { useEffect } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, NavLink, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../JS/actions/clientActions";
import { useHistory } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavbarC = () => {
  const panier = useSelector((state) => state.panier);
  const { panierProduit } = panier;

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;

  // const panierProduits = localStorage.getItem("panierProduits")
  //   ? JSON.parse(localStorage.getItem("panierProduits"))
  //   : null;

  // const clientInfo = localStorage.getItem("clientInfo")
  //   ? JSON.parse(localStorage.getItem("clientInfo"))
  //   : null;

  const dispatch = useDispatch();
  // const history = useHistory();

  const signoutHandler = () => {
    dispatch(signout());
    // history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }}
            >
              VillageArt<span style={{ color: "green" }}>Denden</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }}
                >
                  Acceuil
                </Link>
              </Nav.Link>
              <NavDropdown title="Nos artisans" id="basic-nav-dropdown">
                <NavDropdown.Item href="/peinture">
                  Peinture sur le bois
                </NavDropdown.Item>
                <NavDropdown.Item href="/tappie">Tapisserie</NavDropdown.Item>
                <NavDropdown.Item href="/cuivre">
                  Cuivre martelé
                </NavDropdown.Item>
                <NavDropdown.Item href="/fibre">
                  Fibres végétales
                </NavDropdown.Item>
                <NavDropdown.Item href="/mosaique">Mosaïque</NavDropdown.Item>
                <NavDropdown.Item href="/verre">Verre Soufflé</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Catégories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Artisans 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Artisans 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Artisans 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link>
                <Link
                  to="/events"
                  style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }}
                >
                  Événements
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }}
                >
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/panier"
                  style={{ textDecoration: "none", color: "rgba(0,0,0,.55)" }}
                >
                  Panier
                </Link>
              </Nav.Link>
              <NavDropdown title="Connecter" id="basic-nav-dropdown">
                {clientInfo ? (
                  <div>
                    {clientInfo.prenom}
                    <NavDropdown.Item>
                      <Link
                        to="/profile"
                        style={{
                          textDecoration: "none",
                          color: "rgba(0,0,0,.55)",
                        }}
                      >
                        Modifier profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/commanderhistorique"
                        style={{
                          textDecoration: "none",
                          color: "rgba(0,0,0,.55)",
                        }}
                      >
                        Historique des commandes
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/"
                        onClick={signoutHandler}
                        style={{
                          textDecoration: "none",
                          color: "rgba(0,0,0,.55)",
                        }}
                      >
                        Se déconnecter
                      </Link>
                    </NavDropdown.Item>
                  </div>
                ) : (
                  <Link
                    to="/connecter"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0,0,0,.55)",
                    }}
                  >
                    Se connecter
                  </Link>
                )}
              </NavDropdown>

              {clientInfo && clientInfo.isArtisan && (
                <NavDropdown title="Artisan" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/produitlist/artisan"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      List des Produits
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/commanderlist/artisan"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      List des Commandes
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {clientInfo && clientInfo.isAdmin && (
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/produitlist"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      List des Produits
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/commanderlist"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      List des Commandes
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/clientlist"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      List des Clients
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/createblog"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      Ajouter Blog
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/createevenement"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0,0,0,.55)",
                      }}
                    >
                      Ajouter Événements
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarC;
