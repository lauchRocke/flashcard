import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

function FlashCard({ data: { cases, ending, form } }) {
    return (
      <section className="card-container">
        <div className="card">
          <div className="card-style card-front">{cases}</div>
  
          <div className="card-style card-back"> Ending:{ending}, Form: {form}</div>
        </div>
      </section>
    );
  }

  export default FlashCard;