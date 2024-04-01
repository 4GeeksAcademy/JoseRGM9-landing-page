import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import GaleriaImagenes from "./GaleriaImagenes.jsx";


//create your first component
const imagenes = [
  {
    url: "https://img.freepik.com/foto-gratis/entrenador-futbol-ensenando-sus-alumnos_23-2149707974.jpg?w=1380&t=st=1711991966~exp=1711992566~hmac=c1118de8c8d7949369295724e816225cbca0a6c86f153caf6baa1c12b4e48573",
    titulo: "titulo imagen 1",
    descripcion: "descripcion imagen 1",
  },
  {
    url: "https://img.freepik.com/fotos-premium/retrato-joven-sonriente-parado-al-aire-libre_1048944-29813224.jpg?w=1380",
    titulo: "titulo imagen 2",
    descripcion: "descripcion imagen 2",
  },
  {
    url: "https://img.freepik.com/fotos-premium/longitud-total-hombre-jugando-brazos-levantados_1048944-29793390.jpg?w=1380",
    titulo: "titulo imagen 3",
    descripcion: "descripcion imagen 3"
  },
  {
    url: "https://img.freepik.com/fotos-premium/escenas-autenticas-hombres-talla-grande-jugando-al-baloncesto_23-2150961227.jpg?w=1380",
    titulo: "titulo imagen 4",
    descripcion: "descripcion imagen 4"
  }
]



function Card() {
  return (
    <div>
      <GaleriaImagenes imagenes={imagenes} />
    </div>
  );
}

export default Card;