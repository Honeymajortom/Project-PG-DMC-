
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


const AddMenu = () => {
  const [menuName, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(undefined)
  const history = useNavigate()

  

  const addMenuToDB = () => {
    if (menuName.length === 0) {
      alert('enter name')
    } else if (price.length === 0) {
      alert('enter price')
    } else if (description === 0) {
      alert('enter an description')
    } else if (!thumbnail) {
      alert('select thumbnail')
    } else {
      const data = new FormData()
      data.append('menuName', menuName)
      data.append('price', price)
      data.append('description', description)
      data.append('img', thumbnail)

      // send the product info to the API
      axios.post('http://localhost:4000/menu/addmenu', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added new menu')
          history('/menu', { replace: true })
        } else {
          console.log(result.error)
          alert('error while loading list of menu, please try again..')
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Add menu</h1>

      <div className="mb-3">
        <label htmlFor="">Menu Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Price</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Thumbail</label>
        <input
          onChange={(e) => {
            setThumbnail(e.target.files[0])
          }}
          accept="image/*"
          type="file"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addMenuToDB} className="btn btn-success">
          Add
        </button>

        <Link to="/menus">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  )
}

export default AddMenu
