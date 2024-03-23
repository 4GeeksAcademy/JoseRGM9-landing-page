import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron mt-2">
			<img src="https://img.freepik.com/foto-gratis/herramientas-deportivas_53876-138077.jpg?t=st=1711216357~exp=1711219957~hmac=103e0e6ddd01f4133760c7a402427cc087a5de69150d54d88ad587cc3f82256f&w=1380" class="img-fluid" alt="Imagen en el jumbotron"/>
  				<h1 className="display-4 text-center mt-2">Deportes</h1>
  				<hr className="my-4"/>
  				<a className="btn btn-primary btn-lg d-flex justify-content-center" href="#" role="button">Leer Mas!</a>
			</div>
		</div>
	);
};

export default Jumbotron;