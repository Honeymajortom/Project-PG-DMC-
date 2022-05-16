import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ViewMenu from './pages/ViewMenu'
import Cart from './pages/Cart'
import OrderTiffin from './pages/OrderTiffin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
      {/* <Route path="/" element={<AuthorizeUser />} /> */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/viewmenu" element={<ViewMenu />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/ordertiffin" element={<OrderTiffin />}></Route>
      
      </Routes>
    </Router>
    <ToastContainer theme="colored" />
    </>
  );
}

export default App;
