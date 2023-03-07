import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='w-full block py-5'>
        <ul className='flex justify-between items-center'>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? 'text-xl text-blue-200 underline' : 'text-xl font-bold')}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/technoadd' className={({isActive}) => (isActive ? 'text-xl text-blue-200 underline' : 'text-xl font-bold')}>
                    Add Techno
                </NavLink>
            </li>
            <li>
                <NavLink to='/technolist' className={({isActive}) => (isActive ? 'text-xl text-blue-200 underline' : 'text-xl font-bold')}>
                    All Technos
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
