import React from 'react'
import "./Singular.css";
import { useState } from 'react';
import caseEnding from './data';
import Foward from './Foward';
import Case from './Case';
import Categories from './Categories';
import EndingSec from './EndingSec';


function Singular() {
  const [menuItems, setMenuItems] = useState(caseEnding);
  const [categories, setCategories] = useState(caseEnding[0]);

  const getCases = (cases) => {
    
    const caseItems = caseEnding.filter((item) => item.cases !== 'nom');

    setMenuItems(caseItems);
  };
  const caseOnly = () => {
    return caseEnding.case;
  }
  const shouldAddEventHandler = true;

  return (
    <main className=''>
      <section className="menu section ">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

                <button
            type="button"
            className="filter-btn"
  
            onClick={shouldAddEventHandler ? <Case items={menuItems}/> : ''}
          >
            Case
          </button>
                <button
            type="button"
            className="filter-btn"
  
            onClick={() => getCases()}
          >
            Ending
          </button>
        <Case items={menuItems}/>
        <EndingSec items={menuItems}/>
      </section>
    </main>
  );
}

export default Singular