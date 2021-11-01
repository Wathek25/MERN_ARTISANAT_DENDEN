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
    // window.location.href = "/";
  };

  useEffect(() => {
    if (clientInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, clientInfo]);

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h3>S'identifier</h3>
        {loading && <Loading />}
        {error && (
          <h6 style={{ color: "red" }}>Email ou mot de passe invalide</h6>
        )}

        <div className="">
          <label>Votre Email</label>
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
          <label>Votre mot de passe</label>
          <input
            type="password"
            className=""
            placeholder="Entrez votre mot de passe"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className=" btn btn-primary btn-block">
          Connecter
        </button>

        <p className="forgot-password text-right">
          Nouveau utilisateur?{" "}
          <Link to={`/register?redirect=${redirect}`}>
            Créez votre compte ici
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ConnectPage;
