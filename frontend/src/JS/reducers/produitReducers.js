import {
  PRODUIT_LIST_FAIL,
  PRODUIT_LIST_REQUEST,
  PRODUIT_LIST_SUCCESS,
  PRODUIT_DETAILS_FAIL,
  PRODUIT_DETAILS_REQUEST,
  PRODUIT_DETAILS_SUCCESS,
  PRODUIT_CREATE_REQUEST,
  PRODUIT_CREATE_SUCCESS,
  PRODUIT_CREATE_FAIL,
  PRODUIT_CREATE_RESET,
  PRODUIT_UPDATE_REQUEST,
  PRODUIT_UPDATE_SUCCESS,
  PRODUIT_UPDATE_FAIL,
  PRODUIT_UPDATE_RESET,
  PRODUIT_DELETE_REQUEST,
  PRODUIT_DELETE_SUCCESS,
  PRODUIT_DELETE_FAIL,
  PRODUIT_DELETE_RESET,
  PRODUIT_CATEGORIE_LIST_SUCCESS,
  PRODUIT_CATEGORIE_LIST_REQUEST,
  PRODUIT_CATEGORIE_LIST_FAIL,
  PRODUIT_REVIEW_CREATE_REQUEST,
  PRODUIT_REVIEW_CREATE_SUCCESS,
  PRODUIT_REVIEW_CREATE_FAIL,
  PRODUIT_REVIEW_CREATE_RESET,
} from "../constants/produitConstants";

export const produitListReducer = (
  state = { loading: true, produits: [] },
  action
) => {
  switch (action.type) {
    case PRODUIT_LIST_REQUEST:
      return { loading: true };
    case PRODUIT_LIST_SUCCESS:
      return { loading: false, produits: action.payload };
    case PRODUIT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const produitReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUIT_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case PRODUIT_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case PRODUIT_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUIT_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const produitCategorieListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case PRODUIT_CATEGORIE_LIST_REQUEST:
      return { loading: true };
    case PRODUIT_CATEGORIE_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRODUIT_CATEGORIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const produitDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRODUIT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUIT_DETAILS_SUCCESS:
      return { loading: false, produit: action.payload };
    case PRODUIT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const produitCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUIT_CREATE_REQUEST:
      return { loading: true };
    case PRODUIT_CREATE_SUCCESS:
      return { loading: false, success: true, produit: action.payload };
    case PRODUIT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUIT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const produitUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUIT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUIT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRODUIT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUIT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const produitDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUIT_DELETE_REQUEST:
      return { loading: true };
    case PRODUIT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUIT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUIT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
