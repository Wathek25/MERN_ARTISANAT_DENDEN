import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Blogs() {
  const { isAdmin } = localStorage.getItem("clientInfo")
    ? JSON.parse(localStorage.getItem("clientInfo"))
    : { isAdmin: false };
  const { token } = localStorage.getItem("clientInfo")
    ? JSON.parse(localStorage.getItem("clientInfo"))
    : { token: null };

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/blogs");
        setBlogs(data.rslt);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [blogs.length]);

  const deletBlog = async (blogId) => {
    try {
      const { data } = await axios.delete("/api/blogs/" + blogId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(data);
      setBlogs([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {typeof blogs === "object" && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="col-md-4">
              <div className="card" style={{ width: "22rem" }}>
                <img
                  className="card-img-top"
                  src={
                    "https://villageartdenden.herokuapp.com/" + blog.imageURL
                  }
                  alt="thumb"
                  height="200px"
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.titre}</h5>
                  <p className="card-text">
                    {blog.contenu.slice(0, 50) + "..."}
                  </p>
                  <NavLink to={`/blog/${blog._id}`}>Détail du blog</NavLink>
                  <br />
                  {isAdmin && (
                    <button
                      class="btn btn-danger"
                      onClick={() => deletBlog(blog._id)}
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
            <h1>{blogs}</h1>
          </div>
        )}
      </div>
    </div>
  );
}
