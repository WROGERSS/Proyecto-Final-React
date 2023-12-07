import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./viewcard.css";

function ViewCard({ imageSource, title, details, url }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card text-center ">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top dimension-img" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="grid" >   
        
          <button className="details btn btn-info"
            type="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            Details {show ? "-" : "+"}
          </button>
          <hr></hr>

          {show ? (
            <div style={{ color: "black"}}>{details}</div>
          ) : (
            <div style={{ color: "blue" }}>
              <p>
                <a
                  href={url ? url : "#!"}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Ir a {title}
                </a>
              </p>
            </div>
          )}
        
      </div>
    </div>
  );
}

ViewCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  details: PropTypes.string,
};

export default ViewCard;
