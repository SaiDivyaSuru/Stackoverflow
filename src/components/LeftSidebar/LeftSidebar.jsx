import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeclass='active'>
                <p styel ={{paddinLeft:"10px"}} >Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeclass='active'>
                    <img src={Globe} alt="Globe" />
                    <p styel ={{paddinLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeclass='active'style={{paddingLeft:"10px"}}>
                    <p>Tags</p>

                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeclass='active'style={{paddingLeft:"10px"}}>
                    <p>Users</p>

                </NavLink>

            </div>
        </nav>
      
    </div>
  )
}

export default LeftSidebar