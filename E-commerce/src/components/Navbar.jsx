import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className = 'flex item-center gap-16 py-3 bg-gray-700'>

     <img className='w-16' src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png" alt="" />

<div className = "text-2xl flex gap-7 ">

   <Menu to={'/'} title={'Home'}/>
   <Menu to={'/products'} title={'Products'}/>
  

</div>
    </div>
  )
}


const Menu = ({to, title}) => {
    return (
    <NavLink className= {({isActive}) => isActive ? 'text-blue-500' : 'text-white'} to={to}>{title}</NavLink>
    )
}