import React, { useRef } from "react";
import Card from "./Card";
import "./App.css";
import leftCircle from "./asset/leftarrow.svg";
import rightCircle from "./asset/img_92071.png";

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
        margin: "20rem 15rem",
      }}
    >
      <button
        style={{
          background: "none",
          border: "none",
          outline: "none",
          padding: "0",
          width: "10%"
        }}
        onClick={prev}
      >
        <img style={{ width: "50%" }} src={leftCircle} alt="left button" />
      </button>
      <div style={{ width: '50vw' }}>
        <main style={{ display: "flex", overflow: 'hidden' }} ref={carouslRef}>
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
          width: "10%"
        }}
        onClick={next}
      >
        <img style={{ width: "50%" }} src={rightCircle} alt="right button" />
      </button>
    </div>
  );
}

export default App;
