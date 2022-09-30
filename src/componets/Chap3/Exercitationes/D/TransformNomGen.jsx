import React from 'react';
import { Link } from 'react-router-dom';

function TransformNomGen() {
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
   <td>vir patria</td>
   <td>patria viri</td>
   <td>the man's country</td>
 </tr>
 <tr>
    <td>poena amicus</td>
   <td>poena amici</td>
    <td>the friend's punishment</td>

 </tr>
 <tr>
    <td>sententia populus</td>
   <td>sentencia populi</td>
   <td>the people's opinion</td>
 </tr>
 <tr>
    <td>agricola ager</td>
    <td>ager agricolae</td>
    <td>the farmer's field</td>
 </tr>
 
 <tr>
    <td>fia fortuna</td>
    <td>fortuna filiae</td>
    <td>the daughter's luck</td>
 </tr>
 

</tbody>
</table>
    <h3>Plural</h3>

 

</div>
  )
}

export default TransformNomGen