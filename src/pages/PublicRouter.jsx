import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import TechnoAdd from './TechnoAdd'
import TechnoList from './TechnoList'

export default function PublicRouter() {

  const [technos, setTechnos] = useState([])

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno);
  }

  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/technoadd' element={<TechnoAdd handleAddTechno={handleAddTechno}/>} />
            <Route path='/technolist' element={<TechnoList />} />
        </Route>
    </Routes>
  )
}
