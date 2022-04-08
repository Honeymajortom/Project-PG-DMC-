import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Menus from './pages/Menus'
import AddMenu from './pages/AddMenu'
import Users from './pages/Users'

function App() {
  return (
    <div>
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/menus">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
          <Routes >
          <Route path="/" element={<Menus/>} />
          <Route path="/menus" element={<Menus/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/addmenu" element={<AddMenu/>} />
          </Routes>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
