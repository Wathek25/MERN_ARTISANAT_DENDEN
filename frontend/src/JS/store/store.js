import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  clientConnectReducer,
  clientDeleteReducer,
  clientDetailsReducer,
  clientListReducer,
  clientRegisterReducer,
  clientUpdateProfileReducer,
  clientUpdateReducer,
} from "../reducers/clientReducer";

import {
  commandeCreateReducer,
  commanderDeleteReducer,
  commanderListReducer,
  commanderMineListReducer,
  commanderPayReducer,
  commandeViewReducer,
} from "../reducers/commanderReducer";

import { panierReducer } from "../reducers/panierReducers";
import {
  produitListReducer,
  produitDetailsReducer,
  produitCreateReducer,
  produitUpdateReducer,
  produitDeleteReducer,
  produitCategorieListReducer,
  produitReviewCreateReducer,
  produitReviewDeleteReducer,
} from "../reducers/produitReducers";

const initialState = {
  clientConnecter: {
    clientInfo: localStorage.getItem("clientInfo")
      ? JSON.parse(localStorage.getItem("clientInfo"))
      : null,
  },

  panier: {
    panierProduits: localStorage.getItem("panierProduits")
      ? JSON.parse(localStorage.getItem("panierProduits"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paiement: "PayPal",
  },
};

const reducer = combineReducers({
  produitList: produitListReducer,
  produitDetails: produitDetailsReducer,
  panier: panierReducer,
  clientConnecter: clientConnectReducer,
  clientRegister: clientRegisterReducer,
  clientDetails: clientDetailsReducer,
  clientUpdateProfile: clientUpdateProfileReducer,
  commandeCreate: commandeCreateReducer,
  commandeDetails: commandeViewReducer,
  commanderPay: commanderPayReducer,
  commanderMineList: commanderMineListReducer,
  produitCreate: produitCreateReducer,
  produitUpdate: produitUpdateReducer,
  produitDelete: produitDeleteReducer,
  commanderList: commanderListReducer,
  commanderDelete: commanderDeleteReducer,
  clientList: clientListReducer,
  clientDelete: clientDeleteReducer,
  clientUpdate: clientUpdateReducer,
  produitCategorieList: produitCategorieListReducer,
  produitReviewCreate: produitReviewCreateReducer,
  produitReviewDelete: produitReviewDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
