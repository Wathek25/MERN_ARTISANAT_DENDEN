import axios from "axios";
import {
  PRODUIT_LIST_FAIL,
  PRODUIT_LIST_REQUEST,
  PRODUIT_LIST_SUCCESS,
  PRODUIT_DETAILS_FAIL,
  PRODUIT_DETAILS_REQUEST,
  PRODUIT_DETAILS_SUCCESS,
  PRODUIT_CREATE_FAIL,
  PRODUIT_CREATE_REQUEST,
  PRODUIT_CREATE_SUCCESS,
  PRODUIT_UPDATE_REQUEST,
  PRODUIT_UPDATE_SUCCESS,
  PRODUIT_UPDATE_FAIL,
  PRODUIT_DELETE_REQUEST,
  PRODUIT_DELETE_FAIL,
  PRODUIT_DELETE_SUCCESS,
} from "../constants/produitConstants";

export const listProduits = () => async (dispatch) => {
  dispatch({
    type: PRODUIT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/produits");
    dispatch({ type: PRODUIT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUIT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduit = (produitId) => async (dispatch) => {
  dispatch({ type: PRODUIT_DETAILS_REQUEST, payload: produitId });
  try {
    const { data } = await axios.get(`/api/produits/${produitId}`);

    dispatch({ type: PRODUIT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUIT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//creating new produit
export const createProduit = () => async (dispatch, getState) => {
  dispatch({ type: PRODUIT_CREATE_REQUEST });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      "/api/produits",
      {},
      {
        headers: { Authorization: `Bearer ${clientInfo.token}` },
      }
    );
    dispatch({
      type: PRODUIT_CREATE_SUCCESS,
      payload: data.produit,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUIT_CREATE_FAIL, payload: message });
  }
};

//updating produit (modifier)
export const updateProduit = (produit) => async (dispatch, getState) => {
  dispatch({ type: PRODUIT_UPDATE_REQUEST, payload: produit });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/produits/${produit._id}`, produit, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: PRODUIT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUIT_UPDATE_FAIL, error: message });
  }
};

//Supprimer produits
export const deleteProduit = (produitId) => async (dispatch, getState) => {
  dispatch({ type: PRODUIT_DELETE_REQUEST, payload: produitId });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = axios.delete(`/api/produits/${produitId}`, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: PRODUIT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUIT_DELETE_FAIL, payload: message });
  }
};
