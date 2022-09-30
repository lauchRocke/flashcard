import React from 'react'
import { Link } from 'react-router-dom'

function TransfromSgPl() {
  return (
    <div>
    <h3><Link to="/grammatica/singular">Singular</Link></h3>

    <table>
<thead>
<tr>
  <th></th>
  <th>Transformation</th>
  <th>Translation</th>
</tr>
</thead>
<tbody>
 <tr>
   <td>O, mei amici</td>
   <td>O mi amice</td>
   <td>Oh, my friend</td>
 </tr>
 <tr>
    <td>in agris</td>
   <td>in agrio</td>
    <td>in the field</td>

 </tr>
 <tr>
    <td>sine puero</td>
   <td>sine pueris</td>
   <td>without the boys</td>

 </tr>
 <tr>
    <td>Puer rosam  videt.</td>
    <td>Pueri rosas vident</td>
    <td>The boys see the roses.</td>
 </tr>
 
 <tr>
    <td>virorum avarorum</td>
    <td>viri avari</td>
    <td>the greedy man's</td>
 </tr>
 

</tbody>
</table>
    <h3>Plural</h3>

 

</div>
  )
}

export default TransfromSgPl