import React from 'react'
import logo from '../../assets/plan-Logo.png'
import { Link } from 'react-router-dom'

function UserHeader() {
  return (
    <>
        <header className='d-flex justify-content-between align-items-center px-5' style={{background: '#00bf63'}}>
            <Link to = '/'><img src = { logo } alt = "plan?Logo" style={{height: 'auto', width: '70px'}} /></Link>
            <Link to = '/register' style={{textDecoration: 'none'}} ><button className='btn btn-dark rounded-4' style={{fontSize: '13px'}}>Create Account</button></Link>
        </header>
    </>
  )
}

export default UserHeader