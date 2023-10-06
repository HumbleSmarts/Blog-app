import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../components/styles.css";
// import Footer from "./Footer";
// import { Container } from "react-bootstrap";

function Posts() {
  // Define a state variable to store the input data
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setBlogs(res.data.products);
        setRecords(res.data.products);
      })
      .catch((error) => console.log(error.response.data));
  }, []);

  const getInputData = (event) => {
    setBlogs(
      records.filter((r) =>
        r.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <section>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          onChange={getInputData}
        ></input>
      </div>
      <div className="post-container">
        <h3>Blogs</h3> <br />
      </div>

      <div className="blog">
        {blogs.map((blog, index) => (
          <Post blog={blog} key={index} />
        ))}
      </div>

      {/* <div className="footer">
        <Footer />
      </div> */}
    </section>
  );
}

export default Posts;
