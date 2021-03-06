import axios from "axios";
import {
  PANIER_AJOUTER_PRODUIT,
  PANIER_SUPPRIMER_PRODUIT,
  PANIER_SAVE_SHIPPING_ADDRESS,
  PANIER_SAVE_PAIEMENT,
} from "../constants/panierConstants";

//adding new products to cart (panier)
export const ajoutAuPanier =
  (produitId, quantite) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/produits/${produitId}`);
    dispatch({
      type: PANIER_AJOUTER_PRODUIT,
      payload: {
        nom: data.nom,
        image: data.image,
        prix: data.prix,
        stock: data.stock,
        produit: data._id,
        artisan: data.artisan,
        quantite,
      },
    });

    localStorage.setItem(
      "panierProduits",
      JSON.stringify(getState().panier.panierProduits)
    );
  };

//deleting product from the cart (panier)
export const supprimerPanier = (produitId) => (dispatch, getState) => {
  dispatch({ type: PANIER_SUPPRIMER_PRODUIT, payload: produitId });
  localStorage.setItem(
    "panierProduits",
    JSON.stringify(getState().panier.panierProduits)
  );
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: PANIER_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaiement = (data) => (dispatch) => {
  dispatch({ type: PANIER_SAVE_PAIEMENT, payload: data });
};
