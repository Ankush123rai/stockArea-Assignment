import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Warehouse from './pages/warehouse.jsx/Warehouse'
import Details from './pages/warehouseDetails.jsx/Details'
import Add from './pages/addForm/Add'
import Update from './pages/addForm/Update'

const App = () => {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Warehouse/>}/>
      <Route path="/:id" element={<Details/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="*" element={<h1>Not Found</h1>}/>
    </Routes>

    </Router>
  )
}

export default App