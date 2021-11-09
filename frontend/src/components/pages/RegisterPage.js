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
      <form className="form" onSubmit={submitHandler}>
        <h3>S'inscrire</h3>
        {loading && <Loading />}
        {error && (
          <h6 style={{ color: "red" }}>erreur lors de création du compte</h6>
        )}

        <div className="form-group">
          <label>
            <strong>Votre Prenom</strong>
          </label>
          <input
            type="prenom"
            placeholder="Entrez votre prenom"
            id="prenom"
            required
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Votre Nom</strong>
          </label>
          <input
            type="nom"
            placeholder="Entrez votre nom"
            id="nom"
            required
            onChange={(e) => setNom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Votre Email</strong>
          </label>
          <input
            type="email"
            placeholder="Entrez votre email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Votre mot de passe</strong>
          </label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Confirmer Votre mot de passe</strong>
          </label>
          <input
            type="password"
            placeholder="Confirmer Votre mot de passe"
            id="ConfirmPassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" style={{ backgroundColor: "#e5890a" }}>
            Créer votre compte
          </button>
        </div>
        <span className="forgot-password text-right">
          Vous avez déjà un compte?
          <Link to={`/connecter?redirect=${redirect}`}>Cliquez ici</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterPage;
