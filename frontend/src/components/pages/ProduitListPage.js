import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduit,
  listProduits,
  deleteProduit,
} from "../../JS/actions/produitActions";
import {
  PRODUIT_CREATE_RESET,
  PRODUIT_DELETE_RESET,
} from "../../JS/constants/produitConstants";
import Loading from "../Loading";

const ProduitListPage = (props) => {
  const artisanMode = props.match.path.indexOf("/artisan") >= 0;
  const produitList = useSelector((state) => state.produitList);
  const { loading, error, produits } = produitList;

  const produitCreate = useSelector((state) => state.produitCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    produit: createdProduit,
  } = produitCreate;

  const produitDelete = useSelector((state) => state.produitDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = produitDelete;

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUIT_CREATE_RESET });
      props.history.push(`/produit/${createdProduit._id}/modifier`);
    }
    if (successDelete) {
      dispatch({ type: PRODUIT_DELETE_RESET });
    }
    dispatch(listProduits({ artisan: artisanMode ? clientInfo._id : "" }));
  }, [
    createdProduit,
    dispatch,
    props.history,
    artisanMode,
    successCreate,
    successDelete,
    clientInfo._id,
  ]);
  const deleteHandler = (produit) => {
    if (window.confirm("Supprimer ce produit ?")) {
      dispatch(deleteProduit(produit._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduit());
  };
  return (
    <div>
      <div className="produit">
        <h1>Toutes Les produit</h1>
        <button
          type="button"
          style={{ backgroundColor: "green" }}
          onClick={createHandler}
        >
          Ajouter produits
        </button>
      </div>
      {loadingDelete && <Loading />}
      {errorDelete && <span>{errorDelete}</span>}
      {loadingCreate && <Loading />}
      {errorCreate && <span>{errorCreate}</span>}
      {loading ? (
        <Loading />
      ) : error ? (
        <span>error {error}</span>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOM</th>
              <th>PRIX</th>
              <th>CATEGORIE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit) => (
              <tr key={produit._id}>
                <td>{produit._id}</td>
                <td>{produit.nom}</td>
                <td>{produit.prix} Dt</td>
                <td>{produit.categorie}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() =>
                      props.history.push(`/produit/${produit._id}/modifier`)
                    }
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(produit)}
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

export default ProduitListPage;
