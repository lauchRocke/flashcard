import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Indicated() {
  return (
    <div>
        <h3><Link to="/grammatica/singular">Singular</Link></h3>

        <table>
  <thead>
    <tr>
    <th></th>
      <th>Case</th>
      <th>Fuction</th>
      <th>Translation</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>filiorum meorum</td>
       <td>gen</td>
       <td>poss</td>
       <td>of my sons</td>
     </tr>
     <tr>
        <td>filiabus meis</td>
       <td>abl</td>
        <td>adverbial</td>
       <td>by/with/from my daughters</td>

     </tr>
     <tr>
        <td>populi Romani</td>
       <td>gen</td>
       <td>poss</td>
       <td>of the Roman people</td>

     </tr>
     <tr>
        <td>populo Romano</td>
        <td>dat</td>
        <td>indir. obj</td>
        <td>to/with/from the Roman men</td>
     </tr>
     <tr>
        <td>viris Romanis</td>
        <td>abl</td>
        <td>adverebial</td>
        <td>by/with/from the Roman men</td>
     </tr>

     <tr>
        <td>viris magni</td>
        <td>nom</td>
        <td>subj.</td>
        <td>the great men</td>
     </tr>
     <tr>
        <td>amicorum paucorum</td>
        <td>gen</td>
        <td>poss</td>
        <td>of a few friends</td>
     </tr>
     <tr>
        <td>amicis meis</td>
        <td>gen</td>
        <td>indir. obj</td>
        <td>to/for my friends</td>
     </tr>
     <tr>
        <td>amicis Romani</td>
        <td>voc</td>
        <td>dir. address</td>
        <td>Roman friends</td>
     </tr>
     <tr>
        <td>magnum virum</td>
        <td>acc</td>
        <td>dir. obj</td>
        <td>a great man</td>
     </tr>
     <tr>
        <td>puer meus</td>
        <td>nom </td>
        <td>subj</td>
        <td>my boy</td>
     </tr>
     <tr>
        <td>multos agros</td>
        <td>acc</td>
        <td>dir obj</td>
        <td>many friends</td>
     </tr>
     <tr>
        <td>magni numeri(sg)</td>
        <td>gen</td>
        <td>poss</td>
        <td>of the great number</td>
     </tr>
     <tr>
        <td>amice magne</td>
        <td>voc</td>
        <td>dir address</td>
        <td>great friends</td>
     </tr>


  </tbody>
</table>
        <h3>Plural</h3>

     

    </div>
  )
}

export default Indicated