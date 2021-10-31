import axios from "axios";
import {
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_CONNECT_FAIL,
  CLIENT_CONNECT_REQUEST,
  CLIENT_CONNECT_SUCCESS,
  CLIENT_SIGNOUT,
} from "../../JS/constants/clientConstants";

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
export const signout = () => (dispatch) => {
  localStorage.removeItem("clientInfo");
  localStorage.removeItem("panierProduits");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: CLIENT_SIGNOUT });
};
