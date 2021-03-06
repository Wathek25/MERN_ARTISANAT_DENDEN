import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../JS/actions/clientActions";
import SearchBox from "./SearchBox";
import { listProduitCategories } from "../JS/actions/produitActions";
import Loading from "./Loading";

const NavbarC = () => {
  const panier = useSelector((state) => state.panier);
  const { panierProduit } = panier;

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;

  const dispatch = useDispatch();
  // const history = useHistory();

  const signoutHandler = () => {
    dispatch(signout());
    // history.push("/");
    window.location.reload();
  };

  const produitCategorieList = useSelector(
    (state) => state.produitCategorieList
  );
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = produitCategorieList;
  useEffect(() => {
    dispatch(listProduitCategories());
  }, [dispatch]);

  return (
    <div>
      <Navbar
        expand="lg"
        // style={{ backgroundColor: "#65403b", fontSize: "68%" }}
        style={{ backgroundColor: "#65403b" }}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <strong>VillageArt</strong>
              <strong style={{ color: "#e5890a", fontWeight: "bold" }}>
                Denden
              </strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <i className="fa fa-fw fa-home"></i>Acceuil
                </Link>
              </Nav.Link>

              <NavDropdown title="Nos m??tiers" id="basic-nav-dropdown">
                <NavDropdown.Item href="/peinture">
                  Peinture sur le bois
                </NavDropdown.Item>
                <NavDropdown.Item href="/tappie">Tapisserie</NavDropdown.Item>
                <NavDropdown.Item href="/cuivre">
                  Cuivre martel??
                </NavDropdown.Item>
                <NavDropdown.Item href="/fibre">
                  Fibres v??g??tales
                </NavDropdown.Item>
                <NavDropdown.Item href="/mosaique">Mosa??que</NavDropdown.Item>
                <NavDropdown.Item href="/verre">Verre Souffl??</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cat??gories" id="basic-nav-dropdown">
                <Nav.Link>
                  {loadingCategories ? (
                    <Loading />
                  ) : errorCategories ? (
                    <span>{errorCategories}</span>
                  ) : (
                    categories.map((c) => (
                      <NavDropdown.Item key={c}>
                        <Link
                          to={`/search/categorie/${c}`}
                          style={{
                            textDecoration: "none",
                            color: "rgba(0,0,0,.55)",
                          }}
                        >
                          {c}
                        </Link>
                      </NavDropdown.Item>
                    ))
                  )}
                </Nav.Link>

                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <Nav.Link>
                <Link
                  to="/events"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ??v??nements
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Blogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/panier"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <i className="fa fa-fw fa-shopping-cart"></i>
                  Panier
                </Link>
              </Nav.Link>

              <NavDropdown
                // title="Connecter"
                title={
                  <span>
                    <i className="fa fa-fw fa-user"></i>
                    {clientInfo ? clientInfo.prenom : "Connecter"}
                  </span>
                }
                id="basic-nav-dropdown"
                style={{ color: "white" }}
              >
                {clientInfo ? (
                  <div>
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
                        Se d??connecter
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
                      Ajouter ??v??nements
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
