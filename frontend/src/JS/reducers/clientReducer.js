import {
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_CONNECT_FAIL,
  CLIENT_CONNECT_REQUEST,
  CLIENT_CONNECT_SUCCESS,
  CLIENT_SIGNOUT,
} from "../../JS/constants/clientConstants";

export const clientRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_CONNECT_REQUEST:
      return { loading: true };
    case CLIENT_CONNECT_SUCCESS:
      return { loading: false, clientInfo: action.payload };
    case CLIENT_CONNECT_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const clientConnectReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_REGISTER_REQUEST:
      return { loading: true };
    case CLIENT_REGISTER_SUCCESS:
      return { loading: false, clientInfo: action.payload };
    case CLIENT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_SIGNOUT:
      return {};
    default:
      return state;
  }
};
