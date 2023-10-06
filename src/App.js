import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Detail from "./components/Detail";
import Create from "./components/Create";
// import Posts from "./components/Posts.js";
// import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/read/:id" element={<Detail />}></Route>
        <Route path="/newblog" element={<Create />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

// <Router>
//   <Preloader />
//   <div className="App">
//     <Navbar />

//     <Routes>
//       <Route path="/" element={<Posts />} />
//       <Route path="/read/:id" element={<Detail />} />

//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//     <Footer />
//   </div>
// </Router>
