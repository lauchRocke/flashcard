import React from 'react';
import './Ending.css';
import { Outlet, Link } from 'react-router-dom';
import list from '../flashcard/data'

function FlashCard({ data: { cases, ending, form } }) {
  return (
    <section className="card-container">
      <div className="card">
        <div className="card-style card-front">{cases}</div>

        <div className="card-style card-back"> Ending :{ending}, Form {form}</div>
      </div>
    </section>
  );
}

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

function Ending() {
  return (
    <div>
      <h3>
        <Link to="/grammatica/singular">Singular</Link>
      </h3>
      <FlashCardsHolder
        list={list}
      />
      <table>
        <thead>
          <tr>
            <th>Ending</th>
            <th>Case</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-us</td>
            <td>Nomative</td>
            <td>Subject</td>
          </tr>
          <tr>
            <td>-i</td>
            <td>Gentive</td>
            <td>Posstion</td>
          </tr>
          <tr>
            <td>-o</td>
            <td>Dative</td>
            <td>Indirect Object</td>
          </tr>
          <tr>
            <td>-um</td>
            <td>Accutive</td>
            <td>Direct Object</td>
          </tr>
          <tr>
            <td>-o</td>
            <td>Adlative</td>
            <td>by/with</td>
          </tr>

          <tr>
            <td>-e</td>
            <td>Vocative</td>
            <td>(O)</td>
          </tr>
        </tbody>
      </table>
      <h3>Plural</h3>

      <table>
        <thead>
          <tr>
            <th>Ending</th>
            <th>Case</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-i</td>
            <td>Nomative</td>
            <td>Subject</td>
          </tr>
          <tr>
            <td>-um</td>
            <td>Gentive</td>
            <td>Posstion</td>
          </tr>
          <tr>
            <td>-is</td>
            <td>Dative</td>
            <td>Indirect Object</td>
          </tr>
          <tr>
            <td>-os</td>
            <td>Accutive</td>
            <td>Direct Object</td>
          </tr>
          <tr>
            <td>-is</td>
            <td>Adlative</td>
            <td>adverbal</td>
          </tr>

          <tr>
            <td>-i</td>
            <td>Vocative</td>
            <td>(O) direct address</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ending;
