import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Events() {
  const { isAdmin } = localStorage.getItem("clientInfo")
    ? JSON.parse(localStorage.getItem("clientInfo"))
    : { isAdmin: false };

  const { token } = localStorage.getItem("clientInfo")
    ? JSON.parse(localStorage.getItem("clientInfo"))
    : { token: null };

  const [events, setEvents] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/events");
        setEvents(data.rslt);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [events.length]);

  const deletEvent = async (eventId) => {
    try {
      const { data } = await axios.delete("/api/events/" + eventId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(data);
      setEvents([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {typeof events === "object" && events.length > 0 ? (
          events.map((event) => (
            <div className="col-md-4">
              <div className="card" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={"http://localhost:5000/" + event.imageURL}
                  alt="thumb"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{event.titre}</h5>
                  {/* <p className="card-text">
                    {blog.contenu.slice(0, 50) + "..."}
                  </p> */}
                  <NavLink
                    to={`/event/${event._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    Détail de l'évenement
                  </NavLink>
                  <br />
                  {isAdmin && (
                    <button
                      class="btn btn-warning"
                      onClick={() => deletEvent(event._id)}
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container">
            <h1>{events}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
