import {
  COMMANDER_FAIL,
  COMMANDER_REQUEST,
  COMMANDER_SUCCESS,
  COMMANDER_VIEW_SUCCESS,
  COMMANDER_VIEW_FAIL,
  COMMANDER_VIEW_REQUEST,
  COMMANDER_RESET,
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
  COMMANDER_DELETE_RESET,
} from "../constants/commanderConstants";

export const commandeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMANDER_REQUEST:
      return { loading: true };
    case COMMANDER_SUCCESS:
      return { loading: false, success: true, commander: action.payload };
    case COMMANDER_FAIL:
      return { loading: false, error: action.payload };
    case COMMANDER_RESET:
      return {};
    default:
      return state;
  }
};

export const commandeViewReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case COMMANDER_VIEW_REQUEST:
      return { loading: true };
    case COMMANDER_VIEW_SUCCESS:
      return { loading: false, commander: action.payload };
    case COMMANDER_VIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const commanderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMANDER_PAY_REQUEST:
      return { loading: true };
    case COMMANDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case COMMANDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case COMMANDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

//historique des commande
export const commanderMineListReducer = (
  state = { commanders: [] },
  action
) => {
  switch (action.type) {
    case COMMANDER_MINE_LIST_REQUEST:
      return { loading: true };
    case COMMANDER_MINE_LIST_SUCCESS:
      return { loading: false, commanders: action.payload };
    case COMMANDER_MINE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//to display all the new list of orders for the admin
export const commanderListReducer = (state = { commanders: [] }, action) => {
  switch (action.type) {
    case COMMANDER_LIST_REQUEST:
      return { loading: true };
    case COMMANDER_LIST_SUCCESS:
      return { loading: false, commanders: action.payload };
    case COMMANDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//deleting orders
export const commanderDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMANDER_DELETE_REQUEST:
      return { loading: true };
    case COMMANDER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case COMMANDER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case COMMANDER_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
