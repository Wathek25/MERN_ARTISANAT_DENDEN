import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduit, updateProduit } from "../../JS/actions/produitActions";
import { PRODUIT_UPDATE_RESET } from "../../JS/constants/produitConstants";
import Loading from "../Loading";
import axios from "axios";

const ProduitModifierPage = (props) => {
  const produitId = props.match.params.id;
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const [categorie, setCategorie] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const produitDetails = useSelector((state) => state.produitDetails);
  const { loading, error, produit } = produitDetails;

  const produitUpdate = useSelector((state) => state.produitUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = produitUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/produitlist");
    }
    if (!produit || produit._id !== produitId || successUpdate) {
      dispatch({ type: PRODUIT_UPDATE_RESET });
      dispatch(detailsProduit(produitId));
    } else {
      setNom(produit.nom);
      setPrix(produit.prix);
      setImage(produit.image);
      setCategorie(produit.categorie);
      setStock(produit.stock);
      setDescription(produit.description);
    }
  }, [produit, dispatch, produitId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduit({
        _id: produitId,
        nom,
        prix,
        image,
        categorie,
        stock,
        description,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${clientInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Modifier Produit {produitId}</h1>
        </div>
        {loadingUpdate && <Loading />}
        {errorUpdate && <span>{errorUpdate}</span>}
        {loading ? (
          <Loading />
        ) : error ? (
          <span>{error}</span>
        ) : (
          <>
            <div>
              <label htmlFor="nom">Nom</label>
              <input
                id="nom"
                type="text"
                placeholder="Nom du produit"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="prix">Prix</label>
              <input
                id="prix"
                type="text"
                placeholder="Prix du produit"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Image du produit"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Fichier image</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <Loading />}
              {errorUpload && <span>{errorUpload}</span>}
            </div>
            <div>
              <label htmlFor="categorie">Categorie</label>
              <input
                id="category"
                type="text"
                placeholder="Categorie du produit"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                id="stock"
                type="text"
                placeholder="stock ="
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Description du produit"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button style={{ backgroundColor: "green" }} type="submit">
                Envoyer
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ProduitModifierPage;
