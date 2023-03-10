import React from "react";
import HomeContent from "./HomeContent";
import Header from "./Header";
import BookList from "./BookList";

export default function HomePage() {
  return (
    <div className="home">
      <Header />
      <HomeContent />
      <BookList />
    </div>
  );
}
