import React from "react";
import Header from "./Header";

export default function BookDetails() {
  return (
    <div className="book-details">
      <Header />
      <div className="book-details-content">
        <div className="book-details-title-container">
          <img alt="" src="Vector.png" />
          <label>Book Details</label>
        </div>
        <div className="book-details-details">
          <div className="book-details-image">
            <img alt="" src="./books/dune-büyük.png" />
          </div>
          <div className="book-details-right">
            <div className="book-details-right-title">
              <div className="book-details-writer">
                <label>Dune</label>
                <div className="img">
                  <img alt="" src="heart-button.png" />
                </div>
              </div>
              <label>Frank Herbert</label>
            </div>
            <div className="book-details-right-summary">
              <label>Summary</label>
              <p>
                "Dune is set in the distant future amidst a feudal interstellar
                society in which various noble houses control planetary fiefs.
                It tells the story of young Paul Atreides, whose family accepts
                the stewardship of the planet Arrakis. While the planet is an
                inhospitable and sparsely populated desert wasteland, it is the
                only source of melange, or 'spice', a drug that extends life and
                enhances mental abilities. Melange is also necessary for space
                navigation, which requires a kind of multidimensional awareness
                and foresight that only the drug provides. As melange can only
                be produced on Arrakis, control of the planet is a coveted and
                dangerous undertaking. The story explores the multilayered
                interactions of politics, religion, ecology, technology, and
                human emotion, as the factions of the empire confront each other
                in a struggle for the control of Arrakis and its spice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
