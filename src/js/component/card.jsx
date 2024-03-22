import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Card = () => {
	return (
        <div class="container mb-5">
		    <div class="card-group">
                <div class="card">
                    <img src="https://img.freepik.com/foto-gratis/entrenador-futbol-ensenando-sus-alumnos_23-2149707974.jpg?w=1380&t=st=1711144650~exp=1711145250~hmac=ec5a58e2cec2add07d8c20faf11ca9289f3bb940868c03a20fdbd332f4c6d159" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer text-center">
                        <button type="button" class="btn btn-primary">Leer Mas!</button>
                    </div>
                </div>
        <div class="card border ml-2">
            <img src="https://img.freepik.com/fotos-premium/retrato-joven-sonriente-parado-al-aire-libre_1048944-29813224.jpg?t=st=1711137075~exp=1711137675~hmac=7bae20cda62313cf742091bb49bc2a9009eb4e69374d8860421affc65a7476c2" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-warning">Leer Mas!</button>
            </div>
        </div>
  <div class="card border ml-2">
    <img src="https://img.freepik.com/fotos-premium/longitud-total-hombre-jugando-brazos-levantados_1048944-29793390.jpg?t=st=1711137075~exp=1711137675~hmac=ab5d0d1c482e55394f57b821669caafeeeabbb0bbb478988abda72ee8fda57e6" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer text-center">
    <button type="button" class="btn btn-info">Leer Mas!</button>
    </div>
  </div>
  <div class="card border ml-2">
    <img src="https://img.freepik.com/fotos-premium/escenas-autenticas-hombres-talla-grande-jugando-al-baloncesto_23-2150961227.jpg?t=st=1711137075~exp=1711137675~hmac=6cd6841eb53267b6837979a31a5467eb0c1be40cc9862d5fd35e1b0e1c272bde&w=826" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer text-center">
    <button type="button" class="btn btn-danger">Leer Mas!</button>
    </div>
  </div>
</div>
</div>
	);
};


export default Card;