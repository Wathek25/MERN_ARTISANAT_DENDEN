import {
  CLIENT_REGISTER_FAIL,
  CLIENT_REGISTER_REQUEST,
  CLIENT_REGISTER_SUCCESS,
  CLIENT_CONNECT_FAIL,
  CLIENT_CONNECT_REQUEST,
  CLIENT_CONNECT_SUCCESS,
  CLIENT_SIGNOUT,
  CLIENT_LIST_FAIL,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_DELETE_FAIL,
  CLIENT_DELETE_REQUEST,
  CLIENT_DELETE_RESET,
  CLIENT_DELETE_SUCCESS,
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

export const clientListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CLIENT_LIST_REQUEST:
      return { loading: true };
    case CLIENT_LIST_SUCCESS:
      return { loading: false, clients: action.payload };
    case CLIENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const clientDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_DELETE_REQUEST:
      return { loading: true };
    case CLIENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CLIENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CLIENT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
