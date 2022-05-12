import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
export default App;
