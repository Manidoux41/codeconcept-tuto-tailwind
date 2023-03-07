import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import TechnoAdd from './TechnoAdd'
import TechnoList from './TechnoList'

export default function PublicRouter() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/technoadd' element={<TechnoAdd />} />
            <Route path='/technolist' element={<TechnoList />} />
        </Route>
    </Routes>
  )
}
