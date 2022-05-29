import React from "react";
import Search from "../components/Search";

const Homepage = () => {
  const auth = "563492ad6f917000010000018e86995e10f54ae5a9add270c0dc5e98";
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="title">This is homepage.</h1>
      <Search />
    </div>
  );
};

export default Homepage;
