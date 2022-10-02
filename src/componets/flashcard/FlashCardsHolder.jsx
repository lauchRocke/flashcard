
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import FlashCard from './Flashcard';

function FlashCardsHolder({ list }) {
    return (
      <div style={{ display: 'flex' }}>
        ok
        {list.map((item) => (
          <FlashCard key = {item.id} data={item} />
        ))}
      </div>
    );
  }
  
  export default FlashCardsHolder;