//import react into the bundle
import React from "react";

//import your own components
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//render your react application
function Home() {
  return (
    <div>
      <Navbar />
      <div class="container mb-5">
        <Jumbotron />
        <Card />
      </div>
        <Footer />
    </div>   
  );
}
  export default Home;
