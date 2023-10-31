import React from 'react'
import { item } from '../interfaces/interfaces'


const MostrarProductos = (props:item[]) => {
    return(
       <div className='App'>
        <header className='App-header'>
          <h3>Productos en venta</h3>
          <table>
            <thead>
            <tr>
                <th>nombre</th>
                <th>precio</th>
            </tr>
            </thead>
            <tbody>
                {props ? props.map((props,id)=>(
                <tr key={id}>
                    <td>{props.title}</td>
                    <td>{props.price}</td>

                </tr>
                )) : null
                }
            </tbody>
          </table>
        </header>
       </div>
    )
}

export default MostrarProductos