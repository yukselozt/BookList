import React from "react";
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookDetails() {
  const location = useLocation();
  const Navigate = useNavigate();
  var book = location.state.book;
  return (
    <div className="book-details">
      <Header />
      <div className="book-details-content">
        <div className="book-details-title-container">
          <img
            onClick={() => Navigate("/bestseller")}
            alt=""
            src="Vector.png"
          />
          <label>Book Details</label>
        </div>
        <div className="book-details-details">
          <div className="book-details-image">
            <img alt="" src="./books/dune-büyük.png" />
          </div>
          <div className="book-details-right">
            <div className="book-details-right-title">
              <div className="book-details-writer">
                <label>{book.name}</label>
                <div className="img">
                  <img alt="" src="heart-button.png" />
                </div>
              </div>
              <label>{book.writer}</label>
            </div>
            <div className="book-details-right-summary">
              <label>Summary</label>
              <p>{book.summary} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="book-details-price">
        <div className="price-container">
          <label>{book.price}</label>
          <label>Buy Now</label>
        </div>
      </div>
    </div>
  );
}
