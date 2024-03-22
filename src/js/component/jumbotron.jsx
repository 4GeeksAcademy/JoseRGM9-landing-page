import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div class="container">
			<div class="jumbotron jumbotron-fluid mt-3">
  				<div class="container">
    				<h1 class="display-4">A Warm Welcome</h1>
    				<p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
					<a class="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
  				</div>
			</div>
		</div>
	);
};

export default Jumbotron;