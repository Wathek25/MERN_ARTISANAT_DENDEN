import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function CreateBlog() {
  const { id } = useParams();

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

  const creerModifierBlog = async (e) => {
    e.preventDefault();
    const titre = document.getElementById("title").value;
    const contenu = document.getElementById("contenu").value;
    const image = document.getElementById("image").files[0];

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
      console.log(data);
      if (data.contenu) {
        history.push("/blog/" + data.rslt._id);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="mt-5 mb-5">
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
        <label htmlFor="image">Télecharger un image</label>
        <input
          type="file"
          className="form-controlt"
          id="image"
          formEncType="multipart/form-data"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={creerModifierBlog}
      >
        Submit
      </button>
    </form>
  );
}
