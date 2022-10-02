import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import FlashCard from './Flashcard';
import './style.css';
const cardWith = 700;

function FlashCardsHolder({ list }) {
  let [left, setLeft] = useState((list.length * cardWith) / 2 - cardWith / 4);

  function handleMove(direction) {
    console.log(direction);
    switch (direction) {
      case 'left':
        setLeft(left + cardWith);
        break;
      case 'right':
        setLeft(left - cardWith);
        break;
    }
  }
  return (
    <>
      {left + cardWith < (list.length * cardWith) / 2 ? (
        <button onClick={() => handleMove('left')} className="left">
          -
        </button>
      ) : null}
      <div
        className="flashCardHolder"
        style={{ transform: `translateX(${left}px)` }}
      >
        {list.map((item) => (
          <FlashCard key={item.id} data={item} />
        ))}
      </div>

      {left - cardWith > -((list.length * cardWith) / 2) ? (
        <button onClick={() => handleMove('right')} className="right">
          +
        </button>
      ) : null}
    </>
  );
}

export default FlashCardsHolder;
