import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import Avatar from '../Avatar/Avatar'
import './navbar.css'
import {setCurrentUser} from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    
    var User = useSelector((state) => (state.CurrentUserReducer))

    useEffect(()=>{
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))


    },[dispatch])
    
   
  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About </Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Items</Link>
            <form>
                <input type="text" placeholder='Search..' />
                <img src={search }  alt='search' width="20" className='search-icon'/>
            </form>
            { User == null ? 
                <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
                <>
                    <Avatar backgroundColor='#009dff' px="10px" py="10px" borderRadius='50%'> <Link to='/User' style={{color:'white',textDecoration:'none'}}>S</Link></Avatar>
                    <button className='nav-item nav-links'>Logout</button>

                </>
            }

        </div>
      
    </nav>
  )
}

export default Navbar
