import {
  PANIER_AJOUTER_PRODUIT,
  PANIER_SUPPRIMER_PRODUIT,
  PANIER_SAVE_SHIPPING_ADDRESS,
  PANIER_SAVE_PAIEMENT,
  PANIER_VIDE,
} from "../constants/panierConstants";

export const panierReducer = (state = { panierProduits: [] }, action) => {
  switch (action.type) {
    case PANIER_AJOUTER_PRODUIT:
      const produit = action.payload;
      const existProduit = state.panierProduits.find(
        (el) => el.produit === produit.produit
      );
      if (existProduit) {
        return {
          ...state,
          panierProduits: state.panierProduits.map((el) =>
            el.produit === existProduit.produit ? produit : el
          ),
        };
      } else {
        return { ...state, panierProduits: [...state.panierProduits, produit] };
      }

    case PANIER_SUPPRIMER_PRODUIT:
      return {
        ...state,
        panierProduits: state.panierProduits.filter(
          (el) => el.produit !== action.payload
        ),
      };

    case PANIER_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };

    case PANIER_SAVE_PAIEMENT:
      return { ...state, paiment: action.payload };

    case PANIER_VIDE:
      return { ...state, panierProduits: [] };
    default:
      return state;
  }
};
