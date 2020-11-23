import React, { useRef } from "react";
import Card from "./Card";
import "./App.css";
import leftCircle from "./asset/leftarrow.svg";
import rightCircle from "./asset/rightarrow.svg";

const CardArray = [
  { name: "first card" },
  { name: "second card" },
  { name: "third card" },
  { name: "fourth card" },
  { name: "fifth card" },
  { name: "sixth card" },
  { name: "seventh card" },
];

function App() {
  let carouslRef = useRef(null);

  const prev = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.5,
      });
  };

  const next = () => {
    carouslRef &&
      carouslRef.current &&
      carouslRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
        left:
          carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.5,
      });
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "20rem 0",
      }}
    >
      <button
        style={{
          background: "none",
          border: "none",
          outline: "none",
          padding: "0",
        }}
        onClick={prev}
      >
        <img style={{ width: "10%" }} src={leftCircle} alt="left button" />
      </button>
      <div>
        <main style={{ display: "flex" }} ref={carouslRef}>
          {CardArray.map((carousel, i) => (
            <Card {...carousel} key={i} />
          ))}
        </main>
      </div>
      <button
        style={{
          background: "none",
          border: "none",
          outline: "none",
          padding: "0",
        }}
        onClick={next}
      >
        <img style={{ width: "10%" }} src={rightCircle} alt="right button" />
      </button>
    </div>
  );
}

export default App;
