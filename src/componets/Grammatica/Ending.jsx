import React, { useState } from 'react';
import './Ending.css';
import { Outlet, Link } from 'react-router-dom';
import list from '../Flashcard/data';
import Modal from '../Modal/Modal';
import plural from '../Flashcard/plural';
import FlashCardsHolder from '../Flashcard/FlashCardsHolder';
import styled from 'styled-components';

function Ending() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid black;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
  `;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Singular Flashcard</Button>
      <br />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <FlashCardsHolder list={list} />
      </Modal>
      <br />
      <h3>
        <Link to="/grammatica/singular">Singular</Link>
      </h3>
      <br />

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
      <Button onClick={() => setIsOpen(true)}>Plural Flashcard</Button>
      <br />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <FlashCardsHolder list={plural} />
      </Modal>
      <br />
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
