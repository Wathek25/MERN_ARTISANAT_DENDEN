import React, { useEffect, useState } from "react";
// import "./css/connectPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../JS/actions/clientActions";
import Loading from "../Loading";

const RegisterPage = (props) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const clientRegister = useSelector((state) => state.clientRegister);
  const { clientInfo, loading, error } = clientRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Vos mots de passe ne sont pas identiques!");
    } else {
      dispatch(register(prenom, nom, email, password));
    }
  };

  useEffect(() => {
    if (clientInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, clientInfo]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>S'inscrire</h3>
        {loading && <Loading />}
        {error && (
          <h6 style={{ color: "red" }}>erreur lors de création du compte</h6>
        )}

        <div className="form-group">
          <label>Votre Prenom</label>
          <input
            type="prenom"
            className="form-control"
            placeholder="Entrez votre prenom"
            id="prenom"
            required
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Votre Nom</label>
          <input
            type="nom"
            className="form-control"
            placeholder="Entrez votre nom"
            id="nom"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Votre Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Entrez votre email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Votre mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrez votre mot de passe"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirmer Votre mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirmer Votre mot de passe"
            id="ConfirmPassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Créer votre compte
        </button>
        <p className="forgot-password text-right">
          Vous avez déjà un compte?
          <Link to={`/connecter?redirect=${redirect}`}>click ici</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
