import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          setPost(res.data);
          setImageArray(res.data.images);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);
  //   useEffect(() => {
  //     axios
  //       .get("https://dummyjson.com/products/" + id)
  //       .then((res) => {
  //         setPost(res.data);
  //         setImageArray(res.data.images);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="datial-container">
      <div className="datial-title">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
      <div className="image-container">
        {imageArray.map((image, index) => (
          <img src={image} alt="display" key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
