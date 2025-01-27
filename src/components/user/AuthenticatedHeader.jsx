import React from 'react'
import authenticatedLogo from '../../assets/authenticatedLogo.png'
import { Link } from 'react-router-dom'

function AuthenticatedHeader() {

    const headerBackgroundLG = {
        background: 'rgb(0,8,3)',
        background: 'linear-gradient(90deg, rgba(0,8,3,1) 0%, rgba(2,77,9,1) 100%, rgba(225,211,255,1) 100%, rgba(0,0,0,1) 100%) '
    }

    const btnStyle = {
        background: '#00bf63',
        color: 'black'
    }

  return (
    <>
        <header className='px-5 d-flex flex-column' style={headerBackgroundLG}>
            <div className='d-flex justify-content-between align-items-center'> 
                <Link><img src={authenticatedLogo} alt="" style={{height: 'auto', width: '70px'}} /></Link>
                <input type="text" placeholder='Search for Restaurants, Cafes, Dishes, Location...' className='px-3 py-1 w-50' />
                <button className='btn' style={{color: 'white'}}>User</button>
                <button className='btn' style={btnStyle}>Create a list</button>
            </div>
            <div className='d-flex justify-content-center gap-4'>
                <button className='btn' style={{color: 'white'}}>Restaurants</button>
                <button className='btn' style={{color: 'white'}}>Cafes</button>
                <button className='btn' style={{color: 'white'}}>Your Lists</button>
                <button className='btn' style={{color: 'white'}}>Trending Places</button>
                <button className='btn' style={{color: 'white'}}>Near You</button>
                <button className='btn' style={{color: 'white'}}>Book A Table</button>
            </div>
            
        </header>

        
    </>
  )
}

export default AuthenticatedHeader