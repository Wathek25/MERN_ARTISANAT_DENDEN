import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function CreateEvent() {
  const { isAdmin } = JSON.parse(localStorage.getItem("clientInfo"));
  const history = useHistory();
  if (!isAdmin) {
    history.push("/");
  }
  const creerEvent = async (e) => {
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
      const { data } = await axios.post("/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });
      if (data.contenu) {
        history.push("/event/" + data.rslt._id);
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
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="contenu">Contenu:</label>
        <textarea
          className="form-control"
          id="contenu"
          rows="3"
          placeholder="Enter votre Contenu"
        ></textarea>
      </div>
      <div className="form-grou mt-3">
        <label htmlFor="image">Télecharger une image</label>
        <input
          type="file"
          className="form-controlt"
          id="image"
          formEncType="multipart/form-data"
        />
      </div>
      <div>
        <button
          type="submit"
          style={{ backgroundColor: "#e5890a" }}
          onClick={creerEvent}
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
