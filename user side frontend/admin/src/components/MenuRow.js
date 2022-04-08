import React from 'react'

const MenuRow = ({ menu }) => {
    return (
      <tr>
        <td>{menu.id}</td>
        <td>
          <img
            src={'http://localhost:4000/' + menu.menuImage}
            alt=""
            className="thumbnail-sm"
          />
        </td>
        <td>
          {menu.menuName} 
        </td>
        <td>
          {menu.price} 
        </td>
        <td>
        {menu.description}
        </td>
      </tr>
    )
  }
  
  export default MenuRow
