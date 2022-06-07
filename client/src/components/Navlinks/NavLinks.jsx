import React from 'react'
import { Link } from 'react-router-dom'
import "./Navlinks.css"
const NavLinks = () => {
  return (
    <div className='nav-links'>
        <Link to={"/top"} className='link'>TOP</Link>
        <Link to={"/business"} className='link'>BUSINESS</Link>
        <Link to={"/entertainment"} className='link'>ENTERTAINMENT</Link>

        <Link to={"/health"} className='link'>HEALTH</Link>
        <Link to={"/politics"} className='link'>POLITICS</Link>
        <Link to={"/science"} className='link'>SCIENCE</Link>
        <Link to={"/sports"} className='link'>SPORTS</Link>
        <Link to={"/technology"} className='link'>TECH</Link>
        <Link to={"/news/dailybugle"} className='link'>DAILY-BUGLE</Link>
    </div>
  )
}

export default NavLinks