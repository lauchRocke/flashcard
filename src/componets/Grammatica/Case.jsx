import React from 'react'

function Case({ items, filterItems }) {

  return (
    <div className="btn-container">
      {items.map((menuItem) => {
        const { id, ending, cases } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{cases}</h4>
              </header>
              {/* <p className='item-text'>{ending}</p> */}
            </div>
          </article>
        );
      })}
  </div>
  )
}

export default Case