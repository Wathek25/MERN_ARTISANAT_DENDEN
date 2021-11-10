import React, { useEffect, useState } from "react";
// import "./css/connectPage.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connecter } from "../../JS/actions/clientActions";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";

const ConnectPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo, loading, error } = clientConnecter;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(connecter(email, password));
  };

  useEffect(() => {
    if (clientInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, clientInfo]);

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3>S'identifier</h3>
      {loading && <Loading />}
      {error && (
        <h6 style={{ color: "red" }}>Email ou mot de passe incorrect</h6>
      )}

      <div className="">
        <label>
          <strong>Votre Email</strong>
        </label>
        <input
          type="email"
          className=""
          placeholder="Entrez votre email"
          id="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="">
        <label>
          <strong>Votre mot de passe</strong>
        </label>
        <input
          type="password"
          className=""
          placeholder="Entrez votre mot de passe"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" style={{ backgroundColor: "#e5890a" }}>
          Connecter
        </button>
      </div>

      <span className="forgot-password text-right">
        Nouveau utilisateur?
        <Link to={`/register?redirect=${redirect}`}>
          Créez votre compte ici
        </Link>
      </span>
    </form>
  );
};

export default ConnectPage;
