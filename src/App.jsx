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

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path="inventory" element={<Inventory />} />
          <Route path='history' element={<History />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;