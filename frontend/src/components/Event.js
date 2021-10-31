import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parser from "html-react-parser";

export default function Event() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/events/" + id);
        setEvent(data.rslt[0]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container" style={{ width: "75%", margin: "auto" }}>
        {event ? (
          <div className="container">
            <img
              src={"http://localhost:5000/" + event.imageURL}
              alt="thum"
              width="100%"
              height="550px"
            />
            <div className="mt-4">
              <h1>{event.titre}</h1>
              <p>{parser(event.contenu)}</p>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
