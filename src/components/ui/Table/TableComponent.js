import React from 'react'
import {CardComponent} from './../Cards/CardComponent';

export const Table = (props) => {
    return (  

      <CardComponent >
        <Table class="table table-Campos">
        <thead>
          <tr> {/* fila */}
            <th><abbr tittle = "id" >ID</abbr></th>{/* encabezado */}
            <th><abbr tittle = "Name" >Proyecto</abbr></th>
            <th><abbr tittle = "Ob" >Objetivo</abbr></th>
            <th><abbr tittle = "B" >Beneficios</abbr></th>
            <th><abbr tittle = "A" >Asesores</abbr></th>
            <th><abbr tittle = "Ca" >Cronograma</abbr></th>
          </tr>        
          </thead>
          <tbody>{/* contenido de la tabla */}
            <tr>
          <td>ID</td>
          <td>Proyecto</td>
          <td>Objetivo</td>
          <td>Beneficios</td>
          <td>Asesores</td>
          <td>Cronograma</td>
          </tr>
          </tbody>
          <tbody>{/* contenido de la tabla */}
            <tr>
          <td>ID</td>
          <td>Proyecto</td>
          <td>Objetivo</td>
          <td>Beneficios</td>
          <td>Asesores</td>
          <td>Cronograma</td>
          </tr>
          </tbody>
          <tbody>{/* contenido de la tabla */}
            <tr>
          <td>ID</td>
          <td>Proyecto</td>
          <td>Objetivo</td>
          <td>Beneficios</td>
          <td>Asesores</td>
          <td>Cronograma</td>
          </tr>
          </tbody> 
          </Table>
          </CardComponent> 
     
    )
  }
  
  export default Table
