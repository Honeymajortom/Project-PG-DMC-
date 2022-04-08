import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuRow from '../components/MenuRow'

 

const Menus = () => {
        const [menus, setMenus] = useState([])
      
        useEffect(() => {
          console.log(`menus component got loaded`)
          getMenus()
        }, [])

        const getMenus = () => {
          axios.get('http://localhost:4000/menu').then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setMenus(result.data)
            } else {
              alert('error while loading list of Menus')
            }
          })
        }
    return (
        <div className='container'>
      <h1 className="page-title">Menu</h1>

      <Link to="/addMenu">
        <a className="btn btn-success">Add Menu</a>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>MenuName</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => {
            return <MenuRow menu={menu} />
          })}
        </tbody>
      </table>
    </div>
    )
        }
export default Menus