import React, { useRef } from "react";
import Card from "./Card";
import "./App.scss";
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
    <div className= 'carousel'>
      <button className='direction' onClick={prev}>
        <img className='arrow' src={leftCircle} alt="left button" />
      </button>
      <div className='card-div'>
        <main className='card-scroll' ref={carouslRef}>
          {CardArray.map((carousel, i) => (
            <Card {...carousel} key={i} />
          ))}
        </main>
      </div>
      <button className='direction' onClick={next}>
        <img className='arrow' src={rightCircle} alt="right button" />
      </button>
    </div>
  );
}

export default App;
