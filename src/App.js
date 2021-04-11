import React from "react";
import Navbar from "./pages/navebar/Navebar.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./pages/footer/Footer.jsx";
import "./App.css";
import "./Responsive.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};
export default App;
