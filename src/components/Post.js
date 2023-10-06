import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";

function Post({ blog }) {
  return (
    <Container fluid>
      <Row>
        <div className="mess">
          <Link to={`/read/${blog.id}`}>
            <img src={blog.thumbnail} alt="thumbnail" />
            <h2>{blog.title}</h2>
            <h5>${blog.price}</h5>
            <p>
              Brand {blog.brand} <br />
              Category {blog.category}
            </p>
            <p>{blog.description}</p>
          </Link>
        </div>
      </Row>
      {/* <div className="footer">
        <Footer />
      </div> */}
    </Container>
  );
}

export default Post;
