import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Dashboard from "./components/Dashboard";
import History from "./pages/History";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { auth } from "./Firebase";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/login' element={
            <Login />
          } />
        <Route path='/admin' element={
            <Dashboard />
          // <ProtectedRoute>
          // </ProtectedRoute>
        }>
          <Route path="inventory" element={<Inventory />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;