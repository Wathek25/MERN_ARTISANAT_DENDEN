import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parser from "html-react-parser";

export default function Blog() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/blogs/" + id);
        setBlog(data.rslt[0]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="container" style={{ width: "75%", margin: "auto" }}>
        {blog ? (
          <div className="container">
            <img
              src={"http://localhost:5000/" + blog.imageURL}
              alt="thum"
              width="100%"
              height="550px"
            />
            <div className="mt-4">
              <h1>{blog.titre}</h1>
              <p>{parser(blog.contenu)}</p>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
