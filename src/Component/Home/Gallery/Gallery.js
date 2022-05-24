import React from "react";
import imageOne from "../../../img/g-1.jpg";
import imageTwo from "../../../img/g-2.jpg";
import imageThree from "../../../img/g-3.jpg";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-wrapper">
        <div>
          <img className="imagesize" src={imageOne} alt=""></img>
        </div>
        <div>
          <img className="imagesize" src={imageTwo} alt=""></img>
        </div>
        <div>
          <img className="imagesize" src={imageThree} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
