import axios from "axios";
import { PANIER_VIDE } from "../constants/panierConstants";
import {
  COMMANDER_FAIL,
  COMMANDER_REQUEST,
  COMMANDER_SUCCESS,
  COMMANDER_VIEW_SUCCESS,
  COMMANDER_VIEW_FAIL,
  COMMANDER_VIEW_REQUEST,
  COMMANDER_PAY_REQUEST,
  COMMANDER_PAY_SUCCESS,
  COMMANDER_PAY_FAIL,
  COMMANDER_PAY_RESET,
  COMMANDER_MINE_LIST_REQUEST,
  COMMANDER_MINE_LIST_FAIL,
  COMMANDER_MINE_LIST_SUCCESS,
  COMMANDER_LIST_REQUEST,
  COMMANDER_LIST_SUCCESS,
  COMMANDER_LIST_FAIL,
  COMMANDER_DELETE_REQUEST,
  COMMANDER_DELETE_SUCCESS,
  COMMANDER_DELETE_FAIL,
} from "../constants/commanderConstants";

//creating order (commande) action
export const createCommande = (commander) => async (dispatch, getState) => {
  dispatch({ type: COMMANDER_REQUEST, payload: commander });
  try {
    const {
      clientConnecter: { clientInfo },
    } = getState();
    const { data } = await axios.post("/api/commanders", commander, {
      headers: {
        Authorization: `Bearer ${clientInfo.token}`,
      },
    });
    console.log(data);
    dispatch({ type: COMMANDER_SUCCESS, payload: data.commander });
    dispatch({ type: PANIER_VIDE });
    localStorage.removeItem("panierProduits");
  } catch (error) {
    dispatch({
      type: COMMANDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//order (commande) infos
export const detailsCommande = (commandeId) => async (dispatch, getState) => {
  dispatch({ type: COMMANDER_VIEW_REQUEST, payload: commandeId });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.get(`/api/commanders/${commandeId}`, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: COMMANDER_VIEW_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDER_VIEW_FAIL, payload: message });
  }
};

//payment
export const payCommander =
  (commander, paiementResult) => async (dispatch, getState) => {
    dispatch({
      type: COMMANDER_PAY_REQUEST,
      payload: { commander, paiementResult },
    });
    const {
      clientConnecter: { clientInfo },
    } = getState();
    try {
      const { data } = axios.put(
        `/api/commanders/${commander._id}/pay`,
        paiementResult,
        {
          headers: { Authorization: `Bearer ${clientInfo.token}` },
        }
      );
      dispatch({ type: COMMANDER_PAY_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMMANDER_PAY_FAIL, payload: message });
    }
  };

//getting all orders history for each client
export const listCommanderMine = () => async (dispatch, getState) => {
  dispatch({ type: COMMANDER_MINE_LIST_REQUEST });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.get("/api/commanders/mine", {
      headers: {
        Authorization: `Bearer ${clientInfo.token}`,
      },
    });
    dispatch({ type: COMMANDER_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDER_MINE_LIST_FAIL, payload: message });
  }
};

//getting all list of orders for the admin
export const listCommanders =
  ({ artisan = "" }) =>
  async (dispatch, getState) => {
    dispatch({ type: COMMANDER_LIST_REQUEST });
    const {
      clientConnecter: { clientInfo },
    } = getState();
    try {
      const { data } = await axios.get(`/api/commanders?artisan=${artisan}`, {
        headers: { Authorization: `Bearer ${clientInfo.token}` },
      });

      dispatch({ type: COMMANDER_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: COMMANDER_LIST_FAIL, payload: message });
    }
  };

//deleting orders
export const deleteCommander = (commanderId) => async (dispatch, getState) => {
  dispatch({ type: COMMANDER_DELETE_REQUEST, payload: commanderId });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = axios.delete(`/api/commanders/${commanderId}`, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: COMMANDER_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDER_DELETE_FAIL, payload: message });
  }
};
