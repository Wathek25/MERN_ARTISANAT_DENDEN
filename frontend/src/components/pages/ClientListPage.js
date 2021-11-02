import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, listClients } from "../../JS/actions/clientActions";
import Loading from "../Loading";
import { CLIENT_DETAILS_RESET } from "../../JS/constants/clientConstants";

const ClientListPage = (props) => {
  const clientList = useSelector((state) => state.clientList);
  const { loading, error, clients } = clientList;

  const clientDelete = useSelector((state) => state.clientDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = clientDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listClients());
    dispatch({
      type: CLIENT_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (client) => {
    if (window.confirm("Vous etes sur?")) {
      dispatch(deleteClient(client._id));
    }
  };

  return (
    <div>
      <h1>List de toutes Les Clients</h1>
      {loadingDelete && <Loading />}
      {errorDelete && <span>Erreur de supprision du client {errorDelete}</span>}
      {successDelete && <span>Client supprimé avec succès</span>}
      {loading ? (
        <Loading />
      ) : error ? (
        <span>loading clients error {error}</span>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>PRENOM</th>
              <th>NOM</th>
              <th>EMAIL</th>
              <th>ARTISAN</th>
              <th>ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td>{client._id}</td>
                <td>{client.prenom}</td>
                <td>{client.nom}</td>
                <td>{client.email}</td>
                <td>{client.isArtisan ? "OUI" : "NON"}</td>
                <td>{client.isAdmin ? "OUI" : "NON"}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/client/${client._id}/modifier`)
                    }
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(client)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientListPage;
