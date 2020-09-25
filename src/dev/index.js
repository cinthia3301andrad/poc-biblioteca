import React from "react";
import ReactDOM from "react-dom";
import ReactPocTest from "../lib";

const App = () => {

  return (
    <>
      <ReactPocTest
        placeholder="cinthia"
      />
     
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));