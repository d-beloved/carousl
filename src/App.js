import React, { useRef } from "react";
import Card from "./Card";
import "./App.css";

const CardArray = [
  {name: 'first card'},
  {name: 'second card'},
  {name: 'third card'},
  {name: 'fourth card'},
  {name: 'fifth card'},
  {name: 'sixth card'},
  {name: 'seventh card'}
]

function App() {
  let carouslRef = useRef(null);

  const prev = () => {
    carouslRef &&  carouslRef.current && carouslRef.current.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.5
    })
  }

  const next = () => {
    carouslRef &&  carouslRef.current && carouslRef.current.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.5
    })
  }

  return (
    <div className="App">
      <span>
        <button onClick={prev}>
          <img src={leftarrCircle} alt="left button" />
        </button>
        <button onClick={next}>
          <img src={rightarrCircle} alt="right button" />
        </button>
      </span>
      <div>
        <main ref={carouslRef}>
          {CardArray.map((carousel, i) => (
            <Card {...carousel} key={i} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
