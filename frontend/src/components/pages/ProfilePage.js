import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsClient,
  updateClientProfile,
} from "../../JS/actions/clientActions";
import Loading from "../Loading";
import { CLIENT_UPDATE_PROFILE_RESET } from "../../JS/constants/clientConstants";

const ProfilePage = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;
  const clientDetails = useSelector((state) => state.clientDetails);
  const { loading, error, client } = clientDetails;

  const clientUpdateProfile = useSelector((state) => state.clientUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = clientUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!client) {
      dispatch({ type: CLIENT_UPDATE_PROFILE_RESET });
      dispatch(detailsClient(clientInfo._id));
    } else {
      setNom(client.nom);
      setPrenom(client.prenom);
      setEmail(client.email);
    }
  }, [dispatch, clientInfo._id, client]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mot de passe ne sont pas identiques !");
    } else {
      dispatch(
        updateClientProfile({
          clientId: client._id,
          nom,
          prenom,
          email,
          password,
        })
      );
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Profile Client</h1>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <span style={{ color: "red" }}>
            impossible de charger le profil client {error}
          </span>
        ) : (
          <>
            {loadingUpdate && <Loading />}
            {errorUpdate && (
              <span style={{ color: "red" }}>
                une erreur s'est produite lors de la mise à jour du profil
                {errorUpdate}
              </span>
            )}
            {successUpdate && (
              <span variant="success">Mise à jour du profil réussie</span>
            )}
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
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">confirmez mot de passe</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="confirmez mot de passe"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button style={{ backgroundColor: "green" }} type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfilePage;
