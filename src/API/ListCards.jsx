import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "../API/consultaapi.css"

const ListCards = ({ imagen, titulo, descripcion, ruta }) => {

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card text-center " style={{ width: "18rem" }}>
        <div className="overflow2">
        <img src={imagen} className="card-imagen-top" alt={titulo} title={titulo} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
         
          <div className="grid">
            <button
              className="details"
              type="button"
              onClick={() => {
                setShow(!show);
              }}
            >
              Details {show ? "-" : "+"}
            </button>

            {show ? (
              <div style={{ color: "black" }}>{descripcion}</div>
            ) : (
              <div style={{ color: "blue" }}>
                <p>
                  <a
                    href={ruta ? ruta : "#!"}
                    target="_blank"
                    className="btn btn-outline-secondary border-1"
                    rel="noreferrer"
                  >
                    Ir a MARVEL's
                    
                    </a>
                </p>
              </div>
            )}
          </div>
         
        </div>
      </div>
    </>
  );
};

ListCards.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  descripcion: PropTypes.string,
  ruta:PropTypes.string,
};


export default ListCards;
