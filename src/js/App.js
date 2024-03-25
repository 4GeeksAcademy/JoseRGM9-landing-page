//import react into the bundle
import React from "react";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
const App = () =>(
    <div>
      <Home />
        <div class="container">
          <Jumbotron />
          <Card />
        </div>
      <Footer />
    </div>
  );
  export default App;