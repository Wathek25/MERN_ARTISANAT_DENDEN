import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listCommanders,
  deleteCommander,
} from "../../JS/actions/commanderActions";
import { COMMANDER_DELETE_RESET } from "../../JS/constants/commanderConstants";
import Loading from "../Loading";

const CommandeListPage = (props) => {
  const commanderList = useSelector((state) => state.commanderList);
  const { loading, error, commanders } = commanderList;
  const commanderDelete = useSelector((state) => state.commanderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = commanderDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: COMMANDER_DELETE_RESET });
    dispatch(listCommanders());
  }, [dispatch, successDelete]);
  const deleteHandler = (commander) => {
    if (window.confirm("Vous êtes sur de supprimer?")) {
      dispatch(deleteCommander(commander._id));
    }
  };
  return (
    <div>
      <h1>List de toutes les commandes</h1>
      {loadingDelete && <Loading />}
      {errorDelete && <span>erreur de suppression{errorDelete}</span>}
      {loading ? (
        <Loading />
      ) : error ? (
        <span>error: {error}</span>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>CLIENT</th>
              <th>DATE</th>
              <th>TOTALE</th>
              <th>PAYÉ</th>
              <th>LIVRÉ</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {commanders.map((commander) => (
              <tr key={commander._id}>
                <td>{commander._id}</td>
                <td>{commander.shippingAddress.nomPrenom}</td>
                <td>{commander.createdAt.substring(0, 10)}</td>
                <td>{commander.totalPrix.toFixed(2)}</td>
                <td>
                  {commander.isPaid ? commander.paidAt.substring(0, 10) : "Non"}
                </td>
                <td>
                  {commander.isDelivered
                    ? commander.deliveredAt.substring(0, 10)
                    : "Non"}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/commander/${commander._id}`);
                    }}
                  >
                    Détails
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(commander)}
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

export default CommandeListPage;
