import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function Create() {
  return (
    <div className="form-container">
      <form>
        <input type="text" name="title" placeholder="Write Title"></input>
        <br />
        <input type="text" name="disc" placeholder="Discription"></input>
        <br />
        <input type="file" name="disc" placeholder="Discription"></input>
        <br />
        <button className="new-blog-btn"> Submit </button>
      </form>
      <Footer />
    </div>
  );
}

export default Create;
