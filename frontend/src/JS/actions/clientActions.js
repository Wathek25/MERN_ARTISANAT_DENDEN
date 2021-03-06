import axios from "axios";
import {
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_CONNECT_FAIL,
  CLIENT_CONNECT_REQUEST,
  CLIENT_CONNECT_SUCCESS,
  CLIENT_SIGNOUT,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_SUCCESS,
  CLIENT_DELETE_FAIL,
  CLIENT_DETAILS_FAIL,
  CLIENT_DETAILS_REQUEST,
  CLIENT_DETAILS_SUCCESS,
  CLIENT_UPDATE_PROFILE_FAIL,
  CLIENT_UPDATE_PROFILE_REQUEST,
  CLIENT_UPDATE_PROFILE_SUCCESS,
  CLIENT_UPDATE_SUCCESS,
  CLIENT_UPDATE_FAIL,
} from "../../JS/constants/clientConstants";

//register action
export const register = (nom, prenom, email, password) => async (dispatch) => {
  dispatch({ type: CLIENT_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/clients/register", {
      nom,
      prenom,
      email,
      password,
    });
    dispatch({ type: CLIENT_REGISTER_SUCCESS, payload: data });
    dispatch({ type: CLIENT_CONNECT_SUCCESS, payload: data });
    localStorage.setItem("clientInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CLIENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//connect (signin) action
export const connecter = (email, password) => async (dispatch) => {
  dispatch({ type: CLIENT_CONNECT_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/clients/connecter", {
      email,
      password,
    });
    dispatch({ type: CLIENT_CONNECT_SUCCESS, payload: data });
    localStorage.setItem("clientInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CLIENT_CONNECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//client details (info)
export const detailsClient = (clientId) => async (dispatch, getState) => {
  dispatch({ type: CLIENT_DETAILS_REQUEST, payload: clientId });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.get(`/api/clients/${clientId}`, {});
    dispatch({ type: CLIENT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CLIENT_DETAILS_FAIL, payload: message });
  }
};

//updating profiles by clients
export const updateClientProfile = (client) => async (dispatch, getState) => {
  dispatch({ type: CLIENT_UPDATE_PROFILE_REQUEST, payload: client });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/clients/profile`, client, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: CLIENT_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: CLIENT_CONNECT_SUCCESS, payload: data });
    localStorage.setItem("clientInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CLIENT_UPDATE_PROFILE_FAIL, payload: message });
  }
};

//updating profiles by admin
export const updateClient = (client) => async (dispatch, getState) => {
  dispatch({ type: CLIENT_UPDATE_PROFILE_REQUEST, payload: client });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/clients/${client._id}`, client, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: CLIENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CLIENT_UPDATE_FAIL, payload: message });
  }
};

//displaying all clients for the admin
export const listClients = () => async (dispatch, getState) => {
  dispatch({ type: CLIENT_LIST_REQUEST });
  try {
    const {
      clientConnecter: { clientInfo },
    } = getState();
    const { data } = await axios.get("/api/clients", {
      headers: {
        Authorization: `Bearer ${clientInfo.token}`,
      },
    });
    dispatch({ type: CLIENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CLIENT_LIST_FAIL, payload: message });
  }
};

//deleting clients
export const deleteClient = (clientId) => async (dispatch, getState) => {
  dispatch({ type: CLIENT_DELETE_REQUEST, payload: clientId });
  const {
    clientConnecter: { clientInfo },
  } = getState();
  try {
    const { data } = await axios.delete(`/api/clients/${clientId}`, {
      headers: { Authorization: `Bearer ${clientInfo.token}` },
    });
    dispatch({ type: CLIENT_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CLIENT_DELETE_FAIL, payload: message });
  }
};

//signout action
export const signout = () => (dispatch) => {
  localStorage.removeItem("clientInfo");
  localStorage.removeItem("panierProduits");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: CLIENT_SIGNOUT });
  document.location.href = "/connecter";
};
