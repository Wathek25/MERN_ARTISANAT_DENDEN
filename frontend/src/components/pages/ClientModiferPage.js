import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsClient, updateClient } from "../../JS/actions/clientActions";
import Loading from "../Loading";
import { CLIENT_UPDATE_RESET } from "../../JS/constants/clientConstants";

const ClientModiferPage = (props) => {
  const clientId = props.match.params.id;
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [isArtisan, setIsArtisan] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const clientDetails = useSelector((state) => state.clientDetails);
  const { loading, error, client } = clientDetails;

  const clientUpdate = useSelector((state) => state.clientUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = clientUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CLIENT_UPDATE_RESET });
      props.history.push("/clientlist");
    }
    if (!client) {
      dispatch(detailsClient(clientId));
    } else {
      setNom(client.nom);
      setPrenom(client.prenom);
      setEmail(client.email);
      setIsArtisan(client.isArtisan);
      setIsAdmin(client.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, client, clientId]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateClient({ _id: clientId, nom, prenom, email, isArtisan, isAdmin })
    );
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Modifier le client {prenom}</h1>
          {loadingUpdate && <Loading />}
          {errorUpdate && (
            <span>erreur lord de modification du client {errorUpdate}</span>
          )}
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <>
            <div>
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                type="text"
                placeholder="Votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="prenom">Prenom</label>
              <input
                id="prenom"
                type="text"
                placeholder="Votre prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="isArtisan">Artisan</label>
              <input
                id="isArtisan"
                type="checkbox"
                checked={isArtisan}
                onChange={(e) => setIsArtisan(e.target.checked)}
              ></input>
            </div>
            <div>
              <label htmlFor="isAdmin">Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div>
              <button type="submit" style={{ backgroundColor: "#e5890a" }}>
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ClientModiferPage;
