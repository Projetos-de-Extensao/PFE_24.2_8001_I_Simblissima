import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ingresso from './components/Ingresso'
import Nav from './components/Nav'



function App() {
   return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <Ingresso />
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
