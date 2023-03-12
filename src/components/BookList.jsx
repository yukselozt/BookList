import React from "react";
import data from "../Data.json";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const Navigate = useNavigate();
  return (
    <div className="homeContentBookList">
      <div className="home-content-booklist-title">
        <label>Best Seller</label>
        <label onClick={() => Navigate("/bestseller")}>View All</label>
      </div>
      <div className="home-content-booklist">
        {window.innerWidth < 1400
          ? data.slice(0, 3).map((val, key) => {
              return (
                <div className="home-content-booklist-inner" key={key}>
                  <div className="booklist-img">
                    <img alt="" src={val.url} />
                  </div>

                  <div className="booklist-text">
                    <div className="booklist-text-writer">
                      <label>{val.name}</label>
                      <label>{val.writer}</label>
                    </div>
                    <div className="booklist-text-price">
                      <label>{val.price}</label>
                    </div>
                  </div>
                </div>
              );
            })
          : data.slice(0, 4).map((val, key) => {
              return (
                <div className="home-content-booklist-inner" key={key}>
                  <div className="booklist-img">
                    <img alt="" src={val.url} />
                  </div>

                  <div className="booklist-text">
                    <div className="booklist-text-writer">
                      <label>{val.name}</label>
                      <label>{val.writer}</label>
                    </div>
                    <div className="booklist-text-price">
                      <label>{val.price}</label>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
