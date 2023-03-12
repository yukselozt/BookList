import React from "react";
import Header from "./Header";
import data from "../Data.json";
import { useNavigate } from "react-router-dom";

export default function BestSeller() {
  const Navigate = useNavigate();
  return (
    <div className="bestseller-container">
      <Header />
      <div className="bestseller">
        <div className="bestseller-title">
          <img onClick={() => Navigate("/home")} alt="" src="Vector.png" />
          <label>Best Seller</label>
        </div>
        <div className="bestseller-booklist">
          {data.map((val, key) => {
            return (
              <div
                onClick={() => {
                  Navigate("/book-details", { state: { book: val } });
                }}
                key={key}
                className="bestseller-book"
              >
                <div className="bestseller-book-img">
                  <img alt="" src={val.url} />
                </div>
                <div className="bestseller-book-info">
                  <label>{val.name}</label>
                  <div>
                    <label>{val.writer}</label>
                    <label>{val.price}</label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
