import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Loading from "./Loading";

export default function CreateBlog() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  // const [loadingUpload, setLoadingUpload] = useState(false);
  // const [errorUpload, setErrorUpload] = useState("");

  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const { isAdmin } = JSON.parse(localStorage.getItem("clientInfo"));
  if (!isAdmin) {
    history.push("/");
  }

  useEffect(() => {
    id &&
      (async () => {
        try {
          const { data } = await axios.get("/api/blogs/" + id);
          setBlog(data.rslt[0]);
        } catch (error) {
          console.log(error);
        }
      })();
  }, []);

  const handleChange = (e) => {
    setBlog(e.target.value);
  };

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("image", file);
  //   setLoadingUpload(true);
  //   try {
  //     const { data } = await axios.post("/api/uploads", bodyFormData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     setImage(data);
  //     setLoadingUpload(false);
  //   } catch (error) {
  //     setErrorUpload(error.message);
  //     setLoadingUpload(false);
  //   }
  // };
  const creerModifierBlog = async (e) => {
    e.preventDefault();

    const titre = document.getElementById("title").value;
    const contenu = document.getElementById("contenu").value;
    const image = document.getElementById("image").value;

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("contenu", contenu);
    formData.append("image", image);

    const { token } = JSON.parse(localStorage.getItem("clientInfo"));

    try {
      const { data } = id
        ? await axios.patch("/api/blogs/" + id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          })
        : await axios.post("/api/blogs", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          });

      if (data.contenu) {
        history.push("/blog/" + data.rslt._id);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="form">
      <div className="form-group mb-3">
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter votre titre"
          value={blog && blog.titre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="contenu">Contenu:</label>
        <textarea
          className="form-control"
          id="contenu"
          rows="3"
          placeholder="Enter votre Contenu"
          value={blog && blog.contenu}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-grou mt-3">
        <label htmlFor="image">URL de l'image :</label>
        <input
          id="image"
          type="text"
          placeholder="Image du produit"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      {/* <div>
        <label htmlFor="imageFile">Fichier image</label>
        <input
          type="file"
          id="imageFile"
          label="Choose Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        {loadingUpload && <Loading />}
        {errorUpload && <span>{errorUpload}</span>}
      </div> */}
      <div>
        <button
          type="submit"
          style={{ backgroundColor: "#e5890a" }}
          onClick={creerModifierBlog}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
