import React from "react";
import Header from "./Header";
import data from "../Data.json";

export default function BestSeller() {
  return (
    <div className="bestseller-container">
      <Header />
      <div className="bestseller">
        <div className="bestseller-title">
          <img alt="" src="Vector.png" />
          <label>Best Seller</label>
        </div>
        <div className="bestseller-booklist">
          {data.map((val, key) => {
            return (
              <div key={key} className="bestseller-book">
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
