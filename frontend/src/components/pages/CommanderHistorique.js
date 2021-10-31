import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCommanderMine } from "../../JS/actions/commanderActions";
import Loading from "../Loading";

const CommanderHistorique = (props) => {
  const commanderMineList = useSelector((state) => state.commanderMineList);
  const { loading, error, commanders } = commanderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCommanderMine());
  }, [dispatch]);

  return (
    <div>
      <h1>Historique des commandes</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>error {error}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAYÉ</th>
              <th>LIVRÉ</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {commanders.map((commander) => (
              <tr key={commander._id}>
                <td>{commander._id}</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CommanderHistorique;
