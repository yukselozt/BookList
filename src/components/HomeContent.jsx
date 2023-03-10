import React, { useState } from "react";

export default function HomeContent() {
  const imageURL = ["homecontent.png", "homecontent.png", "homecontent.png"];

  const label = "25% discount  \nall Paulo Coelho\nbooks!";

  const [carouselImage, setCarouselImage] = useState(0);

  const carouselStyle = {
    background: `url(${imageURL[carouselImage]}) center no-repeat`,
  };
  return (
    <div className="homeContent">
      <div className="homeContentCarousel" style={carouselStyle}>
        <label>{label}</label>
      </div>

      <div className="spanContainer">
        <div className="spanContainerInner">
          <span
            style={
              carouselImage === 0
                ? { backgroundColor: "rgba(239, 107, 74, 1)" }
                : { backgroundColor: " rgba(9, 9, 55, 0.6)" }
            }
            onClick={() => {
              setCarouselImage(0);
            }}
          ></span>
          <span
            style={
              carouselImage === 1
                ? { backgroundColor: "rgba(239, 107, 74, 1)" }
                : { backgroundColor: " rgba(9, 9, 55, 0.6)" }
            }
            onClick={() => {
              setCarouselImage(1);
            }}
          ></span>
          <span
            style={
              carouselImage === 2
                ? { backgroundColor: "rgba(239, 107, 74, 1)" }
                : { backgroundColor: " rgba(9, 9, 55, 0.6)" }
            }
            onClick={() => {
              setCarouselImage(2);
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}
