import React from "react";

//include images into your bundle

//create your first component
const GaleriaImagenes = ( {imagenes} ) => {
    return (
        <div className="container">   
            <div class="row">
                {imagenes.map((imagen, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card">
                            <img src={imagen.url} class="card-img-top" alt=""/> 
                            <div className="card-body">
                                <h5 className="card-title">{imagen.titulo}</h5>
                                <p className="card-text">{imagen.descripcion}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button type="button" className="btn btn-primary">Leer Mas!</button>
                            </div>
                        </div>
                    </div>
                )
                )
                }   
            </div>
        </div>
        )
     }

export default GaleriaImagenes;