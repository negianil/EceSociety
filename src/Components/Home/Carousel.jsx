//jshint esversion:6
import React from "react";

function Carousel(){
  return (
    <div id="homepic" className="carousel slide" data-ride="carousel" data-interval="2500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="homeimg" src="images/random/home1.jpg" alt="img" />
        </div>
        <div className="carousel-item">
          <img className="homeimg" src="images/random/home2.jpg" alt="img" />
        </div>
        <div className="carousel-item">
          <img className="homeimg" src="images/random/home3.jpg" alt="img" />
        </div>
        <div className="carousel-item">
          <img className="homeimg" src="images/random/home4.jpg" alt="img" />
        </div>
      </div>
      <a className="carousel-control-prev ctr" href="#homepic" role="button" data-slide="prev">
        &lt;
        </a>
        <a className="carousel-control-next ctr" href="#homepic" role="button" data-slide="next">
         &gt;
      </a>
      <br />
    </div>
  )
}

export default Carousel;
